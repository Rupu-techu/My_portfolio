export type SkillItem = {
  name: string;
  highlight?: boolean;
};

export type SkillGroup = {
  icon: string;
  title: string;
  skills: SkillItem[];
};

export type Project = {
  id: string;
  featured: boolean;
  emoji: string;
  gradientFrom: string;
  gradientTo: string;
  title: string;
  subtitle: string;
  description: string;
  technologies: string[];
  achievements: string[];
  github: string;
  demo?: string | null;
  video?: string | null;
};

export type ExperienceItem = {
  type: string;
  date: string;
  title: string;
  org: string;
  body: string;
};

export type AchievementItem = {
  icon: string;
  title: string;
  description: string;
  meta: string;
};

export type FeaturedAchievement = {
  icon: string;
  title: string;
  role: string;
  description: string;
  profileUrl: string;
  buttonText: string;
};

export type ContactLink = {
  icon: string;
  label: string;
  value: string;
  href: string | null;
};

export type StatItem = {
  value: string;
  label: string;
};

export const personal = {
  name: "Rupsha Debnath",
  title:
    "AI & Machine Learning Student | Building Explainable AI, Healthcare AI, Cloud Security Analytics, and Intelligent Systems",
  tagline: "AI/ML Student | XAI, RAG, and Trustworthy Systems",
  bio:
    "Artificial Intelligence and Machine Learning student passionate about developing intelligent systems that solve real-world problems. My work focuses on Explainable AI (XAI), Healthcare AI, Cloud Security Analytics, Retrieval-Augmented Generation (RAG), and Computer Vision. I enjoy transforming research ideas into practical applications through hackathons, open-source contributions, and collaborative projects.",
  university: "Institute of Engineering and Management, Kolkata",
  degree: "B.Tech in Computer Science Engineering (AI & ML)",
  gpa: "8.68",
  gradYear: "Jul 2024 - Present",
  email: "debi.rup@gmail.com",
  phone: "+91 7003020723",
  linkedin: "https://www.linkedin.com/in/rupsha-debnath-056739317/",
  github: "https://github.com/Rupu-techu",
  githubUsername: "@Rupu-techu",
  location: "Kolkata, West Bengal, India",
  resumeUrl: "https://drive.google.com/file/d/12WSq0R_MelAff6iGbC6qoTtLzY6jGYgf/view?usp=sharing",
  githubSubtitle: "GitHub Profile Highlights",
};

export const heroStats: StatItem[] = [
  { value: "10+", label: "Hackathons Participated" },
  { value: "150+", label: "DSA Problems Solved" },
  { value: "GSSoC 2026", label: "Contributor" },
];

export const about = {
  paragraphs: [
    "I am an Artificial Intelligence and Machine Learning student based in Kolkata, India, with a strong interest in healthcare AI, cloud security, explainable machine learning, and intelligent systems.",
    "My experience includes building AI-powered healthcare screening tools, cloud anomaly detection systems, environmental risk assessment platforms, and enterprise AI governance solutions.",
    "I actively participate in hackathons, contribute to open-source programs, and continuously explore emerging areas such as Retrieval-Augmented Generation (RAG), AI security, and trustworthy AI.",
  ],
  interests: [
    "Explainable AI",
    "Healthcare AI",
    "Cloud Security Analytics",
    "Retrieval-Augmented Generation",
    "Computer Vision",
    "Trustworthy AI",
    "Hackathons",
    "Open Source",
  ],
  stats: [
    { value: "10+", label: "Hackathons" },
    { value: "150+", label: "DSA Problems" },
    { value: "GSSoC 2026", label: "Contributor" },
    { value: "Multi", label: "AI/ML Projects" },
  ],
  career:
    "Interested in internships, research opportunities, and collaborative projects in AI/ML, especially XAI, healthcare AI, cloud security, RAG, and trustworthy intelligent systems.",
  academic:
    "B.Tech in CSE (AI & ML) at Institute of Engineering and Management, Kolkata. Minor in Cyber Security and Minor in Database Security and Access Control. Current CGPA: 8.68.",
};

