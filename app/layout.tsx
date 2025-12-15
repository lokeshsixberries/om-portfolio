import type React from "react";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

const _geist = Geist({ subsets: ["latin"] });
const _geistMono = Geist_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Om Prakash Bhatt | SEO Analyst & Digital Marketing Professional",
  description:
    "Results-driven SEO Analyst specializing in organic growth, keyword research, technical audits, and content optimization. 1+ year experience in education, e-commerce, and local businesses.",
  keywords: [
    "SEO Analyst",
    "Digital Marketing",
    "Om Prakash Bhatt",
    "Keyword Research",
    "Technical SEO",
    "On-Page SEO",
    "Off-Page SEO",
  ],
  authors: [{ name: "Om Prakash Bhatt" }],
  openGraph: {
    title: "Om Prakash Bhatt | SEO Analyst",
    description: "Boosting Organic Growth & Visibility",
    type: "website",
  },
  generator: "Build & Developed By Om Prakash Bhatt",
  icons: {
    icon: [
      {
        url: "/images.png",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/images.png",
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: "/images.png",
        type: "image/svg+xml",
      },
    ],
    apple: "/images.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
