"use client";

import { Header , Footer } from "@/components/headerfooter";
import Image from "next/image";
import myPhoto from "@/app/assets/pic-aboutme.jpg";
import { usePreferences } from "@/components/preferences-provider";

export default function AboutPage() {
    const { t } = usePreferences();

    return (
        <div className="min-h-screen bg-[var(--page-bg)] text-[var(--page-fg)] font-sans selection:bg-[var(--page-fg)] selection:text-[var(--page-bg)] antialiased">
            <div className="max-w-2xl mx-auto px-6 py-16 md:py-24 space-y-10">

                <Header />
                
                <main className="space-y-10">

                    <div className="flex justify-center w-full">
                        <div className="flex flex-col items-center border border-[var(--border)] rounded-2xl p-2 bg-[var(--surface-soft)] shadow-xl transition-all duration-300 hover:scale-105 hover:bg-[var(--surface-hover)]">
                            <Image
                                src={myPhoto}
                                alt={t.about.photoAlt}
                                width={300}
                                height={300}
                                priority
                                className="rounded-xl object-cover aspect-square"
                            />
                        </div>
                    </div>

                    <section className="space-y-6">
                        <h1 className="text-3xl md:text-4xl font-bold tracking-tight">
                            {t.about.title}
                        </h1>
                        <div className="space-y-4 text-[var(--muted)] leading-relaxed">
                            <p>
                                {t.about.paragraphOne}
                            </p>
                            <p>
                                {t.about.paragraphTwo}
                            </p>
                        </div>
                    </section>

                    <section className="space-y-4">
                        <h2 className="text-xl font-semibold tracking-tight text-[var(--page-fg)]">
                            {t.about.skillsTitle}
                        </h2>
                        <div className="flex flex-wrap gap-2">
                            {['React', 'Next.js', 'Tailwind CSS', 'TypeScript', 'JavaScript'  , 'HTML'].map((skill) => (
                                <span
                                    key={skill}
                                    className="px-3 py-1.5 bg-[var(--surface-soft)] border border-[var(--border)] rounded-md text-sm text-[var(--muted)] hover:bg-[var(--surface-hover)] transition-colors"
                                >
                                    {skill}
                                </span>
                            ))}
                        </div>
                    </section>
                </main>
                
                <Footer />
            </div>
        </div>
    );
}
