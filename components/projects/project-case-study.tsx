"use client"

import * as React from "react"
import Image from "next/image"
import Link from "next/link"
import type { Icon } from "@phosphor-icons/react"
import {
  ArrowLeftIcon,
  ArrowRightIcon,
  ArrowUpRightIcon,
  UserIcon,
  UsersThreeIcon,
  CalendarIcon,
  MonitorIcon,
  DeviceMobileIcon,
  GitBranchIcon,
  FileTextIcon,
  DatabaseIcon,
  ShieldIcon,
  ChartBarIcon,
  LightningIcon,
  SquaresFourIcon,
  CodeIcon,
  HardDriveIcon,
  GlobeIcon,
  ChatCircleIcon,
  RadioIcon,
  CreditCardIcon,
  CheckCircleIcon,
  BankIcon,
  ChartLineUpIcon,
  ShoppingCartIcon,
  ClockIcon,
  VideoCameraSlashIcon,
  ShieldCheckIcon,
  BellIcon,
  RobotIcon,
  AppStoreLogoIcon,
  GooglePlayLogoIcon,
} from "@phosphor-icons/react"
import { AspectRatio } from "@/components/ui/aspect-ratio"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import {
  type CarouselApi,
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "@/components/ui/carousel"
import { projects } from "@/lib/constant"
import { cn } from "@/lib/utils"

// ── Constants ────────────────────────────────────────────────────────────────

const SECTOR_COLORS: Record<string, string> = {
  Fintech:
    "border-emerald-500/30 bg-emerald-500/10 text-emerald-600 dark:text-emerald-400",
  GovTech: "border-blue-500/30 bg-blue-500/10 text-blue-600 dark:text-blue-400",
  Enterprise:
    "border-violet-500/30 bg-violet-500/10 text-violet-600 dark:text-violet-400",
  "Retail Tech":
    "border-orange-500/30 bg-orange-500/10 text-orange-600 dark:text-orange-400",
  "Supply Chain":
    "border-amber-500/30 bg-amber-500/10 text-amber-600 dark:text-amber-400",
  CleanTech:
    "border-green-500/30 bg-green-500/10 text-green-600 dark:text-green-400",
  IoT: "border-cyan-500/30 bg-cyan-500/10 text-cyan-600 dark:text-cyan-400",
  Web3: "border-purple-500/30 bg-purple-500/10 text-purple-600 dark:text-purple-400",
  Community:
    "border-pink-500/30 bg-pink-500/10 text-pink-600 dark:text-pink-400",
  Education:
    "border-yellow-500/30 bg-yellow-500/10 text-yellow-700 dark:text-yellow-400",
  Data: "border-indigo-500/30 bg-indigo-500/10 text-indigo-600 dark:text-indigo-400",
  "AI-Driven":
    "border-fuchsia-500/30 bg-fuchsia-500/10 text-fuchsia-600 dark:text-fuchsia-400",
}

const ICON_MAP: Record<string, Icon> = {
  Layers: SquaresFourIcon,
  Layout: SquaresFourIcon,
  BarChart2: ChartBarIcon,
  MessageCircle: ChatCircleIcon,
  Robot: RobotIcon,
  GitBranch: GitBranchIcon,
  Zap: LightningIcon,
  Database: DatabaseIcon,
  Shield: ShieldIcon,
  Code: CodeIcon,
  Globe: GlobeIcon,
  Server: HardDriveIcon,
  FileText: FileTextIcon,
  Radio: RadioIcon,
  CreditCard: CreditCardIcon,
  CheckCircle: CheckCircleIcon,
  Users: UsersThreeIcon,
  Landmark: BankIcon,
  TrendingUp: ChartLineUpIcon,
  ShoppingCart: ShoppingCartIcon,
  Clock: ClockIcon,
  Video: VideoCameraSlashIcon,
  ShieldCheck: ShieldCheckIcon,
  Bell: BellIcon,
}

// ── Sub-components ────────────────────────────────────────────────────────────

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <div className="mb-3 flex items-center gap-3">
      <span className="shrink-0 text-[11px] font-semibold tracking-widest text-muted-foreground uppercase">
        {children}
      </span>
      <div className="h-px flex-1 bg-border" />
    </div>
  )
}

// ── Main component ────────────────────────────────────────────────────────────

