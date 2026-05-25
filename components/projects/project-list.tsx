"use client"

import * as React from "react"
import Image from "next/image"
import Link from "next/link"
import { motion } from "motion/react"
import type { Icon } from "@phosphor-icons/react"
import {
  ArrowUpRightIcon,
  GlobeIcon,
  UsersThreeIcon,
  BankIcon,
  ChartLineUpIcon,
  ChatCircleIcon,
  DatabaseIcon,
  GitBranchIcon,
  ShoppingCartIcon,
  ClockIcon,
  LightningIcon,
  VideoCameraSlashIcon,
  ShieldCheckIcon,
  CheckCircleIcon,
  BellIcon,
  AppStoreLogoIcon,
  GooglePlayLogoIcon,
} from "@phosphor-icons/react"

const RESULT_ICON_MAP: Record<string, Icon> = {
  Users: UsersThreeIcon,
  Landmark: BankIcon,
  TrendingUp: ChartLineUpIcon,
  MessageCircle: ChatCircleIcon,
  Database: DatabaseIcon,
  GitBranch: GitBranchIcon,
  ShoppingCart: ShoppingCartIcon,
  Clock: ClockIcon,
  Zap: LightningIcon,
  Video: VideoCameraSlashIcon,
  ShieldCheck: ShieldCheckIcon,
  CheckCircle: CheckCircleIcon,
  Bell: BellIcon,
}
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { AspectRatio } from "@/components/ui/aspect-ratio"
import { cn } from "@/lib/utils"
import { type Project } from "@/lib/constant"

