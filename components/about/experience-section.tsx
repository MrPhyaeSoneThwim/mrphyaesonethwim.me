"use client"

import { motion } from "motion/react"
import { Badge } from "@/components/ui/badge"
import { WorkExperience } from "@/components/ui/work-experience"
import { EXPERIENCE } from "@/lib/constant"

export function ExperienceSection() {
  return (
    <section className="border-t py-8 md:py-14 lg:py-16">
      <motion.div
        className="mb-4 grid grid-cols-1 gap-4 md:mb-12 lg:grid-cols-2 lg:gap-12"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      >
        <div>
          <Badge variant="outline" className="mb-3">
            Experience
          </Badge>
          <h2 className="font-heading text-3xl font-bold tracking-tight">
            Experience that delivers.
          </h2>
        </div>
        <p className="self-end text-sm leading-relaxed text-muted-foreground md:text-base">
          Across fintech, enterprise, and government. Shipping production
          software that performs, scales, and stays maintainable.
        </p>
      </motion.div>

      <WorkExperience
        className="*:screen-line-bottom bg-transparent"
        experiences={EXPERIENCE}
      />
    </section>
  )
}
