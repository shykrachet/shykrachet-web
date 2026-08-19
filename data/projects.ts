export interface Project {
  id: number;
  title: {
    en: string;
    th: string;
  };
  year: string;
  description: {
    en: string;
    th: string;
  };
  tags: string[];
  link: string;
}

export const PROJECTS: Project[] = [
  {
    id: 1,
    title: {
      en: "Syndicate",
      th: "Syndicate",
    },
    year: "2026",
    description: {
      en: "Frontend Developer Intern at Syndicate. Collaborated with the development team to build and maintain websites and applications for the company.",
      th: "ฝึกงานตำแหน่ง Frontend Developer ที่ Syndicate ร่วมงานกับทีมพัฒนาเพื่อสร้างและดูแลเว็บไซต์กับแอปพลิเคชันของบริษัท",
    },
    tags: ["Next.js", "TailwindCSS", "TypeScript"],
    link: "https://github.com/Guru-Thailand",
  },
  {
    id: 2,
    title: {
      en: "osu.vocoid.xyz",
      th: "osu.vocoid.xyz",
    },
    year: "2025",
    description: {
      en: "Web Developer & Moderator for a private osu! server. Co-created a private server for a gaming community, responsible for web development and monitoring player activity.",
      th: "Web Developer และ Moderator ของเซิร์ฟเวอร์ osu! ส่วนตัว ร่วมสร้างเซิร์ฟเวอร์สำหรับคอมมูนิตี้เกม ดูแลทั้งงานพัฒนาเว็บและการติดตามกิจกรรมผู้เล่น",
    },
    tags: ["Ubuntu", "MySQL"],
    link: "https://osu.vocoid.xyz/",
  },
  {
    id: 3,
    title: {
      en: "WilaLab Solutions",
      th: "WilaLab Solutions",
    },
    year: "2024",
    description: {
      en: "Assistant Web Designer. Assisted my brother in designing various website projects.",
      th: "ผู้ช่วยออกแบบเว็บ ช่วยพี่ชายออกแบบเว็บไซต์ในหลายโปรเจกต์",
    },
    tags: ["Html", "Css", "Javascript"],
    link: "#",
  },
  {
    id: 4,
    title: {
      en: "Beginner Web Developer",
      th: "นักพัฒนาเว็บมือใหม่",
    },
    year: "2024",
    description: {
      en: "Began building web development skills under the guidance and support of my brother. Started with HTML, CSS, and JavaScript as a foundation for self-paced learning.",
      th: "เริ่มฝึกทักษะการพัฒนาเว็บโดยมีพี่ชายคอยแนะนำ เริ่มจาก HTML, CSS และ JavaScript เป็นพื้นฐานสำหรับการเรียนรู้ด้วยตัวเอง",
    },
    tags: ["Html", "Css", "Javascript"],
    link: "#",
  },
];
