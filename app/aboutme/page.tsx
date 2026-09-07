"use client";

import { Header , Footer } from "@/components/headerfooter";
import Image from "next/image";
import myPhoto from "@/app/assets/pic-aboutme.jpg";

export default function AboutPage() {
    return (
        <div className="snow-fall min-h-screen bg-[var(--page-bg)] text-[var(--page-fg)] font-sans selection:bg-[var(--page-fg)] selection:text-[var(--page-bg)] antialiased">
            <div className="page-transition-content relative z-10 max-w-2xl mx-auto px-6 py-16 md:py-24 space-y-10">

                <Header />
                
                <main className="space-y-10">

                    <div className="flex justify-center w-full">
                        <div className="about-photo-card flex flex-col items-center border border-[var(--border)] rounded-2xl p-2 bg-[var(--surface-soft)] shadow-xl hover:bg-[var(--surface-hover)]">
                            <Image
                                src={myPhoto}
                                alt="Profile Picture"
                                width={300}
                                height={300}
                                priority
                                className="rounded-xl object-cover aspect-square"
                            />
                        </div>
                    </div>

                    <section className="space-y-6">
                        <h1 className="text-3xl md:text-4xl font-bold tracking-tight">
                            About Me
                        </h1>
                        <div className="space-y-4 text-[var(--muted)] leading-relaxed">
                            <p>
                                Hello! I&apos;m Nattapoom Wilawan, also known online as haerinforever or kaiyang007. I am currently a Business Computer student at the Faculty of Business Administration, King Mongkut&apos;s University of Technology North Bangkok (KMUTNB), Rayong Campus.
                            </p>
                            <p>
                                Currently, I am practicing web programming, web design for my future career, and graphic design. To be honest, I am a massive gamer and used to play non-stop. However, I have recently realized the importance of my future. I am now fully committed to continually practicing, developing my skills, and learning everything I can to grow.
                            </p>
                        </div>
                    </section>

                    <section className="space-y-4">
                        <h2 className="text-xl font-semibold tracking-tight text-[var(--page-fg)]">
                            Skills & Tools
                        </h2>
                        <div className="flex flex-wrap gap-2">
                            <span className="px-3 py-1.5 bg-[var(--surface-soft)] border border-[var(--border)] rounded-md text-sm text-[var(--muted)] hover:bg-[var(--surface-hover)] transition-colors">
                                React
                            </span>
                            <span className="px-3 py-1.5 bg-[var(--surface-soft)] border border-[var(--border)] rounded-md text-sm text-[var(--muted)] hover:bg-[var(--surface-hover)] transition-colors">
                                Next.js
                            </span>
                            <span className="px-3 py-1.5 bg-[var(--surface-soft)] border border-[var(--border)] rounded-md text-sm text-[var(--muted)] hover:bg-[var(--surface-hover)] transition-colors">
                                Tailwind CSS
                            </span>
                            <span className="px-3 py-1.5 bg-[var(--surface-soft)] border border-[var(--border)] rounded-md text-sm text-[var(--muted)] hover:bg-[var(--surface-hover)] transition-colors">
                                TypeScript
                            </span>
                            <span className="px-3 py-1.5 bg-[var(--surface-soft)] border border-[var(--border)] rounded-md text-sm text-[var(--muted)] hover:bg-[var(--surface-hover)] transition-colors">
                                JavaScript
                            </span>
                            <span className="px-3 py-1.5 bg-[var(--surface-soft)] border border-[var(--border)] rounded-md text-sm text-[var(--muted)] hover:bg-[var(--surface-hover)] transition-colors">
                                HTML
                            </span>
                            <span className="px-3 py-1.5 bg-[var(--surface-soft)] border border-[var(--border)] rounded-md text-sm text-[var(--muted)] hover:bg-[var(--surface-hover)] transition-colors">
                                SQL
                            </span>
                        </div>
                    </section>
                </main>
                
                <Footer />
            </div>
        </div>
    );
}
