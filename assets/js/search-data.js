// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "About",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-news",
          title: "News",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/news/";
          },
        },{id: "nav-publications",
          title: "Publications",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/publications/";
          },
        },{id: "nav-research-gallery",
          title: "Research Gallery",
          description: "A showcase of embodied intelligence research projects.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/research-gallery/";
          },
        },{id: "nav-teaching",
          title: "Teaching",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/teaching/";
          },
        },{id: "post-google-gemini-updates-flash-1-5-gemma-2-and-project-astra",
        
          title: 'Google Gemini updates: Flash 1.5, Gemma 2 and Project Astra <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
        
        description: "We’re sharing updates across our Gemini family of models and a glimpse of Project Astra, our vision for the future of AI assistants.",
        section: "Posts",
        handler: () => {
          
            window.open("https://blog.google/technology/ai/google-gemini-update-flash-ai-assistant-io-2024/", "_blank");
          
        },
      },{id: "post-displaying-external-posts-on-your-al-folio-blog",
        
          title: 'Displaying External Posts on Your al-folio Blog <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.open("https://medium.com/@al-folio/displaying-external-posts-on-your-al-folio-blog-b60a1d241a0a?source=rss-17feae71c3c4------2", "_blank");
          
        },
      },{id: "books-the-godfather",
          title: 'The Godfather',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/the_godfather/";
            },},{id: "news-i-graduated-from-bit",
          title: 'I graduated from BIT!',
          description: "",
          section: "News",},{id: "news-one-paper-was-accepted-by-iros-2024-ccf-c",
          title: 'One paper was accepted by IROS 2024 (CCF-C).',
          description: "",
          section: "News",},{id: "news-one-paper-was-accepted-by-eccv-2024-ccf-b",
          title: 'One paper was accepted by ECCV 2024 (CCF-B).',
          description: "",
          section: "News",},{id: "news-i-started-my-internship-in-beijing-academy-of-artificial-intelligence-baai-supervised-by-dr-xiaoshuai-hao",
          title: 'I started my internship in Beijing Academy of Artificial Intelligence (BAAI), supervised by...',
          description: "",
          section: "News",},{id: "news-one-paper-was-accepted-by-icra-2025-ccf-b",
          title: 'One paper was accepted by ICRA 2025 (CCF-B).',
          description: "",
          section: "News",},{id: "news-i-graduated-from-hkust-gz",
          title: 'I graduated from HKUST(GZ)!',
          description: "",
          section: "News",},{id: "news-one-paper-was-accepted-by-acl-2025-main-ccf-a",
          title: 'One paper was accepted by ACL 2025 Main (CCF-A).',
          description: "",
          section: "News",},{id: "news-two-papers-were-accepted-by-acm-mm-2025-ccf-a",
          title: 'Two papers were accepted by ACM MM 2025 (CCF-A).',
          description: "",
          section: "News",},{id: "news-we-won-third-place-in-iccv-evqa-snapugc-challenge-with-our-model-achieving-the-best-single-modality-performance",
          title: 'We won third place in ICCV EVQA-SnapUGC Challenge, with our model achieving the...',
          description: "",
          section: "News",},{id: "news-i-commenced-my-phd-journey-at-tsinghua-university-sparkles-smile",
          title: 'I commenced my PhD journey at Tsinghua University! :sparkles: :smile:',
          description: "",
          section: "News",},{id: "news-our-paper-exploring-typographic-visual-prompts-injection-threats-in-cross-modality-generation-models-has-been-awarded-the-best-student-paper-award-at-ijcai-workshop-on-deepfake-detection-localization-and-interpretability",
          title: 'Our paper Exploring typographic visual prompts injection threats in cross-modality generation models, has...',
          description: "",
          section: "News",},{id: "news-i-started-my-internship-in-xiaomi-ev-supervised-by-dr-xiaoshuai-hao-and-dr-long-chen",
          title: 'I started my internship in Xiaomi EV, supervised by Dr. Xiaoshuai Hao and...',
          description: "",
          section: "News",},{id: "news-our-team-achieved-excellent-results-at-the-iros-2025-robosense-challenge-placing-second-in-track-2-social-navigation-and-third-in-track-4-cross-modal-drone-navigation",
          title: 'Our team achieved excellent results at the IROS 2025 RoboSense Challenge, placing second...',
          description: "",
          section: "News",},{id: "news-our-paper-roboafford-a-generative-ai-enhanced-dataset-for-multimodal-affordance-learning-in-robotic-manipulation-and-navigation-has-been-awarded-the-best-paper-and-best-poster-award-at-iros-2025-rodge-workshop",
          title: 'Our paper RoboAfford++: A Generative AI-Enhanced Dataset for Multimodal Affordance Learning in Robotic...',
          description: "",
          section: "News",},{id: "news-one-paper-was-accepted-by-aaai-2026-ccf-a",
          title: 'One paper was accepted by AAAI 2026 (CCF-A).',
          description: "",
          section: "News",},{id: "news-groundbreaking-announcement-the-mimo-embodied-x-embodied-foundation-model-technical-report-is-now-available",
          title: 'Groundbreaking Announcement! The MiMo-Embodied: X-Embodied Foundation Model Technical Report is now available!',
          description: "",
          section: "News",},{id: "projects-project-1",
          title: 'project 1',
          description: "with background image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/1_project/";
            },},{id: "projects-project-2",
          title: 'project 2',
          description: "a project with a background image and giscus comments",
          section: "Projects",handler: () => {
              window.location.href = "/projects/2_project/";
            },},{id: "projects-project-3-with-very-long-name",
          title: 'project 3 with very long name',
          description: "a project that redirects to another website",
          section: "Projects",handler: () => {
              window.location.href = "/projects/3_project/";
            },},{id: "projects-project-4",
          title: 'project 4',
          description: "another without an image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/4_project/";
            },},{id: "projects-project-5",
          title: 'project 5',
          description: "a project with a background image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/5_project/";
            },},{id: "projects-project-6",
          title: 'project 6',
          description: "a project with no image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/6_project/";
            },},{id: "projects-project-7",
          title: 'project 7',
          description: "with background image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/7_project/";
            },},{id: "projects-project-8",
          title: 'project 8',
          description: "an other project with a background image and giscus comments",
          section: "Projects",handler: () => {
              window.location.href = "/projects/8_project/";
            },},{id: "projects-project-9",
          title: 'project 9',
          description: "another project with an image 🎉",
          section: "Projects",handler: () => {
              window.location.href = "/projects/9_project/";
            },},{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%6C%66%7A%68%61%6E%67%37%31%35@%67%6D%61%69%6C.%63%6F%6D", "_blank");
        },
      },{
        id: 'social-github',
        title: 'GitHub',
        section: 'Socials',
        handler: () => {
          window.open("https://github.com/linglingxiansen", "_blank");
        },
      },{
        id: 'social-scholar',
        title: 'Google Scholar',
        section: 'Socials',
        handler: () => {
          window.open("https://scholar.google.com/citations?user=nzfJ4mEAAAAJ", "_blank");
        },
      },{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
