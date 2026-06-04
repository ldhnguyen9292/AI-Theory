/* ==========================================================================
   CONFIGURATION
   ========================================================================== */
// Replace this with your Render backend URL once deployed (e.g. "https://ai-theory.onrender.com")
const BACKEND_URL = "https://ai-theory.onrender.com";

/* ==========================================================================
   CV DATASOURCE (JSON OBJECT REPRESENTATION)
   ========================================================================== */
const CV_DATA = {
  name: "LE DAI HOANG NGUYEN",
  title: "Full-Stack Web Developer",
  contact: {
    email: "ldhnguyen9292@gmail.com",
    location: "Ho Chi Minh City, Vietnam",
    github: "https://github.com/ldhnguyen9292",
    linkedin: "https://www.linkedin.com/in/nguyen-le-5450b9239/",
  },
  summary:
    "I'm a full-stack web developer with 3 years of experience in building backend systems with Node.js and frontend interfaces using React. Before moving into tech, I worked in healthcare, a background that now gives me a unique perspective when working on health-related and data-driven projects. Over the years, I've developed scalable applications for clients in industries like game, finance, sales, and healthcare. I'm especially interested in combining my medical background with my technical skills to contribute to meaningful work in areas like AI and bioinformatics.",
  workExperience: [
    {
      company: "FREELANCER",
      role: "Frontend Developer",
      period: "Jul 2024 – Present",
      location: "Ho Chi Minh City, Vietnam",
      projects: [
        {
          name: "Teamfight.lol",
          role: "Frontend Developer",
          description:
            "Collaborated directly with U.S. clients to gather requirements, clarify expectations, and estimate timelines for new features. Developed and maintained a responsive web design, optimized performance and usability across various devices for a Teamfight Tactics analytics platform.",
          technologies: ["Vue.js"],
        },
        {
          name: "Satorie",
          role: "Frontend Developer",
          description:
            "Initialized project repositories and integrated essential libraries, including email services, for a CFO/strategy consulting platform for SMBs. Collaborated with developers throughout the design and development lifecycle. Optimized applications for SEO and ensured responsive design across devices. Deployed applications to production environments and provided post-release monitoring and support.",
          technologies: ["React.js", "Next.js"],
        },
      ],
    },
    {
      company: "HDWEBSOFT",
      role: "Backend Developer",
      period: "Oct 2021 – Jun 2024",
      location: "Ho Chi Minh City, Vietnam",
      projects: [
        {
          name: "Airmason",
          role: "Backend Developer",
          description:
            "Communicated with U.S. clients to understand requirements, clarify expectations, and estimate timelines for new features on an employee handbook platform. Developed and maintained high-performance APIs, significantly optimizing latency. Integrated Human Resource Information Systems (HRIS) such as OneLogin, Okta, and BambooHR. Designed and implemented database structures (MySQL) and wrote optimized SQL queries. Ensured data integrity and security through robust measures. Managed data migrations and backups, maintained database synchronization with model changes. Implemented security features against vulnerabilities (CSP, XSS, Insecure Cookies, Denial of Service). Handled concurrent requests to ensure efficient API performance. Implemented authorization and authentication mechanisms (OAuth 2.0, JWT, Basic Auth) to secure API access. Developed features for exporting data in CSV and PDF formats. Conducted testing and debugging to ensure product stability.",
          technologies: [
            "Node.js",
            "Express.js",
            "MySQL",
            "TypeORM",
            "GraphQL",
            "OAuth 2.0",
            "JWT",
            "Basic Auth",
            "Google Cloud Platform",
            "Microsoft Azure",
            "Redis",
          ],
        },
        {
          name: "Boho",
          role: "Backend Developer",
          description:
            "Wrote and managed API resources for a charitable contribution platform integrating with VEND Point of Sale. Implemented authorization and authentication mechanisms (OAuth 2.0, JWT) to secure API access. Integrated the VEND API to facilitate transactions. Designed and implemented database structures (MongoDB) and optimized NoSQL queries. Ensured data integrity, security, migrations, and backups. Built reusable code and libraries to accelerate development.",
          technologies: ["Node.js", "Express.js", "MongoDB", "Typegoose", "GraphQL", "OAuth 2.0", "JWT", "Redis"],
        },
        {
          name: "Cadence Bike",
          role: "Backend Developer",
          description:
            "Developed serverless functions using Node.js and AWS Lambda for a bike subscription service with Admin, Employer, and Employee portals. Integrated MongoDB for efficient data storage and manipulation within serverless functions. Wrote unit tests (Jest) to ensure code quality and reliability. Debugged and troubleshooted serverless functions. Collaborated with the team to ensure seamless integration.",
          technologies: ["Node.js", "Express.js", "AWS Lambda", "MongoDB", "Mongoose", "JWT", "Jest"],
        },
        {
          name: "CrowdClip",
          role: "Backend Developer",
          description:
            "Updated and maintained API functions to ensure optimal performance for an AI-based face detection platform. Developed new APIs to meet evolving business needs. Estimated timelines accurately for feature development. Collaborated with team members to align API functionality with project goals.",
          technologies: [
            "Node.js",
            "Express.js",
            "MongoDB",
            "Mongoose",
            "RESTful APIs",
            "JWT",
            "Amazon Web Services (AWS)",
          ],
        },
        {
          name: "PAG",
          role: "Backend Developer",
          description:
            "Maintained and developed APIs for a private office staff management system. Optimized code for maximum speed, scalability, and efficiency. Designed and implemented database schemas using Materialized Path (Path Enumeration) in TypeORM for efficient hierarchical data management. Tested APIs, identified bugs, and applied necessary fixes.",
          technologies: ["Node.js", "Express.js", "MySQL", "TypeORM", "GraphQL", "JWT"],
        },
        {
          name: "Framely",
          role: "Backend Developer",
          description:
            "Designed and implemented database structures (PostgreSQL) and optimized SQL queries for an NFT marketplace. Ensured data integrity and security. Wrote and managed API resources to ensure seamless functionality. Developed the Framely SDK to streamline API integration for frontend developers. Collaborated with frontend developers to ensure smooth communication.",
          technologies: [
            "Node.js",
            "Express.js",
            "PostgreSQL",
            "TypeORM",
            "RESTful APIs",
            "Microservices Architecture",
            "JWT",
          ],
        },
        {
          name: "My Fitness Studio",
          role: "Backend Developer",
          description:
            "Updated and maintained API functions to ensure continued performance and reliability for a personal health and fitness application.",
          technologies: ["Node.js", "Express.js", "DynamoDB", "Elasticsearch"],
        },
      ],
    },
    {
      company: "HO CHI MINH CITY CENTER FOR DISEASE CONTROL (HCMC CDC)",
      role: "Health Quarantine Officer",
      period: "Dec 2017 – Jun 2021",
      location: "Ho Chi Minh City, Vietnam",
      responsibilities: [
        "Supervised international arrivals at Tan Son Nhat International Airport to assess epidemiological risks. Evaluated passengers with symptoms or travel history to affected areas, conducted on-site health screening, and determined quarantine requirements.",
        "Developed and automated a health quarantine declaration system using Selenium, VBA, and Excel, which significantly improved efficiency in passenger data processing at entry points.",
        "Designed a screening program to automatically classify incoming travelers into appropriate isolation routes based on risk level, which helped reduce congestion during the COVID-19 pandemic.",
        "Initiated and implemented a system (using Visual Basic) to extract and compile maritime health inspection data from the National Single Window Portal, which enhanced the tracking of vessel health clearance procedures (2019).",
        "Composed weekly epidemiological reports summarizing global disease outbreaks and emerging health threats, providing key insights for internal strategic planning and frontline decision-making.",
      ],
      recognition:
        "Certificate of Merit from the Ho Chi Minh City Department of Health for outstanding contributions to COVID-19 prevention and control (2020).",
    },
  ],
  education: [
    {
      institution: "CYBERSOFT - CYBERLEARN PROGRAMMING EDUCATION CENTER",
      period: "Jan 2021 - Dec 2021",
      program: "Full-stack Web Developer Program",
      location: "Ho Chi Minh City, Vietnam",
    },
    {
      institution: "PHAM NGOC THACH UNIVERSITY OF MEDICINE",
      period: "Aug 2011 - Aug 2017",
      program: "General Practitioner (Medical Doctor)",
      location: "Ho Chi Minh City, Vietnam",
    },
  ],
  skills: {
    programmingLanguages: ["JavaScript", "TypeScript"],
    webDevelopment: ["HTML", "CSS", "Node.js", "Express", "React.js", "Vue.js", "Next.js"],
    databases: [
      "MySQL",
      "PostgreSQL",
      "MongoDB",
      "DynamoDB",
      "Redis",
      "TypeORM",
      "Mongoose",
      "Typegoose",
      "Elasticsearch",
    ],
    apiDevelopment: ["REST", "GraphQL"],
    cloudPlatforms: ["AWS (Lambda, S3, EC2, RDS)", "GCP", "Azure"],
    toolsPlatforms: ["GitLab", "GitHub", "Jira", "Asana", "Trello", "Docker", "Postman"],
    testing: ["Jest"],
    versionControl: ["Git"],
    methodologies: ["Agile/Scrum", "Microservices Architecture", "Serverless Architecture", "CI/CD Awareness"],
    languages: ["Vietnamese (Native)", "English (Good communication and writing skills)"],
    professionalSkills: [
      "Problem-solving",
      "Time management",
      "Teamwork and collaboration",
      "Attention to detail",
      "Adaptability",
      "Self-learning",
    ],
  },
  achievements: [
    {
      title: "Certificate of Merit",
      issuer: "Ho Chi Minh City Department of Health",
      year: "2020",
      description:
        "For outstanding contributions to COVID-19 prevention and control during duties at Tan Son Nhat International Airport.",
    },
  ],
};

