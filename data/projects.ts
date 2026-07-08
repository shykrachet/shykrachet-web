export interface Project {
  id: number;
  title: string;
  year: string;
  description: string;
  tags: string[];
  link: string;
}

export const PROJECTS: Project[] = [
  {
    id: 1,
    title: "Syndicate",
    year: "2026",
    description: "Frontend Developer Intern at Syndicate. Collaborated with the development team to build and maintain websites and applications for the company.",
    tags: ["Next.js", "TailwindCSS", "TypeScript"],
    link: "https://github.com/Guru-Thailand",
  },
  {
    id: 2,
    title: "osu.vocoid.xyz",
    year: "2025",
    description: "Web Developer & Moderator for a private osu! server. Co-created a private server for a gaming community, responsible for web development and monitoring player activity.",
    tags: ["Ubuntu", "MySQL"],
    link: "https://osu.vocoid.xyz/",
  },
  {
    id: 3,
    title: "WilaLab Solutions",
    year: "2024",
    description: "Assistant Web Designer. Assisted my brother in designing various website projects.",
    tags: ["Html", "Css", "Javascript"],
    link: "#",
  },
  {
    id: 4,
    title: "Beginner Web Developer",
    year: "2024",
    description: "Began building web development skills under the guidance and support of my brother. Started with HTML, CSS, and JavaScript as a foundation for self-paced learning.",
    tags: ["Html", "Css", "Javascript"],
    link: "#",
  },
];