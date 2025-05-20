export type Theme = {
  name: string;
  background: string;
  foreground: string;
  card: string;
  cardForeground: string;
  accent: string;
  accentForeground: string;
};

export const THEMES: Theme[] = [
  {
    name: "Default",
    background: "oklch(0.98 0 0)",
    foreground: "oklch(0.145 0 0)",
    card: "oklch(1 0 0)",
    cardForeground: "oklch(0.145 0 0)",
    accent: "oklch(0.92 0 0)",
    accentForeground: "oklch(0.145 0 0)",
  },
  {
    name: "Sepia",
    background: "oklch(0.98 0.02 85)",
    foreground: "oklch(0.2 0.02 85)",
    card: "oklch(1 0.02 85)",
    cardForeground: "oklch(0.2 0.02 85)",
    accent: "oklch(0.95 0.02 85)",
    accentForeground: "oklch(0.2 0.02 85)",
  },
  {
    name: "Carbon",
    background: "#23272e",
    foreground: "#e5e7eb",
    card: "#2d323b",
    cardForeground: "#e5e7eb",
    accent: "#31363f",
    accentForeground: "#e5e7eb",
  },
  {
    name: "Black",
    background: "#18181b",
    foreground: "#fff",
    card: "#232329",
    cardForeground: "#fff",
    accent: "#232329",
    accentForeground: "#fff",
  },
];

export const THEME_STORAGE_KEY = "preferred-theme";

export const CSS_VARIABLES = {
  background: "--background",
  foreground: "--foreground",
  card: "--card",
  cardForeground: "--card-foreground",
  accent: "--accent",
  accentForeground: "--accent-foreground",
  readingBackground: "--reading-background",
  readingForeground: "--reading-foreground",
  readingCard: "--reading-card",
  readingCardForeground: "--reading-card-foreground",
} as const;

export const applyThemeToDocument = (theme: Theme): void => {
  const root = document.documentElement;
  const variables = {
    [CSS_VARIABLES.background]: theme.background,
    [CSS_VARIABLES.foreground]: theme.foreground,
    [CSS_VARIABLES.card]: theme.card,
    [CSS_VARIABLES.cardForeground]: theme.cardForeground,
    [CSS_VARIABLES.accent]: theme.accent,
    [CSS_VARIABLES.accentForeground]: theme.accentForeground,
    [CSS_VARIABLES.readingBackground]: theme.background,
    [CSS_VARIABLES.readingForeground]: theme.foreground,
    [CSS_VARIABLES.readingCard]: theme.card,
    [CSS_VARIABLES.readingCardForeground]: theme.cardForeground,
  };

  Object.entries(variables).forEach(([key, value]) => {
    root.style.setProperty(key, value);
  });

  root.setAttribute("data-theme", theme.name);
  localStorage.setItem(THEME_STORAGE_KEY, theme.name);

  // Update meta theme-color for browser UI
  const metaThemeColor = document.querySelector('meta[name="theme-color"]');
  if (metaThemeColor) {
    metaThemeColor.setAttribute("content", theme.background);
  } else {
    const meta = document.createElement("meta");
    meta.name = "theme-color";
    meta.content = theme.background;
    document.head.appendChild(meta);
  }
};
