export const siteConfig = {
  name: "Marwan Abdelhamid",
  title: "AI/ML Engineer",
  description: "Portfolio website of Marwan Abdelhamid",
  accentColor: "#1d4ed8",
  social: {
    email: "myabdelhamidwork@gmail.com",
    linkedin: "https://linkedin.com/in/marwan-abdelhamid",
    upwork: "https://www.upwork.com/freelancers/~01e6e8365517aca8bb",
    github: "https://github.com/myabdelhamid",
  },
  aboutMe:
    "AI/ML Engineer with hands-on experience in classical machine learning and LLM-powered systems, including document classification, HybridRAG architectures, and AI-driven web applications. Currently developing STORMBench with a professor from the Technical University of Munich (TUM), a synthetic benchmark for testing LVLMs under extreme driving conditions with radar augmentation.",
  skills: [
    "Python",
    "Machine Learning",
    "Deep Learning",
    "TensorFlow",
    "PyTorch",
    "Scikit-learn",
    "Transformers",
    "LLMs",
    "RAG & Hybrid RAG",
    "LangChain",
    "AI Agents",
    "Knowledge Graphs",
    "OCR",
    "Pandas",
    "OpenCV",
    "Docker",
    "Kubernetes",
    "CI/CD",
    "Linux",
    "AWS",
    "FastAPI",
    "SQL",
    "PostgreSQL",
  ],
  projects: [
    {
      name: "Agentic HybridRAG Knowledge Engine",
      description:
        "Production-grade Retrieval-Augmented Generation system combining vector search, knowledge graphs, and intelligent agentic reasoning with local LLMs",
      link: "/projects/agentic-hybridrag",
      skills: ["Python", "FastAPI", "React", "Neo4j", "ChromaDB", "Docker", "LangChain"],
    },
    {
      name: "DocRepo - Document Classification System",
      description:
        "Enterprise Document Management System with AI-powered classification",
      link: "/projects/docrepo",
      skills: ["Python", "Javascript", "FastAPI", "React", "PostgreSQL", "Docker", "Scikit-learn", "OCR"],
    },
    {
      name: "Maro's Coffee AI Chatbot",
      description:
        "AI-powered conversational chatbot simulating a friendly coffee shop cashier with dynamic menu management",
      link: "/projects/maros-coffee-chatbot",
      skills: ["Django", "Python", "MongoDB", "Google Gemini AI", "JavaScript", "SQLite"],
    },
  ],
  experience: [
    {
      company: "School of Architecture in Egypt",
      title: "Full Stack & DevOps Developer",
      dateRange: "Oct 2023 – Present",
      bullets: [
        "Architected and deployed a MERN-stack booking system serving 5,000+ users, reducing manual processes by 85%",
        "Implemented CI/CD pipelines ensuring seamless deployments and high system availability",
        "Migrated system to a Strapi headless CMS architecture, significantly improving maintainability and content management",
        "Continuously provided production support and feature updates on an as-needed basis",
      ],
    },
    {
      company: "Derayah Financial",
      title: "Software Engineering & AI Intern",
      dateRange: "Jul 2024 – Aug 2024",
      bullets: [
        "Built an online trading platform using .NET, MySQL, and React with real-time stock updates",
        "Improved stock price prediction accuracy by 15% using RNN and Transformer-based time-series models",
        "Developed a financial dashboard using Oracle APEX to enhance data visualization and trading decisions",
      ],
    },
  ],
  education: [
    {
      school: "German International University in Berlin",
      degree: "MSc in Computer Science and Engineering",
      dateRange: "Oct 2025 – Jun 2026 (Expected)",
      achievements: [
        "Master's thesis supervised with a doctor from the Technical University of Munich (TUM)",
        "Focus on advanced AI systems, machine learning, and applied research",
      ],
    },
    {
      school: "German University in Cairo",
      degree: "BSc in Computer Science and Engineering",
      dateRange: "Sep 2020 – Jun 2025",
      achievements: [],
    },
  ],
};
