import cisco from "../../public/cisc.png";
import commerce from '../../public/commerce.jpg'
import vent from "../../public/vent.jpg";
import tour from "../../public/tour.jpg";
import book from "../../public/b.png";
import m from "../../public/m.png";
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
    href: 'https://merine-business.vercel.app/'
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
  {
    title: "commerce",
    description:
      "This is the first project i made after I learn tailwind css. ",
    tags: ["React", "Tailwind", "Context api"],
    imageUrl: commerce,
    href: 'https://comfisloth.netlify.app/home'
  },
  {
    title: "vent",
    description:
      "Vent is website where users can talk about what they feel. It has many features including saving vent, liking, supporting, filtering user.",
    tags: ["React", "Redux toolkit", "Express.js", "Material UI", "MongoDB"],
    imageUrl: vent,
    href: 'https://do-vent.netlify.app/'
  },
  {
    title: "tour",
    description:
      "This was school project. it is made for tourists where they can find place to visit",
    tags: ["React", "Express.js", "MongoDB", "Bootstarp",],
    imageUrl: tour,
    href: 'https://dankil-tour.netlify.app/'
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
  "Tailwind",
  "Prisma",
  "MongoDB",
  "Redux",
  "Express",
  "Framer Motion",
] as const;
