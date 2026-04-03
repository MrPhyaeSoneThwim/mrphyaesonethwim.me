import { ProjectList } from "@/components/projects/project-list"
import { projects } from "@/lib/constant"

export const metadata = {
  title: "Projects — Phyae Sone Thwim",
  description:
    "A full showcase of projects spanning fintech, surveillance, mobile, and enterprise platforms.",
}

export default function ProjectsPage() {
  return (
    <div className="py-8 md:py-14 lg:py-16">
      {/* Header */}
      <div className="mb-4 grid grid-cols-1 gap-4 md:mb-12 lg:grid-cols-2 lg:gap-12">
        <div>
          <span className="mb-3 inline-flex items-center rounded-full border px-3 py-1 text-xs font-medium text-muted-foreground">
            All Projects
          </span>
          <h1 className="font-heading text-3xl font-bold tracking-tight">
            Things I&apos;ve Built
          </h1>
        </div>
        <p className="self-end text-sm leading-relaxed text-muted-foreground md:text-base">
          A collection of projects across fintech, real-time surveillance,
          mobile apps, and enterprise platforms, all designed to solve real
          problems at scale.
        </p>
      </div>

      <ProjectList projects={projects} />
    </div>
  )
}