/* ==========================================================================
   INITIALIZATION & EVENT LISTENERS
   ========================================================================== */
document.addEventListener("DOMContentLoaded", () => {
  initTheme();
  initHeroTyping();
  initScrollEffects();
  initProjectFilters();
  initContactForm();
  initChatbot();
});

/* ==========================================================================
   THEME TOGGLE MECHANICS (LIGHT & DARK MODES)
   ========================================================================== */
function initTheme() {
  const themeToggleBtn = document.getElementById("theme-toggle");
  const body = document.body;

  // Check saved theme or browser preference
  const savedTheme = localStorage.getItem("portfolio-theme");
  const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;

  if (savedTheme === "light") {
    body.classList.remove("dark-theme");
    updateThemeIcon(themeToggleBtn, false);
  } else if (savedTheme === "dark" || prefersDark) {
    body.classList.add("dark-theme");
    updateThemeIcon(themeToggleBtn, true);
  } else {
    // Fallback default dark
    body.classList.add("dark-theme");
    updateThemeIcon(themeToggleBtn, true);
  }

  themeToggleBtn.addEventListener("click", () => {
    const isDark = body.classList.toggle("dark-theme");
    localStorage.setItem("portfolio-theme", isDark ? "dark" : "light");
    updateThemeIcon(themeToggleBtn, isDark);
  });
}

