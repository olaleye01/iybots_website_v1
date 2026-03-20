import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Iybots Technologies — AI Automation Agency",
  description:
    "We design and deploy custom AI automation systems — intelligent agents, workflow orchestration, and document intelligence — that eliminate manual work and compound operational efficiency.",
  keywords: ["AI automation", "workflow automation", "AI agents", "business automation", "Iybots Technologies"],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
      <body className="min-h-full">{children}</body>
    </html>
  );
}
