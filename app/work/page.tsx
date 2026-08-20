"use client";
import React from "react";
import { Header, Footer } from "@/components/headerfooter";

export default function TimelinePage() {
  return (
    <div className="snow-fall min-h-screen bg-[var(--page-bg)] text-[var(--page-fg)] font-sans selection:bg-[var(--page-fg)] selection:text-[var(--page-bg)] antialiased">
      <div className="page-transition-content relative z-10 max-w-2xl mx-auto px-6 py-16 md:py-24 space-y-16">
        <Header />
        <section id="goals" className="space-y-6">
          <div className="border-b border-[var(--border)] pb-4">
            <h2 className="text-lg font-semibold tracking-widest uppercase text-[var(--page-fg)]">
              Current Focus & Goals
            </h2>
            <p className="text-[var(--muted)] text-base leading-relaxed mt-2">
              What I am currently focusing on and aiming to achieve
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
                  osu!server
                </h3>
              </div>
              <p className="text-[var(--muted)] text-sm leading-relaxed">
                I&apos;m really into playing osu!, so I&apos;ve always wanted to host my own server. It&apos;s a dream of mine and something I want to try at least once, mostly just to learn how to manage a server. But well, I don&apos;t have the budget for it right now, lol.
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
                  Food Order KMUTNB
                </h3>
              </div>
              <p className="text-[var(--muted)] text-sm leading-relaxed">
                I&apos;ve set a new goal for myself: I want to rebuild my previous university capstone project so it can be practically implemented on campus. The project is a food ordering system for the university cafeteria.
              </p>
            </div>
          </div>
        </section>

        <section id="projects" className="space-y-12">
          <div className="border-b border-[var(--border)] pb-4">
            <h2 className="text-lg font-semibold tracking-widest uppercase text-[var(--page-fg)]">
              Timelines
            </h2>
            <p className="text-[var(--muted)] text-base leading-relaxed mt-2">
              Here is a breakdown of my work history and experience
            </p>
          </div>

          <div className="space-y-12">
            <div className="space-y-4">
              <h3 className="text-lg font-bold text-[var(--muted)] tracking-wider sticky top-0 bg-[var(--page-bg)]/80 backdrop-blur-sm py-2 z-10">
                2026
              </h3>

              <a
                href="https://github.com/Guru-Thailand"
                target="_blank"
                rel="noopener noreferrer"
                className="group block p-6 border border-[var(--border)] hover:border-[var(--border-strong)] rounded-lg transition-all duration-200 bg-[var(--surface-soft)]"
              >
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 mb-2">
                  <h4 className="text-lg font-medium group-hover:underline decoration-1 underline-offset-4 text-[var(--page-fg)]">
                    Syndicate
                  </h4>
                  <span className="text-xs text-[var(--subtle)] tracking-wider transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
                    ↗
                  </span>
                </div>
                <p className="text-[var(--muted)] text-sm mb-4 leading-relaxed">
                  Frontend Developer Intern at Syndicate. Collaborated with the development team to build and maintain websites and applications for the company.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="text-[11px] px-2 py-0.5 bg-[var(--surface)] text-[var(--muted)] border border-[var(--border)] rounded">
                    Next.js
                  </span>
                  <span className="text-[11px] px-2 py-0.5 bg-[var(--surface)] text-[var(--muted)] border border-[var(--border)] rounded">
                    TailwindCSS
                  </span>
                  <span className="text-[11px] px-2 py-0.5 bg-[var(--surface)] text-[var(--muted)] border border-[var(--border)] rounded">
                    TypeScript
                  </span>
                </div>
              </a>
            </div>

            <div className="space-y-4">
              <h3 className="text-lg font-bold text-[var(--muted)] tracking-wider sticky top-0 bg-[var(--page-bg)]/80 backdrop-blur-sm py-2 z-10">
                2025
              </h3>

              <a
                href="https://osu.vocoid.xyz/"
                target="_blank"
                rel="noopener noreferrer"
                className="group block p-6 border border-[var(--border)] hover:border-[var(--border-strong)] rounded-lg transition-all duration-200 bg-[var(--surface-soft)]"
              >
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 mb-2">
                  <h4 className="text-lg font-medium group-hover:underline decoration-1 underline-offset-4 text-[var(--page-fg)]">
                    osu.vocoid.xyz
                  </h4>
                  <span className="text-xs text-[var(--subtle)] tracking-wider transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
                    ↗
                  </span>
                </div>
                <p className="text-[var(--muted)] text-sm mb-4 leading-relaxed">
                  Web Developer & Moderator for a private osu! server. Co-created a private server for a gaming community, responsible for web development and monitoring player activity.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="text-[11px] px-2 py-0.5 bg-[var(--surface)] text-[var(--muted)] border border-[var(--border)] rounded">
                    Ubuntu
                  </span>
                  <span className="text-[11px] px-2 py-0.5 bg-[var(--surface)] text-[var(--muted)] border border-[var(--border)] rounded">
                    MySQL
                  </span>
                </div>
              </a>
            </div>

            <div className="space-y-4">
              <h3 className="text-lg font-bold text-[var(--muted)] tracking-wider sticky top-0 bg-[var(--page-bg)]/80 backdrop-blur-sm py-2 z-10">
                2024
              </h3>

              <div className="space-y-6">
                <a
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group block p-6 border border-[var(--border)] hover:border-[var(--border-strong)] rounded-lg transition-all duration-200 bg-[var(--surface-soft)]"
                >
                  <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 mb-2">
                    <h4 className="text-lg font-medium group-hover:underline decoration-1 underline-offset-4 text-[var(--page-fg)]">
                      WilaLab Solutions
                    </h4>
                    <span className="text-xs text-[var(--subtle)] tracking-wider transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
                      ↗
                    </span>
                  </div>
                  <p className="text-[var(--muted)] text-sm mb-4 leading-relaxed">
                    Assistant Web Designer. Assisted my brother in designing various website projects.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="text-[11px] px-2 py-0.5 bg-[var(--surface)] text-[var(--muted)] border border-[var(--border)] rounded">
                      Html
                    </span>
                    <span className="text-[11px] px-2 py-0.5 bg-[var(--surface)] text-[var(--muted)] border border-[var(--border)] rounded">
                      Css
                    </span>
                    <span className="text-[11px] px-2 py-0.5 bg-[var(--surface)] text-[var(--muted)] border border-[var(--border)] rounded">
                      Javascript
                    </span>
                  </div>
                </a>

                <a
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group block p-6 border border-[var(--border)] hover:border-[var(--border-strong)] rounded-lg transition-all duration-200 bg-[var(--surface-soft)]"
                >
                  <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 mb-2">
                    <h4 className="text-lg font-medium group-hover:underline decoration-1 underline-offset-4 text-[var(--page-fg)]">
                      Beginner Web Developer
                    </h4>
                    <span className="text-xs text-[var(--subtle)] tracking-wider transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
                      ↗
                    </span>
                  </div>
                  <p className="text-[var(--muted)] text-sm mb-4 leading-relaxed">
                    Began building web development skills under the guidance and support of my brother. Started with HTML, CSS, and JavaScript as a foundation for self-paced learning.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="text-[11px] px-2 py-0.5 bg-[var(--surface)] text-[var(--muted)] border border-[var(--border)] rounded">
                      Html
                    </span>
                    <span className="text-[11px] px-2 py-0.5 bg-[var(--surface)] text-[var(--muted)] border border-[var(--border)] rounded">
                      Css
                    </span>
                    <span className="text-[11px] px-2 py-0.5 bg-[var(--surface)] text-[var(--muted)] border border-[var(--border)] rounded">
                      Javascript
                    </span>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </div>
  );
}
