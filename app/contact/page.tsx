import type { Metadata } from "next"
import { ContactSection } from "@/components/contact/contact-section"

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch to discuss job opportunities, projects, or collaborations. Based in Chiang Mai, Thailand and open to remote roles.",
  alternates: {
    canonical: "https://phyaesonethwimdev.vercel.app/contact",
  },
  openGraph: {
    url: "https://phyaesonethwimdev.vercel.app/contact",
  },
}

export default function ContactPage() {
  return <ContactSection />
}