export const skillGroups: SkillGroup[] = [
  {
    icon: "PL",
    title: "Programming Languages",
    skills: [
      { name: "Python", highlight: true },
      { name: "C", highlight: true },
      { name: "Java", highlight: true },
    ],
  },
  {
    icon: "CS",
    title: "Core CS Concepts",
    skills: [
      { name: "Data Structures & Algorithms", highlight: true },
      { name: "Object-Oriented Programming", highlight: true },
      { name: "Problem Solving", highlight: true },
    ],
  },
  {
    icon: "ML",
    title: "Machine Learning",
    skills: [
      { name: "Data Preprocessing", highlight: true },
      { name: "Feature Engineering", highlight: true },
      { name: "Model Training", highlight: true },
      { name: "Model Evaluation", highlight: true },
    ],
  },
  {
    icon: "DA",
    title: "Data Analytics & Visualization",
    skills: [
      { name: "Power BI", highlight: true },
      { name: "Exploratory Data Analysis (EDA)", highlight: true },
    ],
  },
  {
    icon: "LF",
    title: "Libraries & Frameworks",
    skills: [
      { name: "Pandas", highlight: true },
      { name: "NumPy", highlight: true },
      { name: "Matplotlib", highlight: true },
      { name: "Scikit-learn", highlight: true },
      { name: "TensorFlow", highlight: true },
      { name: "Flask", highlight: true },
    ],
  },
  {
    icon: "TP",
    title: "Tools & Platforms",
    skills: [
      { name: "Git", highlight: true },
      { name: "GitHub", highlight: true },
      { name: "VS Code", highlight: true },
      { name: "Jupyter Notebook", highlight: true },
      { name: "Google Colab", highlight: true },
    ],
  },
];

export const featuredProjects: Project[] = [
  {
    id: "oncoai",
    featured: true,
    emoji: "ON",
    gradientFrom: "#e8ddd5",
    gradientTo: "#c9b09a",
    title: "ONCO AI - Explainable Breast Image Screening System",
    subtitle: "Healthcare AI",
    description:
      "Explainable breast image screening system for early-stage cancer detection.",
    technologies: ["AI/ML", "Computer Vision", "Explainable AI"],
    achievements: [
      "Built as an explainable breast image screening workflow",
      "Focuses on early-stage cancer detection support",
    ],
    github: "https://github.com/Rupu-techu/OncoAI-Early-stage-Cancer-Detector",
    demo: null,
    video: null,
  },
  {
    id: "cloud-anomaly",
    featured: true,
    emoji: "CA",
    gradientFrom: "#dde8e0",
    gradientTo: "#a8c4b0",
    title: "Context-Aware Cloud Anomaly Detection System",
    subtitle: "Cloud Security Analytics",
    description:
      "Context-aware cloud anomaly detection system for monitoring and risk analysis.",
    technologies: ["Cloud Analytics", "Anomaly Detection"],
    achievements: [
      "Built for context-aware monitoring and anomaly detection",
      "Targets cloud infrastructure security use cases",
    ],
    github: "https://github.com/soumi-saha12/cloud_anomaly_detection_system",
    demo: null,
    video: null,
  },
  {
    id: "aegisnexus",
    featured: true,
    emoji: "AN",
    gradientFrom: "#ddd8e8",
    gradientTo: "#b0a8c4",
    title: "AegisNexus AI - Enterprise AI Governance Prompt Security Platform",
    subtitle: "AI Governance",
    description:
      "Enterprise AI governance and prompt security platform.",
    technologies: ["AI Governance", "Prompt Security"],
    achievements: [
      "Enterprise AI governance and prompt security platform",
      "Live demo available for review and presentation",
    ],
    github: "https://github.com/Rupu-techu/Aegisnexus-AI",
    demo: "https://lnkd.in/gyb92JGb",
    video: "https://youtu.be/crBn1nEVuu4",
  },
  {
    id: "environmental-ai-healthcare",
    featured: true,
    emoji: "EH",
    gradientFrom: "#e3e9df",
    gradientTo: "#bfd0b8",
    title: "Environmental AI Healthcare System using CNN and RAG",
    subtitle: "AI for Healthcare",
    description:
      "Environmental AI healthcare system using CNN and RAG.",
    technologies: ["CNN", "RAG"],
    achievements: [
      "Combines CNN and RAG for healthcare-oriented AI workflows",
    ],
    github:
      "https://github.com/logitechsoumili/Environmental_AI_Healthcare_System",
    demo: null,
    video: null,
  },
  {
    id: "aidflow",
    featured: true,
    emoji: "AF",
    gradientFrom: "#e8ddd5",
    gradientTo: "#d8c0ac",
    title: "AidFlow - AI-Driven Crisis Intelligence System",
    subtitle: "Crisis Intelligence",
    description:
      "AI-powered crisis intelligence platform developed for GDG India Solution Challenge 2026. Built using FastAPI, Google Gemini API, and cloud deployment technologies to support intelligent crisis monitoring and decision support.",
    technologies: ["FastAPI", "Gemini API", "Google Cloud Run"],
    achievements: [
      "Co-developed for GDG India Solution Challenge 2026",
      "Supports intelligent crisis monitoring and decision support",
    ],
    github: "https://github.com/Rupu-techu/AidFLow",
    demo: "https://aidflow-ai.vercel.app/",
    video: null,
  },
];

