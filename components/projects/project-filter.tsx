"use client"

import * as React from "react"
import { motion } from "motion/react"
import { projects } from "@/lib/constant"
import { ProjectList } from "@/components/projects/project-list"
import { cn } from "@/lib/utils"

export function ProjectFilter() {
  const [activeCategory, setActiveCategory] = React.useState("All")

  const categories = React.useMemo(() => {
    const labels = ["All", "Featured", "Mobile", "Web", "Enterprise"]
    return labels.map((name) => ({
      name,
      count:
        name === "All"
          ? projects.length
          : name === "Mobile" || name === "Web"
            ? projects.filter((p) => p.targetPlatform === name).length
            : projects.filter((p) => p.industrySectors.includes(name)).length,
    }))
  }, [])

  const filtered = React.useMemo(
    () =>
      activeCategory === "All"
        ? projects
        : projects.filter((p) =>
            activeCategory === "Mobile" || activeCategory === "Web"
              ? p.targetPlatform === activeCategory
              : p.industrySectors.includes(activeCategory)
          ),
    [activeCategory]
  )

  return (
    <>
      <div className="no-scrollbar -mx-4 flex gap-2 overflow-x-auto px-4 pb-4 sm:mx-0 sm:flex-wrap sm:px-0">
        {categories.map(({ name, count }, index) => (
          <motion.button
            key={name}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.3 + index * 0.06 }}
            onClick={() => setActiveCategory(name)}
            className={cn(
              "inline-flex shrink-0 items-center gap-1.5 rounded-full border px-3 py-1.5 text-xs font-medium transition-colors",
              activeCategory === name
                ? "border-foreground bg-foreground text-background"
                : "border-border bg-transparent text-muted-foreground hover:border-foreground/40 hover:text-foreground"
            )}
          >
            {name}
            <span className="text-[10px] font-semibold opacity-60">
              {count}
            </span>
          </motion.button>
        ))}
      </div>
      <ProjectList projects={filtered} />
    </>
  )
}
