import { useState, useEffect } from "react";
import {
  FONTS,
  FONT_STORAGE_KEY,
  FontId,
  DEFAULT_FONT,
  applyFontToDocument,
  FONT_OPTIONS,
} from "../font";

export const useFont = () => {
  const [currentFont, setCurrentFont] = useState<FontId>(() => {
    if (typeof window === "undefined") return DEFAULT_FONT;
    const storedFont = localStorage.getItem(FONT_STORAGE_KEY);
    return storedFont && FONTS.includes(storedFont as FontId)
      ? (storedFont as FontId)
      : DEFAULT_FONT;
  });

  useEffect(() => {
    applyFontToDocument(currentFont);
  }, [currentFont]);

  const setFont = (fontId: FontId) => {
    applyFontToDocument(fontId);
    setCurrentFont(fontId);
  };

  return {
    currentFont,
    setFont,
    fontOptions: FONT_OPTIONS,
  };
};
