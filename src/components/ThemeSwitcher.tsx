"use client";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useTheme } from "@/lib/hooks/useTheme";
import { useEffect } from "react";

export default function ThemeSwitcher() {
  const { currentTheme, setTheme, themes } = useTheme();

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    const handleChange = (e: MediaQueryListEvent) => {
      const theme = e.matches ? "Carbon" : "Default";
      setTheme(theme);
    };

    mediaQuery.addEventListener("change", handleChange);
    return () => mediaQuery.removeEventListener("change", handleChange);
  }, [setTheme]);

  return (
    <Select value={currentTheme.name} onValueChange={setTheme}>
      <SelectTrigger className="cursor-pointer w-fit bg-accent border-accent">
        <SelectValue placeholder="Select theme" />
      </SelectTrigger>
      <SelectContent>
        {themes.map((theme) => (
          <SelectItem
            key={theme.name}
            value={theme.name}
            className="cursor-pointer"
          >
            <div className="flex items-center gap-2">
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
  );
}
