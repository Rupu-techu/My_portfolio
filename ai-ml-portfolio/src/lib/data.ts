// ─── PERSONAL ────────────────────────────────────────────────
export const personal = {
  name:           "Your Name",
  title:          "AI & Machine Learning Student",
  tagline:        "Open to Internships & Research",
  bio:            "I build intelligent, explainable AI systems that make a measurable difference — from clinical cancer diagnostics to cloud security. Currently seeking internship and research roles in AI, ML, and Data Science.",
  university:     "Your University",
  degree:         "B.Tech Computer Science — AI & ML Specialisation",
  gpa:            "9.2 / 10",
  gradYear:       "May 2026",
  email:          "your@email.com",
  linkedin:       "https://linkedin.com/in/yourprofile",
  github:         "https://github.com/yourusername",
  githubUsername: "@yourusername",
  location:       "Your City, India",
  resumeUrl:      "/resume.pdf",
};

// ─── ABOUT ───────────────────────────────────────────────────
export const about = {
  paragraphs: [
    "I'm a Computer Science student specialising in Artificial Intelligence and Machine Learning. My journey started with a fascination for how machines can learn, reason, and ultimately improve lives.",
    "I gravitate toward problems where AI can make a tangible difference — particularly in healthcare and safety-critical systems. I believe powerful AI must also be transparent and explainable, which is why XAI sits at the centre of my work.",
    "Outside of code I'm drawn to research papers, collaborative projects, and mentoring peers. I thrive in environments that challenge me to grow fast.",
  ],
  interests: ["Artificial Intelligence","Healthcare AI","Computer Vision","Explainable AI","Data Science","NLP","Deep Learning","Research"],
  stats: [
    { value: "3+",  label: "AI Projects"    },
    { value: "5+",  label: "Certifications" },
    { value: "9.2", label: "GPA / 10"       },
    { value: "∞",   label: "Curiosity"      },
  ],
  career:   "Seeking internships and research roles at the intersection of AI and real-world impact — particularly in healthcare AI, computer vision, and responsible ML systems at leading research labs and AI-first companies.",
  academic: "B.Tech Computer Science (AI & ML), Your University. Coursework: statistical learning, neural architectures, computer vision, NLP, and research methodology.",
};

// ─── SKILLS ──────────────────────────────────────────────────
export const skillGroups = [
  {
    icon: "🧠", title: "Artificial Intelligence",
    skills: [
      { name: "Machine Learning",       highlight: true  },
      { name: "Deep Learning",          highlight: true  },
      { name: "Neural Networks",        highlight: false },
      { name: "Reinforcement Learning", highlight: false },
      { name: "Transfer Learning",      highlight: false },
    ],
  },
  {
    icon: "👁️", title: "Computer Vision",
    skills: [
      { name: "CNNs",               highlight: true  },
      { name: "Grad-CAM",           highlight: true  },
      { name: "Image Segmentation", highlight: false },
      { name: "Object Detection",   highlight: false },
      { name: "OpenCV",             highlight: false },
    ],
  },
  {
    icon: "🔍", title: "Explainable AI",
    skills: [
      { name: "SHAP",                   highlight: true  },
      { name: "LIME",                   highlight: true  },
      { name: "Grad-CAM",               highlight: false },
      { name: "Model Interpretability", highlight: false },
      { name: "XAI Frameworks",         highlight: false },
    ],
  },
  {
    icon: "📊", title: "Data Analysis",
    skills: [
      { name: "Pandas",               highlight: true  },
      { name: "NumPy",                highlight: true  },
      { name: "Matplotlib / Seaborn", highlight: false },
      { name: "Statistical Analysis", highlight: false },
      { name: "SQL",                  highlight: false },
    ],
  },
  {
    icon: "💻", title: "Programming",
    skills: [
      { name: "Python",     highlight: true  },
      { name: "TypeScript", highlight: true  },
      { name: "JavaScript", highlight: false },
      { name: "R",          highlight: false },
      { name: "C / C++",    highlight: false },
    ],
  },
  {
    icon: "🛠️", title: "Tools & Technologies",
    skills: [
      { name: "PyTorch",      highlight: true  },
      { name: "TensorFlow",   highlight: true  },
      { name: "Hugging Face", highlight: false },
      { name: "scikit-learn", highlight: false },
      { name: "Docker",       highlight: false },
      { name: "Git",          highlight: false },
      { name: "AWS / GCP",    highlight: false },
    ],
  },
];

