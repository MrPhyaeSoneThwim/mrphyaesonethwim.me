"use client"

import Image from "next/image"
import { motion, type Variants } from "motion/react"
import { CheckCircleIcon, ArrowUpRightIcon } from "@phosphor-icons/react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { AspectRatio } from "@/components/ui/aspect-ratio"
import { type Project, type TechItem } from "@/lib/constant"

function TechIcon({ tech }: { tech: TechItem }) {
  if (tech.type === "image" && tech.image) {
    return (
      <Image
        src={tech.image}
        alt={tech.label}
        width={14}
        height={14}
        className="size-3.5 rounded-sm object-contain"
      />
    )
  }
  if (tech.type === "icon" && tech.icon) {
    return <i className={`${tech.icon} text-sm leading-none`} />
  }
  if (tech.icon) {
    return <i className={`${tech.icon} text-sm leading-none`} />
  }
  return null
}

const slideLeft: Variants = {
  hidden: { opacity: 0, x: -40 },
  show: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
}

const slideRight: Variants = {
  hidden: { opacity: 0, x: 40 },
  show: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
}

const badgeContainer: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.06, delayChildren: 0.3 } },
}

const badgeItem: Variants = {
  hidden: { opacity: 0, scale: 0.88 },
  show: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.3, ease: "easeOut" },
  },
}

export function ProjectList({ projects }: { projects: Project[] }) {
  return (
    <div className="flex flex-col">
      {projects.map((project, index) => {
        const isEven = index % 2 === 0
        const textAnim = isEven ? slideLeft : slideRight
        const imageAnim = isEven ? slideRight : slideLeft

        return (
          <div key={project.name} className="border-t first:border-t-0">
            <div className="grid grid-cols-1 gap-6 py-10 sm:py-12 lg:grid-cols-2 lg:gap-12 lg:py-16">
              {/* Text block */}
              <motion.div
                className={`order-2 flex flex-col justify-center gap-5 ${isEven ? "lg:order-1" : ""}`}
                variants={textAnim}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, margin: "-80px" }}
              >
                <h3 className="font-sans text-xl font-bold tracking-tight md:text-2xl">
                  {project.name}
                </h3>

                <p className="text-sm leading-relaxed text-muted-foreground">
                  {project.description}
                </p>

                <ul className="flex flex-col gap-2.5">
                  {project.achievements.map((item) => (
                    <li key={item} className="flex items-start gap-2.5 text-sm">
                      <CheckCircleIcon
                        weight="fill"
                        className="mt-0.5 shrink-0 text-foreground"
                        size={16}
                      />
                      <span className="text-muted-foreground">{item}</span>
                    </li>
                  ))}
                </ul>

                {/* Tech badges */}
                <motion.div
                  className="mt-1 flex flex-wrap gap-2"
                  variants={badgeContainer}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true }}
                >
                  {project.technologies.map((tech) => (
                    <motion.div key={tech.label} variants={badgeItem}>
                      <Badge
                        variant="secondary"
                        className="h-auto gap-1.5 px-3 py-1.5"
                      >
                        <TechIcon tech={tech} />
                        {tech.label}
                      </Badge>
                    </motion.div>
                  ))}
                </motion.div>

                <motion.div
                  className="mt-1 w-fit"
                  whileHover={{ scale: 1.04 }}
                  whileTap={{ scale: 0.96 }}
                  transition={{ duration: 0.15, ease: "easeOut" }}
                >
                  <Button variant="outline" size="sm" asChild>
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      View Project
                      <ArrowUpRightIcon size={14} />
                    </a>
                  </Button>
                </motion.div>
              </motion.div>

              {/* Image block */}
              <motion.div
                className={`order-1 ${isEven ? "lg:order-2" : ""}`}
                variants={imageAnim}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, margin: "-80px" }}
              >
                <AspectRatio
                  ratio={4 / 3}
                  className="overflow-hidden rounded-xl bg-muted"
                >
                  <Image
                    src={project.image}
                    alt={project.name}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </AspectRatio>
              </motion.div>
            </div>
          </div>
        )
      })}
    </div>
  )
}
