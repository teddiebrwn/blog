"use client";

import { useEffect, useState, useRef } from "react";
import { cn } from "@/lib/utils";
import FontSwitcher from "./FontSwitcher";
import ThemeSwitcher from "./ThemeSwitcher";
import { useViewport } from "@/lib/useViewport";

export default function FontThemeWithScroll() {
  const [visible, setVisible] = useState(true);
  const lastScrollY = useRef(0);
  const [mounted, setMounted] = useState(false);

  const { isMobile } = useViewport();

  useEffect(() => {
    setMounted(true);
    const handleScroll = () => {
      const current = window.scrollY;
      if (Math.abs(current - lastScrollY.current) < 2) return;
      if (navigator.vibrate) {
        navigator.vibrate(10);
      }
      const nextVisible = current < lastScrollY.current || current < 10;
      setVisible(nextVisible);
      lastScrollY.current = current;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!mounted) return null;

  return (
    <div
      className={cn(
        "fixed right-4 flex gap-2 z-50 transition-all duration-300",
        isMobile ? "bottom-4" : "top-4",
        visible
          ? "opacity-100 translate-y-0"
          : "opacity-0 translate-y-4 pointer-events-none"
      )}
    >
      <ThemeSwitcher />
      <FontSwitcher />
    </div>
  );
}
