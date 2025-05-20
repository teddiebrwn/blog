import type { Metadata } from "next";
import "./globals.css";
import FontThemeWithScroll from "@/components/FontThemeWithScroll";
import SelectionQuote from "@/components/SelectionQuote";
// import Nav from "@/components/nav";

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
        <SelectionQuote />
        <FontThemeWithScroll />
        {/* <Nav /> */}
        {children}
      </body>
    </html>
  );
}
