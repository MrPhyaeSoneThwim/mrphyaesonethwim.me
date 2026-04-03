import type { Metadata } from "next"
import { Geist_Mono, Space_Grotesk, Inter } from "next/font/google"

import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Toaster } from "@/components/ui/sonner"
import { cn } from "@/lib/utils"

export const metadata: Metadata = {
  metadataBase: new URL("https://phyaesonethwimdev.vercel.app"),
  title: {
    default: "Phyae Sone Thwim — Senior Full Stack Engineer",
    template: "%s — Phyae Sone Thwim",
  },
  description:
    "Senior Full Stack Engineer building scalable systems across fintech, enterprise, and real-time platforms.",
  keywords: [
    // identity
    "Full Stack Engineer",
    "Senior Software Engineer",
    "Phyae Sone Thwim",
    // frontend & mobile
    "React",
    "Next.js",
    "TypeScript",
    "React Native",
    "Redux",
    "Zustand",
    "React Query",
    "Tailwind CSS",
    "NativeWind",
    "Expo",
    // backend systems
    "Node.js",
    "NestJS",
    "Express.js",
    "GraphQL",
    "REST API",
    "PostgreSQL",
    "MongoDB",
    "Redis",
    "MySQL",
    "Firebase",
    "TypeORM",
    // engineering & infrastructure
    "Docker",
    "GitHub Actions",
    "CI/CD",
    "Microservices",
    "System Design",
    "WebSockets",
  ],
  authors: [{ name: "Phyae Sone Thwim" }],
  creator: "Phyae Sone Thwim",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://phyaesonethwimdev.vercel.app",
    siteName: "Phyae Sone Thwim",
    title: "Phyae Sone Thwim — Senior Full Stack Engineer",
    description:
      "Senior Full Stack Engineer building scalable systems across fintech, enterprise, and real-time platforms.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Phyae Sone Thwim — Senior Full Stack Engineer",
    description:
      "Senior Full Stack Engineer building scalable systems across fintech, enterprise, and real-time platforms.",
  },
  robots: {
    index: true,
    follow: true,
  },
}

const interHeading = Inter({ subsets: ["latin"], variable: "--font-heading" })
const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-sans",
})
const fontMono = Geist_Mono({ subsets: ["latin"], variable: "--font-mono" })

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={cn(
        "antialiased",
        fontMono.variable,
        spaceGrotesk.variable,
        interHeading.variable
      )}
    >
      <head>
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/devicon.min.css" />
      </head>
      <body>
        <ThemeProvider>
          <Header />
          <main className="mx-auto w-full max-w-5xl px-4 sm:px-6">{children}</main>
          <Footer />
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  )
}
