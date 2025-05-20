"use client";
import { useEffect, useRef, useState } from "react";

export default function SelectionQuote({ delay = 1000 }: { delay?: number }) {
  const [text, setText] = useState("");
  const [pos, setPos] = useState<{ x: number; y: number } | null>(null);
  const hideRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const show = (raw: string, rect: DOMRect) => {
      setText(raw);
      setPos({
        x: rect.left + rect.width / 2,
        y: rect.bottom + window.scrollY + 8,
      });
      navigator.clipboard?.writeText(raw).catch(() => {});
      if (hideRef.current) clearTimeout(hideRef.current);
      hideRef.current = setTimeout(() => {
        setPos(null);
        setText("");
      }, delay);
    };
    const hide = () => {
      if (hideRef.current) clearTimeout(hideRef.current);
      setPos(null);
      setText("");
    };
    const onPointerUp = () => {
      const sel = window.getSelection();
      const raw = sel?.toString().trim();
      if (!raw || !sel || sel.rangeCount === 0) return;
      const rect = sel.getRangeAt(0).getBoundingClientRect();
      show(raw, rect);
    };
    const onMouseUp = onPointerUp;
    const onSelectionChange = () => {
      const sel = window.getSelection();
      if (!sel || sel.isCollapsed || !sel.toString().trim()) hide();
    };
    const onTouchStart = hide;
    const onMouseDown = hide;
    document.addEventListener("pointerup", onPointerUp, { passive: true });
    document.addEventListener("mouseup", onMouseUp, { passive: true });
    document.addEventListener("selectionchange", onSelectionChange);
    document.addEventListener("touchstart", onTouchStart, { passive: true });
    document.addEventListener("mousedown", onMouseDown, { passive: true });
    return () => {
      document.removeEventListener("pointerup", onPointerUp);
      document.removeEventListener("mouseup", onMouseUp);
      document.removeEventListener("selectionchange", onSelectionChange);
      document.removeEventListener("touchstart", onTouchStart);
      document.removeEventListener("mousedown", onMouseDown);
      if (hideRef.current) clearTimeout(hideRef.current);
    };
  }, [delay]);

  if (!pos) return null;

  return (
    <div
      className="fixed z-50 px-3 py-1 text-sm text-white rounded shadow-md bg-zinc-800 animate-fade-in"
      style={{ top: pos.y, left: pos.x, transform: "translateX(-50%)" }}
    >
      Copied: <span className="font-medium">{text}</span>
    </div>
  );
}
