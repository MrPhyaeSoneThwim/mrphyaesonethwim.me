import type { Metadata } from "next"
import { IntroSection } from "@/components/about/intro-section"
import { SkillsSection } from "@/components/about/skills-section"
import { ExperienceSection } from "@/components/about/experience-section"

export const metadata: Metadata = {
  title: "About",
  description:
    "Senior Full Stack Engineer with 5+ years of experience across fintech, enterprise, and government platforms. Focused on scalable systems, clean architecture, and real-world impact.",
  alternates: {
    canonical: "https://phyaesonethwimdev.vercel.app/about",
  },
  openGraph: {
    url: "https://phyaesonethwimdev.vercel.app/about",
  },
}

export default function AboutPage() {
  return (
    <>
      <IntroSection />
      <SkillsSection />
      <ExperienceSection />
    </>
  )
}
