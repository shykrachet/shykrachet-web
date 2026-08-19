"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import HeaderControls from "@/components/header-controls";
import { usePreferences } from "@/components/preferences-provider";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();
  const { t } = usePreferences();

  const navLinks = [
    { name: t.nav.home, href: "/" },
    { name: t.nav.aboutMe, href: "/aboutme" },
    { name: t.nav.work, href: "/work" },
  ];

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
          {navLinks.map((link) => {
            const isActive = isActiveLink(link.href);

            return (
              <div key={link.name} className="relative py-2">
                <Link
                  href={link.href}
                  aria-current={isActive ? "page" : undefined}
                  className={`header-nav-link transition-colors hover:text-[var(--page-fg)] ${
                    isActive ? "header-nav-link-active text-[var(--page-fg)]" : ""
                  }`}
                  onClick={closeMenu}
                >
                  {link.name}
                </Link>
              </div>
            );
          })}
        </nav>

        <div className="hidden md:flex">
          <HeaderControls />
        </div>

        <div className="flex w-full items-center justify-between gap-3 md:hidden">
          <button
            type="button"
            onClick={toggleMenu}
            className="grid h-9 w-9 place-items-center rounded-md border border-[var(--border)] bg-[var(--surface)] text-[var(--muted)] transition-all duration-200 ease-out hover:border-[var(--border-strong)] hover:bg-[var(--surface-hover)] hover:text-[var(--page-fg)] focus:outline-none"
            aria-label={t.controls.menu}
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

      {isMenuOpen && (
        <nav className="mt-6 flex flex-col items-start gap-6 text-xs uppercase tracking-widest text-[var(--muted)] md:hidden">
          {navLinks.map((link) => {
            const isActive = isActiveLink(link.href);

            return (
              <div key={link.name} className="flex w-full justify-start">
                <Link
                  href={link.href}
                  aria-current={isActive ? "page" : undefined}
                  onClick={closeMenu}
                  className={`header-nav-link py-2 transition-colors ${
                    isActive ? "header-nav-link-active text-[var(--page-fg)]" : ""
                  }`}
                >
                  {link.name}
                </Link>
              </div>
            );
          })}
        </nav>
      )}
    </header>
  );
}

export function Footer() {
  const { t } = usePreferences();

  return (
    <footer className="mt-auto flex w-full flex-col items-center justify-between gap-3 border-t border-[var(--border)] pb-8 pt-12 text-center text-xs text-[var(--subtle)] md:flex-row md:gap-0 md:text-left">
      <p>
        © {new Date().getFullYear()} Nattapoom Wilawan. {t.footer.rights}
      </p>
      <p>{t.footer.built}</p>
    </footer>
  );
}
