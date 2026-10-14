import { createContext, useContext, useEffect, useState, type ReactNode } from "react";

type Theme = "light" | "dark";
const STORAGE_KEY = "lucida:theme";
const ThemeContext = createContext<{ theme: Theme; setTheme: (theme: Theme) => void } | null>(null);

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [theme, updateTheme] = useState<Theme>("light");

  useEffect(() => {
    try {
      updateTheme(localStorage.getItem(STORAGE_KEY) === "dark" ? "dark" : "light");
    } catch {
      // Storage may be disabled; the default remains light.
    }
  }, []);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark");
  }, [theme]);

  function setTheme(next: Theme) {
    updateTheme(next);
    try {
      localStorage.setItem(STORAGE_KEY, next);
    } catch {
      // Theme switching still works when browser storage is unavailable.
    }
  }

  return <ThemeContext.Provider value={{ theme, setTheme }}>{children}</ThemeContext.Provider>;
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) throw new Error("useTheme requires ThemeProvider");
  return context;
}