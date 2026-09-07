"use client";

import { useState } from "react";
import BlogYear2025, { BLOG_YEAR_2025 } from "@/components/blog-year-2025";
import BlogYear2026, { BLOG_YEAR_2026 } from "@/components/blog-year-2026";
import { Header, Footer } from "@/components/headerfooter";

const blogYears = [BLOG_YEAR_2026, BLOG_YEAR_2025,].sort(
  (firstYear, secondYear) => Number(secondYear) - Number(firstYear),
);

export default function BlogPosts() {
  const [selectedYear, setSelectedYear] = useState(blogYears[0]);

  return (
    <div className="snow-fall min-h-screen bg-[var(--page-bg)] text-[var(--page-fg)] font-sans selection:bg-[var(--page-fg)] selection:text-[var(--page-bg)] antialiased">
      <div className="page-transition-content relative z-10 max-w-2xl mx-auto px-6 py-16 md:py-24 space-y-16">
        <Header />

        <main className="space-y-8">
          <div className="flex flex-wrap items-center gap-2 border-b border-[var(--border)] pb-4">
            {blogYears.map((year) => (
              <button
                key={year}
                type="button"
                onClick={() => setSelectedYear(year)}
                className={`rounded-full border px-4 py-1.5 text-xs font-semibold tracking-widest transition-colors ${
                  selectedYear === year
                    ? "border-[var(--page-fg)] bg-[var(--page-fg)] text-[var(--page-bg)]"
                    : "border-[var(--border)] bg-[var(--surface)] text-[var(--muted)] hover:border-[var(--border-strong)] hover:text-[var(--page-fg)]"
                }`}
                aria-pressed={selectedYear === year}
              >
                {year}
              </button>
            ))}
          </div>

          {selectedYear === BLOG_YEAR_2026 && <BlogYear2026 />}
          {selectedYear === BLOG_YEAR_2025 && <BlogYear2025 />}
        </main>

        <Footer />
      </div>
    </div>
  );
}
