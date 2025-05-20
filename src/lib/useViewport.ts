"use client";
import { useEffect, useState } from "react";

export function useViewport() {
  const [width, setWidth] = useState<number | null>(null);

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    handleResize();
    window.addEventListener("resize", handleResize, { passive: true });
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return {
    width,
    isMobile: width !== null && width < 768,
    // isTablet: width !== null && width >= 768 && width < 1024,
    // isDesktop: width !== null && width >= 1024,
  };
}
