"use client";
import React from "react";
import { Header, Footer } from "@/components/headerfooter";
import { PROJECTS } from "@/data/projects";

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
        <section id="goals" className="space-y-6">
          <div className="border-b border-neutral-900 pb-4">
            <h2 className="text-l font-semibold tracking-widest uppercase text-white">
              Current Focus & Goals
            </h2>
            <p className="text-neutral-400 text-base leading-relaxed mt-2">
              What I am currently focusing on and aiming to achieve
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="p-6 border border-neutral-900 hover:border-neutral-700 rounded-lg transition-all duration-200 bg-neutral-950/50">
              <div className="flex items-center gap-2 mb-3 text-neutral-400">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="8" rx="2" ry="2" />
                  <rect x="2" y="14" width="20" height="8" rx="2" ry="2" />
                  <line x1="6" y1="6" x2="6.01" y2="6" />
                  <line x1="6" y1="18" x2="6.01" y2="18" />
                </svg>
                <h3 className="text-white font-medium tracking-wide">
                  osu!server
                </h3>
              </div>
              <p className="text-neutral-400 text-sm leading-relaxed">
                I'm really into playing osu!, so I've always wanted to host my own server.
                It's a dream of mine and something I want to try at least once, mostly just to learn how to manage a server.
                But well, I don't have the budget for it right now, lol.
              </p>
            </div>

            <div className="p-6 border border-neutral-900 hover:border-neutral-700 rounded-lg transition-all duration-200 bg-neutral-950/50">
              <div className="flex items-center gap-2 mb-3 text-neutral-400">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10" />
                  <circle cx="12" cy="12" r="6" />
                  <circle cx="12" cy="12" r="2" />
                </svg>
                <h3 className="text-white font-medium tracking-wide">
                  Food Order Kmutnb
                </h3>
              </div>
              <p className="text-neutral-400 text-sm leading-relaxed">
                I've set a new goal for myself: I want to rebuild my previous university capstone project so it can be practically implemented on campus.
                The project is a food ordering system for the university cafeteria.
              </p>
            </div>
          </div>
        </section>

        <section id="projects" className="space-y-12">
          <div className="border-b border-neutral-900 pb-4">
            <h2 className="text-l font-semibold tracking-widest uppercase text-white">
              Timelines
            </h2>
            <p className="text-neutral-400 text-base leading-relaxed mt-2">
              Here is a breakdown of my work history and experience
            </p>
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
                        <span className="text-xs text-neutral-500 tracking-wider transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
                          ↗
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