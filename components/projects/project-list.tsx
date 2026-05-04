"use client"

import * as React from "react"
import Image from "next/image"
import { motion } from "motion/react"
import {
  LockSimpleIcon,
  ArrowRightIcon,
  ArrowUpRightIcon,
} from "@phosphor-icons/react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardHeader, CardContent } from "@/components/ui/card"
import { AspectRatio } from "@/components/ui/aspect-ratio"
import { cn } from "@/lib/utils"
import { type Project } from "@/lib/constant"
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
      <div className="mb-4 flex flex-col gap-2 md:mb-5 md:gap-3">
        {projects.map((project, index) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.5,
              ease: [0.22, 1, 0.36, 1],
              delay: index * 0.04,
            }}
            viewport={{ once: true, margin: "-60px" }}
          >
            <Card className="gap-0 rounded-xl bg-muted/20 py-0">
              {/* ── Header ── */}
              <CardHeader className="p-3 md:p-4">
                {/* Stack on mobile, row on sm+ */}
                <div className="flex min-w-0 flex-col gap-2 md:flex-row md:items-start md:justify-between md:gap-4">
                  {/* Left: index + name + metadata */}
                  <div className="flex min-w-0 flex-col">
                    <div className="mb-1 flex items-baseline gap-2">
                      <span className="shrink-0 font-mono text-[11px] font-bold text-primary/70">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      <h3 className="text-[17px] leading-snug font-bold tracking-tight md:text-[18px]">
                        {project.name}
                      </h3>
                    </div>
                    <div className="flex flex-wrap items-center gap-x-1.5 text-[11px] text-muted-foreground/80">
                      {project.role && <span>{project.role}</span>}
                      {project.teamSize && (
                        <>
                          <span className="opacity-30">·</span>
                          <span>{project.teamSize}</span>
                        </>
                      )}
                      {project.duration && (
                        <>
                          <span className="opacity-30">·</span>
                          <span>{project.duration}</span>
                        </>
                      )}
                    </div>
                  </div>

                  {/* Right: tags — left-aligned on mobile, right-aligned on sm+ */}
                  <div className="flex flex-wrap items-center gap-1.5 md:shrink-0 md:justify-end">
                    {project.industrySectors.map((sector, i) => (
                      <Badge
                        key={i}
                        variant="outline"
                        className={cn(
                          "h-auto rounded-sm px-2 py-0.5 text-[10px] font-medium",
                          sector === "Featured"
                            ? "border-primary/30 bg-primary/10 text-primary"
                            : "border-border/80 bg-transparent text-muted-foreground/60"
                        )}
                      >
                        {sector}
                      </Badge>
                    ))}
                  </div>
                </div>
              </CardHeader>

              {/* ── Content row ── */}
              <CardContent className="px-3 pb-3 md:px-4 md:pb-4">
                <div className="grid grid-cols-1 gap-3 md:grid-cols-[2fr_3fr] md:items-start md:gap-5">
                  {/* Image — 3:2 with overlay + badge */}
                  <AspectRatio
                    ratio={3 / 2}
                    className="overflow-hidden rounded-lg"
                  >
                    <Image
                      src={project.thumbnailImage}
                      alt={project.name}
                      fill
                      sizes="(min-width: 768px) 35vw, 100vw"
                      className="object-cover object-center"
                    />
                    <div className="absolute inset-0 bg-linear-to-t from-black/30 via-transparent to-transparent" />
                    <div className="absolute top-2 right-2">
                      <span className="inline-flex items-center gap-1 rounded-full bg-black/40 px-2 py-0.5 text-[10px] font-medium text-white backdrop-blur-sm">
                        {project.isPrivate ? (
                          <>
                            <LockSimpleIcon size={9} weight="bold" />
                            Confidential
                          </>
                        ) : (
                          <>
                            <span className="size-1.5 rounded-full bg-green-400" />
                            Live
                          </>
                        )}
                      </span>
                    </div>
                  </AspectRatio>

                  {/* Right stack */}
                  <div className="flex flex-col gap-3">
                    {/* 1. Description */}
                    <p className="text-sm leading-relaxed text-foreground/80">
                      {project.summary}
                    </p>

                    {/* 2. Metrics */}
                    <div className="flex items-center">
                      {project.impactMetrics.map((m, i) => (
                        <React.Fragment key={m.label}>
                          {i > 0 && (
                            <div className="mx-3 h-7 w-px shrink-0 bg-border md:mx-4 md:h-8" />
                          )}
                          <div className="flex items-center gap-2">
                            <m.icon
                              size={15}
                              weight="duotone"
                              className="shrink-0 text-primary/80"
                            />
                            <div className="flex flex-col">
                              <span className="text-[17px] leading-none font-bold tracking-tight md:text-[18px]">
                                {m.value}
                              </span>
                              <span className="mt-0.5 text-[10px] leading-snug text-muted-foreground">
                                {m.label}
                              </span>
                            </div>
                          </div>
                        </React.Fragment>
                      ))}
                    </div>

                    {/* 3. Tech stack */}
                    <div className="flex flex-col gap-1.5 md:gap-2">
                      {project.technologyStack.map((group) => (
                        <div
                          key={group.groupLabel}
                          className="flex items-start gap-2 md:gap-3"
                        >
                          <span className="w-14 shrink-0 pt-0.5 text-[10px] font-medium text-muted-foreground/55 md:w-20">
                            {group.groupLabel}
                          </span>
                          <div className="flex flex-wrap gap-1">
                            {group.technologies.map((tech) => (
                              <Badge
                                key={tech}
                                variant="outline"
                                className="h-auto rounded-full border-border/50 px-2.5 py-1 text-[10px] font-medium text-muted-foreground"
                              >
                                {tech}
                              </Badge>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>

                    {/* 4. CTAs */}
                    <div className="flex flex-wrap items-center gap-3 pt-1">
                      <Button
                        className="text-xs"
                        onClick={() => openCaseStudy(index)}
                      >
                        View Case Study
                        <ArrowRightIcon size={12} />
                      </Button>
                      {project.externalLink && (
                        <a
                          href={project.externalLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1 text-[12px] text-muted-foreground transition-colors hover:text-foreground"
                        >
                          {project.isPrivate ? "Product Site" : "Live Demo"}
                          <ArrowUpRightIcon size={11} />
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
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
