export const PROJECTS = [
  {
    id: 1,
    name: "AetherMeet",
    subtitle: "Real-Time Video & Chat Platform",
    year: "2025",
    image: "/assets/images/aethermeet.png",
    desc: "Full-stack platform featuring encrypted room access, live chat, and media sharing for 50+ concurrent users. Built 10+ RESTful APIs using Node.js to manage room lifecycles, authentication, and messaging workflows. Integrated Socket.io for sub-100ms real-time updates and Redis caching with 30-min TTL for 30% performance improvement.",
    tech: ["Node.js", "Express.js", "Socket.io", "Redis", "MongoDB", "JWT"],
    github: "https://github.com/deepanshusingla076/Aethermeet",
    live: "https://aethermeet-web.onrender.com",
  },
  {
    id: 2,
    name: "FiSight",
    subtitle: "Financial Analytics Platform",
    year: "2025",
    image: "/assets/images/fisight.png",
    desc: "Analytics engine that processes 50,000+ financial records for automated predictive spending insights. Architected hybrid MongoDB + MySQL backend for high data consistency. Trained and evaluated 4 ML models targeting 92% accuracy. Built data pipelines for automated financial behavior analysis.",
    tech: ["Python", "Machine Learning", "Node.js", "FastAPI", "MongoDB", "MySQL"],
    github: "https://github.com/deepanshusingla076/FiSight",
    live: "https://fi-sight.vercel.app/",
  },
  {
    id: 3,
    name: "HireSight AI",
    subtitle: "AI-Powered Resume Intelligence Platform",
    year: "2025",
    image: "/assets/images/hireSight.png",
    desc: "Production-ready AI resume analysis platform powered by Google Gemini 2.0. Delivers smart resume-to-job matching, skill-gap analysis, actionable insights, and AI-generated interview prep questions. Uses a real dataset of 63,764+ job descriptions with modern glassmorphism UI and keyword-based smart search.",
    tech: ["Next.js", "TypeScript", "Gemini AI", "Node.js", "MongoDB", "Python"],
    github: "https://github.com/deepanshusingla076/hireSight-AI",
    live: "https://hire-sight-ai-nine.vercel.app/",
  },
  {
    id: 4,
    name: "Quizz",
    subtitle: "Quiz Platform — Microservices Architecture",
    year: "2025",
    image: "/assets/images/quizz.png",
    desc: "Scalable quiz platform built with Spring Boot microservices. Implemented authentication, question bank, result management, AI-powered quiz generation, and API gateway services. Automated service orchestration with batch scripts, Eureka service discovery, and secure role-based access control.",
    tech: ["Spring Boot", "Java", "Microservices", "JWT", "React", "Eureka"],
    github: "https://github.com/deepanshusingla076/quizz",
  },
  {
    id: 5,
    name: "Rizzard University",
    subtitle: "AI-Powered University Platform",
    year: "2024",
    image: "/assets/images/rizzard.png",
    desc: "Full-stack university web app with course listings, event registration, and user management. Integrated advanced AI chatbot via Grok (xAI) APIs for real-time support. Implemented secure backend proxy endpoints and dynamic API key management.",
    tech: ["Node.js", "Express", "MongoDB", "EJS", "Grok AI", "JavaScript"],
    github: "https://github.com/deepanshusingla076/rizzard_university",
  },
];

export const EXPERIENCE = [
  {
    role: "Web Development Intern",
    company: "TechOctaNet",
    location: "Remote",
    period: "Feb 2025 – Mar 2025",
    bullets: [
      "Designed and deployed responsive websites using React.js, Bootstrap, and MongoDB with 99.99% uptime.",
      "Managed CI/CD pipelines using Docker and Git for automated deployment workflows.",
      "Ensured 100% deployment success rate with integrated monitoring and modification services.",
    ],
  },
  {
    role: "Open Source Contributor",
    company: "GirlScript Summer of Code (GSSoC)",
    location: "Remote",
    period: "Jul 2025 – Present",
    bullets: [
      "Contributed to 10+ repositories, engineering features and resolving bugs while maintaining high code quality.",
      "Collaborated using Git workflows, managing pull requests and participating in peer code reviews.",
      "Applied modular design principles to enhance scalability and maintainability across projects.",
    ],
  },
];

export const SKILLS = {
  Languages: ["Java", "Python", "JavaScript", "TypeScript"],
  Frontend: ["React.js", "Next.js", "Tailwind CSS", "Redux Toolkit"],
  Backend: ["Node.js", "Express.js", "Spring Boot", "FastAPI", "REST APIs", "Socket.IO", "JWT"],
  Databases: ["MongoDB", "PostgreSQL", "MySQL", "Firebase", "Redis", "SQL"],
  "Cloud & DevOps": ["AWS (EC2, S3, IAM)", "Docker", "CI/CD Pipelines", "Firebase Hosting"],
  "Tools & Platforms": ["Git", "GitHub", "Postman", "VS Code", "Linux"],
  Concepts: ["OOPs", "Microservices", "System Design", "Problem Solving"],
};

export const CERTS = [
  { name: "Meta Full Stack Developer", issuer: "Coursera", icon: "🎓" },
  { name: "Introduction to Python", issuer: "Coding Ninjas", icon: "🐍" },
  { name: "Cloud Computing Fundamentals", issuer: "Coursera", icon: "☁️" },
  { name: "Introduction to Generative AI", issuer: "Google Cloud", icon: "🤖" },
  { name: "Generative AI and Agents", issuer: "Microsoft", icon: "🧠" },
  { name: "160 Days Problem Solving", issuer: "GeeksforGeeks", icon: "⚡" },
];

export const HACKATHONS = [
  { name: "BharatTechperience 2.0", type: "National Hackathon", icon: "🏆" },
  { name: "Hackentine", type: "Hackathon", icon: "💡" },
  { name: "GDG Hacks", type: "Google Developer Groups", icon: "🚀" },
  { name: "Google Cloud Agentic AI Day 2025", type: "AI Competition", icon: "☁️" },
  { name: "HackRx 6.0", type: "Healthcare Hackathon", icon: "🏅" },
  { name: "And many more...", type: "Ongoing", icon: "✨" },
];
