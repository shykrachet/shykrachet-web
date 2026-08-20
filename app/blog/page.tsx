"use client";

import { useState } from "react";
import Image from "next/image";
import { Header, Footer } from "@/components/headerfooter";
import syndicate1 from "@/app/assets/img-syndicate/syndicate-1.jpg";
import syndicate2 from "@/app/assets/img-syndicate/syndicate-2.jpg";
import syndicate3 from "@/app/assets/img-syndicate/syndicate-3.jpg";
import notebook1 from "@/app/assets/img-notebook/notebook1.jpg";
import notebook2 from "@/app/assets/img-notebook/notebook2.jpg";
import birth1 from "@/app/assets/img-birth/image1.jpg";
import birth2 from "@/app/assets/img-birth/image2.jpg";

export default function BlogPage() {
  const [syndicateImage, setSyndicateImage] = useState(0);
  const [notebookImage, setNotebookImage] = useState(0);
  const [birthdayImage, setBirthdayImage] = useState(0);
  const [isSyndicateOpen, setIsSyndicateOpen] = useState(false);
  const [isSyndicateClosing, setIsSyndicateClosing] = useState(false);
  const [isNotebookOpen, setIsNotebookOpen] = useState(false);
  const [isNotebookClosing, setIsNotebookClosing] = useState(false);
  const [isBirthdayOpen, setIsBirthdayOpen] = useState(false);
  const [isBirthdayClosing, setIsBirthdayClosing] = useState(false);

  const openSyndicateImage = () => {
    setIsSyndicateClosing(false);
    setIsSyndicateOpen(true);
  };

  const closeSyndicateImage = () => {
    setIsSyndicateClosing(true);

    window.setTimeout(() => {
      setIsSyndicateOpen(false);
      setIsSyndicateClosing(false);
    }, 220);
  };

  const openNotebookImage = () => {
    setIsNotebookClosing(false);
    setIsNotebookOpen(true);
  };

  const closeNotebookImage = () => {
    setIsNotebookClosing(true);

    window.setTimeout(() => {
      setIsNotebookOpen(false);
      setIsNotebookClosing(false);
    }, 220);
  };

  const openBirthdayImage = () => {
    setIsBirthdayClosing(false);
    setIsBirthdayOpen(true);
  };

  const closeBirthdayImage = () => {
    setIsBirthdayClosing(true);

    window.setTimeout(() => {
      setIsBirthdayOpen(false);
      setIsBirthdayClosing(false);
    }, 220);
  };

  return (
    <div className="snow-fall min-h-screen bg-[var(--page-bg)] text-[var(--page-fg)] font-sans selection:bg-[var(--page-fg)] selection:text-[var(--page-bg)] antialiased">
      <div className="page-transition-content relative z-10 max-w-2xl mx-auto px-6 py-16 md:py-24 space-y-16">
        <Header />

        <main className="space-y-8">
          {/* 2026 - Syndicate */}
          <section className="blog-readable-section space-y-5">
            <div className="border-b border-[var(--border)] pb-4">
              <h2 className="text-base font-semibold uppercase tracking-widest text-[var(--page-fg)]">
                07-01-2026
              </h2>
              <h2 className="text-sm uppercase tracking-widest text-[var(--muted)]">
                Syndicate
              </h2>
            </div>

            <div className="space-y-4">
              <div className="relative overflow-hidden rounded-lg border border-[var(--border)] bg-[var(--surface-soft)]">
                <button
                  type="button"
                  onClick={openSyndicateImage}
                  className="block w-full overflow-hidden text-left"
                  aria-label={`Open Syndicate image ${syndicateImage + 1}`}
                >
                  <div
                    className="syndicate-slider flex w-[300%]"
                    style={{
                      transform: `translateX(-${syndicateImage * 33.333333}%)`,
                    }}
                  >
                    <div className="w-1/3 shrink-0">
                      <Image
                        src={syndicate1}
                        alt="Syndicate preview 1"
                        className="aspect-video w-full object-cover"
                        priority
                      />
                    </div>
                    <div className="w-1/3 shrink-0">
                      <Image
                        src={syndicate2}
                        alt="Syndicate preview 2"
                        className="aspect-video w-full object-cover"
                      />
                    </div>
                    <div className="w-1/3 shrink-0">
                      <Image
                        src={syndicate3}
                        alt="Syndicate preview 3"
                        className="aspect-video w-full object-cover"
                      />
                    </div>
                  </div>
                </button>

                <button
                  type="button"
                  onClick={() => {
                    setSyndicateImage((current) =>
                      current === 0 ? 2 : current - 1,
                    );
                  }}
                  className="absolute left-3 top-1/2 z-10 grid h-9 w-9 -translate-y-1/2 place-items-center rounded-md border border-[var(--border)] bg-[var(--surface)]/85 text-[var(--page-fg)] backdrop-blur transition-colors hover:border-[var(--border-strong)] hover:bg-[var(--surface-hover)]"
                  aria-label="Previous Syndicate image"
                >
                  ‹
                </button>

                <button
                  type="button"
                  onClick={() => {
                    setSyndicateImage((current) =>
                      current === 2 ? 0 : current + 1,
                    );
                  }}
                  className="absolute right-3 top-1/2 z-10 grid h-9 w-9 -translate-y-1/2 place-items-center rounded-md border border-[var(--border)] bg-[var(--surface)]/85 text-[var(--page-fg)] backdrop-blur transition-colors hover:border-[var(--border-strong)] hover:bg-[var(--surface-hover)]"
                  aria-label="Next Syndicate image"
                >
                  ›
                </button>
              </div>

              <div className="flex items-center justify-between text-xs text-[var(--subtle)]">
                <span>
                  {syndicateImage + 1} / 3
                </span>

                <div className="flex gap-2">
                  <button
                    type="button"
                    onClick={() => setSyndicateImage(0)}
                    className={`h-2.5 w-2.5 rounded-full border border-[var(--border)] ${
                      syndicateImage === 0
                        ? "bg-[var(--page-fg)]"
                        : "bg-[var(--surface)]"
                    }`}
                    aria-label="Show Syndicate image 1"
                  />
                  <button
                    type="button"
                    onClick={() => setSyndicateImage(1)}
                    className={`h-2.5 w-2.5 rounded-full border border-[var(--border)] ${
                      syndicateImage === 1
                        ? "bg-[var(--page-fg)]"
                        : "bg-[var(--surface)]"
                    }`}
                    aria-label="Show Syndicate image 2"
                  />
                  <button
                    type="button"
                    onClick={() => setSyndicateImage(2)}
                    className={`h-2.5 w-2.5 rounded-full border border-[var(--border)] ${
                      syndicateImage === 2
                        ? "bg-[var(--page-fg)]"
                        : "bg-[var(--surface)]"
                    }`}
                    aria-label="Show Syndicate image 3"
                  />
                </div>
              </div>
            </div>

            <p className="blog-readable-copy">
              เป็นจุดเริ่มต้นที่ได้เข้าร่วมงานกับทีม Syndicate ในฐานะนักพัฒนา
              นักศึกษาฝึกงานได้ทำหน้าที่เป็น Developer หลังจากที่ได้เข้ามาทำงาน
              ได้ความรู้เรื่องการเขียนโปรแกรมเป็นอย่างมาก คนในทีมคอยช่วยเหลือกัน
              ผมรู้สึกดีมาก ๆ ทุกคนเป็นกันเองและบอสใจดีมาก ๆ มีปัญหาอะไรปรึกษาเขาได้ตลอดเลย
              ผมได้เรียนรู้เรื่องการทำงานจริง ทั้งเรื่องการเขียนโปรแกรมและการทำงานเป็นทีม
              รู้สึกขอบคุณมาก ๆ ที่ได้เข้ามาทำงานกับทีม Syndicate
            </p>
          </section>

          {/* New Laptop For Work */}
          <section className="blog-readable-section space-y-5">
            <div className="border-b border-[var(--border)] pb-4">
              <h2 className="text-base font-semibold uppercase tracking-widest text-[var(--page-fg)]">
                06-22-2026
              </h2>
              <h2 className="text-sm uppercase tracking-widest text-[var(--muted)]">
                New Laptop For Work
              </h2>
            </div>

            <div className="space-y-4">
              <div className="relative overflow-hidden rounded-lg border border-[var(--border)] bg-[var(--surface-soft)]">
                <button
                  type="button"
                  onClick={openNotebookImage}
                  className="block w-full overflow-hidden text-left"
                  aria-label={`Open notebook image ${notebookImage + 1}`}
                >
                  <div
                    className="syndicate-slider flex w-[200%]"
                    style={{
                      transform: `translateX(-${notebookImage * 50}%)`,
                    }}
                  >
                    <div className="w-1/2 shrink-0">
                      <Image
                        src={notebook1}
                        alt="Notebook preview 1"
                        className="aspect-video w-full object-cover"
                        priority
                      />
                    </div>
                    <div className="w-1/2 shrink-0">
                      <Image
                        src={notebook2}
                        alt="Notebook preview 2"
                        className="aspect-video w-full object-cover"
                      />
                    </div>
                  </div>
                </button>

                <button
                  type="button"
                  onClick={() => {
                    setNotebookImage((current) =>
                      current === 0 ? 1 : current - 1,
                    );
                  }}
                  className="absolute left-3 top-1/2 z-10 grid h-9 w-9 -translate-y-1/2 place-items-center rounded-md border border-[var(--border)] bg-[var(--surface)]/85 text-[var(--page-fg)] backdrop-blur transition-colors hover:border-[var(--border-strong)] hover:bg-[var(--surface-hover)]"
                  aria-label="Previous notebook image"
                >
                  ‹
                </button>

                <button
                  type="button"
                  onClick={() => {
                    setNotebookImage((current) =>
                      current === 1 ? 0 : current + 1,
                    );
                  }}
                  className="absolute right-3 top-1/2 z-10 grid h-9 w-9 -translate-y-1/2 place-items-center rounded-md border border-[var(--border)] bg-[var(--surface)]/85 text-[var(--page-fg)] backdrop-blur transition-colors hover:border-[var(--border-strong)] hover:bg-[var(--surface-hover)]"
                  aria-label="Next notebook image"
                >
                  ›
                </button>
              </div>

              <div className="flex items-center justify-between text-xs text-[var(--subtle)]">
                <span>
                  {notebookImage + 1} / 2
                </span>

                <div className="flex gap-2">
                  <button
                    type="button"
                    onClick={() => setNotebookImage(0)}
                    className={`h-2.5 w-2.5 rounded-full border border-[var(--border)] ${
                      notebookImage === 0
                        ? "bg-[var(--page-fg)]"
                        : "bg-[var(--surface)]"
                    }`}
                    aria-label="Show notebook image 1"
                  />
                  <button
                    type="button"
                    onClick={() => setNotebookImage(1)}
                    className={`h-2.5 w-2.5 rounded-full border border-[var(--border)] ${
                      notebookImage === 1
                        ? "bg-[var(--page-fg)]"
                        : "bg-[var(--surface)]"
                    }`}
                    aria-label="Show notebook image 2"
                  />
                </div>
              </div>
            </div>

            <p className="blog-readable-copy">
              ได้ซื้อโน๊ตบุ๊คแล็ปท็อปเอามาใช้งานโดยเฉพาะแลกกับการที่ขายคอมพิวเตอร์ไป
              เพราะอยากที่จะโฟกัสกับการเขียนโปรแกรมเป็นหลักและความสะดวกสบาย ๆ
              รุ่นที่ซื้อคือ Asus Vivobook 16 แต่เป็นของมือสองแต่สภาพที่โอเครับได้
              และราคาก็ไม่แพง จริง ๆ อยากลองซื้อ Macbook แต่ไม่อยากใช้ของแพง
              เพราะมีงบแล้วชีวิตการงานดี ก็คงซื้อมาใช้ทำงาน
            </p>
          </section>

          {/* birthday */}
          <section className="blog-readable-section space-y-5">
            <div className="border-b border-[var(--border)] pb-4">
              <h2 className="text-base font-semibold uppercase tracking-widest text-[var(--page-fg)]">
                03-16-2026
              </h2>
              <h2 className="text-sm uppercase tracking-widest text-[var(--muted)]">
                My Birthday & My Friends
              </h2>
            </div>

            <div className="space-y-4">
              <div className="relative overflow-hidden rounded-lg border border-[var(--border)] bg-[var(--surface-soft)]">
                <button
                  type="button"
                  onClick={openBirthdayImage}
                  className="block w-full overflow-hidden text-left"
                  aria-label={`Open birthday image ${birthdayImage + 1}`}
                >
                  <div
                    className="syndicate-slider flex w-[200%]"
                    style={{
                      transform: `translateX(-${birthdayImage * 50}%)`,
                    }}
                  >
                    <div className="w-1/2 shrink-0">
                      <Image
                        src={birth1}
                        alt="Birthday preview 1"
                        className="aspect-video w-full object-cover"
                      />
                    </div>
                    <div className="w-1/2 shrink-0">
                      <Image
                        src={birth2}
                        alt="Birthday preview 2"
                        className="aspect-video w-full object-cover"
                      />
                    </div>
                  </div>
                </button>

                <button
                  type="button"
                  onClick={() => {
                    setBirthdayImage((current) =>
                      current === 0 ? 1 : current - 1,
                    );
                  }}
                  className="absolute left-3 top-1/2 z-10 grid h-9 w-9 -translate-y-1/2 place-items-center rounded-md border border-[var(--border)] bg-[var(--surface)]/85 text-[var(--page-fg)] backdrop-blur transition-colors hover:border-[var(--border-strong)] hover:bg-[var(--surface-hover)]"
                  aria-label="Previous birthday image"
                >
                  ‹
                </button>

                <button
                  type="button"
                  onClick={() => {
                    setBirthdayImage((current) =>
                      current === 1 ? 0 : current + 1,
                    );
                  }}
                  className="absolute right-3 top-1/2 z-10 grid h-9 w-9 -translate-y-1/2 place-items-center rounded-md border border-[var(--border)] bg-[var(--surface)]/85 text-[var(--page-fg)] backdrop-blur transition-colors hover:border-[var(--border-strong)] hover:bg-[var(--surface-hover)]"
                  aria-label="Next birthday image"
                >
                  ›
                </button>
              </div>

              <div className="flex items-center justify-between text-xs text-[var(--subtle)]">
                <span>
                  {birthdayImage + 1} / 2
                </span>

                <div className="flex gap-2">
                  <button
                    type="button"
                    onClick={() => setBirthdayImage(0)}
                    className={`h-2.5 w-2.5 rounded-full border border-[var(--border)] ${
                      birthdayImage === 0
                        ? "bg-[var(--page-fg)]"
                        : "bg-[var(--surface)]"
                    }`}
                    aria-label="Show birthday image 1"
                  />
                  <button
                    type="button"
                    onClick={() => setBirthdayImage(1)}
                    className={`h-2.5 w-2.5 rounded-full border border-[var(--border)] ${
                      birthdayImage === 1
                        ? "bg-[var(--page-fg)]"
                        : "bg-[var(--surface)]"
                    }`}
                    aria-label="Show birthday image 2"
                  />
                </div>
              </div>
            </div>

            <p className="blog-readable-copy">
              The best day of my life.
            </p>
          </section>
        </main>

        <Footer />
      </div>

      {isSyndicateOpen && (
        <div
          className={`syndicate-lightbox fixed inset-0 z-[60] flex items-center justify-center bg-black/85 p-4 backdrop-blur-md ${
            isSyndicateClosing
              ? "syndicate-lightbox-exit"
              : "syndicate-lightbox-enter"
          }`}
          onClick={closeSyndicateImage}
        >
          <button
            type="button"
            onClick={(event) => {
              event.stopPropagation();
              closeSyndicateImage();
            }}
            className="absolute right-4 top-4 z-20 grid h-10 w-10 place-items-center rounded-md border border-white/20 bg-black/60 text-white transition-colors hover:bg-black"
            aria-label="Close full image"
          >
            ✕
          </button>

          <button
            type="button"
            onClick={(event) => {
              event.stopPropagation();
              setSyndicateImage((current) =>
                current === 0 ? 2 : current - 1,
              );
            }}
            className="absolute left-4 top-1/2 z-20 grid h-10 w-10 -translate-y-1/2 place-items-center rounded-md border border-white/20 bg-black/60 text-white transition-colors hover:bg-black"
            aria-label="Previous full Syndicate image"
          >
            ‹
          </button>

          <div
            className="syndicate-fullscreen-image relative w-full max-w-5xl overflow-hidden"
            onClick={(event) => event.stopPropagation()}
          >
            <div
              className="syndicate-slider flex w-[300%]"
              style={{
                transform: `translateX(-${syndicateImage * 33.333333}%)`,
              }}
            >
              <div className="flex w-1/3 shrink-0 justify-center">
                <Image
                  src={syndicate1}
                  alt="Syndicate full preview 1"
                  className="max-h-[84vh] w-auto object-contain"
                />
              </div>
              <div className="flex w-1/3 shrink-0 justify-center">
                <Image
                  src={syndicate2}
                  alt="Syndicate full preview 2"
                  className="max-h-[84vh] w-auto object-contain"
                />
              </div>
              <div className="flex w-1/3 shrink-0 justify-center">
                <Image
                  src={syndicate3}
                  alt="Syndicate full preview 3"
                  className="max-h-[84vh] w-auto object-contain"
                />
              </div>
            </div>
          </div>

          <button
            type="button"
            onClick={(event) => {
              event.stopPropagation();
              setSyndicateImage((current) =>
                current === 2 ? 0 : current + 1,
              );
            }}
            className="absolute right-4 top-1/2 z-20 grid h-10 w-10 -translate-y-1/2 place-items-center rounded-md border border-white/20 bg-black/60 text-white transition-colors hover:bg-black"
            aria-label="Next full Syndicate image"
          >
            ›
          </button>
        </div>
      )}

      {isNotebookOpen && (
        <div
          className={`syndicate-lightbox fixed inset-0 z-[60] flex items-center justify-center bg-black/85 p-4 backdrop-blur-md ${
            isNotebookClosing
              ? "syndicate-lightbox-exit"
              : "syndicate-lightbox-enter"
          }`}
          onClick={closeNotebookImage}
        >
          <button
            type="button"
            onClick={(event) => {
              event.stopPropagation();
              closeNotebookImage();
            }}
            className="absolute right-4 top-4 z-20 grid h-10 w-10 place-items-center rounded-md border border-white/20 bg-black/60 text-white transition-colors hover:bg-black"
            aria-label="Close notebook full image"
          >
            ✕
          </button>

          <button
            type="button"
            onClick={(event) => {
              event.stopPropagation();
              setNotebookImage((current) =>
                current === 0 ? 1 : current - 1,
              );
            }}
            className="absolute left-4 top-1/2 z-20 grid h-10 w-10 -translate-y-1/2 place-items-center rounded-md border border-white/20 bg-black/60 text-white transition-colors hover:bg-black"
            aria-label="Previous notebook full image"
          >
            ‹
          </button>

          <div
            className="syndicate-fullscreen-image relative w-full max-w-5xl overflow-hidden"
            onClick={(event) => event.stopPropagation()}
          >
            <div
              className="syndicate-slider flex w-[200%]"
              style={{
                transform: `translateX(-${notebookImage * 50}%)`,
              }}
            >
              <div className="flex w-1/2 shrink-0 justify-center">
                <Image
                  src={notebook1}
                  alt="Notebook full preview 1"
                  className="max-h-[84vh] w-auto object-contain"
                />
              </div>
              <div className="flex w-1/2 shrink-0 justify-center">
                <Image
                  src={notebook2}
                  alt="Notebook full preview 2"
                  className="max-h-[84vh] w-auto object-contain"
                />
              </div>
            </div>
          </div>

          <button
            type="button"
            onClick={(event) => {
              event.stopPropagation();
              setNotebookImage((current) =>
                current === 1 ? 0 : current + 1,
              );
            }}
            className="absolute right-4 top-1/2 z-20 grid h-10 w-10 -translate-y-1/2 place-items-center rounded-md border border-white/20 bg-black/60 text-white transition-colors hover:bg-black"
            aria-label="Next notebook full image"
          >
            ›
          </button>
        </div>
      )}

      {isBirthdayOpen && (
        <div
          className={`syndicate-lightbox fixed inset-0 z-[60] flex items-center justify-center bg-black/85 p-4 backdrop-blur-md ${
            isBirthdayClosing
              ? "syndicate-lightbox-exit"
              : "syndicate-lightbox-enter"
          }`}
          onClick={closeBirthdayImage}
        >
          <button
            type="button"
            onClick={(event) => {
              event.stopPropagation();
              closeBirthdayImage();
            }}
            className="absolute right-4 top-4 z-20 grid h-10 w-10 place-items-center rounded-md border border-white/20 bg-black/60 text-white transition-colors hover:bg-black"
            aria-label="Close birthday full image"
          >
            ✕
          </button>

          <button
            type="button"
            onClick={(event) => {
              event.stopPropagation();
              setBirthdayImage((current) =>
                current === 0 ? 1 : current - 1,
              );
            }}
            className="absolute left-4 top-1/2 z-20 grid h-10 w-10 -translate-y-1/2 place-items-center rounded-md border border-white/20 bg-black/60 text-white transition-colors hover:bg-black"
            aria-label="Previous birthday full image"
          >
            ‹
          </button>

          <div
            className="syndicate-fullscreen-image relative w-full max-w-5xl overflow-hidden"
            onClick={(event) => event.stopPropagation()}
          >
            <div
              className="syndicate-slider flex w-[200%]"
              style={{
                transform: `translateX(-${birthdayImage * 50}%)`,
              }}
            >
              <div className="flex w-1/2 shrink-0 justify-center">
                <Image
                  src={birth1}
                  alt="Birthday full preview 1"
                  className="max-h-[84vh] w-auto object-contain"
                />
              </div>
              <div className="flex w-1/2 shrink-0 justify-center">
                <Image
                  src={birth2}
                  alt="Birthday full preview 2"
                  className="max-h-[84vh] w-auto object-contain"
                />
              </div>
            </div>
          </div>

          <button
            type="button"
            onClick={(event) => {
              event.stopPropagation();
              setBirthdayImage((current) =>
                current === 1 ? 0 : current + 1,
              );
            }}
            className="absolute right-4 top-1/2 z-20 grid h-10 w-10 -translate-y-1/2 place-items-center rounded-md border border-white/20 bg-black/60 text-white transition-colors hover:bg-black"
            aria-label="Next birthday full image"
          >
            ›
          </button>
        </div>
      )}
    </div>
  );
}
