import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
});

import { Bricolage_Grotesque } from "next/font/google";
import { Space_Mono } from "next/font/google";
import { cn } from "@/lib/utils";

const fontHeading = Bricolage_Grotesque({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-heading",
});

const fontBody = Space_Mono({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-body",
  weight: ["400"],
});

export const metadata: Metadata = {
  title: "smalltobig.ai",
  description:
    "Using LLMs like ChatGPT, including advanced RAG, agents, small to big, and more.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={cn(fontBody, fontHeading)}>{children}</body>
    </html>
  );
}
