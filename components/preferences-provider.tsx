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

type Theme = "dark" | "light";
export type Language = "en" | "th";

const STORAGE_KEYS = {
  theme: "portfolio-theme",
  language: "portfolio-language",
};

const DEFAULT_THEME: Theme = "dark";
const DEFAULT_LANGUAGE: Language = "en";
const THEME_TRANSITION_MS = 520;
const PREFERENCES_CHANGE_EVENT = "portfolio-preferences-change";

const dictionaries = {
  en: {
    nav: {
      home: "Home",
      about: "About",
      aboutMe: "About Me",
      work: "Work",
    },
    controls: {
      theme: "Change theme",
      language: "Change language",
      menu: "Toggle menu",
      dark: "Dark",
      light: "Light",
    },
    home: {
      role: "Full-Stack Developer",
      intro:
        "Hello! I'm Nattapoom Wilawan, a passionate Front-End Developer. I am actively practicing and improving my coding skills, with a keen interest in modern technologies. I enjoy creating user-friendly applications and continuously learning to enhance my craft.",
      contact: "Contact Me",
      github: "GitHub",
      timelines: "Timelines",
      showMorePrefix: "Show More",
      showMoreSuffix: "More",
      modalTitle: "Contact Me",
      closeContact: "Close contact dialog",
      copied: "Copied!",
      lineId: "LINE ID",
    },
    work: {
      focusTitle: "Current Focus & Goals",
      focusDescription: "What I am currently focusing on and aiming to achieve",
      osuTitle: "osu!server",
      osuDescription:
        "I'm really into playing osu!, so I've always wanted to host my own server. It's a dream of mine and something I want to try at least once, mostly just to learn how to manage a server. But well, I don't have the budget for it right now, lol.",
      foodTitle: "Food Order KMUTNB",
      foodDescription:
        "I've set a new goal for myself: I want to rebuild my previous university capstone project so it can be practically implemented on campus. The project is a food ordering system for the university cafeteria.",
      timelinesTitle: "Timelines",
      timelinesDescription: "Here is a breakdown of my work history and experience",
    },
    about: {
      title: "About Me",
      paragraphOne:
        "Hello! I'm Nattapoom Wilawan, also known online as haerinforever or kaiyang007. I am currently a Business Computer student at the Faculty of Business Administration, King Mongkut's University of Technology North Bangkok (KMUTNB), Rayong Campus.",
      paragraphTwo:
        "Currently, I am practicing web programming, web design for my future career, and graphic design. To be honest, I am a massive gamer and used to play non-stop. However, I have recently realized the importance of my future. I am now fully committed to continually practicing, developing my skills, and learning everything I can to grow.",
      skillsTitle: "Skills & Tools",
      photoAlt: "Profile Picture",
    },
    footer: {
      rights: "All rights reserved.",
      built: "Built with Next.js & Tailwind CSS",
    },
  },
  th: {
    nav: {
      home: "หน้าแรก",
      about: "เกี่ยวกับ",
      aboutMe: "เกี่ยวกับฉัน",
      work: "ผลงาน",
    },
    controls: {
      theme: "เปลี่ยนธีม",
      language: "เปลี่ยนภาษา",
      menu: "เปิดปิดเมนู",
      dark: "มืด",
      light: "สว่าง",
    },
    home: {
      role: "Full-Stack Developer ",
      intro:
        "นาย ณัฐภูมิ วิลาวรรณ เป็น Full-Stack Developer ปัจจุบันกำลังฝึกเขียนโปรแกรมและออกแบบระบบ และเป็นนักออกแบบกราฟิกดีไซน์",
      contact: "ช่องทางติดต่อ",
      github: "GitHub",
      timelines: "ไทม์ไลน์",
      showMorePrefix: "ดูเพิ่มเติม",
      showMoreSuffix: "รายการ",
      modalTitle: "ลิ้งติดต่อ",
      closeContact: "ปิดหน้าต่างติดต่อ",
      copied: "คัดลอกแล้ว!",
      lineId: "ไอดีไลน์",
    },
    work: {
      focusTitle: "สิ่งที่กำลังโฟกัสและเป้าหมาย",
      focusDescription: "สิ่งที่ผมกำลังให้ความสำคัญและตั้งใจทำให้สำเร็จ",
      osuTitle: "osu!server",
      osuDescription:
        "ผมชอบเล่น osu! มากๆ เลยอยากลองโฮสต์เซิร์ฟเวอร์ของตัวเองสักครั้ง เป็นความฝันเล็ก ๆ และเป็นสิ่งที่อยากลองเพื่อเรียนรู้การจัดการเซิร์ฟเวอร์ แต่ตอนนี้งบยังไม่พร้อมที่จะทำเท่าไร อดไป",
      foodTitle: "Food Order KMUTNB",
      foodDescription:
        "ผมตั้งเป้าหมายใหม่ไว้ว่าจะนำโปรเจกต์จบของมหาวิทยาลัยกลับมาพัฒนาใหม่ เพื่อให้สามารถใช้งานจริงในมหาวิทยาลัยได้ โดยเป็นระบบสั่งอาหารสำหรับโรงอาหารของมหาวิทยาลัย",
      timelinesTitle: "ไทม์ไลน์",
      timelinesDescription: "สรุปประวัติการทำงานและประสบการณ์ของผม",
    },
    about: {
      title: "เกี่ยวกับฉัน",
      paragraphOne:
        "สวัสดีครับ ผม Nattapoom Wilawan หรือที่รู้จักในชื่อ haerinforever และ kaiyang007 ปัจจุบันเป็นนักศึกษาสาขาคอมพิวเตอร์ธุรกิจ คณะบริหารธุรกิจ มหาวิทยาลัยเทคโนโลยีพระจอมเกล้าพระนครเหนือ วิทยาเขตระยอง",
      paragraphTwo:
        "ตอนนี้ผมกำลังฝึกเขียนเว็บ ออกแบบเว็บเพื่อเตรียมพร้อมสำหรับสายงานในอนาคต และฝึกงานด้านกราฟิกดีไซน์ด้วย พูดตรง ๆ คือผมเป็นคนชอบเล่นเกมมากและเคยเล่นหนักมาก แต่ตอนนี้เริ่มเห็นความสำคัญของอนาคต จึงตั้งใจฝึกฝน พัฒนาทักษะ และเรียนรู้ให้มากที่สุด",
      skillsTitle: "ทักษะและเครื่องมือ",
      photoAlt: "รูปโปรไฟล์",
    },
    footer: {
      rights: "สงวนลิขสิทธิ์",
      built: "สร้างด้วย Next.js และ Tailwind CSS",
    },
  },
} as const;

