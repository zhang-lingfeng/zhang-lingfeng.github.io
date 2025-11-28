/**
 * Page views counter with API synchronization support
 * Supports JSONBin.io for cross-device synchronization
 * Falls back to localStorage if API is not configured
 */

(function () {
  "use strict";

  const config = window.pageViewsConfig || {
    apiEnabled: false,
    service: "local",
    jsonbinBinId: "",
    jsonbinApiKey: "",
  };

  // Get today's date string (YYYY-MM-DD)
  function getTodayString() {
    const today = new Date();
    return today.toISOString().split("T")[0];
  }

  // Default data structure
  function getDefaultData() {
    return {
      total: 0,
      lastDate: null,
      today: 0,
    };
  }

  // ========== LocalStorage Methods ==========
  function getLocalData() {
    const data = localStorage.getItem("pageViewsData");
    if (data) {
      return JSON.parse(data);
    }
    return getDefaultData();
  }

  function saveLocalData(data) {
    localStorage.setItem("pageViewsData", JSON.stringify(data));
  }

  // ========== JSONBin.io API Methods ==========
  async function fetchFromJSONBin() {
    if (!config.jsonbinBinId) {
      return null;
    }

    try {
      const url = `https://api.jsonbin.io/v3/b/${config.jsonbinBinId}/latest`;
      const headers = {
        "Content-Type": "application/json",
      };

      if (config.jsonbinApiKey) {
        headers["X-Master-Key"] = config.jsonbinApiKey;
      }

      const response = await fetch(url, {
        method: "GET",
        headers: headers,
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const result = await response.json();
      return result.record || getDefaultData();
    } catch (error) {
      console.warn("Failed to fetch from JSONBin.io:", error);
      return null;
    }
  }

  async function saveToJSONBin(data) {
    if (!config.jsonbinBinId) {
      return false;
    }

    try {
      const url = `https://api.jsonbin.io/v3/b/${config.jsonbinBinId}`;
      const headers = {
        "Content-Type": "application/json",
      };

      if (config.jsonbinApiKey) {
        headers["X-Master-Key"] = config.jsonbinApiKey;
      } else {
        // For public bins, use versioning
        headers["X-Bin-Versioning"] = "false";
      }

      const response = await fetch(url, {
        method: "PUT",
        headers: headers,
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      return true;
    } catch (error) {
      console.warn("Failed to save to JSONBin.io:", error);
      return false;
    }
  }

  // ========== Unified Data Methods ==========
  async function getViewsData() {
    if (config.apiEnabled && config.service === "jsonbin") {
      const apiData = await fetchFromJSONBin();
      if (apiData) {
        // Also cache locally for faster access
        saveLocalData(apiData);
        return apiData;
      }
      // Fallback to local if API fails
      return getLocalData();
    }
    return getLocalData();
  }

  async function saveViewsData(data) {
    // Always save locally for caching
    saveLocalData(data);

    // Save to API if enabled
    if (config.apiEnabled && config.service === "jsonbin") {
      await saveToJSONBin(data);
    }
  }

  // ========== Update Logic ==========
  async function updateViews() {
    const data = await getViewsData();
    const today = getTodayString();

    // If it's a new day, reset today's counter
    if (data.lastDate !== today) {
      data.today = 0;
      data.lastDate = today;
    }

    // Increment counters
    data.total += 1;
    data.today += 1;

    // Save updated data
    await saveViewsData(data);

    // Update display
    updateDisplay(data);
  }

  // Update the display
  function updateDisplay(data) {
    const totalViewsEl = document.getElementById("total-views");
    const todayViewsEl = document.getElementById("today-views");

    if (totalViewsEl) {
      totalViewsEl.textContent = formatNumber(data.total);
    }
    if (todayViewsEl) {
      todayViewsEl.textContent = formatNumber(data.today);
    }
  }

  // Format number with thousand separators
  function formatNumber(num) {
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }

  // Initialize on page load
  async function init() {
    const data = await getViewsData();
    const today = getTodayString();

    // Check if we need to reset today's counter
    if (data.lastDate !== today) {
      data.today = 0;
      data.lastDate = today;
      await saveViewsData(data);
    }

    // Update display first
    updateDisplay(data);

    // Then increment and update (with a small delay to avoid race conditions)
    setTimeout(async () => {
      await updateViews();
    }, 500);
  }

  // Run when DOM is ready
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
