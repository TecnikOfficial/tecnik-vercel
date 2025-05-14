import type React from "react"
import "./globals.css"
import type { Metadata } from "next"
import { Inconsolata, Inter } from "next/font/google"
import Script from "next/script"

// Load Inconsolata font
const inconsolata = Inconsolata({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inconsolata",
})

// Load Inter font as a fallback
const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
})

export const metadata: Metadata = {
  title: "Tecnik - Official Site",
  description:
    "Official Site for @TecNikOfficial and @SyncKingMusic: Where tech meets music! Discover safe tech tips for Windows and gaming, paired with meaningful songs that blend human creativity + Ai innovation❤️",
  metadataBase: new URL("https://tecnik.pages.dev"),
  openGraph: {
    title: "TecNik - Official Site",
    description:
      "@TecNikOfficial & @SyncKingMusic : Where tech meets music! Explore safe Windows / gaming tips alongside Songs that blend human creativity + Ai❤️",
    url: "https://tecnik.pages.dev",
    images: [
      {
        url: "/assets/media/metaimg.webp",
        width: 1200,
        height: 628,
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "TecNik - Official Site",
    description:
      "@TecNikOfficial & @SyncKingMusic : Where tech meets music! Explore safe Windows / gaming tips alongside Songs that blend human creativity + Ai❤️",
    images: ["/assets/media/metaimg.webp"],
  },
  verification: {
    google: "ebIZ0CJJW0rZZjBOIn0btfrn2vYjA9IDo3GLpBlNYQQ",
    other: {
      "msvalidate.01": "64DD8D6892380686ECBC2B2AB639F756",
    },
  },
  authors: [{ name: "TecNik" }],
  generator: "TecNik",
  robots: "index, follow",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inconsolata.variable} ${inter.variable}`}>
      <head>
        <link rel="icon" href="/assets/media/favicon.webp" type="image/webp" />
        <link rel="dns-prefetch" href="//app.hearthis.at" />
        <link rel="preconnect" href="//app.hearthis.at" crossOrigin="" />
      </head>
      <body>
        {children}
        <Script
          src="//instant.page/5.2.0"
          type="module"
          integrity="sha384-jnZyxPjiipYXnSU0ygqeac2q7CVYMbh84q0uHVRRxEtvFPiQYbXWUorga2aqZJ0z"
        />
      </body>
    </html>
  )
}
