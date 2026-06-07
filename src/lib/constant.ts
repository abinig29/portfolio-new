export const links = [
  {
    name: "Home",
    href: "#home",
  },
  {
    name: "About",
    href: "#about",
  },
  {
    name: "Projects",
    href: "#projects",
  },
  {
    name: "Skills",
    href: "#skills",
  },
  {
    name: "Services",
    href: "#services",
  },
  {
    name: "Contact",
    href: "#contact",
  },
] as const;

export const projectsData = [
  {
    title: "DataLayer",
    description:
      "A full-stack AI training data management platform with dataset versioning, real-time collaboration, quality control workflows, and an analytics dashboard.",
    tags: ["Next.js", "PostgreSQL", "Redis", "Tailwind CSS", "TypeScript"],
    href: "https://github.com/birukaddis/datalayer",
  },
  {
    title: "DevBox",
    description:
      "A containerized CLI challenge platform with multi-step debugging exercises, deterministic Bash test suites, and reproducible Docker environments for engineering assessments.",
    tags: ["Docker", "Bash", "Python", "Linux", "CI/CD"],
    href: "https://github.com/birukaddis/devbox",
  },
  {
    title: "Projetsolaire",
    description:
      "All-in-one solar project management software solution with no subscription.",
    tags: ["Vue.js", "Pinia", "Headless UI", "Tailwind CSS", "Vite"],
    href: "https://projetsolaire.com/fr-FR",
  },
  {
    title: "Home Dispo",
    description:
      "A platform designed for real estate professionals, buyers, and lenders to connect, collaborate, and close deals more efficiently.",
    tags: ["Flask", "Tailwind CSS", "SQLAlchemy"],
    href: "https://homedispo.com/",
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Vue.js",
  "Node.js",
  "Express.js",
  "Django",
  "Flask",
  "Redis",
  "PostgreSQL",
  "Tailwind CSS",
  "Docker",
  "Linux/Bash",
  "Python",
] as const;

export const service = [
  {
    description:
      "I build complete, production-quality web applications from scratch — Next.js frontends with server-side rendering, Redis caching layers, and optimized PostgreSQL databases, all wired together for responsive user experiences.",
    tag: "Next.js · Redis · SQL",
    title: "Full-Stack Application Development",
    headerText: "End-to-end applications: dashboards, workflow tools, data platforms",
  },
  {
    description:
      "I design and develop high-quality, diverse software applications that serve as training examples for AI models — spanning different architectures, domains, and feature sets including auth, real-time data, and complex business logic.",
    tag: "Diverse Codebases.",
    title: "AI Training Data Engineering",
    headerText: "Production-quality apps that push the boundaries of AI training datasets",
  },
  {
    description:
      "I design containerized development environments, multi-step CLI exercises with deterministic test suites, and CI/CD pipelines — ensuring consistency, reproducibility, and clear documentation across complex systems.",
    tag: "Docker · Bash · Linux",
    title: "DevOps & Systems Engineering",
    headerText: "Reliable, reproducible environments from local Docker to production CI",
  },
] as const;
