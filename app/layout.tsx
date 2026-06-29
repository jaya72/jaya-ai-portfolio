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
  title: "Jaya Mishra | AI Engineer Portfolio",
  description:
    "Portfolio of Jaya Mishra - Software Engineer with 5+ years of experience transitioning into AI Engineering, Machine Learning, and Data Analytics.",
  keywords: [
    "AI Engineer",
    "Machine Learning",
    "Python",
    "Data Analytics",
    "Portfolio",
    "Software Engineer",
    "Artificial Intelligence",
    "Next.js",
  ],
  authors: [{ name: "Jaya Mishra" }],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}