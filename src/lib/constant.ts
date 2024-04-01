import cisco from "../../public/cisc.png";
import commerce from '../../public/commerce.jpg'
import vent from "../../public/vent.jpg";
import tour from "../../public/tour.jpg";
import book from "../../public/b.png";
import m from "../../public/m.png";
import afca from "../../public/afca.png";
import mela from "../../public/mela.png";


import ba from "../../public/ba.png";



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
    title: "Mrine",
    description:
      "Business listing webiste where users can give reviews about businesses",
    tags: ["React", "Nextjs", "React query", "Shadcn ui", "Express.js", "Mongodb"],
    imageUrl: m,
    href: 'https://www.merinbd.com/'
  },
  {
    title: "AFCA",
    description:
      "website made for afca event registration and organization. for demo use email-demoAdmin@gmail.com and pass-123123123",
    tags: ["React", "Nextjs", "React query", "Shadcn ui", "Express.js", "Mongodb"],
    imageUrl: afca,
    href: 'https://event-frontend-personal.vercel.app/'
  },
  {
    title: "Mela",
    description:
      "Mela will scrap throw many job portals and display them in proper manner with CTA",
    tags: ["Python", "Scrappy", "Nextjs", "Prisma", "Pupteer", "Postgress"],
    imageUrl: mela,
    href: 'https://er-mela-dashboard.vercel.app/'
  },
  {
    title: "Batelian",
    description:
      "Batelian is a platform that connects top remote developers with leading companies.",
    tags: ["React", "Nextjs", "React query", "headless ui", "Express.js", "Mongodb"],
    imageUrl: ba,
    href: 'https://batelian.com'

  },
  {
    title: "5killo bookclub",
    description:
      "This site was made for 5kilo aait fellowship bookclub students",
    tags: ["React", "Nextjs", "React query", "Shadcn ui", "Nest.js", "Mongodb"],
    imageUrl: book,
    href: 'https://bookclub-next3-92wp.vercel.app/'
  },
  {
    title: "cisco",
    description:
      "I made this site for AAIT cisco students to register online.",
    tags: ["React", "Express.js", "MongoDB", "Tailwind", "RTK query"],
    imageUrl: cisco,
    href: 'https://cisco-course-registration.netlify.app/'
  },

] as const;
export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Git",
  "Express.js",
  "Prisma",
  "Vue.js",
  "Laravel",
  "Framer Motion",
] as const;


export const service = [
  {
    description: " With expertise in MERN Stack, TypeScript, and Next.js, I can help build custom web apps that are optimized for performance, security, and scalability.",
    tag: "Use latest tech stacks.",
    title: "Web Application Development",
    headerText: "I have experiance with  a lot of cool framerworks out there like React,Vue, Nodejs",
  },
  {
    description: "With API development expertise, I can help build powerful and scalable APIs to connect your apps with any service you require.",
    tag: "Scalable APIs.",
    title: "API Development",
    headerText: "Empowering Your Apps with Seamless Third-Party Integrations",
  },
  {
    description: "As a UI/UX designer, I can help design and create intuitive user interfaces that ensure a seamless user experience.",
    tag: "Intuitive Design",
    title: "UI/UX Design",
    headerText: "Crafting User-Focused Interfaces for Seamless App Experiences",
  }
] as const

