"use client";
import React from "react";
import { Header, Footer } from "@/components/headerfooter";

const PROJECTS = [
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

export default function TimelinePage() {
  const groupedProjects = PROJECTS.reduce((acc, project) => {
    const year = project.year;
    if (!acc[year]) {
      acc[year] = [];
    }
    acc[year].push(project);
    return acc;
  }, {} as Record<string, typeof PROJECTS>);

  const sortedYears = Object.keys(groupedProjects).sort((a, b) => b.localeCompare(a));

  return (
    <div className="min-h-screen bg-black text-white font-sans selection:bg-white selection:text-black antialiased">
      <div className="max-w-2xl mx-auto px-6 py-16 md:py-24 space-y-15">
        <Header />
        <section id="projects" className="space-y-12">
          <div className="border-b border-neutral-900 pb-4">
            <h2 className="text-sm font-semibold tracking-widest uppercase text-neutral-500">
              Timelines
            </h2>
          </div>

          <div className="space-y-12">
            {sortedYears.map((year) => (
              <div key={year} className="space-y-4">
                <h3 className="text-lg font-bold text-neutral-400 tracking-wider sticky top-0 bg-black/80 backdrop-blur-sm py-2 z-10">
                  {year}
                </h3>
                
                <div className="space-y-6">
                  {groupedProjects[year].map((project) => (
                    <a
                      key={project.id}
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group block p-6 border border-neutral-900 hover:border-neutral-700 rounded-lg transition-all duration-200 bg-neutral-950/50"
                    >
                      <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 mb-2">
                        <h4 className="text-lg font-medium group-hover:underline decoration-1 underline-offset-4 text-white">
                          {project.title}
                        </h4>
                        <span className="text-xs text-neutral-500 tracking-wider transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
                      
                        </span>
                      </div>
                      <p className="text-neutral-400 text-sm mb-4 leading-relaxed">
                        {project.description}
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {project.tags.map((tag) => (
                          <span
                            key={tag}
                            className="text-[11px] px-2 py-0.5 bg-neutral-900 text-neutral-300 border border-neutral-800 rounded"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </a>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        <Footer />

      </div>
    </div>
  );
}