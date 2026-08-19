"use client";
import React from "react";
import { Header, Footer } from "@/components/headerfooter";
import { PROJECTS } from "@/data/projects";
import { usePreferences } from "@/components/preferences-provider";

export default function TimelinePage() {
  const { language, t } = usePreferences();
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
    <div className="min-h-screen bg-[var(--page-bg)] text-[var(--page-fg)] font-sans selection:bg-[var(--page-fg)] selection:text-[var(--page-bg)] antialiased">
      <div className="max-w-2xl mx-auto px-6 py-16 md:py-24 space-y-16">
        <Header />
        <section id="goals" className="space-y-6">
          <div className="border-b border-[var(--border)] pb-4">
            <h2 className="text-lg font-semibold tracking-widest uppercase text-[var(--page-fg)]">
              {t.work.focusTitle}
            </h2>
            <p className="text-[var(--muted)] text-base leading-relaxed mt-2">
              {t.work.focusDescription}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="p-6 border border-[var(--border)] hover:border-[var(--border-strong)] rounded-lg transition-all duration-200 bg-[var(--surface-soft)]">
              <div className="flex items-center gap-2 mb-3 text-[var(--muted)]">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="8" rx="2" ry="2" />
                  <rect x="2" y="14" width="20" height="8" rx="2" ry="2" />
                  <line x1="6" y1="6" x2="6.01" y2="6" />
                  <line x1="6" y1="18" x2="6.01" y2="18" />
                </svg>
                <h3 className="text-[var(--page-fg)] font-medium tracking-wide">
                  {t.work.osuTitle}
                </h3>
              </div>
              <p className="text-[var(--muted)] text-sm leading-relaxed">
                {t.work.osuDescription}
              </p>
            </div>

            <div className="p-6 border border-[var(--border)] hover:border-[var(--border-strong)] rounded-lg transition-all duration-200 bg-[var(--surface-soft)]">
              <div className="flex items-center gap-2 mb-3 text-[var(--muted)]">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10" />
                  <circle cx="12" cy="12" r="6" />
                  <circle cx="12" cy="12" r="2" />
                </svg>
                <h3 className="text-[var(--page-fg)] font-medium tracking-wide">
                  {t.work.foodTitle}
                </h3>
              </div>
              <p className="text-[var(--muted)] text-sm leading-relaxed">
                {t.work.foodDescription}
              </p>
            </div>
          </div>
        </section>

        <section id="projects" className="space-y-12">
          <div className="border-b border-[var(--border)] pb-4">
            <h2 className="text-lg font-semibold tracking-widest uppercase text-[var(--page-fg)]">
              {t.work.timelinesTitle}
            </h2>
            <p className="text-[var(--muted)] text-base leading-relaxed mt-2">
              {t.work.timelinesDescription}
            </p>
          </div>

          <div className="space-y-12">
            {sortedYears.map((year) => (
              <div key={year} className="space-y-4">
                <h3 className="text-lg font-bold text-[var(--muted)] tracking-wider sticky top-0 bg-[var(--page-bg)]/80 backdrop-blur-sm py-2 z-10">
                  {year}
                </h3>

                <div className="space-y-6">
                  {groupedProjects[year].map((project) => (
                    <a
                      key={project.id}
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group block p-6 border border-[var(--border)] hover:border-[var(--border-strong)] rounded-lg transition-all duration-200 bg-[var(--surface-soft)]"
                    >
                      <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 mb-2">
                        <h4 className="text-lg font-medium group-hover:underline decoration-1 underline-offset-4 text-[var(--page-fg)]">
                          {project.title[language]}
                        </h4>
                        <span className="text-xs text-[var(--subtle)] tracking-wider transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
                          ↗
                        </span>
                      </div>
                      <p className="text-[var(--muted)] text-sm mb-4 leading-relaxed">
                        {project.description[language]}
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {project.tags.map((tag) => (
                          <span
                            key={tag}
                            className="text-[11px] px-2 py-0.5 bg-[var(--surface)] text-[var(--muted)] border border-[var(--border)] rounded"
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
