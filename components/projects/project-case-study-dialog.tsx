"use client"

import * as React from "react"
import Image from "next/image"
import {
  ArrowLeftIcon,
  ArrowRightIcon,
  ArrowUpRightIcon,
  TrophyIcon,
  XIcon,
} from "@phosphor-icons/react"
import { animate, motion, useMotionValue, useTransform } from "motion/react"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogTitle,
} from "@/components/ui/dialog"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from "@/components/ui/carousel"
import {
  Item,
  ItemContent,
  ItemDescription,
  ItemGroup,
  ItemSeparator,
  ItemTitle,
} from "@/components/ui/item"
import { type Project } from "@/lib/constant"
import { cn } from "@/lib/utils"
import { AspectRatio } from "@/components/ui/aspect-ratio"

function parseMetricValue(value: string) {
  const match = value.match(/^([^\d]*)([0-9,]+\.?[0-9]*)(.*)$/)
  if (!match)
    return {
      prefix: "",
      number: 0,
      suffix: value,
      hasComma: false,
      decimals: 0,
    }
  const [, prefix, numStr, suffix] = match
  const hasComma = numStr.includes(",")
  const cleanNum = numStr.replace(/,/g, "")
  const number = parseFloat(cleanNum)
  const decimals = cleanNum.includes(".") ? cleanNum.split(".")[1].length : 0
  return { prefix, number, suffix, hasComma, decimals }
}

