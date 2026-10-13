export type Theme = "dark" | "light";

export const THEME_STORAGE_KEY = "portfolio-theme";
export const DEFAULT_THEME: Theme = "dark";

// Apply the saved theme before the page paints or React hydrates.
export const THEME_INIT_SCRIPT = `(() => {
  let theme = ${JSON.stringify(DEFAULT_THEME)};
  try {
    const savedTheme = window.localStorage.getItem(${JSON.stringify(THEME_STORAGE_KEY)});
    if (savedTheme === "dark" || savedTheme === "light") theme = savedTheme;
  } catch {}
  const root = document.documentElement;
  root.classList.remove("dark", "light");
  root.classList.add(theme);
  root.dataset.theme = theme;
})();`;
