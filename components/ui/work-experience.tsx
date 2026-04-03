"use client"

import {
  BriefcaseBusinessIcon,
  Building2Icon,
  InfinityIcon,
} from "lucide-react"
import { type ComponentProps, useCallback, useRef } from "react"
import { motion } from "motion/react"

import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible"
import { Separator } from "@/components/ui/separator"
import { cn } from "@/lib/utils"
import { ChevronsUpDownIcon, ChevronsUpDownIconHandle } from "./chevron-up-down"

export type ExperiencePositionItemType = {
  /** Unique identifier for the position */
  id: string
  /** The job title or position name */
  title: string
  /**
   * Employment period of the position.
   * Use "MM.YYYY" or "YYYY" format. Omit `end` for current roles.
   */
  employmentPeriod: {
    /** Start date (e.g., "10.2022" or "2020"). */
    start: string
    /** End date; leave undefined for "Present". */
    end?: string
  }
  /** The type of employment (e.g., "Full-time", "Part-time", "Contract") */
  employmentType?: string
  /** Bullet points describing responsibilities and achievements */
  description?: string[]
  /** An icon representing the position */
  icon?: React.ReactElement
  /** A list of skills associated with the position */
  skills?: string[]
  /** Indicates if the position details are expanded in the UI */
  isExpanded?: boolean
}

export type ExperienceItemType = {
  /** Unique identifier for the experience item */
  id: string
  /** Name of the company where the experience was gained */
  companyName: string
  /** URL or path to the company's logo image */
  companyLogo?: string
  /** URL to the company's website. */
  companyWebsite?: string
  /**
   * List of positions held at the company
   * @fumadocsHref #experiencepositionitemtype
   * */
  positions: ExperiencePositionItemType[]
  /** Indicates if this is the user's current employer */
  isCurrentEmployer?: boolean
}

export type WorkExperienceProps = {
  className?: string
  /** @fumadocsHref #experienceitemtype */
  experiences: ExperienceItemType[]
}

function formatDate(date: string): string {
  const parts = date.split(".")
  if (parts.length === 2) {
    const [month, year] = parts
    const d = new Date(parseInt(year), parseInt(month) - 1)
    return d.toLocaleDateString("en-US", { month: "short", year: "numeric" })
  }
  return date
}

export function WorkExperience({
  className,
  experiences,
}: WorkExperienceProps) {
  return (
    <div className={cn("bg-background text-foreground", className)}>
      {experiences.map((experience, i) => (
        <ExperienceItem key={experience.id} experience={experience} index={i} />
      ))}
    </div>
  )
}

export type ExperienceItemProps = {
  experience: ExperienceItemType
  index?: number
}

export function ExperienceItem({ experience, index = 0 }: ExperienceItemProps) {
  return (
    <motion.div
      className="space-y-4 py-4"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{
        duration: 0.45,
        ease: [0.22, 1, 0.36, 1],
        delay: index * 0.07,
      }}
    >
      <div className="not-prose -ml-1 flex items-center gap-3">
        <div className="flex size-8 shrink-0 items-center justify-center overflow-hidden rounded-full border border-muted bg-muted">
          {experience.companyLogo ? (
            <img
              src={experience.companyLogo}
              alt={experience.companyName}
              className="size-8 rounded-full"
              aria-hidden
            />
          ) : (
            <Building2Icon className="size-4 text-muted-foreground" />
          )}
        </div>

        <h3 className="font-heading text-lg leading-snug font-semibold">
          {experience.companyWebsite ? (
            <a
              className="underline-offset-4 hover:underline"
              href={experience.companyWebsite}
              target="_blank"
              rel="noopener noreferrer"
            >
              {experience.companyName}
            </a>
          ) : (
            experience.companyName
          )}
        </h3>

        {experience.isCurrentEmployer && (
          <span className="relative flex items-center justify-center">
            <span className="absolute inline-flex size-3 animate-ping rounded-full bg-sky-500 opacity-50" />
            <span className="relative inline-flex size-2 rounded-full bg-sky-500" />
            <span className="sr-only">Current Employer</span>
          </span>
        )}
      </div>

      <div className="relative space-y-4 before:absolute before:left-3 before:h-full before:w-px before:bg-border">
        {experience.positions.map((position, pi) => (
          <ExperiencePositionItem
            key={position.id}
            position={position}
            index={pi}
          />
        ))}
      </div>
    </motion.div>
  )
}

