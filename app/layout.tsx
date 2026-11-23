import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "ART RESEARCH STUDIO",
  description: "A private bilingual space for art, design, artists, papers and material research.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="zh-CN"><body>{children}</body></html>;
}
