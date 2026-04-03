import { IntroSection } from "@/components/about/intro-section"
import { SkillsSection } from "@/components/about/skills-section"
import { ExperienceSection } from "@/components/about/experience-section"

export const metadata = {
  title: "About — Phyae Sone Thwim",
  description:
    "Senior Full Stack Engineer focused on scalable systems, clean architecture, and real-world impact.",
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
