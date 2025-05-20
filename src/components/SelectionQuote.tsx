"use client";

import { useEffect, useRef, useState } from "react";

export default function SelectionQuote() {
  const [text, setText] = useState("");
  const [coords, setCoords] = useState<{ x: number; y: number } | null>(null);
  const timeout = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const handleSelection = () => {
      const sel = window.getSelection();
      const raw = sel?.toString().trim();
      if (!raw) return;

      const range = sel.getRangeAt(0);
      const rect = range.getBoundingClientRect();
      if (!rect) return;

      setText(raw);
      setCoords({
        x: rect.left + rect.width / 2,
        y: rect.bottom + window.scrollY + 8,
      });

      navigator.clipboard.writeText(raw).catch(console.error);

      if (timeout.current) clearTimeout(timeout.current);
      timeout.current = setTimeout(() => {
        setText("");
        setCoords(null);
      }, 1500);
    };

    document.addEventListener("selectionchange", handleSelection);
    return () => {
      document.removeEventListener("selectionchange", handleSelection);
      if (timeout.current) clearTimeout(timeout.current);
    };
  }, []);

  if (!coords || !text) return null;

  return (
    <div
      style={{
        top: coords.y,
        left: coords.x,
        position: "absolute",
        transform: "translateX(-50%)",
      }}
      className="z-50 flex px-3 py-1 text-sm text-white rounded shadow-md bg-zinc-800 animate-fade-in"
    >
      <p className="font-bold">Copied:</p>
      <span className="ml-1">{text}</span>
    </div>
  );
}
