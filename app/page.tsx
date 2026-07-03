"use client";

import React from "react";
import Link from "next/link";
import { Header, Footer } from "../components/headerfooter"; 

// --- ข้อมูลจำลองสำหรับ Projects ---
const PROJECTS = [
  {
    id: 1,
    title: "Syndicate",
    description: "มาเป็นเด็กฝึกงานที่ Syndicate ในตำแหน่ง Frontend Developer และได้ทำงานร่วมกับทีมพัฒนาเว็บไซต์และแอปพลิเคชันของบริษัท",
    tags: ["Next.js", "Tailwind CSS", "TypeScript"],
    link: "#",
  },
  {
    id: 2,
    title: "Midjourney & ChatGPT Prompt Assistant",
    description: "เครื่องมือช่วยเขียน Prompt สำหรับ Midjourney และ ChatGPT (เวอร์ชัน 1)",
    tags: ["React", "OpenAI API", "Tailwind CSS"],
    link: "#",
  },
  {
    id: 3,
    title: "AI Prompt Studio Pro",
    description: "เครื่องมือช่วยจัดการและสร้าง Prompt สำหรับ AI งานกราฟิกและคอนเทนต์",
    tags: ["React", "OpenAI API", "Tailwind CSS"],
    link: "#",
  },
];

export default function MinimalistPortfolio() {
  const visibleCount = 2;
  const displayedProjects = PROJECTS.slice(0, visibleCount);
  const hasMore = visibleCount < PROJECTS.length;

  return (
    <div className="min-h-screen bg-black text-white font-sans selection:bg-white selection:text-black antialiased">
      <div className="max-w-2xl mx-auto px-6 py-16 md:py-24 space-y-24">

        {/* เรียกใช้งาน Header กลาง */}
        <Header />

        {/* --- Hero / Self Introduction --- */}
        <section id="about" className="space-y-6">
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight leading-tight">
            Nattapoom Wilawan <br />
            <span className="text-neutral-500 font-normal">Beginner Developer</span>
          </h1>
          <p className="text-neutral-400 text-base leading-relaxed">
            Hello! I'm Nattapoom Wilawan, a passionate beginner developer with a keen interest in web development and modern technologies. I enjoy creating user-friendly applications and continuously learning new skills to enhance my craft.
          </p>
          <div className="pt-2 flex items-center gap-4 text-sm">
            <a href="#contact" className="px-5 py-2.5 bg-white text-black font-medium rounded hover:bg-neutral-200 transition-colors">
              Contact Me
            </a>
            <a href="https://github.com/haerinforever" target="_blank" rel="noreferrer" className="px-5 py-2.5 border border-neutral-800 text-neutral-300 font-medium rounded hover:border-white hover:text-white transition-colors">
              GitHub
            </a>
          </div>
        </section>

        {/* --- Selected Projects --- */}
        <section id="projects" className="space-y-8">
          <div className="border-b border-neutral-900 pb-4">
            <h2 className="text-sm font-semibold tracking-widest uppercase text-neutral-500">
              Timelines
            </h2>
          </div>

          <div className="space-y-6">
            {displayedProjects.map((project) => (
              <a key={project.id} href={project.link} className="group block p-6 border border-neutral-900 hover:border-neutral-700 rounded-lg transition-all duration-200 bg-neutral-950/50">
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 mb-2">
                  <h3 className="text-lg font-medium group-hover:underline decoration-1 underline-offset-4">
                    {project.title}
                  </h3>
                  <span className="text-xs text-neutral-500 tracking-wider">↗</span>
                </div>
                <p className="text-neutral-400 text-sm mb-4 leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span key={tag} className="text-[11px] px-2 py-0.5 bg-neutral-900 text-neutral-300 border border-neutral-800 rounded">
                      {tag}
                    </span>
                  ))}
                </div>
              </a>
            ))}
          </div>

          {hasMore && (
            <div className="pt-2">
              <Link
                href="/timeline"
                className="block w-full py-3 border border-neutral-800 hover:border-neutral-600 rounded-lg text-xs font-semibold tracking-widest uppercase text-neutral-400 hover:text-white transition-colors duration-200 bg-neutral-950 text-center"
              >
                Show More ({PROJECTS.length - visibleCount} More) →
              </Link>
            </div>
          )}
        </section>

        {/* --- Contact --- */}
        <section id="contact" className="space-y-6 pt-6 border-t border-neutral-900">
          <h2 className="text-sm font-semibold tracking-widest uppercase text-neutral-500">
            Get in Touch
          </h2>
          <p className="text-neutral-400 text-sm leading-relaxed">
            หากสนใจร่วมงานกัน หรืออยากพูดคุยแลกเปลี่ยนเรื่องเทคโนโลยี สามารถส่งอีเมลหาผมได้โดยตรงครับ
          </p>
          <div>
            <a href="mailto:your-email@example.com" className="text-lg font-medium underline underline-offset-8 decoration-neutral-700 hover:decoration-white transition-colors">
              hello@somchai.dev
            </a>
          </div>
        </section>

        {/* เรียกใช้งาน Footer กลาง */}
        <Footer />

      </div>
    </div>
  );
}