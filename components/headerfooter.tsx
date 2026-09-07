"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import HeaderControls from "@/components/header-controls";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  const toggleMenu = () => setIsMenuOpen((current) => !current);

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const isActiveLink = (href: string) => {
    if (href === "/") {
      return pathname === href;
    }

    return pathname.startsWith(href);
  };

  return (
    <header className="relative z-50 w-full border-b border-[var(--border)] pb-6">
      <div className="flex items-center justify-between gap-4">
        <nav className="hidden items-center justify-start gap-6 text-xs uppercase tracking-widest text-[var(--muted)] md:flex">
          <div className="relative py-2">
            <Link
              href="/"
              aria-current={isActiveLink("/") ? "page" : undefined}
              className={`header-nav-link transition-colors hover:text-[var(--page-fg)] ${
                isActiveLink("/") ? "header-nav-link-active text-[var(--page-fg)]" : ""
              }`}
              onClick={closeMenu}
            >
              Home
            </Link>
          </div>

          <div className="relative py-2">
            <Link
              href="/aboutme"
              aria-current={isActiveLink("/aboutme") ? "page" : undefined}
              className={`header-nav-link transition-colors hover:text-[var(--page-fg)] ${
                isActiveLink("/aboutme") ? "header-nav-link-active text-[var(--page-fg)]" : ""
              }`}
              onClick={closeMenu}
            >
              About Me
            </Link>
          </div>

          <div className="relative py-2">
            <Link
              href="/work"
              aria-current={isActiveLink("/work") ? "page" : undefined}
              className={`header-nav-link transition-colors hover:text-[var(--page-fg)] ${
                isActiveLink("/work") ? "header-nav-link-active text-[var(--page-fg)]" : ""
              }`}
              onClick={closeMenu}
            >
              Work
            </Link>
          </div>

          <div className="relative py-2">
            <Link
              href="/blog"
              aria-current={isActiveLink("/blog") ? "page" : undefined}
              className={`header-nav-link transition-colors hover:text-[var(--page-fg)] ${
                isActiveLink("/blog") ? "header-nav-link-active text-[var(--page-fg)]" : ""
              }`}
              onClick={closeMenu}
            >
              Blog
            </Link>
          </div>
        </nav>

        <div className="hidden md:flex">
          <HeaderControls />
        </div>

        <div className="flex w-full items-center justify-between gap-3 md:hidden">
          <button
            type="button"
            onClick={toggleMenu}
            className={`mobile-menu-toggle grid h-9 w-9 place-items-center rounded-md border border-[var(--border)] bg-[var(--surface)] text-[var(--muted)] transition-all duration-200 ease-out hover:border-[var(--border-strong)] hover:bg-[var(--surface-hover)] hover:text-[var(--page-fg)] focus:outline-none ${
              isMenuOpen ? "mobile-menu-toggle-active" : ""
            }`}
            aria-label="Toggle menu"
            aria-expanded={isMenuOpen}
            aria-controls="mobile-navigation"
          >
            <svg
              className="h-5 w-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
          <HeaderControls />
        </div>
      </div>

      <nav
        id="mobile-navigation"
        className={`mobile-nav-menu mt-4 overflow-hidden md:hidden ${
          isMenuOpen ? "mobile-nav-menu-open" : ""
        }`}
      >
        <div className="mobile-nav-panel flex flex-col gap-2 rounded-lg border border-[var(--border)] bg-[var(--surface-soft)] p-2 text-xs uppercase tracking-widest text-[var(--muted)] shadow-2xl backdrop-blur-xl">
          <div className="mobile-nav-item">
            <Link
              href="/"
              aria-current={isActiveLink("/") ? "page" : undefined}
              onClick={closeMenu}
              className={`mobile-nav-link ${
                isActiveLink("/") ? "header-nav-link-active text-[var(--page-fg)]" : ""
              }`}
            >
              <span className="mobile-nav-icon" aria-hidden="true">
                <svg viewBox="0 0 24 24" fill="none">
                  <path d="M4 11.2 12 4l8 7.2" />
                  <path d="M6.5 10.5V20h11v-9.5" />
                  <path d="M10 20v-5h4v5" />
                </svg>
              </span>
              <span>Home</span>
            </Link>
          </div>

          <div className="mobile-nav-item">
            <Link
              href="/aboutme"
              aria-current={isActiveLink("/aboutme") ? "page" : undefined}
              onClick={closeMenu}
              className={`mobile-nav-link ${
                isActiveLink("/aboutme") ? "header-nav-link-active text-[var(--page-fg)]" : ""
              }`}
            >
              <span className="mobile-nav-icon" aria-hidden="true">
                <svg viewBox="0 0 24 24" fill="none">
                  <path d="M12 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8Z" />
                  <path d="M4.5 20a7.5 7.5 0 0 1 15 0" />
                </svg>
              </span>
              <span>About Me</span>
            </Link>
          </div>

          <div className="mobile-nav-item">
            <Link
              href="/work"
              aria-current={isActiveLink("/work") ? "page" : undefined}
              onClick={closeMenu}
              className={`mobile-nav-link ${
                isActiveLink("/work") ? "header-nav-link-active text-[var(--page-fg)]" : ""
              }`}
            >
              <span className="mobile-nav-icon" aria-hidden="true">
                <svg viewBox="0 0 24 24" fill="none">
                  <path d="M9 6V5a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v1" />
                  <path d="M4 8h16v10a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V8Z" />
                  <path d="M4 12h16" />
                </svg>
              </span>
              <span>Work</span>
            </Link>
          </div>

          <div className="mobile-nav-item">
            <Link
              href="/blog"
              aria-current={isActiveLink("/blog") ? "page" : undefined}
              onClick={closeMenu}
              className={`mobile-nav-link ${
                isActiveLink("/blog") ? "header-nav-link-active text-[var(--page-fg)]" : ""
              }`}
            >
              <span className="mobile-nav-icon" aria-hidden="true">
                <svg viewBox="0 0 24 24" fill="none">
                  <path d="M7 4h10a2 2 0 0 1 2 2v14l-3-2-3 2-3-2-3 2V6a2 2 0 0 1 2-2Z" />
                  <path d="M9.5 8.5h5" />
                  <path d="M9.5 12h4" />
                </svg>
              </span>
              <span>Blog</span>
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
}

export function Footer() {
  return (
    <footer className="mt-auto flex w-full flex-col items-center justify-between gap-3 border-t border-[var(--border)] pb-8 pt-12 text-center text-xs text-[var(--subtle)] md:flex-row md:gap-0 md:text-left">
      <p>
        © {new Date().getFullYear()} Nattapoom Wilawan. All rights reserved.
      </p>
      <p>Built with Next.js</p>
    </footer>
  );
}