export type ExperiencePositionItemProps = {
  position: ExperiencePositionItemType
  index?: number
}

export function ExperiencePositionItem({
  position,
  index = 0,
}: ExperiencePositionItemProps) {
  const chevronsIconRef = useRef<ChevronsUpDownIconHandle>(null)

  const handleOpenChange = useCallback((open: boolean) => {
    const controls = chevronsIconRef.current
    if (!controls) return
    if (open) controls.startAnimation()
    else controls.stopAnimation()
  }, [])

  const { start, end } = position.employmentPeriod
  const isOngoing = !end

  return (
    <motion.div
      initial={{ opacity: 0, x: -12 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-30px" }}
      transition={{
        duration: 0.4,
        ease: [0.22, 1, 0.36, 1],
        delay: index * 0.08,
      }}
    >
      <Collapsible
        defaultOpen={position.isExpanded}
        onOpenChange={handleOpenChange}
        disabled={!position.description?.length}
        asChild
      >
        <div className="relative last:before:absolute last:before:h-full last:before:w-4 last:before:bg-background">
          <CollapsibleTrigger
            className={cn(
              "group/experience-position not-prose block w-full text-left select-none",
              "relative before:absolute before:-top-1 before:-right-1 before:-bottom-1.5 before:left-7 before:rounded-lg hover:before:bg-muted/30",
              "data-disabled:before:content-none"
            )}
          >
            <div className="relative z-1 mb-1 flex items-center gap-3">
              <div
                className={cn(
                  "flex size-6 shrink-0 items-center justify-center rounded-lg",
                  "bg-muted text-muted-foreground",
                  "ring-line border border-muted-foreground/15 ring-1 ring-input ring-offset-1 ring-offset-background",
                  "[&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-5"
                )}
              >
                {position.icon ?? <BriefcaseBusinessIcon />}
              </div>

              <h4 className="flex-1 text-base font-medium text-balance text-foreground">
                {position.title}
              </h4>

              <div className="shrink-0 text-muted-foreground group-disabled/experience-position:hidden [&_svg]:size-4">
                <ChevronsUpDownIcon ref={chevronsIconRef} duration={0.15} />
              </div>
            </div>

            <div className="relative z-1 flex items-center gap-2 pl-9 text-sm text-muted-foreground">
              {position.employmentType && (
                <>
                  <dl>
                    <dt className="sr-only">Employment Type</dt>
                    <dd>{position.employmentType}</dd>
                  </dl>

                  <Separator
                    className="data-vertical:h-4 data-vertical:self-center"
                    orientation="vertical"
                  />
                </>
              )}

              <dl>
                <dt className="sr-only">Employment Period</dt>
                <dd className="flex items-center gap-1">
                  <span>{formatDate(start)}</span>
                  <span className="font-mono">–</span>
                  {isOngoing ? (
                    <>
                      <InfinityIcon className="size-4.5 translate-y-[0.5px]" />
                      <span className="sr-only">Present</span>
                    </>
                  ) : (
                    <span>{formatDate(end!)}</span>
                  )}
                </dd>
              </dl>
            </div>
          </CollapsibleTrigger>

          <CollapsibleContent className="overflow-hidden">
            {position.description && position.description.length > 0 && (
              <ul className="not-prose flex flex-col gap-1.5 pt-2 pl-9">
                {position.description.map((item, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-2 font-mono text-xs text-muted-foreground md:text-sm"
                  >
                    <span className="mt-1.5 size-1 shrink-0 rounded-full bg-muted-foreground" />
                    {item}
                  </li>
                ))}
              </ul>
            )}
          </CollapsibleContent>

          {Array.isArray(position.skills) && position.skills.length > 0 && (
            <ul className="not-prose flex flex-wrap gap-1.5 pt-3 pl-9">
              {position.skills.map((skill, i) => (
                <li key={i} className="flex">
                  <Skill>{skill}</Skill>
                </li>
              ))}
            </ul>
          )}
        </div>
      </Collapsible>
    </motion.div>
  )
}

function Skill({ className, ...props }: ComponentProps<"span">) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-lg border bg-muted/50 px-1.5 py-0.5 font-mono text-xs text-muted-foreground",
        className
      )}
      {...props}
    />
  )
}
