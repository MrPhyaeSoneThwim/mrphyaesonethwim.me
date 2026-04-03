"use client"

import Link from "next/link"
import { motion, type Variants } from "motion/react"
import { ArrowRightIcon } from "@phosphor-icons/react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { projects } from "@/lib/constant"
import { ProjectList } from "@/components/projects/project-list"

const featured = projects.filter((p) => p.featured)

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] },
  },
}

export function FeaturedWorkSection() {
  return (
    <section className="border-t py-8 md:py-14 lg:py-16">
      {/* Header */}
      <motion.div
        className="mb-0 grid grid-cols-1 gap-4 sm:mb-16 lg:mb-12 lg:grid-cols-2 lg:gap-12"
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-60px" }}
      >
        <div>
          <Badge variant="outline" className="mb-3">
            Featured Work
          </Badge>
          <h2 className="font-heading text-3xl font-bold tracking-tight">
            Built for Scale, Shipped to Production
          </h2>
        </div>
        <p className="self-end text-sm leading-relaxed text-muted-foreground md:text-base">
          From government surveillance platforms to fintech apps, real systems
          built for real users at scale.
        </p>
      </motion.div>

      <ProjectList projects={featured} />

      {/* Bottom CTA */}
      <motion.div
        className="flex flex-col items-start justify-between gap-6 rounded-xl border px-6 py-6 sm:flex-row sm:items-center"
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-40px" }}
      >
        <div>
          <p className="text-lg font-semibold tracking-tight">
            There&apos;s more to explore
          </p>
          <p className="mt-0.5 text-sm text-muted-foreground">
            {projects.length} projects across mobile, web, and enterprise
            platforms
          </p>
        </div>

        <div className="flex items-center gap-6 sm:gap-8">
          <div className="text-center">
            <p className="text-2xl font-bold">{projects.length}</p>
            <p className="text-xs text-muted-foreground">Projects</p>
          </div>
          <div className="h-8 w-px bg-border" />
          <div className="text-center">
            <p className="text-2xl font-bold">3+</p>
            <p className="text-xs text-muted-foreground">Industries</p>
          </div>
          <div className="h-8 w-px bg-border" />
          <Button variant="outline" size="sm" asChild>
            <Link href="/projects">
              See all work
              <ArrowRightIcon size={14} />
            </Link>
          </Button>
        </div>
      </motion.div>
    </section>
  )
}
