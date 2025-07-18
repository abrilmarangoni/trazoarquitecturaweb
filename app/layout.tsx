import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
})

export const metadata: Metadata = {
  title: "TRAZO - Estudio de Arquitectura | Mar del Plata",
  description:
    "Estudio de arquitectura en Mar del Plata especializado en diseño costero moderno. Creamos espacios únicos que fusionan modernidad y calidez en cada proyecto.",
  keywords:
    "arquitectura, Mar del Plata, diseño, construcción, estudio arquitectónico, arquitectos, diseño costero, modernidad",
  authors: [{ name: "TRAZO Arquitectura" }],
  creator: "TRAZO Arquitectura",
  publisher: "TRAZO Arquitectura",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://trazo-arquitectura.vercel.app"),
  openGraph: {
    title: "TRAZO - Estudio de Arquitectura | Mar del Plata",
    description:
      "Creamos espacios únicos que abrazan la esencia costera de Mar del Plata, fusionando modernidad y calidez en cada proyecto.",
    url: "https://trazo-arquitectura.vercel.app",
    siteName: "TRAZO Arquitectura",
    locale: "es_AR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "TRAZO - Estudio de Arquitectura | Mar del Plata",
    description:
      "Creamos espacios únicos que abrazan la esencia costera de Mar del Plata, fusionando modernidad y calidez en cada proyecto.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es" className={inter.variable}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#3d555b" />
      </head>
      <body className={`${inter.className} antialiased`}>{children}</body>
    </html>
  )
}
