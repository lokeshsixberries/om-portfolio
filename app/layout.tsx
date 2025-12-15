import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css"

const _geist = Geist({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })

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
  generator: "v0.app",
  icons: {
    icon: [
      {
        url: "/icon-light-32x32.png",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/icon-dark-32x32.png",
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: "/icon.svg",
        type: "image/svg+xml",
      },
    ],
    apple: "/apple-icon.png",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