export function ProjectCaseStudy({ id }: { id: string }) {
  const [api, setApi] = React.useState<CarouselApi>()
  const [current, setCurrent] = React.useState(0)

  React.useEffect(() => {
    if (!api) return
    setCurrent(api.selectedScrollSnap())
    api.on("select", () => setCurrent(api.selectedScrollSnap()))
  }, [api])

  const index = projects.findIndex((p) => p.id === id)
  const project = projects[index]
  if (!project) return null

  const displaySectors = project.industrySectors.filter((s) => s !== "Featured")
  const prev = index > 0 ? projects[index - 1] : null
  const next = index < projects.length - 1 ? projects[index + 1] : null
  const allTechs = project.sidebar.technologyStack.flatMap(
    (g) => g.technologies
  )
  const PlatformIcon =
    project.hero.meta.platform === "Mobile" ? DeviceMobileIcon : MonitorIcon

  const slides =
    project.visuals.length > 0
      ? project.visuals
      : [{ src: project.thumbnailImage, caption: project.name }]

  return (
    <div className="py-4 md:py-10">
      {/* Back */}
      <div className="mb-6">
        <Link
          href="/projects"
          className="inline-flex items-center gap-1.5 text-sm text-muted-foreground transition-colors hover:text-foreground"
        >
          <ArrowLeftIcon size={13} />
          All Projects
        </Link>
      </div>

      {/* ── Hero ─────────────────────────────────────────────────────────── */}
      <section className="mb-6 pb-6">
        <div className="mb-3 flex flex-wrap gap-1.5">
          {displaySectors.map((tag) => (
            <span
              key={tag}
              className={cn(
                "inline-flex items-center rounded-full border px-2 py-0.5 text-[11px] font-semibold",
                SECTOR_COLORS[tag] ??
                  "border-border bg-muted text-muted-foreground"
              )}
            >
              {tag}
            </span>
          ))}
        </div>

        <h1 className="mb-2.5 text-3xl leading-tight font-bold tracking-tight md:text-4xl">
          {project.hero.title}
        </h1>

        <p className="mb-5 max-w-2xl text-base leading-relaxed text-muted-foreground">
          {project.hero.summary}
        </p>

        <div className="flex flex-wrap items-center gap-x-5 gap-y-1.5 text-sm text-muted-foreground">
          {[
            { Icon: UserIcon, label: project.hero.meta.role },
            { Icon: UsersThreeIcon, label: project.hero.meta.teamSize },
            { Icon: CalendarIcon, label: project.hero.meta.duration },
            { Icon: PlatformIcon, label: project.hero.meta.platform },
          ].map(({ Icon, label }) => (
            <span
              key={label}
              className="inline-flex items-center gap-1.5 text-sm"
            >
              <Icon size={14} className="shrink-0 text-primary" />
              {label}
            </span>
          ))}
        </div>
      </section>

      {/* ── Carousel ─────────────────────────────────────────────────────── */}
      <section className="mb-10">
        <Carousel setApi={setApi} opts={{ align: "start" }} className="w-full">
          <CarouselContent className="items-stretch">
            {slides.map((slide, i) => (
              <CarouselItem key={i} className="flex flex-col lg:basis-1/2">
                <Card className="h-full gap-0 border border-border p-3 ring-0">
                  <AspectRatio
                    ratio={3 / 2}
                    className="overflow-hidden rounded-lg"
                  >
                    <Image
                      src={slide.src}
                      alt={slide.caption}
                      fill
                      sizes="(min-width: 1024px) 40vw, 90vw"
                      className="object-cover object-center"
                      priority={i === 0}
                    />
                  </AspectRatio>
                  {slide.caption && (
                    <p className="mt-2.5 text-xs font-medium text-foreground/80">
                      {slide.caption}
                    </p>
                  )}
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          {slides.length > 1 && (
            <div className="relative mt-3 grid grid-cols-[auto_1fr_auto] items-center gap-2 lg:flex lg:justify-end">
              <CarouselPrevious className="static translate-x-0 translate-y-0 bg-card hover:bg-muted active:translate-y-0" />
              <div className="flex items-center justify-center gap-1.5 lg:absolute lg:left-1/2 lg:-translate-x-1/2">
                {slides.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => api?.scrollTo(i)}
                    className={cn(
                      "h-2 rounded-full transition-all duration-300",
                      i === current
                        ? "w-5 bg-primary"
                        : "w-2 bg-muted-foreground/30 hover:bg-muted-foreground/50"
                    )}
                  />
                ))}
              </div>
              <CarouselNext className="static translate-x-0 translate-y-0 bg-card hover:bg-muted active:translate-y-0" />
            </div>
          )}
        </Carousel>
      </section>

      {/* ── Body: main + sidebar ─────────────────────────────────────────── */}
      <div className="grid grid-cols-1 items-start gap-10 lg:grid-cols-[1fr_320px] lg:gap-12">
        {/* ── Main ── */}
        <div className="space-y-12">
          {/* 1. The Challenge */}
          {project.challenge.prose && (
            <section>
              <SectionLabel>The Challenge</SectionLabel>
              <p className="mb-4 text-[15px] leading-relaxed text-foreground">
                {project.challenge.prose}
              </p>
              {project.challenge.pullQuote && (
                <blockquote className="rounded-r-md border-l-2 border-primary/50 bg-primary/5 py-3 pr-3 pl-4">
                  <p className="text-sm leading-relaxed text-primary/90 italic">
                    &ldquo;{project.challenge.pullQuote}&rdquo;
                  </p>
                </blockquote>
              )}
            </section>
          )}

          {/* 2. What I Did */}
          {project.whatIDid.contributions.length > 0 && (
            <section>
              <SectionLabel>What I Did</SectionLabel>
              {project.whatIDid.intro && (
                <p className="mb-6 text-[15px] leading-relaxed text-foreground">
                  {project.whatIDid.intro}
                </p>
              )}
              <div className="space-y-5">
                {project.whatIDid.contributions.map((c, i) => {
                  const Icon = ICON_MAP[c.icon] ?? GitBranchIcon
                  return (
                    <div key={i} className="flex gap-3.5">
                      <div className="flex size-8 shrink-0 items-center justify-center rounded-md border border-primary/20 bg-primary/10">
                        <Icon size={15} className="text-primary/80" />
                      </div>
                      <div className="min-w-0 pt-0.5">
                        <p className="mb-0.5 text-sm leading-snug font-semibold">
                          {c.title}
                        </p>
                        <p className="text-sm leading-relaxed text-foreground/90">
                          {c.detail}
                        </p>
                      </div>
                    </div>
                  )
                })}
              </div>
            </section>
          )}

          {/* 3. Results */}
          <section>
            <SectionLabel>Results</SectionLabel>
            <div className="grid grid-cols-2 gap-2.5">
              {project.results.map((r, i) => {
                const Icon = ICON_MAP[r.icon] ?? LightningIcon
                return (
                  <div
                    key={i}
                    className="rounded-lg border border-border bg-muted/20 p-3.5"
                  >
                    <div className="mb-1.5 flex items-center gap-1.5">
                      <Icon size={13} className="shrink-0 text-primary" />
                      <p className="text-lg font-bold tracking-tight text-foreground">
                        {r.value}
                      </p>
                    </div>
                    <p className="mb-1 text-[13px] font-semibold text-foreground">
                      {r.label}
                    </p>
                    <p className="text-xs leading-relaxed text-foreground/70">
                      {r.description}
                    </p>
                  </div>
                )
              })}
            </div>
          </section>

          {/* 4. What I Learned */}
          {project.whatILearned.length > 0 && (
            <section>
              <SectionLabel>What I Learned</SectionLabel>
              <ul className="space-y-4">
                {project.whatILearned.map((item, i) => (
                  <li key={i} className="flex gap-3.5">
                    <span className="mt-1 flex size-5 shrink-0 items-center justify-center rounded-full bg-primary/10 text-[10px] font-bold text-primary">
                      {i + 1}
                    </span>
                    <p className="text-sm leading-relaxed">
                      <span className="font-semibold">{item.lead}. </span>
                      <span className="text-foreground/85">{item.detail}</span>
                    </p>
                  </li>
                ))}
              </ul>
            </section>
          )}
        </div>

        {/* ── Sidebar ── */}
        <aside>
          <div className="space-y-6 rounded-xl border border-border/60 bg-muted/20 p-5">
            <div>
              <p className="mb-1.5 text-[10px] font-semibold tracking-widest text-muted-foreground uppercase">
                My Role
              </p>
              <p className="text-sm leading-relaxed text-foreground">
                {project.sidebar.role}
              </p>
            </div>

            {project.sidebar.collaborators && (
              <div>
                <p className="mb-1.5 text-[10px] font-semibold tracking-widest text-muted-foreground uppercase">
                  Collaborators
                </p>
                <p className="text-sm leading-relaxed text-foreground">
                  {project.sidebar.collaborators}
                </p>
              </div>
            )}

            {project.sidebar.constraints &&
              project.sidebar.constraints.length > 0 && (
                <div>
                  <p className="mb-2 text-[10px] font-semibold tracking-widest text-muted-foreground uppercase">
                    Constraints
                  </p>
                  <ul className="space-y-1.5">
                    {project.sidebar.constraints.map((c, i) => (
                      <li
                        key={i}
                        className="flex gap-2 text-sm leading-snug text-foreground/80"
                      >
                        <span className="mt-2 size-1 shrink-0 rounded-full bg-muted-foreground/40" />
                        {c}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

            <div>
              <p className="mb-2 text-[10px] font-semibold tracking-widest text-muted-foreground uppercase">
                Stack &amp; Tools
              </p>
              <div className="flex flex-wrap gap-2">
                {allTechs.map((tech) => (
                  <Badge
                    key={tech}
                    variant="outline"
                    className="h-6 rounded-md"
                  >
                    {tech}
                  </Badge>
                ))}
              </div>
            </div>

            {project.demoLinks ? (
              <div className="flex flex-col gap-2">
                {project.demoLinks.web && (
                  <Button
                    className="w-full"
                    variant={project.isPrivate ? "outline" : "default"}
                    asChild
                  >
                    <a
                      href={project.demoLinks.web}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {project.isPrivate ? "Product Site" : "Live Demo"}
                      <ArrowUpRightIcon size={13} />
                    </a>
                  </Button>
                )}
                {project.demoLinks.ios && (
                  <Button className="w-full text-sm" variant="outline" asChild>
                    <a
                      href={project.demoLinks.ios}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <AppStoreLogoIcon size={14} />
                      App Store
                    </a>
                  </Button>
                )}
                {project.demoLinks.android && (
                  <Button className="w-full text-sm" variant="outline" asChild>
                    <a
                      href={project.demoLinks.android}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <GooglePlayLogoIcon size={14} />
                      Google Play
                    </a>
                  </Button>
                )}
              </div>
            ) : (
              project.sidebar.cta && (
                <Button
                  className="w-full"
                  variant={project.isPrivate ? "outline" : "default"}
                  asChild
                >
                  <a
                    href={project.sidebar.cta.url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {project.sidebar.cta.label}
                    <ArrowUpRightIcon size={13} />
                  </a>
                </Button>
              )
            )}
          </div>
        </aside>
      </div>

      {/* ── Prev / Next ──────────────────────────────────────────────────── */}
      <div className="mt-14 grid grid-cols-2 gap-3 border-t border-border pt-7">
        <div>
          {prev && (
            <Link
              href={`/projects/${prev.id}`}
              className="group flex flex-col gap-1 rounded-lg p-3 transition-colors hover:bg-muted/50"
            >
              <span className="inline-flex items-center gap-1 text-[10px] font-semibold tracking-widest text-muted-foreground uppercase">
                <ArrowLeftIcon
                  size={10}
                  className="transition-transform group-hover:-translate-x-0.5"
                />
                Previous
              </span>
              <span className="text-sm font-semibold text-foreground/75 transition-colors group-hover:text-foreground">
                {prev.name}
              </span>
            </Link>
          )}
        </div>
        <div className="text-right">
          {next && (
            <Link
              href={`/projects/${next.id}`}
              className="group flex flex-col items-end gap-1 rounded-lg p-3 transition-colors hover:bg-muted/50"
            >
              <span className="inline-flex items-center gap-1 text-[10px] font-semibold tracking-widest text-muted-foreground uppercase">
                Next
                <ArrowRightIcon
                  size={10}
                  className="transition-transform group-hover:translate-x-0.5"
                />
              </span>
              <span className="text-sm font-semibold text-foreground/75 transition-colors group-hover:text-foreground">
                {next.name}
              </span>
            </Link>
          )}
        </div>
      </div>
    </div>
  )
}
