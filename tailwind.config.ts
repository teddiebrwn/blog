import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "reading-background": "var(--reading-background)",
        "reading-foreground": "var(--reading-foreground)",
        "reading-card": "var(--reading-card)",
        "reading-card-foreground": "var(--reading-card-foreground)",
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};

export default config;