function AnimatedMetric({
  value,
  triggerKey,
}: {
  value: string
  triggerKey: string
}) {
  const { prefix, number, suffix, hasComma, decimals } = parseMetricValue(value)
  const count = useMotionValue(0)
  const display = useTransform(count, (v) => {
    if (decimals > 0) return `${prefix}${v.toFixed(decimals)}${suffix}`
    const rounded = Math.round(v)
    return `${prefix}${hasComma ? rounded.toLocaleString() : rounded}${suffix}`
  })
  React.useEffect(() => {
    count.set(0)
    const controls = animate(count, number, {
      duration: 1.2,
      ease: [0.22, 1, 0.36, 1],
    })
    return () => controls.stop()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [triggerKey])
  return <motion.span>{display}</motion.span>
}

interface ProjectCaseStudyDialogProps {
  projects: Project[]
  open: boolean
  onOpenChange: (open: boolean) => void
  activeIndex: number
  onNavigate: (index: number) => void
}

export function ProjectCaseStudyDialog({
  projects,
  open,
  onOpenChange,
  activeIndex,
  onNavigate,
}: ProjectCaseStudyDialogProps) {
  const project = projects[activeIndex]
  const [carouselApi, setCarouselApi] = React.useState<CarouselApi>()
  const [currentSlide, setCurrentSlide] = React.useState(0)
  const [slideCount, setSlideCount] = React.useState(0)

  React.useEffect(() => {
    if (!carouselApi) return
    setSlideCount(carouselApi.scrollSnapList().length)
    setCurrentSlide(carouselApi.selectedScrollSnap())
    carouselApi.on("select", () =>
      setCurrentSlide(carouselApi.selectedScrollSnap())
    )
  }, [carouselApi])

  React.useEffect(() => {
    if (!carouselApi) return
    carouselApi.scrollTo(0)
    setCurrentSlide(0)
  }, [activeIndex, carouselApi])

  if (!project) return null

  const images = project.visualHighlights ?? []
  const currentImage = images[currentSlide]
  const displaySectors = project.industrySectors.filter((s) => s !== "Featured")
  const triggerKey = `${open}-${activeIndex}`

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent
        showCloseButton={false}
        className="flex max-h-[calc(95dvh)] max-w-[calc(100%-0.5rem)] flex-col gap-0 overflow-hidden rounded-2xl p-0 sm:max-h-[90vh] sm:max-w-5xl sm:rounded-xl"
      >
        <DialogTitle className="sr-only">
          {project.name} — Case Study
        </DialogTitle>

        {/* ── Header ── */}
        <div className="flex shrink-0 items-center justify-between gap-3 border-b px-4 py-3 sm:px-5 sm:py-3.5">
          <div className="flex min-w-0 items-center gap-1.5 text-sm">
            <span className="shrink-0 text-xs text-muted-foreground">
              {project.targetPlatform}
            </span>
            {displaySectors.map((s) => (
              <React.Fragment key={s}>
                <span className="text-muted-foreground/40">·</span>
                <span className="shrink-0 text-xs text-muted-foreground">
                  {s}
                </span>
              </React.Fragment>
            ))}
          </div>
          <DialogClose asChild>
            <Button variant="ghost" size="icon-sm" className="shrink-0">
              <XIcon />
              <span className="sr-only">Close</span>
            </Button>
          </DialogClose>
        </div>

        {/* ── Scrollable Body ── */}
        <div className="flex-1 overflow-y-auto">
          <div className="space-y-6 p-3 sm:p-5">
            {/* ── Project Identity (outside Zone A) ── */}
            <div className="w-full sm:w-[60%]">
              <p className="font-sans text-base leading-tight font-semibold text-foreground">
                {project.name}
              </p>
              <p className="mt-1 text-sm leading-[1.6] text-muted-foreground">
                {project.summary}
              </p>
            </div>

            {/* ── Zone A: Two-column overview ── */}
            <div className="flex flex-col gap-4 border-b pb-4 sm:flex-row sm:items-stretch sm:gap-8 sm:pb-6">
              {/* Left: Carousel */}
              <div className="flex h-full w-full flex-col gap-3 sm:w-[60%]">
                {/* Carousel card — grows to fill remaining column height */}
                <div className="flex min-h-0 flex-1 flex-col overflow-hidden rounded-xl border bg-muted">
                  {images.length > 0 ? (
                    <div className="relative min-h-0 flex-1">
                      <Carousel setApi={setCarouselApi} className="h-full">
                        <CarouselContent className="h-full">
                          {images.map((img, index) => (
                            <CarouselItem key={index} className="h-full">
                              <AspectRatio ratio={3 / 2}>
                                <Image
                                  src={img.imageUrl}
                                  alt={img.title}
                                  fill
                                  className="object-cover object-top"
                                />
                              </AspectRatio>
                            </CarouselItem>
                          ))}
                        </CarouselContent>
                      </Carousel>

                      {/* Counter overlay */}
                      {slideCount > 0 && (
                        <span className="pointer-events-none absolute top-3 right-3 z-10 rounded-full bg-foreground/75 px-2.5 py-1 text-[10px] font-semibold text-background backdrop-blur-sm">
                          {currentSlide + 1} / {slideCount}
                        </span>
                      )}

                      {slideCount > 1 && (
                        <>
                          <button
                            onClick={() => carouselApi?.scrollPrev()}
                            disabled={currentSlide === 0}
                            className="absolute top-1/2 left-2 flex size-7 -translate-y-1/2 items-center justify-center rounded-full bg-black/50 text-white backdrop-blur-sm transition hover:bg-black/70 disabled:opacity-30"
                          >
                            <ArrowLeftIcon size={13} />
                          </button>
                          <button
                            onClick={() => carouselApi?.scrollNext()}
                            disabled={currentSlide === slideCount - 1}
                            className="absolute top-1/2 right-2 flex size-7 -translate-y-1/2 items-center justify-center rounded-full bg-black/50 text-white backdrop-blur-sm transition hover:bg-black/70 disabled:opacity-30"
                          >
                            <ArrowRightIcon size={13} />
                          </button>
                        </>
                      )}
                    </div>
                  ) : (
                    <AspectRatio ratio={3 / 2} className="flex-1">
                      <Image
                        src={project.thumbnailImage}
                        alt={project.name}
                        fill
                        className="object-cover object-top"
                        sizes="480px"
                      />
                    </AspectRatio>
                  )}
                </div>

                {/* Dot indicators — outside card */}
                {slideCount > 1 && (
                  <div className="flex justify-center gap-1.5">
                    {Array.from({ length: slideCount }).map((_, i) => (
                      <button
                        key={i}
                        onClick={() => carouselApi?.scrollTo(i)}
                        className={cn(
                          "rounded-full transition-all duration-200",
                          i === currentSlide
                            ? "h-1.5 w-4 bg-primary"
                            : "h-1.5 w-1.5 bg-border"
                        )}
                      />
                    ))}
                  </div>
                )}

                {/* Caption — outside card, below dots */}
                {currentImage && (
                  <div>
                    <p className="text-sm font-medium text-foreground">
                      {currentImage.title}
                    </p>
                    <p className="text-xs leading-relaxed text-muted-foreground">
                      {currentImage.description}
                    </p>
                  </div>
                )}
              </div>

              {/* Right: Impact + Stack + CTA */}
              <div className="flex w-full flex-col gap-4 sm:w-[40%] sm:gap-6">
                {/* IMPACT */}
                <div className="space-y-3">
                  <p className="text-[9px] font-bold tracking-widest text-muted-foreground uppercase">
                    Impact
                  </p>
                  <div className="space-y-3">
                    {project.impactMetrics.map((m) => (
                      <div
                        key={m.label}
                        className="flex items-baseline gap-2.5"
                      >
                        <span className="text-xl leading-none font-medium tracking-tight text-primary tabular-nums sm:text-2xl">
                          <AnimatedMetric
                            value={m.value}
                            triggerKey={triggerKey}
                          />
                        </span>
                        <span className="text-[10px] font-semibold tracking-widest text-muted-foreground uppercase">
                          {m.label}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* BUILT WITH */}
                {project.technologyStack.length > 0 && (
                  <div className="space-y-3">
                    <p className="text-[9px] font-bold tracking-widest text-muted-foreground uppercase">
                      Built With
                    </p>
                    <div className="flex flex-col gap-2.5">
                      {project.technologyStack.map((group) => (
                        <div
                          key={group.groupLabel}
                          className="flex items-start gap-3"
                        >
                          <span className="w-20 shrink-0 pt-0.5 text-[9px] font-bold tracking-widest text-muted-foreground uppercase">
                            {group.groupLabel}
                          </span>
                          <div className="flex flex-wrap gap-1">
                            {group.technologies.map((tech) => (
                              <span
                                key={tech}
                                className="rounded-sm bg-muted px-2 py-0.5 text-[11px] font-medium text-secondary-foreground"
                              >
                                {tech}
                              </span>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* CTA */}
                <div className="mt-auto flex flex-col gap-2">
                  {project.isPrivate && (
                    <p className="text-center text-[11px] text-muted-foreground">
                      Private project
                    </p>
                  )}
                  <Button
                    variant={project.isPrivate ? "outline" : "default"}
                    className="w-full"
                    asChild
                  >
                    <a
                      href={project.externalLink}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {project.isPrivate ? "View Product Site" : "Live Demo"}
                      <ArrowUpRightIcon size={12} />
                    </a>
                  </Button>
                </div>
              </div>
            </div>

            {/* ── "WHAT CHANGED" ── */}
            <section className="flex flex-col gap-4">
              <p className="text-[10px] font-bold tracking-widest text-muted-foreground uppercase">
                What Changed
              </p>
              <p className="text-sm leading-relaxed text-foreground">
                {project.whatChanged}
              </p>
              <div className="flex flex-col">
                {project.keyAchievements.map((a, i) => (
                  <div key={i} className="flex gap-3 md:gap-4">
                    {/* Number circle + connector */}
                    <div className="flex flex-col items-center">
                      <span className="flex size-6 shrink-0 items-center justify-center rounded-full bg-muted text-[10px] font-bold text-muted-foreground tabular-nums">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      {i < project.keyAchievements.length - 1 && (
                        <div className="my-1 w-px flex-1 bg-border" />
                      )}
                    </div>
                    {/* Content */}
                    <div
                      className={cn(
                        "pb-5",
                        i === project.keyAchievements.length - 1 && "pb-0"
                      )}
                    >
                      <p className="text-sm leading-6 font-semibold text-secondary-foreground">
                        {a.title}
                      </p>
                      <p className="mt-0.5 text-xs leading-relaxed text-foreground">
                        {a.detail}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* ── "THE CALLS I MADE" ── */}
            {project.technicalDecisions.length > 0 && (
              <section>
                <div className="overflow-hidden rounded-lg border border-muted bg-muted/70">
                  {/* Header */}
                  <div className="flex items-center gap-2 border-b px-4 py-2.5">
                    <span className="text-[11px] text-secondary-foreground">
                      —
                    </span>
                    <p className="text-[9px] font-bold tracking-widest text-secondary-foreground uppercase">
                      The Calls I Made
                    </p>
                  </div>
                  {/* Items */}
                  <ItemGroup className="gap-0 has-data-[size=sm]:gap-0 has-data-[size=xs]:gap-0">
                    {project.technicalDecisions.map((td, i) => (
                      <React.Fragment key={i}>
                        {i > 0 && <ItemSeparator className="my-0" />}
                        <Item
                          variant="default"
                          size="sm"
                          className="rounded-none py-2"
                        >
                          <ItemContent>
                            <ItemTitle className="line-clamp-none text-sm font-semibold text-secondary-foreground">
                              {td.decision}
                            </ItemTitle>
                            <ItemDescription className="line-clamp-none text-xs leading-relaxed text-foreground">
                              {td.rationale}
                            </ItemDescription>
                          </ItemContent>
                        </Item>
                      </React.Fragment>
                    ))}
                  </ItemGroup>
                </div>
              </section>
            )}

            {/* ── "ROLE & SCOPE" ── */}
            <section className="flex flex-col gap-3">
              <p className="text-[10px] font-bold tracking-widest text-muted-foreground uppercase">
                Role & Scope
              </p>

              <div>
                <div className="flex items-center gap-2">
                  <p className="text-base font-bold text-foreground">
                    {project.role}
                  </p>
                  <span className="rounded-full border px-2 py-0.5 text-[11px] font-medium text-muted-foreground">
                    {project.teamContext}
                  </span>
                </div>
                <p className="mt-0.5 text-xs text-muted-foreground">
                  {project.duration}
                </p>
              </div>

              <ul className="flex flex-col gap-1.5">
                {project.responsibilities.map((r, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-2 text-xs text-foreground/80"
                  >
                    <span className="mt-1.5 size-1 shrink-0 rounded-full bg-foreground/40" />
                    {r}
                  </li>
                ))}
              </ul>

              {project.primaryMilestone && (
                <Alert className="w-fit rounded-md border-emerald-500/30 bg-emerald-50/60 px-3 py-2 dark:bg-emerald-950/30 [&>svg]:text-emerald-600 dark:[&>svg]:text-emerald-400">
                  <TrophyIcon size={14} />
                  <AlertDescription className="text-[11px] font-medium text-emerald-700 dark:text-emerald-400">
                    {project.primaryMilestone}
                  </AlertDescription>
                </Alert>
              )}
            </section>
          </div>
        </div>

        {/* ── Footer ── */}
        <div className="flex shrink-0 items-center justify-between border-t px-5 py-3">
          <Button
            variant="ghost"
            size="sm"
            onClick={() => onNavigate(activeIndex - 1)}
            disabled={activeIndex === 0}
            className="gap-1.5 text-muted-foreground hover:text-foreground"
          >
            <ArrowLeftIcon size={13} />
            Previous
          </Button>
          <span className="text-xs text-muted-foreground">
            {activeIndex + 1} / {projects.length}
          </span>
          <Button
            variant="ghost"
            size="sm"
            onClick={() => onNavigate(activeIndex + 1)}
            disabled={activeIndex === projects.length - 1}
            className="gap-1.5 text-muted-foreground hover:text-foreground"
          >
            Next
            <ArrowRightIcon size={13} />
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  )
}
