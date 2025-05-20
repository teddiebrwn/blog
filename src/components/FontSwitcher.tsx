"use client";
import { useEffect, useState } from "react";

const fonts = [
  "font-default",
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

const fontOptions = [
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
  const [font, setFont] = useState<string>(() => {
    return typeof window !== "undefined"
      ? localStorage.getItem("preferred-font") || "font-default"
      : "font-default";
  });

  useEffect(() => {
    const html = document.documentElement;
    const selected = fontOptions.find((f) => f.id === font);
    html.className = selected?.font.variable || "";
    if (selected?.font.style?.fontFamily) {
      html.style.fontFamily = selected.font.style.fontFamily;
    }
    localStorage.setItem("preferred-font", font);
    document.body.classList.remove(...fonts);
    document.body.classList.add(font);
  }, [font]);

  return (
    <div className="">
      <Select value={font} onValueChange={setFont}>
        <SelectTrigger className="cursor-pointer w-fit bg-accent">
          <SelectValue placeholder="Select font" />
        </SelectTrigger>
        <SelectContent>
          {fontOptions.map((f) => (
            <SelectItem
              key={f.id}
              value={f.id}
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
