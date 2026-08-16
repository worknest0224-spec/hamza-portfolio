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
  title: "Hamza Mohammed Faruk Tajani | Pharmacy × AI × Entrepreneurship",
  description:
    "A personal portfolio showcasing Hamza Mohammed Faruk Tajani's journey across pharmacy, research, entrepreneurship, leadership, prompt engineering, AI-assisted development, and business management.",
  openGraph: {
    title: "Hamza Mohammed Faruk Tajani | Pharmacy × AI × Entrepreneurship",
    description:
      "Turning Ideas Into Execution — Where Pharmacy, Entrepreneurship, Leadership & AI Meet.",
    type: "website",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
      <body className="min-h-screen antialiased">{children}</body>
    </html>
  );
}
