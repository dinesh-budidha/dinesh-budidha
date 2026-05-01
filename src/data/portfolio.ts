export const profile = {
  name: "Dinesh Goud",
  role: "Aspiring Software Engineer",
  subRole: "AI & Full-Stack Developer",
  location: "Hyderabad, Telangana, India",
  tagline: "Building intelligent systems & scalable web applications",
  email: "dineshgoudb@gmail.com",
  github: "https://github.com/dinesh-budidha",
  githubUser: "dinesh-budidha",
  linkedin: "https://www.linkedin.com/in/budidha-dinesh-goud/",
};

export const about = {
  intro:
    "Computer Science student obsessed with building things that actually ship. I work across the stack — from training and prompting LLMs to designing APIs and shipping clean React UIs.",
  highlights: [
    { label: "B.Tech CSE", detail: "Final Year" },
    { label: "Diploma CSE", detail: "Samskruti College of Engineering & Technology" },
    { label: "Focus", detail: "AI · LLMs · Full-Stack" },
  ],
};

export const skills = [
  {
    category: "Programming",
    items: [
      { name: "Python", level: 90 },
      { name: "JavaScript", level: 85 },
      { name: "SQL", level: 80 },
    ],
  },
  {
    category: "Web",
    items: [
      { name: "React", level: 88 },
      { name: "Node.js", level: 80 },
      { name: "Express", level: 78 },
    ],
  },
  {
    category: "Tools",
    items: [
      { name: "Git", level: 85 },
      { name: "Power BI", level: 75 },
    ],
  },
  {
    category: "Concepts",
    items: [
      { name: "REST APIs", level: 85 },
      { name: "Data Structures", level: 82 },
      { name: "Problem Solving", level: 88 },
      { name: "Data Analysis", level: 80 },
    ],
  },
];

export type Project = {
  id: string;
  title: string;
  description: string;
  category: "AI" | "Web" | "Data";
  tech: string[];
  features: string[];
  github?: string;
  live?: string;
  badge?: string;
  highlight?: boolean;
};

export const projects: Project[] = [
  {
    id: "fuel",
    title: "Fuel Consumption Tracker",
    description:
      "Full-stack web app that lets users log refuels, compute mileage trends, and visualize cost over time with a real database backend.",
    category: "Web",
    tech: ["React", "Node.js", "Express", "MongoDB", "REST API"],
    features: [
      "Full-stack architecture (React + Node + DB)",
      "Auth + per-user logs and history",
      "REST API for refuel CRUD operations",
      "Charts for mileage & cost trends",
    ],
    github: "https://github.com/dineshgoud/fuel-tracker",
    live: "https://fuel-tracker.example.com",
    highlight: true,
  },
  {
    id: "codegenie",
    title: "CodeGenie — AI Code Generator",
    description:
      "An LLM-powered tool that turns natural-language prompts into working code snippets. Focused on prompt design, output evaluation, and reliable AI workflows.",
    category: "AI",
    tech: ["Python", "OpenAI API", "React", "Prompt Engineering"],
    features: [
      "Structured prompt templates per language",
      "LLM output evaluation & retry strategy",
      "Streaming responses with token control",
      "Designed for real developer workflows",
    ],
    github: "https://github.com/dineshgoud/codegenie",
    badge: "AI-Focused Project",
    highlight: true,
  },
  {
    id: "agri",
    title: "Agriculture Data Dashboard",
    description:
      "Interactive dashboard analyzing crop yields, rainfall patterns and regional production to surface actionable insights for stakeholders.",
    category: "Data",
    tech: ["Power BI", "Python", "Pandas", "SQL"],
    features: [
      "Cleaned and modeled multi-source datasets",
      "Region-wise yield & rainfall correlation",
      "Drill-down visualizations & KPIs",
      "Insight summaries for decision making",
    ],
    github: "https://github.com/dineshgoud/agri-dashboard",
  },
];

export const experience = [
  {
    title: "AI Internship — AICTE",
    org: "Microsoft & SAP",
    period: "2024",
    detail:
      "Hands-on training in AI fundamentals, model deployment workflows, and enterprise AI tooling.",
  },
  {
    title: "B.Tech in Computer Science",
    org: "Samskruti College of Engineering & Technology",
    period: "Final Year",
    detail:
      "Pursuing B.Tech in CSE with focus on AI, full-stack development, and applied software engineering.",
  },
  {
    title: "Diploma in Computer Science",
    org: "Samskruti College of Engineering & Technology",
    period: "Completed",
    detail:
      "Foundational coursework in programming, data structures, databases, and computer fundamentals.",
  },
];
