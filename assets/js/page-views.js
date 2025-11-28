/**
 * Simple page views counter using localStorage
 * Tracks total views and today's views
 */

(function () {
  "use strict";

  // Get today's date string (YYYY-MM-DD)
  function getTodayString() {
    const today = new Date();
    return today.toISOString().split("T")[0];
  }

  // Initialize or get views data
  function getViewsData() {
    const data = localStorage.getItem("pageViewsData");
    if (data) {
      return JSON.parse(data);
    }
    return {
      total: 0,
      lastDate: null,
      today: 0,
    };
  }

  // Save views data
  function saveViewsData(data) {
    localStorage.setItem("pageViewsData", JSON.stringify(data));
  }

  // Update page views
  function updateViews() {
    const data = getViewsData();
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
    saveViewsData(data);

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
  function init() {
    const data = getViewsData();
    const today = getTodayString();

    // Check if we need to reset today's counter
    if (data.lastDate !== today) {
      data.today = 0;
      data.lastDate = today;
      saveViewsData(data);
    }

    // Update display first
    updateDisplay(data);

    // Then increment and update
    updateViews();
  }

  // Run when DOM is ready
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
