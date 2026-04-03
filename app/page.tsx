import type { Metadata } from "next"
import { HeroSection } from "@/components/home/hero-section"
import { TechStackSection } from "@/components/home/tech-stack-section"
import { FeaturedWorkSection } from "@/components/home/featured-work-section"
import { IntroSection } from "@/components/home/intro-section"

export const metadata: Metadata = {
  title: "Phyae Sone Thwim — Senior Full Stack Engineer",
  description:
    "Senior Full Stack Engineer building production-grade systems across fintech, enterprise, and real-time platforms. Based in Chiang Mai, Thailand.",
  alternates: {
    canonical: "https://phyaesonethwimdev.vercel.app",
  },
  openGraph: {
    url: "https://phyaesonethwimdev.vercel.app",
  },
}

export default function Page() {
  return (
    <>
      <HeroSection />
      <FeaturedWorkSection />
      <IntroSection />
      <TechStackSection />
    </>
  )
}