// ─── PROJECTS ────────────────────────────────────────────────
export const projects = [
  {
    id: "oncoai", featured: true,
    emoji: "🔬", gradientFrom: "#e8ddd5", gradientTo: "#c9b09a",
    title: "OncoAI", subtitle: "Breast Cancer Diagnostic System",
    description: "End-to-end AI platform for histopathology image analysis, helping clinicians with accurate and explainable diagnoses.",
    technologies: ["PyTorch","Grad-CAM","CNN","FastAPI","React","ReportLab"],
    achievements: [
      "94.6% classification accuracy on BreakHis dataset (7,909 images)",
      "Grad-CAM heatmaps reduce radiologist review time by ~30%",
      "Auto-generates HIPAA-style PDF diagnostic reports for clinical handoff",
      "SHAP integration provides per-prediction feature attribution",
    ],
    github: "https://github.com/yourusername/oncoai",
    demo:   "https://oncoai-demo.vercel.app",
  },
  {
    id: "cloud-anomaly", featured: false,
    emoji: "☁️", gradientFrom: "#dde8e0", gradientTo: "#a8c4b0",
    title: "Cloud Anomaly Detector", subtitle: "Real-time Infrastructure Monitoring",
    description: "Real-time anomaly detection pipeline for cloud infrastructure — monitors auth logs, system metrics, and API activity.",
    technologies: ["Python","Isolation Forest","LSTM","FastAPI","Grafana"],
    achievements: [
      "Ensemble Isolation Forest + LSTM with <0.8% false-positive rate",
      "Processes 10k+ log events/min with sub-200ms alert latency",
      "Live Grafana dashboard with drill-down by service and severity",
    ],
    github: "https://github.com/yourusername/cloud-anomaly",
    demo:   null,
  },
  {
    id: "study-recommender", featured: false,
    emoji: "📚", gradientFrom: "#ddd8e8", gradientTo: "#b0a8c4",
    title: "AI Study Recommender", subtitle: "Personalised NLP Learning Engine",
    description: "Personalised learning companion powered by NLP — curates study resources tailored to individual learning paths.",
    technologies: ["NLP","Transformers","FastAPI","React","Qdrant"],
    achievements: [
      "Semantic search over 50k+ resources via sentence-transformers + Qdrant",
      "Adaptive difficulty progression based on quiz performance history",
      "15% improvement in engagement metrics in pilot with 80 users",
    ],
    github: "https://github.com/yourusername/study-recommender",
    demo:   "https://study-recommender.vercel.app",
  },
];

// ─── EXPERIENCE ──────────────────────────────────────────────
export const experiences = [
  {
    type: "Internship", date: "Summer 2024",
    title: "AI / ML Intern", org: "Company / Organisation Name",
    body: "Worked on production ML pipelines — data preprocessing, model training, and deployment. Collaborated with data engineers and product teams to ship a customer-facing recommendation feature.",
  },
  {
    type: "Research", date: "2023 – Present",
    title: "Undergraduate Researcher", org: "University AI / ML Lab",
    body: "Contributing to active research in Explainable AI and medical imaging under faculty supervision. Responsibilities: literature review, experiment design, and manuscript preparation.",
  },
  {
    type: "Training", date: "2023",
    title: "Deep Learning Bootcamp", org: "Online / Institution",
    body: "Intensive programme covering deep learning, computer vision, and NLP. Shipped three end-to-end projects in TensorFlow and PyTorch over 8 weeks.",
  },
  {
    type: "Leadership", date: "2022 – Present",
    title: "Technical Lead — AI Club", org: "University AI & ML Society",
    body: "Leading workshops, paper-reading sessions, and hackathons for 100+ members. Organised six guest lectures from industry professionals and researchers.",
  },
];

// ─── ACHIEVEMENTS ─────────────────────────────────────────────
export const achievements = [
  { icon: "🏆", title: "Hackathon Winner",            description: "1st place at university AI hackathon — OncoAI beat 24 teams on clinical accuracy and explainability.", meta: "2024" },
  { icon: "📜", title: "Deep Learning Specialisation",description: "Andrew Ng's 5-course series: neural networks, CNNs, sequence models, and structuring ML projects.", meta: "Coursera · deeplearning.ai" },
  { icon: "📜", title: "TensorFlow Developer Certificate", description: "Proficiency in TensorFlow for computer vision, NLP, and time-series — Google's official certification.", meta: "Google / TensorFlow" },
  { icon: "🎖️", title: "Top 10% — Kaggle Competition",description: "Top 10% on tabular prediction challenge using stacking and LightGBM ensembles.", meta: "Kaggle · 2023" },
  { icon: "🎓", title: "Dean's List — Merit Award",   description: "Academic excellence maintaining a 9.2 GPA across six semesters.", meta: "University · 2022–Present" },
  { icon: "📜", title: "AWS Cloud Practitioner",      description: "Core AWS services: EC2, S3, SageMaker, and ML-focused cloud infrastructure.", meta: "Amazon Web Services" },
];

// ─── GITHUB ───────────────────────────────────────────────────
export const githubStats = [
  { value: "15+",  label: "Public Repos"  },
  { value: "200+", label: "Contributions" },
  { value: "50+",  label: "Stars Earned"  },
  { value: "10+",  label: "Followers"     },
];

// ─── NAV ──────────────────────────────────────────────────────
export const navLinks = [
  { label: "About",        href: "#about"        },
  { label: "Skills",       href: "#skills"       },
  { label: "Projects",     href: "#projects"     },
  { label: "Experience",   href: "#experience"   },
  { label: "Achievements", href: "#achievements" },
  { label: "Contact",      href: "#contact"      },
];
