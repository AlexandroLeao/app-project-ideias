import { Moon, Sun } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTheme } from "@/components/ThemeProvider";

export function ThemeSelector() {
  const { theme, setTheme } = useTheme();

  return (
    <div className="theme-selector absolute right-3 top-2 z-20 flex items-center gap-1 rounded-full border border-border bg-card p-1 sm:right-5" role="group" aria-label="Tema do aplicativo">
      <Button type="button" variant="ghost" size="icon" className="theme-option size-8 rounded-full" aria-label="Tema claro" title="Tema claro" aria-pressed={theme === "light"} onClick={() => setTheme("light")}>
        <Sun strokeWidth={1.6} aria-hidden="true" />
      </Button>
      <Button type="button" variant="ghost" size="icon" className="theme-option size-8 rounded-full" aria-label="Tema escuro" title="Tema escuro" aria-pressed={theme === "dark"} onClick={() => setTheme("dark")}>
        <Moon strokeWidth={1.6} aria-hidden="true" />
      </Button>
    </div>
  );
}