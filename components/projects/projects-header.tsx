"use client"

import { motion } from "motion/react"

export function ProjectsHeader() {
  return (
    <div className="mb-4 grid grid-cols-1 gap-4 md:mb-12 lg:grid-cols-2 lg:gap-12">
      <div>
        <motion.span
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="mb-3 inline-flex items-center rounded-full border px-3 py-1 text-xs font-medium text-muted-foreground"
        >
          All Projects
        </motion.span>
        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="font-heading text-3xl font-bold tracking-tight"
        >
          Things I&apos;ve Shipped
        </motion.h1>
      </div>
      <motion.p
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="self-end text-sm leading-relaxed text-muted-foreground md:text-base"
      >
        Production projects across fintech, government, insurance, and enterprise
        serving real users, running at scale.
      </motion.p>
    </div>
  )
}
