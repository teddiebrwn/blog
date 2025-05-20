"use client";

import { useEffect, useState } from "react";
import {
  Inter,
  Merriweather,
  Lora,
  EB_Garamond,
  DM_Sans,
  Manrope,
  Playfair_Display,
  Space_Grotesk,
  Roboto,
  Open_Sans,
} from "next/font/google";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const STORAGE_KEY = "preferred-font";
const DEFAULT_FONT = "font-inter";

type FontId =
  | "font-inter"
  | "font-roboto"
  | "font-open-sans"
  | "font-merriweather"
  | "font-lora"
  | "font-garamond"
  | "font-dm"
  | "font-manrope"
  | "font-playfair"
  | "font-grotesk";

const fonts: FontId[] = [
  DEFAULT_FONT,
  "font-inter",
  "font-roboto",
  "font-open-sans",
  "font-merriweather",
  "font-lora",
  "font-garamond",
  "font-dm",
  "font-manrope",
  "font-playfair",
  "font-grotesk",
];

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

const merriweather = Merriweather({
  subsets: ["latin"],
  weight: ["400"],
  display: "swap",
  variable: "--font-merriweather",
});

const lora = Lora({
  subsets: ["latin"],
  weight: ["400"],
  display: "swap",
  variable: "--font-lora",
});

const garamond = EB_Garamond({
  subsets: ["latin"],
  weight: ["400"],
  display: "swap",
  variable: "--font-garamond",
});

const dm = DM_Sans({
  subsets: ["latin"],
  weight: ["400"],
  display: "swap",
  variable: "--font-dm",
});

const manrope = Manrope({
  subsets: ["latin"],
  weight: ["400"],
  display: "swap",
  variable: "--font-manrope",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400"],
  display: "swap",
  variable: "--font-playfair",
});

const grotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["400"],
  display: "swap",
  variable: "--font-grotesk",
});

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400"],
  display: "swap",
  variable: "--font-roboto",
});

const openSans = Open_Sans({
  subsets: ["latin"],
  weight: ["400"],
  display: "swap",
  variable: "--font-open-sans",
});

type NextFont = {
  variable: string;
  style?: {
    fontFamily: string;
  };
};

type FontOption = {
  id: string;
  name: string;
  font: NextFont;
};

const fontOptions: FontOption[] = [
  { id: "inter", name: "Inter", font: inter },
  { id: "roboto", name: "Roboto", font: roboto },
  { id: "open-sans", name: "Open Sans", font: openSans },
  { id: "merriweather", name: "Merriweather", font: merriweather },
  { id: "lora", name: "Lora", font: lora },
  { id: "garamond", name: "EB Garamond", font: garamond },
  { id: "dm", name: "DM Sans", font: dm },
  { id: "manrope", name: "Manrope", font: manrope },
  { id: "playfair", name: "Playfair Display", font: playfair },
  { id: "grotesk", name: "Space Grotesk", font: grotesk },
];

export default function FontSwitcher() {
  const [font, setFont] = useState<FontId>(() => {
    if (typeof window === "undefined") return DEFAULT_FONT;

    const storedFont = localStorage.getItem(STORAGE_KEY);
    return storedFont && fonts.includes(storedFont as FontId)
      ? (storedFont as FontId)
      : DEFAULT_FONT;
  });

  useEffect(() => {
    try {
      const html = document.documentElement;
      const selected = fontOptions.find(
        (f) => f.id === font.replace("font-", "")
      );

      if (selected?.font.variable) {
        html.className = selected.font.variable;
      }

      if (selected?.font.style?.fontFamily) {
        html.style.fontFamily = selected.font.style.fontFamily;
      }

      localStorage.setItem(STORAGE_KEY, font);
      document.body.classList.remove(...fonts);
      document.body.classList.add(font);
    } catch (error) {
      console.error("Error applying font:", error);
    }
  }, [font]);

  return (
    <div>
      <Select value={font} onValueChange={(value: FontId) => setFont(value)}>
        <SelectTrigger className="cursor-pointer w-[180px] bg-accent border-accent">
          <SelectValue placeholder="Select font" />
        </SelectTrigger>
        <SelectContent>
          {fontOptions.map((f) => (
            <SelectItem
              key={f.id}
              value={`font-${f.id}`}
              style={f.font.style}
              className="cursor-pointer"
            >
              {f.name}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
}
