import { HeroSection } from "@/components/home/hero-section"
import { TechStackSection } from "@/components/home/tech-stack-section"
import { FeaturedWorkSection } from "@/components/home/featured-work-section"
import { IntroSection } from "@/components/home/intro-section"

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
