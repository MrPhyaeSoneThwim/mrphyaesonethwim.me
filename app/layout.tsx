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
    "Senior Full Stack Engineer with 6+ years building production-grade web and mobile applications across fintech, enterprise, and government. Shipped platforms serving 800+ SMEs, 6,000+ insurance agents, and real-time systems supporting 4,000+ live cameras.",
  keywords: [
    // identity
    "Phyae Sone Thwim",
    "Full Stack Engineer",
    "Senior Full Stack Engineer",
    "Senior Software Engineer",
    "Frontend Engineer",
    "Mobile Developer",
    "React Native Developer",
    "Full Stack Developer",
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
    "Expo Application Services",
    "EAS",
    // backend & cms
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
    "Strapi CMS",
    // cloud & infrastructure
    "AWS",
    "AWS Amplify",
    "Docker",
    "GitHub Actions",
    "Nginx",
    "Cloudflare",
    "CI/CD",
    "Nx Monorepo",
    "Lerna",
    // testing
    "Jest",
    "Cypress",
    "Detox",
    // engineering practices
    "Microservices",
    "System Design",
    "WebSockets",
    "RBAC",
    // domains & industries
    "Fintech",
    "Government Enterprise",
    "KYC Compliance",
    "Real-Time Systems",
    "Surveillance Platform",
    "SME Platform",
    "Web3",
    "Solana",
  ],
  authors: [{ name: "Phyae Sone Thwim" }],
  creator: "Phyae Sone Thwim",
  category: "Technology",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://phyaesonethwimdev.vercel.app",
    siteName: "Phyae Sone Thwim",
    title: "Phyae Sone Thwim — Senior Full Stack Engineer",
    description:
      "Senior Full Stack Engineer with 6+ years building production-grade web and mobile applications across fintech, enterprise, and government. Shipped platforms serving 800+ SMEs, 6,000+ insurance agents, and real-time systems supporting 4,000+ live cameras.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Phyae Sone Thwim — Senior Full Stack Engineer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Phyae Sone Thwim — Senior Full Stack Engineer",
    description:
      "Senior Full Stack Engineer with 6+ years building production-grade web and mobile applications across fintech, enterprise, and government. Shipped platforms serving 800+ SMEs, 6,000+ insurance agents, and real-time systems supporting 4,000+ live cameras.",
    images: ["/og-image.png"],
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
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/devicon.min.css"
        />
      </head>
      <body>
        <ThemeProvider>
          <Header />
          <main className="mx-auto w-full max-w-5xl px-4 sm:px-6">
            {children}
          </main>
          <Footer />
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  )
}
