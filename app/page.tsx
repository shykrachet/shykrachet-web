// src/app/page.tsx
import React from "react";
import Link from "next/link";
import { Header, Footer } from "../components/headerfooter"; 
import { PROJECTS } from "@/data/projects";
import ProjectCard from "@/components/project";

export default function MinimalistPortfolio() {
  const visibleCount = 2;
  const displayedProjects = PROJECTS.slice(0, visibleCount);
  const hasMore = visibleCount < PROJECTS.length;

  return (
    <div className="min-h-screen bg-black text-white font-sans selection:bg-white selection:text-black antialiased">
      <div className="max-w-2xl mx-auto px-6 py-16 md:py-24 space-y-24">

        <Header />
        
        <section id="about" className="space-y-6">
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight leading-tight">
            Nattapoom Wilawan <br />
            <span className="text-neutral-500 font-normal">Beginner Developer</span>
          </h1>
          <p className="text-neutral-400 text-base leading-relaxed">
            Hello! I'm Nattapoom Wilawan, a passionate Front-End Developer. I am actively practicing and improving my coding skills, with a keen interest in modern technologies. I enjoy creating user-friendly applications and continuously learning to enhance my craft.
          </p>
          <div className="pt-2 flex items-center gap-4 text-sm">
            <a href="/contact" className="px-5 py-2.5 bg-white text-black font-medium rounded hover:bg-neutral-200 transition-colors">
              Contact Me
            </a>
            <a href="https://github.com/haerinforever" target="_blank" rel="noreferrer" className="px-5 py-2.5 border border-neutral-800 text-neutral-300 font-medium rounded hover:border-white hover:text-white transition-colors">
              GitHub
            </a>
          </div>
        </section>

        <section id="projects" className="space-y-8">
          <div className="border-b border-neutral-900 pb-4">
            <h2 className="text-sm font-semibold tracking-widest uppercase text-neutral-500">
              Timelines
            </h2>
          </div>

          {/* เรียกใช้งาน ProjectCard */}
          <div className="space-y-6">
            {displayedProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>

          {hasMore && (
            <div className="pt-2">
              <Link
                href="/work"
                className="block w-full py-3 border border-neutral-800 hover:border-neutral-600 rounded-lg text-xs font-semibold tracking-widest uppercase text-neutral-400 hover:text-white transition-colors duration-200 bg-neutral-950 text-center"
              >
                Show More ({PROJECTS.length - visibleCount} More) →
              </Link>
            </div>
          )}
        </section>

        <Footer />

      </div>
    </div>
  );
}