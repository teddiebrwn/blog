import type { Metadata } from "next";
import "./globals.css";
import FontThemeWithScroll from "@/components/FontThemeWithScroll";

export const metadata: Metadata = {
  title: "My Blog",
  description: "Blog with switchable font styles",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="antialiased">
        <FontThemeWithScroll />
        {children}
      </body>
    </html>
  );
}
