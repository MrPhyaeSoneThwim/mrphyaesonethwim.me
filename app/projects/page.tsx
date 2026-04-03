import type { Metadata } from "next"
import { ProjectList } from "@/components/projects/project-list"
import { ProjectsHeader } from "@/components/projects/projects-header"
import { projects } from "@/lib/constant"

export const metadata: Metadata = {
  title: "Projects",
  description:
    "A full showcase of projects spanning fintech, real-time surveillance, mobile apps, and enterprise platforms — all built to solve real problems at scale.",
  alternates: {
    canonical: "https://phyaesonethwimdev.vercel.app/projects",
  },
  openGraph: {
    url: "https://phyaesonethwimdev.vercel.app/projects",
  },
}

export default function ProjectsPage() {
  return (
    <div className="py-8 md:py-14 lg:py-16">
      <ProjectsHeader />

      <ProjectList projects={projects} />
    </div>
  )
}