type Dictionary = (typeof dictionaries)[Language];

interface PreferencesContextValue {
  theme: Theme;
  language: Language;
  t: Dictionary;
  setLanguage: (language: Language) => void;
  toggleTheme: () => void;
}

const PreferencesContext = createContext<PreferencesContextValue | null>(null);

function isTheme(value: string | null): value is Theme {
  return value === "dark" || value === "light";
}

function isLanguage(value: string | null): value is Language {
  return value === "en" || value === "th";
}

function getStoredTheme(): Theme {
  if (typeof window === "undefined") {
    return DEFAULT_THEME;
  }

  const savedTheme = window.localStorage.getItem(STORAGE_KEYS.theme);
  return isTheme(savedTheme) ? savedTheme : DEFAULT_THEME;
}

function getStoredLanguage(): Language {
  if (typeof window === "undefined") {
    return DEFAULT_LANGUAGE;
  }

  const savedLanguage = window.localStorage.getItem(STORAGE_KEYS.language);
  return isLanguage(savedLanguage) ? savedLanguage : DEFAULT_LANGUAGE;
}

function getServerTheme(): Theme {
  return DEFAULT_THEME;
}

function getServerLanguage(): Language {
  return DEFAULT_LANGUAGE;
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
  const language = useSyncExternalStore(
    subscribeToPreferences,
    getStoredLanguage,
    getServerLanguage,
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
    window.localStorage.setItem(STORAGE_KEYS.theme, nextTheme);
  }, []);

  useEffect(() => {
    applyTheme(theme);
  }, [applyTheme, theme]);

  useEffect(() => {
    document.documentElement.lang = language;
    window.localStorage.setItem(STORAGE_KEYS.language, language);
  }, [language]);

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
      emitPreferencesChange();
    },
    [applyTheme],
  );

  const setLanguagePreference = useCallback((nextLanguage: Language) => {
    document.documentElement.lang = nextLanguage;
    window.localStorage.setItem(STORAGE_KEYS.language, nextLanguage);
    emitPreferencesChange();
  }, []);

  const value = useMemo(
    () => ({
      theme,
      language,
      t: dictionaries[language],
      setLanguage: setLanguagePreference,
      toggleTheme: () => {
        const nextTheme = theme === "dark" ? "light" : "dark";
        setThemePreference(nextTheme);
      },
    }),
    [language, setLanguagePreference, setThemePreference, theme],
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
