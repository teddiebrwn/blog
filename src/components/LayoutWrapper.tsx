"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import Header from "./Header";
import Footer from "./Footer";
import FontThemeWithScroll from "./FontThemeWithScroll";
import SelectionQuote from "./SelectionQuote";
import { applyFontToDocument, DEFAULT_FONT, FONTS, FontId } from "@/lib/font";
import { applyThemeToDocument, THEMES } from "@/lib/theme";

export default function LayoutWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const isBlog = pathname?.startsWith("/blog");

  useEffect(() => {
    if (isBlog) {
      const storedFont = localStorage.getItem("preferred-font");
      const storedTheme = localStorage.getItem("preferred-theme");

      if (storedFont && FONTS.includes(storedFont as FontId)) {
        applyFontToDocument(storedFont as FontId);
      }

      if (storedTheme) {
        const theme = THEMES.find((t) => t.name === storedTheme) || THEMES[0];
        applyThemeToDocument(theme);
      }
    } else {
      applyFontToDocument(DEFAULT_FONT);
      applyThemeToDocument(THEMES[0]);
    }
  }, [isBlog]);

  return (
    <div className="layout-wrapper">
      {isBlog ? (
        <div className="blog-layout">
          <FontThemeWithScroll />
          <SelectionQuote />
          {children}
        </div>
      ) : (
        <>
          <Header />
          <main className="flex items-center justify-center flex-1 p-4">
            {children}
          </main>
          <Footer />
        </>
      )}
    </div>
  );
}
