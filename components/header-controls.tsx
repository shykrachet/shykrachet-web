"use client";

import { useEffect, useRef, useState } from "react";
import { usePreferences } from "@/components/preferences-provider";

const localTimeFormatter = new Intl.DateTimeFormat("en-GB", {
  hour: "2-digit",
  minute: "2-digit",
  second: "2-digit",
  hour12: false,
});

function getLocalTime() {
  return localTimeFormatter.format(new Date());
}

export default function HeaderControls() {
  const { theme, toggleTheme } = usePreferences();
  const [isThemeSwitching, setIsThemeSwitching] = useState(false);
  const [localTime, setLocalTime] = useState("");
  const themeSwitchTimeout = useRef<number | null>(null);
  const nextTheme = theme === "dark" ? "Light" : "Dark";

  const handleThemeToggle = () => {
    if (themeSwitchTimeout.current) {
      window.clearTimeout(themeSwitchTimeout.current);
    }

    setIsThemeSwitching(false);
    toggleTheme();

    window.requestAnimationFrame(() => {
      setIsThemeSwitching(true);
    });

    themeSwitchTimeout.current = window.setTimeout(() => {
      setIsThemeSwitching(false);
      themeSwitchTimeout.current = null;
    }, 520);
  };

  useEffect(() => {
    const updateLocalTime = () => {
      setLocalTime(getLocalTime());
    };
    const firstTick = window.setTimeout(updateLocalTime, 0);
    const timeInterval = window.setInterval(() => {
      updateLocalTime();
    }, 1000);

    return () => {
      window.clearTimeout(firstTick);
      window.clearInterval(timeInterval);

      if (themeSwitchTimeout.current) {
        window.clearTimeout(themeSwitchTimeout.current);
      }
    };
  }, []);

  return (
    <div className="flex shrink-0 items-center gap-2">
      <time
        className="site-clock"
        dateTime={localTime}
        aria-label={`Local time ${localTime}`}
        title="Local time"
      >
        {localTime || "--:--:--"}
      </time>
      <button
        type="button"
        onClick={handleThemeToggle}
        role="switch"
        aria-checked={theme === "light"}
        className={`theme-switch relative h-8 w-14 rounded-full border border-[var(--border)] bg-[var(--surface)] hover:border-[var(--border-strong)] hover:bg-[var(--surface-hover)] ${
          isThemeSwitching ? "theme-switch-active" : ""
        }`}
        aria-label={`Change theme: ${nextTheme}`}
        title={`Change theme: ${nextTheme}`}
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
            className={`theme-switch-icon absolute h-4 w-4 transition-opacity duration-500 ease-in-out ${
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
            className={`theme-switch-icon absolute h-4 w-4 transition-opacity duration-500 ease-in-out ${
              theme === "dark" ? "opacity-100" : "opacity-0"
            }`}
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M21 14.4A8.62 8.62 0 0 1 9.6 3a7.7 7.7 0 1 0 11.4 11.4Z" />
          </svg>
        </span>
      </button>
    </div>
  );
}
