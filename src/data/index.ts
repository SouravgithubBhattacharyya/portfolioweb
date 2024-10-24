import { TField, TGeneralInfo, TProject } from "@/types";

import { FaCode, FaCog, FaServer } from "react-icons/fa";

// General Information
export const generalInfo: TGeneralInfo = {
  hero_info: {
    greeting: "Hi there, my name is",
    name: "Sourav Bhattcharyya",
    role: "Full Stack Developer Web, Cloud And Mobile",
    intro:
      "Passionate in building highly interactive, beautiful Web and Mobile application that bring your idea to life and push your current  business to the next level.",
    stats: {
      projects: 6,
      frameworks: 10,
    },
  },
  about_info: {
    bio: {
      intro: `Full-stack web developer skilled in HTML, CSS, JavaScript, React, Reactnative, Expo, Tailwind CSS, Node.js, Express, MongoDB, MySQL,Postgreql, Python, Fastify, Nest, Remix, Docker, Git, and GitHub.`,
      main: `I excel in frontend and backend development(Web , Mobile) Cloud(Devops), specializing in creating responsive web applications and Mobile Apps. My work spans across various technologies, enabling me to deliver comprehensive solutions that meet client needs.`,
      outro: `I hold certifications in CIT(Central Institute Of Technology) Front-End and Back-End Development and Cloud(Devops) and continually stay updated with the latest industry trends to keep my skills sharp and relevant.`,
    },
  },
  contact_info: {
    email: "sourav18sb@gmail.com",
    mobile: 916290920571,
  },
};

// Fields Information
const frontendDevelopment: TField = {
  title: "Frontend Development",
  description:
    "Frontend development shapes user experiences through responsive design and seamless interactivity.",
  icon: FaCode,
  skills: [
    {
      name: "HTML, CSS, JavaScript",
      level: {
        label: "PRO",
        value: 88,
      },
    },
    {
      name: "React.js",
      level: {
        label: "PRO",
        value: 88,
      },
    },
    {
      name: "Next.js",
      level: {
        label: "ADVANCED",
        value: 66,
      },
    },
    {
      name: "Remix.js",
      level: {
        label: "BEGINNER",
        value: 66,
      },
    },
    {
      name: "Tailwindcss",
      level: {
        label: "PRO",
        value: 88,
      },
    },
    {
      name: "Typescript",
      level: {
        label: "ADVANCED",
        value: 66,
      },
    },
  ],
};
const backendDevelopment: TField = {
  title: "Backend Development",
  description:
    "Backend development powers applications, handling data, logic, and server-side operations",
  icon: FaServer,
  skills: [
    {
      name: "Node.js Express.js",
      level: {
        label: "INTERMEDIATE",
        value: 88,
      },
    },
    {
      name: "Directus (HEADLESS CMS)",
      level: {
        label: "PRO",
        value: 66,
      },
    },
    {
      name: "Nodejs Fastify",
      level: {
        label: "INTERMEDIATE",
        value: 66,
      },
    },
    {
      name: "Nodejs NestJS",
      level: {
        label: "BEGINNER",
        value: 66,
      },
    },
    {
      name: "Full Stack Nextjs",
      level: {
        label: "INTERMEDIATE",
        value: 66,
      },
    },
    {
      name: "Appwrite Supabase",
      level: {
        label: "INTERMEDIATE",
        value: 44,
      },
    },
  ],
};
const CloudDevelopment: TField = {
  title: "Cloud And Devops",
  description:
    "Cloud And Devops empower developers, offering insights and tools for debugging and optimizing code.",
  icon: FaCog,
  skills: [
    {
      name: "Git & GitHub",
      level: {
        label: "INTERMEDIATE",
        value: 88,
      },
    },
    {
      name: "Docker",
      level: {
        label: "INTERMEDIATE",
        value: 66,
      },
    },
    {
      name: "Kubernetes",
      level: {
        label: "INTERMEDIATE",
        value: 44,
      },
    },
    {
      name: "Redis",
      level: {
        label: "INTERMEDIATE",
        value: 44,
      },
    },
    {
      name: "Linux",
      level: {
        label: "INTERMEDIATE",
        value: 66,
      },
    },
    {
      name: "Cloud",
      level: {
        label: "INTERMEDIATE",
        value: 66,
      },
    },
  ],
};

const mobileDevelopment: TField = {
  title: "MobileApp Development",
  description:
    "Mobile development shapes user experiences through responsive design and seamless interactivity.",
  icon: FaCog,
  skills: [
    {
      name: "ReactNative",
      level: {
        label: "INTERMEDIATE",
        value: 88,
      },
    },
    {
      name: "Expo",
      level: {
        label: "INTERMEDIATE",
        value: 66,
      },
    },
    {
      name: "ReactNative CLI",
      level: {
        label: "INTERMEDIATE",
        value: 44,
      },
    },
    {
      name: "Ui Kitten",
      level: {
        label: "INTERMEDIATE",
        value: 44,
      },
    },
    {
      name: "TAMAGUi",
      level: {
        label: "INTERMEDIATE",
        value: 66,
      },
    },
    {
      name: "Android Studio",
      level: {
        label: "BEGINNER",
        value: 22,
      },
    },
  ],
};

export const fieldsInfo: TField[] = [
  frontendDevelopment,
  backendDevelopment,
  CloudDevelopment,
  mobileDevelopment,
];

// Projects Information
export const projectsInfo: TProject[] = [
  {
    id: "01",
    title: "Todo Full Stack",
    description: "This Is The Full Stack Todo Application",

    technologies: ["Next.js", "Tailwind", "Shadcn", "Zustand", "React"],
  },
  {
    id: "02",
    title: "Full Stack Social Media",
    description: "This Is The Full Stack Social Media Application",

    technologies: ["React.js", "Tailwindcss", "jotai", "Node.js", "directus"],
  },

  {
    id: "03",
    title: "Social Media App MERN",
    description: "This Is The Full Stack Social Media Mern  Application",
    technologies: [
      "React.js",
      "Tailwindcss",
      "vite",
      "TypeScript",
      "Tanstack Query",
      "Appwrite",
    ],
  },
  {
    id: "04",
    title: "Portfolio Website",
    description:
      "This is my personal portfolio website built using Next.js 13 with TypeScript, Tailwind CSS, and Shadcn UI library. ",
    technologies: [
      "React.js",
      "Shadcn UI",
      "Next.js 13",
      "Tailwindcss",
      "TypeScript",
    ],
  },
  {
    id: "05",
    title: "Social Media Mobile App",
    description: "This Is The Expo Application for Mobile",
    technologies: [
      "ReactNative",
      "Expo",
      "Tanstack Query",
      "Ui Kitten",
      "Expo Vecter Icon",
      "directus(backend)",
      "Node.js",
    ],
  },
  {
    id: "06",
    title: "Book Library Application",
    description: "This Is The Book Library Application for Web",
    technologies: [
      "React.js",
      "Next.js",
      "JavaScript",
      "Tailwindcss",
      "directus",
    ],
  },

  {
    id: "07",
    title: "Random User Api application",
    description: "This Is The Book Library Application for Web",
    technologies: [
      "TypeScript",
      "RandomUser Api",
      "Nextjs",
      "Tanstack Query",
      "Axios",
      "NwxtUi",
    ],
  },

  {
    id: "08",
    title: "Mobile App Airbnb",
    description: "This Is The Airbnb Application for Mobile",
    technologies: [
      "TypeScript",
      "RandomUser Api",
      "Expo",
      "React Ntaive",
      "Tanstack Query",
      "Ui Kitten",
    ],
  },
];
