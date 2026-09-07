"use client";

import Image, { type StaticImageData } from "next/image";
import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";

type BlogImage = {
  src: StaticImageData;
  alt: string;
  fullAlt: string;
};

type BlogImageViewerProps = {
  images: readonly BlogImage[];
  label: string;
  priority?: boolean;
};

export default function BlogImageViewer({
  images,
  label,
  priority = false,
}: BlogImageViewerProps) {
  const [currentImage, setCurrentImage] = useState(0);
  const [isOpen, setIsOpen] = useState(false);
  const [isClosing, setIsClosing] = useState(false);
  const closeTimer = useRef<number | null>(null);

  const imageCount = images.length;
  const imageWidth = 100 / imageCount;
  const hasMultipleImages = imageCount > 1;

  const showPreviousImage = () => {
    setCurrentImage((current) =>
      current === 0 ? imageCount - 1 : current - 1,
    );
  };

  const showNextImage = () => {
    setCurrentImage((current) =>
      current === imageCount - 1 ? 0 : current + 1,
    );
  };

  const openImage = () => {
    if (closeTimer.current !== null) {
      window.clearTimeout(closeTimer.current);
      closeTimer.current = null;
    }

    setIsClosing(false);
    setIsOpen(true);
  };

  const closeImage = () => {
    if (closeTimer.current !== null) {
      window.clearTimeout(closeTimer.current);
    }

    setIsClosing(true);
    closeTimer.current = window.setTimeout(() => {
      setIsOpen(false);
      setIsClosing(false);
      closeTimer.current = null;
    }, 220);
  };

  useEffect(
    () => () => {
      if (closeTimer.current !== null) {
        window.clearTimeout(closeTimer.current);
      }
    },
    [],
  );

  const sliderStyle = {
    width: `${imageCount * 100}%`,
    transform: `translateX(-${currentImage * imageWidth}%)`,
  };

  return (
    <>
      <div className="space-y-4">
        <div className="relative overflow-hidden rounded-lg border border-[var(--border)] bg-[var(--surface-soft)]">
          <button
            type="button"
            onClick={openImage}
            className="block w-full overflow-hidden text-left"
            aria-label={`Open ${label} image ${currentImage + 1}`}
          >
            <div className="syndicate-slider flex" style={sliderStyle}>
              {images.map((image, index) => (
                <div
                  key={image.alt}
                  className="shrink-0"
                  style={{ width: `${imageWidth}%` }}
                >
                  <Image
                    src={image.src}
                    alt={image.alt}
                    className="aspect-video w-full object-cover"
                    priority={priority && index === 0}
                  />
                </div>
              ))}
            </div>
          </button>

          {hasMultipleImages && (
            <>
              <button
                type="button"
                onClick={showPreviousImage}
                className="absolute left-3 top-1/2 z-10 grid h-9 w-9 -translate-y-1/2 place-items-center rounded-md border border-[var(--border)] bg-[var(--surface)]/85 text-[var(--page-fg)] backdrop-blur transition-colors hover:border-[var(--border-strong)] hover:bg-[var(--surface-hover)]"
                aria-label={`Previous ${label} image`}
              >
                ‹
              </button>

              <button
                type="button"
                onClick={showNextImage}
                className="absolute right-3 top-1/2 z-10 grid h-9 w-9 -translate-y-1/2 place-items-center rounded-md border border-[var(--border)] bg-[var(--surface)]/85 text-[var(--page-fg)] backdrop-blur transition-colors hover:border-[var(--border-strong)] hover:bg-[var(--surface-hover)]"
                aria-label={`Next ${label} image`}
              >
                ›
              </button>
            </>
          )}
        </div>

        {hasMultipleImages && (
          <div className="flex items-center justify-between text-xs text-[var(--subtle)]">
            <span>
              {currentImage + 1} / {imageCount}
            </span>

            <div className="flex gap-2">
              {images.map((image, index) => (
                <button
                  key={image.fullAlt}
                  type="button"
                  onClick={() => setCurrentImage(index)}
                  className={`h-2.5 w-2.5 rounded-full border border-[var(--border)] ${
                    currentImage === index
                      ? "bg-[var(--page-fg)]"
                      : "bg-[var(--surface)]"
                  }`}
                  aria-label={`Show ${label} image ${index + 1}`}
                />
              ))}
            </div>
          </div>
        )}
      </div>

      {isOpen &&
        createPortal(
          <div
            className={`syndicate-lightbox fixed inset-0 z-[60] flex items-center justify-center bg-black/85 p-4 backdrop-blur-md ${
              isClosing
                ? "syndicate-lightbox-exit"
                : "syndicate-lightbox-enter"
            }`}
            onClick={closeImage}
          >
            <button
              type="button"
              onClick={(event) => {
                event.stopPropagation();
                closeImage();
              }}
              className="absolute right-4 top-4 z-20 grid h-10 w-10 place-items-center rounded-md border border-white/20 bg-black/60 text-white transition-colors hover:bg-black"
              aria-label={`Close ${label} full image`}
            >
              ✕
            </button>

            {hasMultipleImages && (
              <button
                type="button"
                onClick={(event) => {
                  event.stopPropagation();
                  showPreviousImage();
                }}
                className="absolute left-4 top-1/2 z-20 grid h-10 w-10 -translate-y-1/2 place-items-center rounded-md border border-white/20 bg-black/60 text-white transition-colors hover:bg-black"
                aria-label={`Previous ${label} full image`}
              >
                ‹
              </button>
            )}

            <div
              className="syndicate-fullscreen-image relative w-full max-w-5xl overflow-hidden"
              onClick={(event) => event.stopPropagation()}
            >
              <div className="syndicate-slider flex" style={sliderStyle}>
                {images.map((image) => (
                  <div
                    key={image.fullAlt}
                    className="flex shrink-0 justify-center"
                    style={{ width: `${imageWidth}%` }}
                  >
                    <Image
                      src={image.src}
                      alt={image.fullAlt}
                      className="max-h-[84vh] w-auto object-contain"
                    />
                  </div>
                ))}
              </div>
            </div>

            {hasMultipleImages && (
              <button
                type="button"
                onClick={(event) => {
                  event.stopPropagation();
                  showNextImage();
                }}
                className="absolute right-4 top-1/2 z-20 grid h-10 w-10 -translate-y-1/2 place-items-center rounded-md border border-white/20 bg-black/60 text-white transition-colors hover:bg-black"
                aria-label={`Next ${label} full image`}
              >
                ›
              </button>
            )}
          </div>,
          document.body,
        )}
    </>
  );
}
