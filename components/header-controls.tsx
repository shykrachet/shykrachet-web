"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import enFlag from "@/app/assets/flag-lang/en.png";
import thFlag from "@/app/assets/flag-lang/th.png";
import {
  Language,
  usePreferences,
} from "@/components/preferences-provider";

const languageOptions = [
  { value: "en", label: "English", shortLabel: "EN", flag: enFlag },
  { value: "th", label: "ไทย", shortLabel: "TH", flag: thFlag },
] satisfies { value: Language; label: string; shortLabel: string; flag: typeof enFlag }[];

export default function HeaderControls() {
  const { language, setLanguage, theme, t, toggleTheme } = usePreferences();
  const [isLanguageOpen, setIsLanguageOpen] = useState(false);
  const [isLanguageChanging, setIsLanguageChanging] = useState(false);
  const languageChangeTimeout = useRef<number | null>(null);
  const nextTheme = theme === "dark" ? t.controls.light : t.controls.dark;
  const currentLanguage = languageOptions.find((option) => option.value === language);

  const selectLanguage = (value: Language) => {
    if (value === language) {
      setIsLanguageOpen(false);
      return;
    }

    if (languageChangeTimeout.current) {
      window.clearTimeout(languageChangeTimeout.current);
    }

    setIsLanguageChanging(true);
    languageChangeTimeout.current = window.setTimeout(() => {
      setLanguage(value);
      setIsLanguageOpen(false);

      languageChangeTimeout.current = window.setTimeout(() => {
        setIsLanguageChanging(false);
        languageChangeTimeout.current = null;
      }, 180);
    }, 140);
  };

  useEffect(() => {
    return () => {
      if (languageChangeTimeout.current) {
        window.clearTimeout(languageChangeTimeout.current);
      }
    };
  }, []);

  return (
    <div className="flex shrink-0 items-center gap-2">
      <button
        type="button"
        onClick={toggleTheme}
        role="switch"
        aria-checked={theme === "light"}
        className="theme-switch relative h-8 w-14 rounded-full border border-[var(--border)] bg-[var(--surface)] hover:border-[var(--border-strong)] hover:bg-[var(--surface-hover)]"
        aria-label={`${t.controls.theme}: ${nextTheme}`}
        title={`${t.controls.theme}: ${nextTheme}`}
      >
        <span
          className={`theme-switch-thumb absolute left-1 top-1 grid h-6 w-6 place-items-center rounded-full ${
            theme === "light"
              ? "translate-x-6 bg-neutral-900 text-white"
              : "bg-neutral-200 text-neutral-500"
          }`}
          aria-hidden="true"
        >
          <svg
            className={`absolute h-4 w-4 transition-opacity duration-500 ease-in-out ${
              theme === "light" ? "opacity-100" : "opacity-0"
            }`}
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <circle cx="12" cy="12" r="4" />
            <path d="M12 2v2" />
            <path d="M12 20v2" />
            <path d="m4.93 4.93 1.41 1.41" />
            <path d="m17.66 17.66 1.41 1.41" />
            <path d="M2 12h2" />
            <path d="M20 12h2" />
            <path d="m6.34 17.66-1.41 1.41" />
            <path d="m19.07 4.93-1.41 1.41" />
          </svg>

          <svg
            className={`absolute h-4 w-4 transition-opacity duration-500 ease-in-out ${
              theme === "dark" ? "opacity-100" : "opacity-0"
            }`}
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M21 14.4A8.62 8.62 0 0 1 9.6 3a7.7 7.7 0 1 0 11.4 11.4Z" />
          </svg>
        </span>
      </button>

      <div className="relative w-[108px]">
        <button
          type="button"
          onClick={() => setIsLanguageOpen((current) => !current)}
          className={`language-control flex h-9 w-full items-center justify-between gap-2 rounded-md border border-[var(--border)] bg-[var(--surface)] px-2.5 text-[11px] font-semibold tracking-widest text-[var(--muted)] transition-all duration-200 ease-out hover:border-[var(--border-strong)] hover:bg-[var(--surface-hover)] hover:text-[var(--page-fg)] ${
            isLanguageChanging ? "language-control-fading" : ""
          }`}
          aria-label={t.controls.language}
          aria-expanded={isLanguageOpen}
          title={t.controls.language}
        >
          <Image
            src={currentLanguage?.flag ?? enFlag}
            alt={currentLanguage?.label ?? "English"}
            width={20}
            height={20}
            className="h-5 w-5 rounded-full object-cover"
          />
          <span className={language === "th" ? "font-thai" : ""}>
            {currentLanguage?.shortLabel}
          </span>
          <svg
            className={`h-3 w-3 transition-transform duration-200 ${
              isLanguageOpen ? "rotate-180" : ""
            }`}
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </button>

        {isLanguageOpen && (
          <div
            className={`language-dropdown absolute left-0 top-full z-50 mt-3 w-full rounded-lg border border-[var(--border)] bg-[var(--surface)] p-1.5 shadow-2xl ${
              isLanguageChanging ? "language-dropdown-fading" : ""
            }`}
          >
            {languageOptions.map((option) => (
              <button
                key={option.value}
                type="button"
                onClick={() => selectLanguage(option.value)}
                className={`language-option flex w-full items-center gap-2 rounded px-2.5 py-2 text-left text-xs font-medium hover:bg-[var(--surface-hover)] hover:text-[var(--page-fg)] ${
                  language === option.value
                    ? "bg-[var(--surface-hover)] text-[var(--page-fg)]"
                    : "text-[var(--muted)]"
                }`}
              >
                <Image
                  src={option.flag}
                  alt={option.label}
                  width={20}
                  height={20}
                  className="h-5 w-5 rounded-full object-cover"
                />
                <span className={option.value === "th" ? "font-thai" : ""}>
                  {option.label}
                </span>
              </button>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
