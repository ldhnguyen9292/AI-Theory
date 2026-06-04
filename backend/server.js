require("dotenv").config();
const express = require("express");
const cors = require("cors");
const { GoogleGenAI } = require("@google/genai");

const app = express();
const PORT = process.env.PORT || 3000;

// Enable CORS for all incoming requests (crucial for cross-origin frontend calls)
app.use(cors({ origin: process.env.ORIGIN || "*" }));
app.use(express.json());

// Embedded Factual CV Data
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

const GEMINI_API_KEY = process.env.GEMINI_API_KEY;

// Initialize the new Google GenAI client
let ai = null;
if (GEMINI_API_KEY && GEMINI_API_KEY !== "YOUR_API_KEY_HERE") {
  ai = new GoogleGenAI({ apiKey: GEMINI_API_KEY });
}

const SYSTEM_INSTRUCTION = `You are a helpful AI Assistant representing Le Dai Hoang Nguyen.

Here is his official CV in JSON format:
${JSON.stringify(CV_DATA)}

Rules:
1. Be polite and professional.
2. Answer only using information from the CV.
3. When information exists in the CV, explain it clearly and in detail.
4. Use bullet points when listing skills, projects, or experiences.
5. Do not invent facts, dates, certifications, or achievements.
6. If the requested information is not available in the CV, respond exactly:
"I'm not sure based on the CV information."`;

// Root testing endpoint
app.get("/", (req, res) => {
  res.send("Nguyen's CV Chatbot Backend is running live on Render!");
});

// Chat API endpoint
app.post("/api/chat", async (req, res) => {
  const { message } = req.body;
  if (!message) {
    return res.status(400).json({ error: "Message is required" });
  }

  if (!ai) {
    return res.status(500).json({ error: "Gemini API key is not configured on the server." });
  }

  try {
    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash",
      contents: message,
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
        temperature: 0.1,
        maxOutputTokens: 1000,
      },
    });

    const text = response.text;

    if (!text) {
      console.error("Gemini returned empty text. Full response:", JSON.stringify(response));
      return res.status(500).json({ error: "Gemini returned an empty response." });
    }

    return res.status(200).json({ reply: text });
  } catch (error) {
    console.error("Gemini API Error:", error.message || error);
    const detail = error.message || "Unknown error";
    return res.status(500).json({ error: `Failed to generate reply: ${detail}` });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
