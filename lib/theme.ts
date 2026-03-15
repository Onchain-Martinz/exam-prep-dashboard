export type Theme = "light" | "dark";

export const THEME_STORAGE_KEY = "exam-study-plan-theme";

export const themeInitializationScript = `
(() => {
  try {
    const root = document.documentElement;
    const storedTheme = localStorage.getItem("${THEME_STORAGE_KEY}");
    const systemTheme = window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
    const theme = storedTheme === "dark" || storedTheme === "light" ? storedTheme : systemTheme;

    root.classList.toggle("dark", theme === "dark");
    root.dataset.theme = theme;
    root.style.colorScheme = theme;
  } catch (error) {}
})();
`;
