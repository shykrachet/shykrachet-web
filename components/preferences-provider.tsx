"use client";

import React, {
  createContext,
  useContext,
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useSyncExternalStore,
} from "react";
import { DEFAULT_THEME, THEME_STORAGE_KEY, type Theme } from "@/lib/theme";

const THEME_TRANSITION_MS = 520;
const PREFERENCES_CHANGE_EVENT = "portfolio-preferences-change";

interface PreferencesContextValue {
  theme: Theme;
  toggleTheme: () => void;
}

const PreferencesContext = createContext<PreferencesContextValue | null>(null);

function isTheme(value: string | null): value is Theme {
  return value === "dark" || value === "light";
}

function getStoredTheme(): Theme {
  if (typeof window === "undefined") {
    return DEFAULT_THEME;
  }

  try {
    const savedTheme = window.localStorage.getItem(THEME_STORAGE_KEY);
    return isTheme(savedTheme) ? savedTheme : DEFAULT_THEME;
  } catch {
    const appliedTheme = document.documentElement.dataset.theme ?? null;
    return isTheme(appliedTheme) ? appliedTheme : DEFAULT_THEME;
  }
}

function getServerTheme(): Theme {
  return DEFAULT_THEME;
}

function subscribeToPreferences(callback: () => void) {
  window.addEventListener(PREFERENCES_CHANGE_EVENT, callback);
  window.addEventListener("storage", callback);

  return () => {
    window.removeEventListener(PREFERENCES_CHANGE_EVENT, callback);
    window.removeEventListener("storage", callback);
  };
}

function emitPreferencesChange() {
  window.dispatchEvent(new Event(PREFERENCES_CHANGE_EVENT));
}

export function PreferencesProvider({ children }: { children: React.ReactNode }) {
  const themeTransitionTimeout = useRef<number | null>(null);
  const theme = useSyncExternalStore(
    subscribeToPreferences,
    getStoredTheme,
    getServerTheme,
  );

  const applyTheme = useCallback((nextTheme: Theme, animate = false) => {
    const root = document.documentElement;

    if (themeTransitionTimeout.current) {
      window.clearTimeout(themeTransitionTimeout.current);
    }

    if (animate) {
      root.classList.add("theme-changing");
      themeTransitionTimeout.current = window.setTimeout(() => {
        root.classList.remove("theme-changing");
        themeTransitionTimeout.current = null;
      }, THEME_TRANSITION_MS);
    }

    root.classList.remove("dark", "light");
    root.classList.add(nextTheme);
    root.dataset.theme = nextTheme;
  }, []);

  useEffect(() => {
    // Hydration starts with the server snapshot; wait for the saved preference.
    if (theme !== getStoredTheme()) return;
    applyTheme(theme);
  }, [applyTheme, theme]);

  useEffect(() => {
    return () => {
      if (themeTransitionTimeout.current) {
        window.clearTimeout(themeTransitionTimeout.current);
      }
    };
  }, []);

  const setThemePreference = useCallback(
    (nextTheme: Theme) => {
      applyTheme(nextTheme, true);
      try {
        window.localStorage.setItem(THEME_STORAGE_KEY, nextTheme);
      } catch {
        // Keep the switch usable when browser storage is unavailable.
      }
      emitPreferencesChange();
    },
    [applyTheme],
  );

  const value = useMemo(
    () => ({
      theme,
      toggleTheme: () => {
        const nextTheme = theme === "dark" ? "light" : "dark";
        setThemePreference(nextTheme);
      },
    }),
    [setThemePreference, theme],
  );

  return (
    <PreferencesContext.Provider value={value}>
      {children}
    </PreferencesContext.Provider>
  );
}

export function usePreferences() {
  const context = useContext(PreferencesContext);

  if (!context) {
    throw new Error("usePreferences must be used within PreferencesProvider");
  }

  return context;
}