function updateThemeIcon(btn, isDark) {
  const icon = btn.querySelector("i");
  if (isDark) {
    icon.className = "fa-solid fa-sun";
  } else {
    icon.className = "fa-solid fa-moon";
  }
}

/* ==========================================================================
   HERO TYPING ANIMATION
   ========================================================================== */
function initHeroTyping() {
  const typingSpan = document.getElementById("typing-text");
  if (!typingSpan) return;

  const words = [
    "Full-Stack Web Developer",
    "Former Medical Doctor (GP)",
    "Node.js Backend Expert",
    "React & Vue Frontend Developer",
    "AI & Bioinformatics Enthusiast",
  ];

  let wordIndex = 0;
  let charIndex = 0;
  let isDeleting = false;
  let typingSpeed = 100;

  function type() {
    const currentWord = words[wordIndex];

    if (isDeleting) {
      typingSpan.textContent = currentWord.substring(0, charIndex - 1);
      charIndex--;
      typingSpeed = 50; // Delete faster
    } else {
      typingSpan.textContent = currentWord.substring(0, charIndex + 1);
      charIndex++;
      typingSpeed = 100; // Normal typing speed
    }

    if (!isDeleting && charIndex === currentWord.length) {
      // Stop and wait before deleting
      typingSpeed = 2000;
      isDeleting = true;
    } else if (isDeleting && charIndex === 0) {
      isDeleting = false;
      wordIndex = (wordIndex + 1) % words.length;
      typingSpeed = 500; // Pause before typing next word
    }

    setTimeout(type, typingSpeed);
  }

  setTimeout(type, 1000);
}

