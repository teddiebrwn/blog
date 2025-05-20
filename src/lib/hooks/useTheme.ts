import { useState, useEffect } from "react";
import {
  THEMES,
  THEME_STORAGE_KEY,
  Theme,
  applyThemeToDocument,
} from "../theme";

export const useTheme = () => {
  const [currentTheme, setCurrentTheme] = useState<Theme>(() => {
    if (typeof window === "undefined") return THEMES[0];
    const storedTheme = localStorage.getItem(THEME_STORAGE_KEY);
    return THEMES.find((t) => t.name === storedTheme) || THEMES[0];
  });

  useEffect(() => {
    applyThemeToDocument(currentTheme);
  }, [currentTheme]);

  const setTheme = (themeName: string) => {
    const theme = THEMES.find((t) => t.name === themeName) || THEMES[0];
    applyThemeToDocument(theme);
    setCurrentTheme(theme);
    localStorage.setItem(THEME_STORAGE_KEY, theme.name);
  };

  return {
    currentTheme,
    setTheme,
    themes: THEMES,
  };
};
