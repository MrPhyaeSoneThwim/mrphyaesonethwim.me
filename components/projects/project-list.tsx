"use client"

import * as React from "react"
import Image from "next/image"
import { motion } from "motion/react"
import {
  BookOpenIcon,
  LockSimpleIcon,
  ArrowUpRightIcon,
} from "@phosphor-icons/react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { AspectRatio } from "@/components/ui/aspect-ratio"
import { type Project } from "@/lib/constant" // Updated type name
import { ProjectCaseStudyDialog } from "@/components/projects/project-case-study-dialog"

export function ProjectList({ projects }: { projects: Project[] }) {
  const [dialogOpen, setDialogOpen] = React.useState(false)
  const [activeIndex, setActiveIndex] = React.useState(0)

  function openCaseStudy(index: number) {
    setActiveIndex(index)
    setDialogOpen(true)
  }

  return (
    <>
      <div className="flex flex-col divide-y">
        {projects.map((project, index) => (
          <motion.div
            key={project.id}
            className="grid grid-cols-1 gap-5 py-6 md:grid-cols-[300px_1fr] lg:grid-cols-[260px_1fr_260px]"
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.5,
              ease: [0.22, 1, 0.36, 1],
              delay: index * 0.04,
            }}
            viewport={{ once: true, margin: "-60px" }}
          >
            {/* Thumbnail */}
            <div className="relative md:row-span-2 lg:row-span-1">
              <AspectRatio
                ratio={4 / 3}
                className="overflow-hidden rounded-lg bg-muted"
              >
                <Image
                  src={project.thumbnailImage}
                  alt={project.name}
                  fill
                  className="object-cover"
                  sizes="(max-width: 640px) 100vw, 240px"
                />

                {/* Platform badge */}
                <div className="absolute top-2 left-2">
                  <span className="inline-flex items-center rounded-full border border-white/10 bg-black/40 px-2 py-px text-[10px] font-semibold text-white capitalize backdrop-blur-sm">
                    {project.targetPlatform}
                  </span>
                </div>

                {/* Live badge */}
                {!project.isPrivate && (
                  <div className="absolute top-2 right-2">
                    <span className="inline-flex items-center gap-1 rounded-full border border-white/10 bg-black/40 px-2 py-px text-[10px] font-semibold text-white backdrop-blur-sm">
                      <span className="size-1 rounded-full bg-green-400" />
                      Live
                    </span>
                  </div>
                )}

                {/* Confidential badge */}
                {project.isPrivate && (
                  <div className="absolute bottom-2 left-2">
                    <span className="inline-flex items-center gap-1 rounded-full border border-white/10 bg-black/40 px-2 py-px text-[10px] font-semibold text-white backdrop-blur-sm">
                      <LockSimpleIcon size={9} weight="bold" />
                      Confidential
                    </span>
                  </div>
                )}
              </AspectRatio>
            </div>

            {/* Project Info */}
            <div className="flex flex-col justify-center gap-2">
              <div className="flex flex-wrap items-center gap-1.5">
                <h3 className="font-sans text-sm font-bold tracking-tight">
                  {project.name}
                </h3>
                {project.industrySectors.map((sector) => (
                  <Badge
                    key={sector}
                    variant="outline"
                    className={`h-auto px-2 py-0 text-[11px] ${
                      sector === "Featured"
                        ? "border-emerald-500/40 bg-emerald-50 text-emerald-700 dark:bg-emerald-950/40 dark:text-emerald-400"
                        : ""
                    }`}
                  >
                    {sector}
                  </Badge>
                ))}
              </div>

              <p className="text-sm leading-snug font-medium text-foreground/80">
                {project.summary}
              </p>

              {/* Dynamic Tech Stack Rendering */}
              <div className="mt-1 flex flex-col gap-1.5 font-serif text-xs text-muted-foreground">
                {project.technologyStack.map((group) => (
                  <div key={group.groupLabel} className="flex gap-4">
                    <span className="w-20 shrink-0 font-sans font-bold text-secondary-foreground not-italic">
                      {group.groupLabel}
                    </span>
                    <span className="font-sans text-muted-foreground">
                      {group.technologies.join(", ")}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Metrics + CTA */}
            <div className="flex flex-col gap-4 md:col-span-1 md:col-start-2 lg:col-span-1 lg:col-start-3 lg:row-start-1">
              <div className="grid grid-cols-3 gap-3">
                {project.impactMetrics.map((m) => (
                  <div key={m.label} className="flex flex-col">
                    <span className="text-sm leading-tight font-bold tracking-tight">
                      {m.value}
                    </span>
                    <span className="text-xs leading-snug text-muted-foreground">
                      {m.label}
                    </span>
                  </div>
                ))}
              </div>

              <Button
                className="w-full"
                size="sm"
                onClick={() => openCaseStudy(index)}
              >
                <BookOpenIcon size={13} />
                View Case Study
              </Button>

              <p className="text-center text-xs text-muted-foreground">
                <a
                  href={project.externalLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 transition-colors hover:text-foreground"
                >
                  {project.isPrivate ? "Private — Product Site" : "Live Demo"}
                  <ArrowUpRightIcon size={10} />
                </a>
              </p>
            </div>
          </motion.div>
        ))}
      </div>

      <ProjectCaseStudyDialog
        projects={projects}
        open={dialogOpen}
        onOpenChange={setDialogOpen}
        activeIndex={activeIndex}
        onNavigate={setActiveIndex}
      />
    </>
  )
}
