import BlogImageViewer from "@/components/blog-image-viewer";
import miinrBanner from "@/app/assets/img-bannerstaff-2025/miinrbanner.png";
import newcomers2025 from "@/app/assets/img-bannerstaff-2025/newcomers2025.png";
import soloScoreRush from "@/app/assets/img-bannerstaff-2025/soloscorerush.png";
import osumaniaworldcup2026banner from "@/app/assets/pic-omwc7k2025banner.jpeg";

const blogDates = {
  osuWorld7K2026: "2025-01-11",
  bannerStaff2025: "osu!staff 2025",
} as const;

const osuWorld7K2026 = [
  {
    src: osumaniaworldcup2026banner,
    alt: "osu!mania 7K World Cup 2025 banner",
    fullAlt: "osu!mania 7K World Cup 2025 full banner",
  },
] as const;

const bannerStaffImages = [
  {
    src: soloScoreRush,
    alt: "Solo Score Rush 2025 banner",
    fullAlt: "Solo Score Rush 2025 full banner",
  },
  {
    src: miinrBanner,
    alt: "MIINR 2025 banner",
    fullAlt: "MIINR 2025 full banner",
  },
  {
    src: newcomers2025,
    alt: "Newcomers 2025 banner",
    fullAlt: "Newcomers 2025 full banner",
  },
] as const;

export const BLOG_YEAR_2025 = blogDates.osuWorld7K2026.slice(0, 4);

export default function BlogYear2025() {
  return (
    <>
      <section className="blog-readable-section space-y-5">
      <div className="border-b border-[var(--border)] pb-4">
        <h2 className="text-base font-semibold uppercase tracking-widest text-[var(--page-fg)]">
          {blogDates.osuWorld7K2026}
        </h2>
        <h2 className="text-sm uppercase tracking-widest text-[var(--muted)]">
          osu!mania 7K World Cup 2025 [Team Thailand]
        </h2>
      </div>

      <BlogImageViewer images={osuWorld7K2026} label="osuWorld7K2026" priority />

      <p className="blog-readable-copy">
        I had the opportunity to compete in the osu!mania 7K World Cup 2025 as a representative of Team Thailand. It was an incredibly exciting and challenging experience for me. The tournament brought together talented players from around the world to compete in osu!mania 7K.
      </p>
      <div className="flex flex-wrap gap-2">
          <span className="px-3 py-1.5 bg-[var(--surface-soft)] border border-[var(--border)] rounded-md text-sm text-[var(--muted)] hover:bg-[var(--surface-hover)] transition-colors">
            --Pavin--
          </span>
          <span className="px-3 py-1.5 bg-[var(--surface-soft)] border border-[var(--border)] rounded-md text-sm text-[var(--muted)] hover:bg-[var(--surface-hover)] transition-colors">
            Nattapoom [Me]
          </span>
          <span className="px-3 py-1.5 bg-[var(--surface-soft)] border border-[var(--border)] rounded-md text-sm text-[var(--muted)] hover:bg-[var(--surface-hover)] transition-colors">
            Nanonbandusty
          </span>
          <span className="px-3 py-1.5 bg-[var(--surface-soft)] border border-[var(--border)] rounded-md text-sm text-[var(--muted)] hover:bg-[var(--surface-hover)] transition-colors">
            yoth99
          </span>
      </div>
      </section>

      <section className="blog-readable-section space-y-5">
        <div className="border-b border-[var(--border)] pb-4">
          <h2 className="text-base font-semibold uppercase tracking-widest text-[var(--page-fg)]">
            {blogDates.bannerStaff2025}
          </h2>
          <h2 className="text-sm uppercase tracking-widest text-[var(--muted)]">
            osu!staff Tournament on 2025
          </h2>
        </div>
        <BlogImageViewer images={bannerStaffImages} label="Banner Staff" />
      
        <p>
          I had the opportunity to participate in several osu!staff Tournaments
        </p>
        <div className="flex flex-col gap-2">
          <span className="px-3 py-1.5 bg-[var(--surface-soft)] border border-[var(--border)] rounded-md text-sm text-[var(--muted)] hover:bg-[var(--surface-hover)] transition-colors">
            Bangjak Tournament Season 4
          </span>
          <span className="px-3 py-1.5 bg-[var(--surface-soft)] border border-[var(--border)] rounded-md text-sm text-[var(--muted)] hover:bg-[var(--surface-hover)] transition-colors">
            Solo Score Rush
          </span>
          <span className="px-3 py-1.5 bg-[var(--surface-soft)] border border-[var(--border)] rounded-md text-sm text-[var(--muted)] hover:bg-[var(--surface-hover)] transition-colors">
            Newcomers Mania World Cup 2025
          </span>
          <span className="px-3 py-1.5 bg-[var(--surface-soft)] border border-[var(--border)] rounded-md text-sm text-[var(--muted)] hover:bg-[var(--surface-hover)] transition-colors">
            miinr's rented tournament 3
          </span>
        </div>
      </section>
    </>
  );
}
