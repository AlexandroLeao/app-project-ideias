import { cleanup, fireEvent, render, screen, waitFor } from "@testing-library/react";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import { ThemeProvider } from "@/components/ThemeProvider";
import { ThemeSelector } from "@/components/ThemeSelector";

const renderTheme = () =>
  render(
    <ThemeProvider>
      <ThemeSelector />
    </ThemeProvider>,
  );

describe("App theme preference", () => {
  beforeEach(() => {
    localStorage.clear();
    document.documentElement.classList.remove("dark");
  });
  afterEach(() => {
    cleanup();
    vi.restoreAllMocks();
  });

  it("defaults to light even when the system prefers dark", () => {
    vi.spyOn(window, "matchMedia").mockReturnValue({ matches: true } as MediaQueryList);
    renderTheme();
    expect(document.documentElement.classList.contains("dark")).toBe(false);
    expect(localStorage.getItem("lucida:theme")).toBeNull();
  });

  it("saves dark mode and restores it when reopening", async () => {
    const view = renderTheme();
    fireEvent.click(screen.getByRole("button", { name: "Tema escuro" }));
    expect(localStorage.getItem("lucida:theme")).toBe("dark");
    expect(document.documentElement.classList.contains("dark")).toBe(true);
    view.unmount();
    document.documentElement.classList.remove("dark");
    renderTheme();
    await waitFor(() => expect(document.documentElement.classList.contains("dark")).toBe(true));
  });

  it("saves light mode after switching back from dark", () => {
    localStorage.setItem("lucida:theme", "dark");
    renderTheme();
    fireEvent.click(screen.getByRole("button", { name: "Tema claro" }));
    expect(localStorage.getItem("lucida:theme")).toBe("light");
    expect(document.documentElement.classList.contains("dark")).toBe(false);
  });

  it("does not change stored ideas when switching themes", () => {
    const ideas = JSON.stringify({ ideas: [{ id: "personal-idea", title: "Minha ideia" }] });
    localStorage.setItem("lucida:v1", ideas);
    renderTheme();
    fireEvent.click(screen.getByRole("button", { name: "Tema escuro" }));
    expect(localStorage.getItem("lucida:v1")).toBe(ideas);
  });

  it("ignores invalid stored themes and keeps light as default", () => {
    localStorage.setItem("lucida:theme", "invalid");
    renderTheme();
    expect(document.documentElement.classList.contains("dark")).toBe(false);
  });
});