/* ==========================================================================
   SCROLL EFFECTS, SCROLLSPY, & REVEALS
   ========================================================================== */
function initScrollEffects() {
  const navbar = document.getElementById("navbar");
  const navLinks = document.querySelectorAll(".nav-link");
  const sections = document.querySelectorAll("section");
  const scrollRevealElements = document.querySelectorAll(".scroll-reveal");

  // Mobile menu toggle
  const mobileMenuToggleBtn = document.getElementById("mobile-menu-toggle-btn");
  const navMenu = document.getElementById("nav-menu");

  if (mobileMenuToggleBtn && navMenu) {
    mobileMenuToggleBtn.addEventListener("click", () => {
      navMenu.classList.toggle("active");
      const icon = mobileMenuToggleBtn.querySelector("i");
      icon.classList.toggle("fa-bars");
      icon.classList.toggle("fa-xmark");
    });

    // Close menu when clicking link
    navLinks.forEach((link) => {
      link.addEventListener("click", () => {
        navMenu.classList.remove("active");
        const icon = mobileMenuToggleBtn.querySelector("i");
        icon.className = "fa-solid fa-bars";
      });
    });
  }

  // Scroll listener
  window.addEventListener("scroll", () => {
    // Sticky navbar shrink
    if (window.scrollY > 50) {
      navbar.classList.add("scrolled");
    } else {
      navbar.classList.remove("scrolled");
    }

    // Scrollspy navigation highlight
    let currentSectionId = "";
    sections.forEach((section) => {
      const sectionTop = section.offsetTop - 100;
      const sectionHeight = section.clientHeight;
      if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
        currentSectionId = section.getAttribute("id");
      }
    });

    if (currentSectionId) {
      navLinks.forEach((link) => {
        link.classList.remove("active");
        if (link.getAttribute("href") === `#${currentSectionId}`) {
          link.classList.add("active");
        }
      });
    }
  });

  // Intersection Observer for scroll animations
  if ("IntersectionObserver" in window) {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("active");
            observer.unobserve(entry.target); // Reveal once
          }
        });
      },
      {
        threshold: 0.15,
      },
    );

    scrollRevealElements.forEach((el) => observer.observe(el));
  } else {
    // Fallback for older browsers
    scrollRevealElements.forEach((el) => el.classList.add("active"));
  }
}

/* ==========================================================================
   PROJECTS FILTER SYSTEM
   ========================================================================== */
function initProjectFilters() {
  const filterButtons = document.querySelectorAll(".filter-btn");
  const projectCards = document.querySelectorAll(".project-card");

  filterButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
      // Update active state of buttons
      filterButtons.forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");

      const filterValue = btn.getAttribute("data-filter");

      projectCards.forEach((card) => {
        const cardCategory = card.getAttribute("data-category");

        if (filterValue === "all" || cardCategory === filterValue) {
          card.style.display = "flex";
          // Brief trigger to smooth transition
          setTimeout(() => {
            card.style.opacity = "1";
            card.style.transform = "scale(1)";
          }, 50);
        } else {
          card.style.opacity = "0";
          card.style.transform = "scale(0.9)";
          // Wait for fade transition before hiding
          setTimeout(() => {
            card.style.display = "none";
          }, 300);
        }
      });
    });
  });
}

/* ==========================================================================
   CONTACT FORM SUBMISSION (CLIENT-SIDE)
   ========================================================================== */
