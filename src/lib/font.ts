import {
  Inter,
  Roboto,
  Open_Sans,
  Merriweather,
  Lora,
  DM_Sans,
  Manrope,
  Playfair_Display,
  Space_Grotesk,
} from "next/font/google";

export type FontId =
  | "font-inter"
  | "font-roboto"
  | "font-open-sans"
  | "font-merriweather"
  | "font-lora"
  | "font-dm"
  | "font-manrope"
  | "font-playfair"
  | "font-grotesk";

export const FONT_STORAGE_KEY = "preferred-font";
export const DEFAULT_FONT: FontId = "font-inter";

export const FONTS: FontId[] = [
  DEFAULT_FONT,
  "font-inter",
  "font-roboto",
  "font-open-sans",
  "font-merriweather",
  "font-lora",
  "font-dm",
  "font-manrope",
  "font-playfair",
  "font-grotesk",
];

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const roboto = Roboto({
  weight: ["400", "500", "700"],
  subsets: ["latin"],
  variable: "--font-roboto",
});

const openSans = Open_Sans({
  subsets: ["latin"],
  variable: "--font-open-sans",
});

const merriweather = Merriweather({
  weight: ["300", "400", "700"],
  subsets: ["latin"],
  variable: "--font-merriweather",
});

const lora = Lora({
  subsets: ["latin"],
  variable: "--font-lora",
});

const dm = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm",
});

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
});

const grotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-grotesk",
});

export type FontOption = {
  id: string;
  name: string;
  font: typeof inter;
};

export const FONT_OPTIONS: FontOption[] = [
  { id: "inter", name: "Inter", font: inter },
  { id: "roboto", name: "Roboto", font: roboto },
  { id: "open-sans", name: "Open Sans", font: openSans },
  { id: "merriweather", name: "Merriweather", font: merriweather },
  { id: "lora", name: "Lora", font: lora },
  { id: "dm", name: "DM Sans", font: dm },
  { id: "manrope", name: "Manrope", font: manrope },
  { id: "playfair", name: "Playfair Display", font: playfair },
  { id: "grotesk", name: "Space Grotesk", font: grotesk },
];

export const applyFontToDocument = (fontId: FontId): void => {
  const html = document.documentElement;
  const selected = FONT_OPTIONS.find(
    (f) => f.id === fontId.replace("font-", "")
  );

  try {
    if (selected?.font.variable) {
      html.className = selected.font.variable;
    }

    if (selected?.font.style?.fontFamily) {
      html.style.fontFamily = selected.font.style.fontFamily;
    }

    localStorage.setItem(FONT_STORAGE_KEY, fontId);
    document.body.classList.remove(...FONTS);
    document.body.classList.add(fontId);
  } catch (error) {
    console.error("Error applying font:", error);
  }
};
