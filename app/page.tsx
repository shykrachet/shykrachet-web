"use client";
import React, { useState } from "react";
import Link from "next/link";
import { Header, Footer } from "../components/headerfooter"; 
import { PROJECTS } from "@/data/projects";
import ProjectCard from "@/components/project";
import { usePreferences } from "@/components/preferences-provider";

export default function MinimalistPortfolio() {
  const visibleCount = 2;
  const displayedProjects = PROJECTS.slice(0, visibleCount);
  const hasMore = visibleCount < PROJECTS.length;
  const { t } = usePreferences();

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isClosing, setIsClosing] = useState(false);
  const [copiedType, setCopiedType] = useState("");

  const handleCopy = (text: string, type: string) => {
    navigator.clipboard.writeText(text);
    setCopiedType(type);
    setTimeout(() => {
      setCopiedType("");
    }, 2000);
  };

  const openModal = () => {
    setIsModalOpen(true);
    setIsClosing(false);
  };

  const closeModal = () => {
    setIsClosing(true);
    setTimeout(() => {
      setIsModalOpen(false);
      setIsClosing(false);
    }, 250); 
  };

  return (
    <div className="relative min-h-screen bg-[var(--page-bg)] text-[var(--page-fg)] font-sans selection:bg-[var(--page-fg)] selection:text-[var(--page-bg)] antialiased">
      <div className="max-w-2xl mx-auto px-6 py-16 md:py-24 space-y-24">

        <Header />
        
        <section id="about" className="space-y-6">
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight leading-tight">
            Nattapoom Wilawan <br />
            <span className="text-[var(--subtle)] font-normal">{t.home.role}</span>
          </h1>
          <p className="text-[var(--muted)] text-base leading-relaxed">
            {t.home.intro}
          </p>
          <div className="pt-2 flex items-center gap-4 text-sm">
            <button 
              onClick={openModal}
              className="px-5 py-2.5 bg-[var(--page-fg)] text-[var(--page-bg)] font-medium rounded hover:opacity-80 transition-opacity"
            >
              {t.home.contact}
            </button>
            <a href="https://github.com/haerinforever" target="_blank" rel="noreferrer" className="px-5 py-2.5 border border-[var(--border)] text-[var(--muted)] font-medium rounded hover:border-[var(--border-strong)] hover:text-[var(--page-fg)] transition-colors">
              {t.home.github}
            </a>
          </div>
        </section>

        <section id="projects" className="space-y-8">
          <div className="border-b border-[var(--border)] pb-4">
            <h2 className="text-sm font-semibold tracking-widest uppercase text-[var(--subtle)]">
              {t.home.timelines}
            </h2>
          </div>

          <div className="space-y-6">
            {displayedProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>

          {hasMore && (
            <div className="pt-2">
              <Link
                href="/work"
                className="block w-full py-3 border border-[var(--border)] hover:border-[var(--border-strong)] rounded-lg text-xs font-semibold tracking-widest uppercase text-[var(--muted)] hover:text-[var(--page-fg)] transition-colors duration-200 bg-[var(--surface)] text-center"
              >
                {t.home.showMorePrefix} ({PROJECTS.length - visibleCount} {t.home.showMoreSuffix}) →
              </Link>
            </div>
          )}
        </section>

        <Footer />

      </div>

      {isModalOpen && (
        <>
          <style>{`
            @keyframes fadeIn {
              from { opacity: 0; }
              to { opacity: 1; }
            }
            @keyframes fadeOut {
              from { opacity: 1; }
              to { opacity: 0; }
            }
            @keyframes slideUp {
              from { opacity: 0; transform: translateY(10px) scale(0.98); }
              to { opacity: 1; transform: translateY(0) scale(1); }
            }
            @keyframes slideDown {
              from { opacity: 1; transform: translateY(0) scale(1); }
              to { opacity: 0; transform: translateY(10px) scale(0.98); }
            }
            
            .modal-overlay-enter {
              animation: fadeIn 0.25s ease-out forwards;
            }
            .modal-content-enter {
              animation: slideUp 0.25s ease-out forwards;
            }
            .modal-overlay-exit {
              animation: fadeOut 0.25s ease-in forwards;
            }
            .modal-content-exit {
              animation: slideDown 0.25s ease-in forwards;
            }
          `}</style>

          <div className={`fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm px-4 ${isClosing ? 'modal-overlay-exit' : 'modal-overlay-enter'}`}>
            <div className={`bg-[var(--surface)] border border-[var(--border)] p-6 sm:p-8 rounded-xl max-w-sm w-full relative shadow-2xl ${isClosing ? 'modal-content-exit' : 'modal-content-enter'}`}>
              <button 
                onClick={closeModal}
                className="absolute top-4 right-4 text-[var(--subtle)] hover:text-[var(--page-fg)] transition-colors"
                aria-label="Close contact dialog"
              >
                ✕
              </button>
              <h2 className="text-xl font-bold mb-6">{t.home.modalTitle}</h2>
              
              <div className="flex flex-col gap-3">
                {/* LinkTree */}
                <a 
                  href="https://linktr.ee/kittyboyyyyyy" 
                  target="_blank" 
                  rel="noreferrer" 
                  className="w-full flex items-center justify-center gap-3 px-4 py-3 bg-[var(--surface-soft)] border border-[var(--border)] hover:bg-[var(--surface-hover)] hover:border-[var(--border-strong)] rounded-lg transition-all"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M13.736 5.853l4.005-4.117 2.325 2.38-4.2 4.005h5.908v3.305h-5.937l4.229 4.108-2.325 2.334-5.741-5.769v11.722h-3.17V11.834L3.089 17.603l-2.325-2.334 4.229-4.108H-.945V7.856h5.908L.763 3.851l2.325-2.38 4.005 4.117V.175h3.17v5.678z"/>
                  </svg>
                  <span>LinkTree</span>
                </a>

                {/* Instagram */}
                <a 
                  href="https://www.instagram.com/ranahtfai/" 
                  target="_blank" 
                  rel="noreferrer" 
                  className="w-full flex items-center justify-center gap-3 px-4 py-3 bg-[var(--surface-soft)] border border-[var(--border)] hover:bg-[var(--surface-hover)] hover:border-[var(--border-strong)] rounded-lg transition-all"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.151 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z"/>
                  </svg>
                  <span>Instagram</span>
                </a>

                {/* Facebook */}
                <a 
                  href="https://www.facebook.com/shykrachet/" 
                  target="_blank" 
                  rel="noreferrer" 
                  className="w-full flex items-center justify-center gap-3 px-4 py-3 bg-[var(--surface-soft)] border border-[var(--border)] hover:bg-[var(--surface-hover)] hover:border-[var(--border-strong)] rounded-lg transition-all"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.469h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.469h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                  <span>Facebook</span>
                </a>

                {/* Github */}
                <a 
                  href="https://github.com/shykrachet" 
                  target="_blank" 
                  rel="noreferrer" 
                  className="w-full flex items-center justify-center gap-3 px-4 py-3 bg-[var(--surface-soft)] border border-[var(--border)] hover:bg-[var(--surface-hover)] hover:border-[var(--border-strong)] rounded-lg transition-all"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>
                  </svg>
                  <span>Github</span>
                </a>

                {/* Discord */}
                <button 
                  onClick={() => handleCopy("shykrachet", "discord")}
                  className="w-full flex flex-col items-center justify-center gap-1 px-4 py-3 bg-[var(--surface-soft)] border border-[var(--border)] hover:bg-[var(--surface-hover)] hover:border-[var(--border-strong)] rounded-lg transition-all"
                >
                  <div className="flex items-center gap-3">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M20.317 4.3698a19.7913 19.7913 0 00-4.8851-1.5152.0741.0741 0 00-.0785.0371c-.211.3753-.4447.8648-.6083 1.2495-1.8447-.2762-3.68-.2762-5.4868 0-.1636-.3933-.4058-.8742-.6177-1.2495a.077.077 0 00-.0785-.037 19.7363 19.7363 0 00-4.8852 1.515.0699.0699 0 00-.0321.0277C.5334 9.0458-.319 13.5799.0992 18.0578a.0824.0824 0 00.0312.0561c2.0528 1.5076 4.0413 2.4228 5.9929 3.0294a.0777.0777 0 00.0842-.0276c.4616-.6304.8731-1.2952 1.226-1.9942a.076.076 0 00-.0416-.1057c-.6528-.2476-1.2743-.5495-1.8722-.8923a.077.077 0 01-.0076-.1277c.1258-.0943.2517-.1923.3718-.2914a.0743.0743 0 01.0776-.0105c3.9278 1.7933 8.18 1.7933 12.0614 0a.0739.0739 0 01.0785.0095c.1202.099.246.1981.3728.2924a.077.077 0 01-.0066.1276 12.2986 12.2986 0 01-1.873.8914.0766.0766 0 00-.0407.1067c.3604.698.7719 1.3628 1.225 1.9932a.076.076 0 00.0842.0286c1.961-.6067 3.9495-1.5219 6.0023-3.0294a.077.077 0 00.0313-.0552c.5004-5.177-.8382-9.6739-3.5485-13.6604a.061.061 0 00-.0312-.0286zM8.02 15.3312c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9555-2.4189 2.157-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.9555 2.4189-2.1569 2.4189zm7.9748 0c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9554-2.4189 2.1569-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.946 2.4189-2.1568 2.4189Z"/>
                    </svg>
                    <span>Discord</span>
                  </div>
                  <span className={`text-xs ${copiedType === "discord" ? "text-green-400" : "text-[var(--subtle)]"}`}>
                    {copiedType === "discord" ? t.home.copied : "shykrachet"}
                  </span>
                </button>

                {/* LINE ID*/}
                <button 
                  onClick={() => handleCopy("nayoki_ma", "line")}
                  className="w-full flex flex-col items-center justify-center gap-1 px-4 py-3 bg-[var(--surface-soft)] border border-[var(--border)] hover:bg-[var(--surface-hover)] hover:border-[var(--border-strong)] rounded-lg transition-all"
                >
                  <div className="flex items-center gap-3">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M19.365 9.863c0-3.83-3.918-6.945-8.73-6.945-4.811 0-8.729 3.115-8.729 6.945 0 3.473 3.153 6.402 7.377 6.866.286.052.677.16 1.026.543.19.208.31.554.31.554l-.16 1.57c-.027.27-.123.864.757.493.88-.37 4.743-2.795 6.425-4.752.12-.138 1.724-1.928 1.724-5.274zm-9.523 2.17h-2.126c-.198 0-.358-.16-.358-.358V7.545c0-.197.16-.357.358-.357h2.126c.198 0 .358.16.358.357v.643c0 .198-.16.358-.358.358h-1.483v.85h1.483c.198 0 .358.16.358.357v.643c0 .198-.16.358-.358.358h-1.483v.85h1.483c.198 0 .358.16.358.357v.643c0 .198-.16.358-.358.358zm3.018 0h-.643c-.198 0-.358-.16-.358-.358V7.545c0-.197.16-.357.358-.357h.643c.198 0 .358.16.358.357v4.13c0 .198-.16.358-.358.358zm4.496-.358v-2.71c0-.284-.226-.516-.51-.516-.285 0-.51.232-.51.516v2.71c0 .198-.16.358-.358.358h-.643c-.198 0-.358-.16-.358-.358V7.545c0-.197.16-.357.358-.357h.643c.198 0 .358.16.358.357v2.71c0 .285.225.517.51.517.284 0 .51-.232.51-.517v-2.71c0-.197.16-.357.358-.357h.643c.198 0 .358.16.358.357v4.13c0 .198-.16.358-.358.358h-.643c-.198 0-.358-.16-.358-.358z"/>
                    </svg>
                    <span>LINE ID</span>
                  </div>
                  <span className={`text-xs ${copiedType === "line" ? "text-green-400" : "text-[var(--subtle)]"}`}>
                    {copiedType === "line" ? t.home.copied : "nayoki_ma"}
                  </span>
                </button>
              </div>

            </div>
          </div>
        </>
      )}
    </div>
  );
}
