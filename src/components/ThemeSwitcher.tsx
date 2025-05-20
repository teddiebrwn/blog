"use client";

import { useState, useEffect } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const themes = [
  {
    name: "Default",
    background: "oklch(0.98 0 0)",
    foreground: "oklch(0.145 0 0)",
    card: "oklch(1 0 0)",
    cardForeground: "oklch(0.145 0 0)",
    accent: "oklch(0.92 0 0)",
    accentForeground: "oklch(0.145 0 0)",
  },
  {
    name: "Sepia",
    background: "oklch(0.98 0.02 85)",
    foreground: "oklch(0.2 0.02 85)",
    card: "oklch(1 0.02 85)",
    cardForeground: "oklch(0.2 0.02 85)",
    accent: "oklch(0.95 0.02 85)",
    accentForeground: "oklch(0.2 0.02 85)",
  },
  {
    name: "Carbon",
    background: "#23272e",
    foreground: "#e5e7eb",
    card: "#2d323b",
    cardForeground: "#e5e7eb",
    accent: "#31363f",
    accentForeground: "#e5e7eb",
  },
  {
    name: "Black",
    background: "#18181b",
    foreground: "#fff",
    card: "#232329",
    cardForeground: "#fff",
    accent: "#232329",
    accentForeground: "#fff",
  },
];

const STORAGE_KEY = "preferred-theme";

export default function ThemeSwitcher() {
  const [currentTheme, setCurrentTheme] = useState(() => {
    if (typeof window === "undefined") return themes[0];
    const storedTheme = localStorage.getItem(STORAGE_KEY);
    return themes.find((t) => t.name === storedTheme) || themes[0];
  });

  useEffect(() => {
    const theme = currentTheme;
    document.documentElement.style.setProperty(
      "--reading-background",
      theme.background
    );
    document.documentElement.style.setProperty(
      "--reading-foreground",
      theme.foreground
    );
    document.documentElement.style.setProperty("--reading-card", theme.card);
    document.documentElement.style.setProperty(
      "--reading-card-foreground",
      theme.cardForeground
    );
    document.documentElement.style.setProperty(
      "--background",
      theme.background
    );
    document.documentElement.style.setProperty(
      "--foreground",
      theme.foreground
    );
    document.documentElement.style.setProperty("--card", theme.card);
    document.documentElement.style.setProperty(
      "--card-foreground",
      theme.cardForeground
    );
    document.documentElement.style.setProperty("--accent", theme.accent);
    document.documentElement.style.setProperty(
      "--accent-foreground",
      theme.accentForeground
    );
  }, [currentTheme]);

  const applyTheme = (themeName: string) => {
    const theme = themes.find((t) => t.name === themeName) || themes[0];
    document.documentElement.style.setProperty(
      "--reading-background",
      theme.background
    );
    document.documentElement.style.setProperty(
      "--reading-foreground",
      theme.foreground
    );
    document.documentElement.style.setProperty("--reading-card", theme.card);
    document.documentElement.style.setProperty(
      "--reading-card-foreground",
      theme.cardForeground
    );
    document.documentElement.style.setProperty(
      "--background",
      theme.background
    );
    document.documentElement.style.setProperty(
      "--foreground",
      theme.foreground
    );
    document.documentElement.style.setProperty("--card", theme.card);
    document.documentElement.style.setProperty(
      "--card-foreground",
      theme.cardForeground
    );
    document.documentElement.style.setProperty("--accent", theme.accent);
    document.documentElement.style.setProperty(
      "--accent-foreground",
      theme.accentForeground
    );
    setCurrentTheme(theme);
    localStorage.setItem(STORAGE_KEY, theme.name);
  };

  return (
    <div className="">
      <Select value={currentTheme.name} onValueChange={applyTheme}>
        <SelectTrigger className="cursor-pointer w-fit bg-accent">
          <SelectValue placeholder="Select theme" />
        </SelectTrigger>
        <SelectContent>
          {themes.map((theme) => (
            <SelectItem
              key={theme.name}
              value={theme.name}
              className="cursor-pointer"
            >
              <div className="flex items-center gap-2 ">
                <div
                  className="w-4 h-4 rounded-full"
                  style={{
                    background: theme.background,
                    border: "1px solid #bbb",
                  }}
                />
                {theme.name}
              </div>
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
}