export function ProjectList({ projects }: { projects: Project[] }) {
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
              <CardContent className="p-4 md:p-5">
                {/* ── Top: index + name + tags in one row, meta below ── */}
                <div className="mb-4 flex flex-col gap-2 md:gap-1">
                  <div className="flex flex-col gap-y-1 md:flex-row md:items-baseline md:justify-between md:gap-x-2">
                    <div className="flex items-baseline gap-2">
                      <span className="shrink-0 font-mono text-[10px] font-bold text-primary/70">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      <h3 className="text-[17px] leading-snug font-bold tracking-tight md:text-[18px]">
                        {project.name}
                      </h3>
                    </div>
                    <div className="flex shrink-0 flex-wrap items-center gap-1">
                      {project.industrySectors.map((sector, i) => (
                        <Badge
                          key={i}
                          variant="outline"
                          className={cn(
                            "h-auto rounded-sm px-2 py-1 text-[10px] font-medium",
                            sector === "Featured"
                              ? "border-primary/30 bg-primary/10 text-primary"
                              : "border-border/80 bg-transparent text-muted-foreground/80"
                          )}
                        >
                          {sector}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  <div className="flex flex-wrap items-center gap-x-1.5 text-[11px] text-muted-foreground/80">
                    {project.hero.meta.role && (
                      <span>{project.hero.meta.role}</span>
                    )}
                    {project.hero.meta.teamSize && (
                      <>
                        <span className="opacity-30">·</span>
                        <span>{project.hero.meta.teamSize}</span>
                      </>
                    )}
                    {project.hero.meta.period && (
                      <>
                        <span className="opacity-30">·</span>
                        <span>{project.hero.meta.period}</span>
                      </>
                    )}
                    {project.hero.meta.duration && (
                      <>
                        <span className="opacity-30">·</span>
                        <span>{project.hero.meta.duration}</span>
                      </>
                    )}
                  </div>
                </div>

                <div className="grid grid-cols-1 gap-5 md:grid-cols-[3fr_2fr] md:items-stretch md:gap-8">
                  {/* ── Left: content details ── */}
                  <div className="order-2 flex flex-col gap-5 md:order-1">
                    {/* Description */}
                    <p className="text-sm leading-relaxed text-foreground/80">
                      {project.hero.summary}
                    </p>

                    {/* Metrics */}
                    <div className="flex items-start">
                      {project.results.slice(0, 3).map((r, i) => {
                        const Icon = RESULT_ICON_MAP[r.icon] ?? LightningIcon
                        return (
                          <React.Fragment key={r.label}>
                            {i > 0 && (
                              <div className="mx-5 h-10 w-px shrink-0 bg-muted md:mx-6" />
                            )}
                            <div className="flex items-start gap-2">
                              <Icon
                                size={14}
                                className="mt-0.5 shrink-0 text-primary/80"
                              />
                              <div className="flex flex-col">
                                <span className="text-[17px] leading-none font-bold tracking-tight md:text-[18px]">
                                  {r.value}
                                </span>
                                <span className="mt-0.5 text-[10px] leading-snug text-muted-foreground">
                                  {r.label}
                                </span>
                              </div>
                            </div>
                          </React.Fragment>
                        )
                      })}
                    </div>

                    {/* Tech stack */}
                    <div className="flex flex-col gap-1.5">
                      <div className="flex flex-wrap gap-1.5">
                        {project.coreTechStack.map((tech) => (
                          <Badge
                            key={tech}
                            variant="secondary"
                            className="h-auto rounded-sm px-2 py-1 text-xs"
                          >
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    {/* CTAs */}
                    <div className="flex flex-wrap items-center gap-3 md:mt-auto">
                      {project.hasCaseStudy && (
                        <Link
                          href={`/projects/${project.id}`}
                          className="text-xs font-medium text-primary hover:underline"
                        >
                          View Case Study
                        </Link>
                      )}
                      {project.demoLinks ? (
                        <>
                          {project.demoLinks.web && (
                            <>
                              {project.hasCaseStudy && (
                                <div className="h-4 w-px bg-border" />
                              )}
                              {project.isPrivate ? (
                                <a
                                  href={project.demoLinks.web}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="inline-flex items-center gap-1 text-xs font-medium text-primary hover:underline"
                                >
                                  Product Site
                                  <ArrowUpRightIcon size={11} />
                                </a>
                              ) : (
                                <a
                                  href={project.demoLinks.web}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="inline-flex items-center gap-1.5 text-xs text-muted-foreground transition-colors hover:text-foreground"
                                >
                                  <GlobeIcon size={13} />
                                  Live Demo
                                </a>
                              )}
                            </>
                          )}
                          {(project.demoLinks.ios ||
                            project.demoLinks.android) && (
                            <>
                              <div className="h-4 w-px bg-border" />
                              {project.demoLinks.ios && (
                                <a
                                  href={project.demoLinks.ios}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="inline-flex items-center gap-1.5 text-xs text-muted-foreground transition-colors hover:text-foreground"
                                >
                                  <AppStoreLogoIcon size={13} />
                                  App Store
                                </a>
                              )}
                              {project.demoLinks.ios &&
                                project.demoLinks.android && (
                                  <div className="h-4 w-px bg-border" />
                                )}
                              {project.demoLinks.android && (
                                <a
                                  href={project.demoLinks.android}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="inline-flex items-center gap-1.5 text-xs text-muted-foreground transition-colors hover:text-foreground"
                                >
                                  <GooglePlayLogoIcon size={13} />
                                  Google Play
                                </a>
                              )}
                            </>
                          )}
                        </>
                      ) : (
                        project.externalLink && (
                          <>
                            {project.hasCaseStudy && (
                              <div className="h-4 w-px bg-border" />
                            )}
                            {project.isPrivate ? (
                              <a
                                href={project.externalLink}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-1 text-xs font-medium text-primary hover:underline"
                              >
                                Product Site
                                <ArrowUpRightIcon size={11} />
                              </a>
                            ) : (
                              <a
                                href={project.externalLink}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-1.5 text-xs text-muted-foreground transition-colors hover:text-foreground"
                              >
                                <GlobeIcon size={13} />
                                Live Demo
                              </a>
                            )}
                          </>
                        )
                      )}
                    </div>
                  </div>

                  {/* ── Right: image only ── */}
                  <div className="order-1 md:order-2">
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
                      <div className="absolute inset-0 bg-linear-to-t from-black/25 via-transparent to-transparent" />
                    </AspectRatio>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </>
  )
}
