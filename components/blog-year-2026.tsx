import BlogImageViewer from "@/components/blog-image-viewer";
import birth1 from "@/app/assets/img-birth/image1.jpg";
import birth2 from "@/app/assets/img-birth/image2.jpg";
import notebook1 from "@/app/assets/img-notebook/notebook1.jpg";
import notebook2 from "@/app/assets/img-notebook/notebook2.jpg";
import syndicate1 from "@/app/assets/img-syndicate/syndicate-1.jpg";
import syndicate2 from "@/app/assets/img-syndicate/syndicate-2.jpg";
import syndicate3 from "@/app/assets/img-syndicate/syndicate-3.jpg";

const blogDates = {
  syndicate: "2026-07-01",
  notebook: "2026-06-22",
  birthday: "2026-03-16",
} as const;

const syndicateImages = [
  {
    src: syndicate1,
    alt: "Syndicate preview 1",
    fullAlt: "Syndicate full preview 1",
  },
  {
    src: syndicate2,
    alt: "Syndicate preview 2",
    fullAlt: "Syndicate full preview 2",
  },
  {
    src: syndicate3,
    alt: "Syndicate preview 3",
    fullAlt: "Syndicate full preview 3",
  },
] as const;

const notebookImages = [
  {
    src: notebook1,
    alt: "Notebook preview 1",
    fullAlt: "Notebook full preview 1",
  },
  {
    src: notebook2,
    alt: "Notebook preview 2",
    fullAlt: "Notebook full preview 2",
  },
] as const;

const birthdayImages = [
  {
    src: birth1,
    alt: "Birthday preview 1",
    fullAlt: "Birthday full preview 1",
  },
  {
    src: birth2,
    alt: "Birthday preview 2",
    fullAlt: "Birthday full preview 2",
  },
] as const;

export const BLOG_YEAR_2026 = blogDates.syndicate.slice(0, 4);

export default function BlogYear2026() {
  return (
    <>
      <section className="blog-readable-section space-y-5">
        <div className="border-b border-[var(--border)] pb-4">
          <h2 className="text-base font-semibold uppercase tracking-widest text-[var(--page-fg)]">
            {blogDates.syndicate}
          </h2>
          <h2 className="text-sm uppercase tracking-widest text-[var(--muted)]">
            Syndicate
          </h2>
        </div>

        <BlogImageViewer
          images={syndicateImages}
          label="Syndicate"
          priority
        />

        <p className="blog-readable-copy">
          This was the beginning of my time working with the Syndicate team as a
          developer intern. After joining, I worked as a developer and learned a
          lot about programming. Everyone on the team helped one another, and I
          felt really good there because everyone was friendly. My boss was very
          kind too, and whenever I had a problem, I could always ask for advice.
          I learned what real work is like, both in programming and teamwork,
          and I am truly grateful for the chance to work with the Syndicate
          team.
        </p>
      </section>

      <section className="blog-readable-section space-y-5">
        <div className="border-b border-[var(--border)] pb-4">
          <h2 className="text-base font-semibold uppercase tracking-widest text-[var(--page-fg)]">
            {blogDates.notebook}
          </h2>
          <h2 className="text-sm uppercase tracking-widest text-[var(--muted)]">
            New Laptop For Work
          </h2>
        </div>

        <BlogImageViewer
          images={notebookImages}
          label="notebook"
          priority
        />

        <p className="blog-readable-copy">
          I bought a laptop specifically for work after selling my desktop
          computer. I wanted to focus mainly on programming and have something
          more convenient to carry around. The model I bought is an Asus Vivobook
          16. It is second-hand, but the condition is acceptable and the price
          was not expensive. Honestly, I wanted to try buying a MacBook, but I
          did not want to spend that much yet. When I have the budget and my work
          life is more stable, I will probably buy one for work.
        </p>
      </section>

      <section className="blog-readable-section space-y-5">
        <div className="border-b border-[var(--border)] pb-4">
          <h2 className="text-base font-semibold uppercase tracking-widest text-[var(--page-fg)]">
            {blogDates.birthday}
          </h2>
          <h2 className="text-sm uppercase tracking-widest text-[var(--muted)]">
            My Birthday & My Friends
          </h2>
        </div>

        <BlogImageViewer images={birthdayImages} label="birthday" />

        <p className="blog-readable-copy">The best day of my life.</p>
      </section>
    </>
  );
}