export const additionalProjects: Project[] = [
  {
    id: "electo",
    featured: false,
    emoji: "EL",
    gradientFrom: "#dde8e0",
    gradientTo: "#b2cbb8",
    title: "ELECTO",
    subtitle: "AI Election Assistant",
    description:
      "AI-powered election assistant with cloud deployment and official resource integration.",
    technologies: ["AI Assistant", "Cloud Deployment", "Official Resources"],
    achievements: [
      "Built for Hack2Skill PromptWars",
      "Integrates official resource access for election assistance",
    ],
    github: "https://github.com/Rupu-techu/ELECTO_interactive-election-assistant",
    demo: "https://electo-interactive-election-assista.vercel.app/",
    video: null,
  },
  {
    id: "devsprint-ai",
    featured: false,
    emoji: "DS",
    gradientFrom: "#dfe3ec",
    gradientTo: "#b7bfd4",
    title: "DevSprint AI",
    subtitle: "Project Generator",
    description:
      "AI-powered project generator for automated planning and starter code generation.",
    technologies: ["AI Project Generation", "Planning Automation"],
    achievements: [
      "Automates project planning and starter code generation",
      "Developed for the IBM Bob Dev Day Hackathon",
    ],
    github: "https://github.com/Rupu-techu/Devsprint-AI_powered-project-generator",
    demo: null,
    video: null,
  },
  {
    id: "ai-race-engineer-copilot",
    featured: false,
    emoji: "RC",
    gradientFrom: "#eee4da",
    gradientTo: "#d2c0ad",
    title: "AI Race Engineer Copilot",
    subtitle: "SkillsBuild Project",
    description:
      "AI Race Engineer Copilot developed for IBM SkillsBuild.",
    technologies: ["AI Copilot", "IBM SkillsBuild"],
    achievements: [
      "Built for IBM SkillsBuild",
      "Demo video available for presentation",
    ],
    github: "https://github.com/Rupu-techu/IBM_SkillsBuild_AI-Race-Engineer-Copilot",
    demo: null,
    video: "https://www.youtube.com/watch?v=GrsRiPt-kiA",
  },
  {
    id: "buildx-payment-gateway",
    featured: false,
    emoji: "BX",
    gradientFrom: "#e6e1dc",
    gradientTo: "#cbbcb1",
    title: "BuildX Payment Gateway",
    subtitle: "Payment Gateway",
    description: "Payment gateway project.",
    technologies: ["Payment Gateway"],
    achievements: [],
    github: "https://github.com/Rupu-techu/buildx-payment-gateway",
    demo: null,
    video: null,
  },
];

export const projects: Project[] = [...featuredProjects, ...additionalProjects];

export const experiences: ExperienceItem[] = [
  {
    type: "Internship",
    date: "Jun 2026 - Present",
    title: "Artificial Intelligence Intern",
    org: "Edunet Foundation (IBM SkillsBuild and AICTE)",
    body:
      "Selected for a 6-week Artificial Intelligence internship and participating in mentor-guided learning focused on AI concepts, industry-oriented problem solving, and real-world applications of artificial intelligence. Developing hands-on AI projects while strengthening technical, analytical, and professional skills.",
  },
  {
    type: "Internship",
    date: "Mar 2026 - Apr 2026",
    title: "Cyber Security Intern",
    org: "Edunet Foundation (VOIS for Tech Program, AICTE Certified)",
    body:
      "Participated in a 4-week internship focused on cybersecurity, networking, and ethical hacking concepts. Gained hands-on experience with Kali Linux, Wireshark, Nmap, and Social Engineering Toolkit while exploring phishing attacks, MITM attacks, cryptography, and packet analysis using Gen-AI.",
  },
  {
    type: "Leadership",
    date: "2026",
    title: "Student Volunteer",
    org: "ConnectTech 2026",
    body:
      "Assisted in event coordination, technical sessions, and participant engagement.",
  },
  {
    type: "Leadership",
    date: "2025",
    title: "Student Volunteer",
    org: "Rotary Business Summit 2025",
    body:
      "Supported logistics, coordination, and event operations.",
  },
  {
    type: "Leadership",
    date: "Ongoing",
    title: "Active Contributor",
    org: "Technical College Events",
    body:
      "Participated in organizing workshops, technical sessions, competitions, and student engagement activities.",
  },
  {
    type: "Competition",
    date: "2026",
    title: "GDG India Solution Challenge 2026",
    org: "Hackathon Project",
    body:
      "Co-developed AidFlow, an AI-driven crisis intelligence system using FastAPI, Gemini API, and Google Cloud Run.",
  },
  {
    type: "Competition",
    date: "2026",
    title: "IBM Bob Dev Day Hackathon",
    org: "Hackathon Project",
    body:
      "Developed DevSprint AI, an AI-powered project generator for automated planning and starter code generation.",
  },
  {
    type: "Competition",
    date: "2026",
    title: "Hack2Skill PromptWars",
    org: "Hackathon Project",
    body:
      "Developed ELECTO, an AI-powered election assistant with cloud deployment and official resource integration.",
  },
  {
    type: "Competition",
    date: "2026",
    title: "Script Grid Coding Contest",
    org: "GeeksforGeeks Student Chapter",
    body:
      "Participant in the Script Grid coding contest.",
  },
];

