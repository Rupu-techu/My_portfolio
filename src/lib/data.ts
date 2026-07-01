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

export type LeadershipItem = {
  type: "Leadership" | "Volunteering" | "Community";
  date: string;
  title: string;
  org: string;
  body: string;
};

export type JourneyItem = {
  category:
    | "Hackathons"
    | "Competitions"
    | "Open Source Contributions"
    | "Community"
    | "Technical Events";
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

export type FeaturedAchievementCard = {
  icon: string;
  title: string;
  description: string;
  organization: string;
  year: string;
  platform?: string;
  tags: string[];
  statLabel?: string;
  statValue?: string;
  buttonText?: string;
  href?: string | null;
};

export type MinorAchievementCard = {
  icon: string;
  title: string;
  description: string;
  tags: string[];
};

export type SpotlightAchievement = {
  icon: string;
  title: string;
  role: string;
  description: string;
  profileUrl: string;
  buttonText: string;
};

export type CertificationItem = {
  icon: string;
  title: string;
  issuer: string;
  credentialType: string;
  url?: string | null;
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
    demo: "https://aegisnexus-ai-foqkxqvlxjh4isaxvi4msj.streamlit.app/",
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
      "Developed an AI-based environmental health monitoring system that classifies environmental conditions including air pollution, garbage accumulation, stagnant water, and clean environments.",
    technologies: ["CNN", "RAG"],
    achievements: [
      "Classifies environmental risks using EfficientNetB0 transfer learning.",
      "Integrates RAG with Ollama and LLaMA models.",
      "Generates AI-powered health recommendations.",
      "Creates automated environmental assessment reports in PDF format.",
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
];

export const leadership: LeadershipItem[] = [
  {
    type: "Leadership",
    date: "2026",
    title: "Student Volunteer",
    org: "ConnectTech 2026",
    body: "Assisted in event coordination, technical sessions, and participant engagement.",
  },
  {
    type: "Leadership",
    date: "2025",
    title: "Student Volunteer",
    org: "Rotary Business Summit 2025",
    body: "Supported logistics, coordination, and event operations.",
  },
  {
    type: "Leadership",
    date: "Ongoing",
    title: "Event Organizer",
    org: "Technical College Events",
    body: "Helped organize workshops, technical sessions, competitions, and student engagement activities.",
  },
  {
    type: "Volunteering",
    date: "2025 - 2026",
    title: "Community Volunteer",
    org: "Tech Communities",
    body: "Contributed time to student-led initiatives, technical events, and collaborative community activities.",
  },
];

export const journeySoFar: JourneyItem[] = [
  {
    category: "Hackathons",
    date: "2026",
    title: "GDG India Solution Challenge 2026",
    org: "Hackathon Project",
    body: "Co-developed AidFlow, an AI-driven crisis intelligence system using FastAPI, Gemini API, and Google Cloud Run.",
  },
  {
    category: "Hackathons",
    date: "2026",
    title: "IBM Bob Dev Day Hackathon",
    org: "Hackathon Project",
    body: "Built DevSprint AI, an AI-powered project generator for automated planning and starter code generation.",
  },
  {
    category: "Competitions",
    date: "2026",
    title: "Hack2Skill PromptWars",
    org: "AI Election Assistant",
    body: "Developed ELECTO, an AI-powered election assistant with cloud deployment and official resource integration.",
  },
  {
    category: "Open Source Contributions",
    date: "2026",
    title: "GirlScript Summer of Code",
    org: "GSSoC 2026",
    body: "Contributed to open-source AI and intelligent systems projects while collaborating with the broader developer community.",
  },
  {
    category: "Technical Events",
    date: "2026",
    title: "Script Grid Coding Contest",
    org: "GeeksforGeeks Student Chapter",
    body: "Participated in a coding contest that reinforced problem-solving, speed, and algorithmic thinking.",
  },
  {
    category: "Community",
    date: "2025 - 2026",
    title: "Technical Community Events",
    org: "College and developer communities",
    body: "Joined community-led sessions and technical meetups that strengthened my exposure to modern tools and teamwork.",
  },
];

export const featuredAchievements: FeaturedAchievementCard[] = [
  {
    icon: "GS",
    title: "GSSoC Contributions",
    description:
      "Contributed to GirlScript Summer of Code through open-source collaboration, community participation, and consistent repository contributions.",
    organization: "GirlScript Summer of Code",
    year: "2026",
    tags: ["Open Source", "Community", "Git"],
    buttonText: "View GSSoC Profile",
    href: "https://gssoc.girlscript.org/profile/d66db5bc-527d-4a05-a787-f7a352ae7033",
  },
  {
    icon: "DSA",
    title: "DSA Progress",
    description:
      "Built steady problem-solving momentum across LeetCode, HackerRank, and GeeksforGeeks through regular practice and revision.",
    organization: "LeetCode / GFG",
    year: "Ongoing",
    platform: "LeetCode / GFG",
    tags: ["DSA", "Problem Solving"],
    statLabel: "Problems Solved",
    statValue: "150+",
    buttonText: "View LeetCode Profile",
    href: "https://leetcode.com/u/rupu-techu/",
  },
];

export const minorAchievements: MinorAchievementCard[] = [
  {
    icon: "AW",
    title: "Awards",
    description: "Earned recognition including a 2nd Runner-Up finish in a poster competition.",
    tags: ["Awards", "Recognition"],
  },
  {
    icon: "CR",
    title: "Competition Results",
    description: "Delivered strong outcomes across hackathons, contests, and challenge-based events.",
    tags: ["Competitions", "Hackathons"],
  },
  {
    icon: "OS",
    title: "Open Source Contributions",
    description: "Contributed to collaborative repositories and community-driven development efforts.",
    tags: ["Open Source", "Community"],
  },
];

export const certifications: CertificationItem[] = [
  {
    icon: "IT",
    title: "Information Theory",
    issuer: "The Chinese University of Hong Kong",
    credentialType: "Coursera",
    url: "https://www.coursera.org/",
  },
  {
    icon: "GA",
    title: "Generative AI for Everyone",
    issuer: "DeepLearning.AI",
    credentialType: "Coursera",
    url: "https://www.coursera.org/",
  },
  {
    icon: "AS",
    title: "Advanced System Security Topics",
    issuer: "University of London",
    credentialType: "Coursera",
    url: "https://www.coursera.org/",
  },
  {
    icon: "SS",
    title: "Developing Soft Skills and Personality",
    issuer: "NPTEL",
    credentialType: "NPTEL",
    url: "https://nptel.ac.in/",
  },
  {
    icon: "PY",
    title: "Joy of Computing Using Python",
    issuer: "NPTEL",
    credentialType: "NPTEL",
    url: "https://nptel.ac.in/",
  },
  {
    icon: "RAG",
    title: "Retrieval-Augmented Generation (RAG)",
    issuer: "LinkedIn Learning",
    credentialType: "LinkedIn Learning",
    url: "https://www.linkedin.com/learning/",
  },
  {
    icon: "AI",
    title: "Introduction to Artificial Intelligence",
    issuer: "Google",
    credentialType: "Coursera",
    url: "https://www.coursera.org/",
  },
  {
    icon: "CS",
    title: "Cloud Security Foundations",
    issuer: "Self-paced learning",
    credentialType: "Featured learning",
    url: null,
  },
];

export const featuredAchievement: SpotlightAchievement = {
  icon: "GC",
  title: "GirlScript Summer of Code (GSSoC) 2026",
  role: "Contributor - AI / Agents Track",
  description:
    "Selected as a contributor for GirlScript Summer of Code 2026, contributing to open-source AI and intelligent systems projects while collaborating with the broader developer community.",
  profileUrl: "https://gssoc.girlscript.org/profile/d66db5bc-527d-4a05-a787-f7a352ae7033",
  buttonText: "View GSSoC Profile",
};

export const codingAchievement: SpotlightAchievement = {
  icon: "LC",
  title: "Data Structures & Algorithms",
  role: "LeetCode",
  description:
    "Solved 150+ problems across LeetCode, HackerRank, and GeeksforGeeks while strengthening problem-solving, algorithmic thinking, and coding skills.",
  profileUrl: "https://leetcode.com/u/rupu-techu/",
  buttonText: "View LeetCode Profile",
};

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
  { label: "Leadership", href: "#leadership" },
  { label: "Journey", href: "#journey" },
  { label: "Achievements", href: "#achievements" },
  { label: "Certifications", href: "#certifications" },
  { label: "GitHub", href: "#github" },
  { label: "Contact", href: "#contact" },
];
