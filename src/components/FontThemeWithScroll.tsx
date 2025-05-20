"use client";

import { useEffect, useState, useRef } from "react";
import { cn } from "@/lib/utils";
import FontSwitcher from "./FontSwitcher";
import ThemeSwitcher from "./ThemeSwitcher";

const useIsMobile = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  return isMobile;
};

export default function FontThemeWithScroll() {
  const [visible, setVisible] = useState(true);
  const lastScrollY = useRef(0);
  const [mounted, setMounted] = useState(false);
  const isMobile = useIsMobile();

  useEffect(() => {
    setMounted(true);
    const handleScroll = () => {
      const current = window.scrollY;
      if (Math.abs(current - lastScrollY.current) < 2) return;
      setVisible(current < lastScrollY.current || current < 10);
      lastScrollY.current = current;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!mounted) return null;

  return (
    <div
      className={cn(
        "font-theme-container",
        !visible && "hidden",
        isMobile ? "bottom-4" : "top-4"
      )}
    >
      <ThemeSwitcher />
      <FontSwitcher />
    </div>
  );
}
