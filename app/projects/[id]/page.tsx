import { notFound } from "next/navigation"
import type { Metadata } from "next"
import { PROJECT_META } from "@/lib/project-ids"
import { ProjectCaseStudy } from "@/components/projects/project-case-study"

export function generateStaticParams() {
  return PROJECT_META.map((p) => ({ id: p.id }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>
}): Promise<Metadata> {
  const { id } = await params
  const project = PROJECT_META.find((p) => p.id === id)
  if (!project) return {}
  return {
    title: `${project.name} - Case Study`,
    description: project.summary,
  }
}

export default async function ProjectCaseStudyRoute({
  params,
}: {
  params: Promise<{ id: string }>
}) {
  const { id } = await params
  const exists = PROJECT_META.some((p) => p.id === id)
  if (!exists) notFound()
  return <ProjectCaseStudy id={id} />
}