function initContactForm() {
  const form = document.getElementById("contact-form");
  const responseMsg = document.getElementById("form-response-msg");

  if (!form) return;

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const name = document.getElementById("form-name").value;
    const email = document.getElementById("form-email").value;
    const message = document.getElementById("form-message").value;

    // Mocking API delay
    responseMsg.className = "form-response-msg";
    responseMsg.textContent = "Sending your message...";

    setTimeout(() => {
      // Simulating successful email submission
      responseMsg.className = "form-response-msg success";
      responseMsg.innerHTML = `<i class="fa-solid fa-circle-check"></i> Thank you, ${name}! Your mock message has been dispatched successfully.`;

      // Clear inputs
      form.reset();

      // Remove message after 5 seconds
      setTimeout(() => {
        responseMsg.textContent = "";
      }, 6000);
    }, 1200);
  });
}

/* ==========================================================================
   CHATBOT ENGINE (CV-BASED INTENT PARSER)
   ========================================================================== */
function initChatbot() {
  const chatbot = document.getElementById("cv-chatbot");
  const triggerBtn = document.getElementById("chatbot-trigger-btn");
  const closeBtn = document.getElementById("chatbot-close-btn");
  const windowContainer = document.getElementById("chatbot-window-container");
  const chatForm = document.getElementById("chatbot-form");
  const chatInput = document.getElementById("chatbot-input");
  const messagesBody = document.getElementById("chatbot-messages");
  const suggestionsGroup = document.getElementById("chatbot-chips");

  if (!triggerBtn || !closeBtn || !windowContainer) return;

  // Toggle Window Visibility
  triggerBtn.addEventListener("click", () => {
    windowContainer.classList.toggle("open");
    if (windowContainer.classList.contains("open")) {
      chatInput.focus();
      // Scroll to bottom
      messagesBody.scrollTop = messagesBody.scrollHeight;
    }
  });

  closeBtn.addEventListener("click", () => {
    windowContainer.classList.remove("open");
  });

  // Listen to form submit
  chatForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const text = chatInput.value.trim();
    if (!text) return;

    handleUserMessage(text);
    chatInput.value = "";
  });

  // Listen to quick suggestion clicks
  if (suggestionsGroup) {
    suggestionsGroup.addEventListener("click", (e) => {
      const chip = e.target.closest(".chip");
      if (!chip) return;
      const query = chip.getAttribute("data-query");
      const chipText = chip.textContent.replace(/[^\w\s\p{L}]/gu, "").trim(); // Remove emojis

      handleUserMessage(chipText, query);
    });
  }

  // Function to append text
  function appendMessage(sender, text) {
    const msgDiv = document.createElement("div");
    msgDiv.className = `message ${sender}-message`;
    msgDiv.innerHTML = text;
    messagesBody.appendChild(msgDiv);

    // Autoscroll
    messagesBody.scrollTop = messagesBody.scrollHeight;
    return msgDiv;
  }

  // Function to append typing loader
  function appendTypingIndicator() {
    const loader = document.createElement("div");
    loader.className = "message bot-message typing-indicator";
    loader.innerHTML = `
            <span class="typing-dot"></span>
            <span class="typing-dot"></span>
            <span class="typing-dot"></span>
        `;
    messagesBody.appendChild(loader);
    messagesBody.scrollTop = messagesBody.scrollHeight;
    return loader;
  }

  // Call Render Backend Service
  async function askGemini(userInput) {
    try {
      const response = await fetch(`${BACKEND_URL}/api/chat`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ message: userInput }),
      });

      if (!response.ok) {
        return null; // Fallback to local rule-based intent parsing
      }

      const data = await response.json();
      return data.reply;
    } catch (error) {
      console.error("Backend Chat API Error:", error);
      return null; // Fallback to local rule-based intent parsing
    }
  }

  // Process User Query
  async function handleUserMessage(userText, forceQuery = null) {
    // Render user bubble
    appendMessage("user", userText);

    // Show typing indicator
    const loader = appendTypingIndicator();

    try {
      // Always try the backend AI first (even for quick-reply chips)
      let responseText = await askGemini(forceQuery || userText);

      // If the backend is unreachable or returned an error, fall back to local rule-based parsing
      if (!responseText) {
        console.warn("Backend unavailable — using local fallback.");
        responseText = parseIntent(forceQuery || userText);
      }

      // Simulate a small latency for natural interaction feeling
      setTimeout(() => {
        loader.remove();
        appendMessage("bot", responseText);
      }, 500);
    } catch (e) {
      console.error("Error handling user message:", e);
      loader.remove();
      // Ultimate fallback: try local parsing, or show generic error
      const fallback = parseIntent(forceQuery || userText);
      appendMessage("bot", fallback);
    }
  }

  // Custom Factual CV Matching Algorithm
  function parseIntent(queryText) {
    // Clean and normalize text
    const query = queryText
      .toLowerCase()
      .replace(/[.,\/#!$%\^&\*;:{}=\-_`~()?]/g, "")
      .trim();

    // 1. ABOUT & TRANSITION PATH
    if (
      query.includes("medical") ||
      query.includes("doctor") ||
      query.includes("transition") ||
      query.includes("healthcare") ||
      query.includes("why change") ||
      query.includes("about") ||
      query.includes("who are you") ||
      query.includes("introduce") ||
      query.includes("summary") ||
      query.includes("gp") ||
      query.includes("practitioner")
    ) {
      return `<strong>Le Dai Hoang Nguyen</strong> has a highly unique trajectory. He spent 6 years studying medicine, graduating as a <strong>General Practitioner (Medical Doctor)</strong> from Pham Ngoc Thach University of Medicine (2011-2017). 
            <br><br>
            He then worked as a <strong>Health Quarantine Officer</strong> at the HCMC CDC (2017-2021). During COVID-19, he discovered his passion for programming by automating quarantine declaration systems using VBA, Excel, and Selenium. This led him to shift full-time into tech, completing a Full-Stack developer course in 2021. He now has 3+ years of experience specializing in Node.js backend architecture.`;
    }

    // 2. PROJECTS SUMMARY OR DETAILS
    if (
      query.includes("project") ||
      query.includes("built") ||
      query.includes("create") ||
      query.includes("make") ||
      query.includes("portfolio") ||
      query.includes("application")
    ) {
      return `Nguyen has engineered and contributed to <strong>9+ key projects</strong> documented on his CV:
            <ul>
                <li><strong>Teamfight.lol</strong> (Frontend Vue.js game analytics platform)</li>
                <li><strong>Satorie</strong> (Frontend React/Next.js strategic CFO dashboard for SMBs)</li>
                <li><strong>Airmason</strong> (Backend developer for employee handbook with MySQL & HRIS integrations like Okta/OneLogin)</li>
                <li><strong>Boho</strong> (Backend REST/GraphQL transaction portal integrated with VEND POS and MongoDB)</li>
                <li><strong>Cadence Bike</strong> (AWS Lambda serverless handlers and Jest unit testing)</li>
                <li><strong>CrowdClip</strong> (Node/Mongo backend for an AI facial detection system)</li>
                <li><strong>PAG Staff</strong> (TypeORM MySQL hierarchy schemes using Path Enumeration)</li>
                <li><strong>Framely</strong> (PostgreSQL NFT platform and custom developer SDK integration)</li>
                <li><strong>My Fitness Studio</strong> (Backend development utilizing DynamoDB and Elasticsearch)</li>
                <li><strong>Quarantine Screening Automation</strong> (Selenium/VBA program built during his medical CDC career)</li>
            </ul>`;
    }

    // 3. SKILLS CATEGORIZATION
    if (
      query.includes("skill") ||
      query.includes("tech") ||
      query.includes("technolog") ||
      query.includes("language") ||
      query.includes("code") ||
      query.includes("programming") ||
      query.includes("frontend") ||
      query.includes("backend") ||
      query.includes("database") ||
      query.includes("stack")
    ) {
      const s = CV_DATA.skills;
      return `Here are Nguyen's core technical skills strictly sourced from his CV:
            <br><br>
            <strong>💻 Languages:</strong> ${s.programmingLanguages.join(", ")}
            <br>
            <strong>🛠️ Web Development:</strong> ${s.webDevelopment.join(", ")}
            <br>
            <strong>🗄️ Databases:</strong> ${s.databases.join(", ")}
            <br>
            <strong>☁️ Cloud Systems:</strong> ${s.cloudPlatforms.join(", ")}
            <br>
            <strong>🔌 APIs & Testing:</strong> ${s.apiDevelopment.join(", ")} & ${s.testing.join(", ")}
            <br>
            <strong>⚙️ Tools & Practices:</strong> ${s.toolsPlatforms.join(", ")}, ${s.methodologies.join(", ")}
            <br>
            <strong>🗣️ Human Languages:</strong> ${s.languages.join(", ")}`;
    }

    // 4. WORK EXPERIENCE DETAILS
    if (
      query.includes("experience") ||
      query.includes("work") ||
      query.includes("job") ||
      query.includes("career") ||
      query.includes("history") ||
      query.includes("timeline") ||
      query.includes("freelance") ||
      query.includes("hdwebsoft") ||
      query.includes("cdc")
    ) {
      return `Nguyen has 3 years of software development experience, built on top of a 3.5-year clinical medical background:
            <br><br>
            1. <strong>Freelance Frontend Developer</strong> (Jul 2024 – Present): Building responsive client-facing applications for U.S. markets (Vue.js, Next.js).
            <br><br>
            2. <strong>HDWEBSOFT Backend Developer</strong> (Oct 2021 – Jun 2024): Spent nearly 3 years building high-performance server architectures, API integrations (OAuth, GraphQL), and database configurations (MySQL, PostgreSQL, MongoDB, DynamoDB).
            <br><br>
            3. <strong>HCMC CDC Health Quarantine Officer</strong> (Dec 2017 – Jun 2021): Managed epidemiological assessments and pioneered programmatic scripting (VBA/Selenium) to handle pandemic border-safety declaration systems.`;
    }

    // 5. EDUCATION PATH
    if (
      query.includes("education") ||
      query.includes("study") ||
      query.includes("school") ||
      query.includes("university") ||
      query.includes("degree") ||
      query.includes("learn") ||
      query.includes("cybersoft") ||
      query.includes("pnt") ||
      query.includes("pham ngoc thach")
    ) {
      return `Nguyen's official academic credentials:
            <ul>
                <li><strong>General Practitioner (Medical Doctor Degree)</strong><br>
                Pham Ngoc Thach University of Medicine (Aug 2011 - Aug 2017)<br>
                A rigorous 6-year medical degree in Vietnam.</li>
                <br>
                <li><strong>Full-stack Web Developer Program Certificate</strong><br>
                Cybersoft - Cyberlearn Programming Education Center (Jan 2021 - Dec 2021)<br>
                Completed an intensive professional retraining program focused on JS, React, and Node development.</li>
            </ul>`;
    }

    // 6. CONTACT DETAILS
    if (
      query.includes("contact") ||
      query.includes("email") ||
      query.includes("address") ||
      query.includes("location") ||
      query.includes("reach") ||
      query.includes("github") ||
      query.includes("linkedin") ||
      query.includes("mail") ||
      query.includes("social")
    ) {
      const c = CV_DATA.contact;
      return `You can reach Le Dai Hoang Nguyen directly through:
            <br><br>
            <strong>📧 Email:</strong> <a href="mailto:${c.email}">${c.email}</a>
            <br>
            <strong>📍 Location:</strong> ${c.location}
            <br>
            <strong>🐙 GitHub:</strong> <a href="${c.github}" target="_blank">github.com/ldhnguyen9292</a>
            <br>
            <strong>🔗 LinkedIn:</strong> <a href="${c.linkedin}" target="_blank">linkedin.com/in/nguyen-le-5450b9239</a>`;
    }

    // 7. CERTIFICATES, AWARDS, OR COVID CONTRIBUTIONS
    if (
      query.includes("certificate") ||
      query.includes("achieve") ||
      query.includes("award") ||
      query.includes("merit") ||
      query.includes("covid") ||
      query.includes("department of health")
    ) {
      return `Nguyen received a prestigious <strong>Certificate of Merit</strong> from the <strong>Ho Chi Minh City Department of Health in 2020</strong>. 
            <br><br>
            This was awarded for his outstanding contributions, high adaptability, and critical screening management in the prevention and control of COVID-19 at Tan Son Nhat International Airport.`;
    }

    // 8. STRICT FALLBACK RULE (VERY IMPORTANT)
    return "I’m not sure based on the CV information.";
  }
}