export const achievements: AchievementItem[] = [
  {
    icon: "DSA",
    title: "150+ DSA Problems Solved",
    description: "Solved across LeetCode, HackerRank, and GeeksforGeeks.",
    meta: "Problem Solving",
  },
  {
    icon: "H10",
    title: "10+ Hackathons Participated",
    description: "Focused on Artificial Intelligence, Software Development, and Problem Solving.",
    meta: "Hackathons",
  },
  {
    icon: "2R",
    title: "2nd Runner-Up",
    description: "Mechanics Poster Competition on Recent Advances in Automobile Industry.",
    meta: "Competition",
  },
  {
    icon: "SS",
    title: "Silver Certification",
    description: "Developing Soft Skills and Personality (NPTEL).",
    meta: "NPTEL",
  },
  {
    icon: "PY",
    title: "Silver Certification",
    description: "Joy of Computing Using Python (NPTEL).",
    meta: "NPTEL",
  },
  {
    icon: "IT",
    title: "Information Theory",
    description: "The Chinese University of Hong Kong (Coursera).",
    meta: "Coursera",
  },
  {
    icon: "GA",
    title: "Generative AI for Everyone",
    description: "DeepLearning.AI (Coursera).",
    meta: "Coursera",
  },
  {
    icon: "AS",
    title: "Advanced System Security Topics",
    description: "University of London (Coursera).",
    meta: "Coursera",
  },
  {
    icon: "RAG",
    title: "Retrieval-Augmented Generation (RAG)",
    description: "LinkedIn Learning.",
    meta: "LinkedIn Learning",
  },
  {
    icon: "AI",
    title: "Introduction to Artificial Intelligence",
    description: "Google (Coursera).",
    meta: "Coursera",
  },
];

export const featuredAchievement: FeaturedAchievement = {
  icon: "GC",
  title: "GirlScript Summer of Code (GSSoC) 2026",
  role: "Contributor - AI / Agents Track",
  description:
    "Selected as a contributor for GirlScript Summer of Code 2026, contributing to open-source AI and intelligent systems projects while collaborating with the broader developer community.",
  profileUrl: "https://gssoc.girlscript.org/profile/d66db5bc-527d-4a05-a787-f7a352ae7033",
  buttonText: "View GSSoC Profile",
};

export const codingAchievement: FeaturedAchievement = {
  icon: "LC",
  title: "Data Structures & Algorithms",
  role: "LeetCode",
  description:
    "Solved 150+ problems across LeetCode, HackerRank, and GeeksforGeeks while strengthening problem-solving, algorithmic thinking, and coding skills.",
  profileUrl: "https://leetcode.com/u/rupu-techu/",
  buttonText: "View LeetCode Profile",
};

export const githubStats: StatItem[] = [
  { value: "316", label: "Contributions in 2026" },
  { value: "18", label: "Public Repositories" },
  { value: "276+", label: "Commits in 2026" },
  { value: "24", label: "Pull Requests" },
  { value: "22", label: "Repositories Contributed To" },
];

export const contactLinks: ContactLink[] = [
  { icon: "EM", label: "Email", value: personal.email, href: `mailto:${personal.email}` },
  { icon: "PH", label: "Phone", value: personal.phone, href: `tel:${personal.phone.replace(/\s+/g, "")}` },
  { icon: "LI", label: "LinkedIn", value: "linkedin.com/in/rupsha-debnath-056739317", href: personal.linkedin },
  { icon: "GH", label: "GitHub", value: "github.com/Rupu-techu", href: personal.github },
  { icon: "LO", label: "Location", value: personal.location, href: null },
];

export const navLinks = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Achievements", href: "#achievements" },
  { label: "Contact", href: "#contact" },
];
