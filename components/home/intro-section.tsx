"use client"

import Image from "next/image"
import Link from "next/link"
import { motion, type Variants } from "motion/react"
import {
  GithubLogoIcon,
  EnvelopeIcon,
  LinkedinLogoIcon,
} from "@phosphor-icons/react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { AspectRatio } from "@/components/ui/aspect-ratio"

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
  },
}

const slideLeft: Variants = {
  hidden: { opacity: 0, x: -32 },
  show: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
}

const slideRight: Variants = {
  hidden: { opacity: 0, x: 32 },
  show: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
}

const textStagger: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.15 } },
}

const paragraphItem: Variants = {
  hidden: { opacity: 0, y: 14 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, ease: [0.22, 1, 0.36, 1] },
  },
}

const badgePop: Variants = {
  hidden: { opacity: 0, scale: 0.8, y: 6 },
  show: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { duration: 0.35, ease: [0.22, 1, 0.36, 1], delay: 0.5 },
  },
}

const socialStagger: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08, delayChildren: 0.2 } },
}

const socialItem: Variants = {
  hidden: { opacity: 0, scale: 0.7 },
  show: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.3, ease: "easeOut" },
  },
}

export function IntroSection() {
  return (
    <section className="py-6 sm:py-8">
      {/* Header */}
      <motion.div
        className="mb-4 grid grid-cols-1 gap-4 md:mb-12 lg:grid-cols-2 lg:gap-12"
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-60px" }}
      >
        <div>
          <Badge variant="outline" className="mb-3">
            About Me
          </Badge>
          <h2 className="font-heading text-3xl font-bold tracking-tight">
            Engineering with Purpose.
          </h2>
        </div>
        <p className="self-end text-sm leading-relaxed text-muted-foreground md:text-base">
          I build systems that scale, teams that grow, and software that makes a
          measurable difference in the real world.
        </p>
      </motion.div>

      {/* Body */}
      <div className="grid grid-cols-1 gap-10 lg:grid-cols-2 lg:gap-16">
        {/* Left — Avatar */}
        <motion.div
          className="flex flex-col gap-4"
          variants={slideLeft}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-60px" }}
        >
          <div className="mx-auto w-full max-w-sm lg:mx-0">
            <AspectRatio
              ratio={1 / 1}
              className="overflow-hidden rounded-2xl bg-muted"
            >
              <Image
                src="/avatar.png"
                alt="Phyae Sone Thwim"
                fill
                className="object-cover object-top"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />

              {/* Available badge */}
              <motion.div
                className="absolute bottom-3 left-1/2 -translate-x-1/2"
                variants={badgePop}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
              >
                <span className="inline-flex items-center gap-1.5 rounded-full border bg-background/90 px-3 py-1.5 text-xs font-medium shadow-sm backdrop-blur-sm">
                  <span className="size-1.5 rounded-full bg-green-500" />
                  Available for Work
                </span>
              </motion.div>
            </AspectRatio>
          </div>

          {/* Name + title + socials */}
          <div className="mx-auto flex w-full max-w-sm items-center justify-between lg:mx-0">
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
            >
              <p className="font-heading text-sm font-semibold">
                Phyae Sone Thwim
              </p>
              <p className="text-xs text-muted-foreground">
                Senior Full Stack Engineer
              </p>
            </motion.div>

            <motion.div
              className="flex items-center gap-1"
              variants={socialStagger}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
            >
              <motion.div variants={socialItem}>
                <Button
                  size="icon-sm"
                  variant="ghost"
                  className="rounded-full"
                  asChild
                >
                  <a
                    href="https://github.com/MrPhyaeSoneThwim"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <GithubLogoIcon strokeWidth={5} className="size-4" />
                  </a>
                </Button>
              </motion.div>
              <motion.div variants={socialItem}>
                <Button
                  size="icon-sm"
                  variant="ghost"
                  className="rounded-full"
                  asChild
                >
                  <a
                    href="https://linkedin.com/in/phyaesonethwim"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <LinkedinLogoIcon strokeWidth={5} className="size-4" />
                  </a>
                </Button>
              </motion.div>
              <motion.div variants={socialItem}>
                <Button
                  size="icon-sm"
                  variant="ghost"
                  className="rounded-full"
                  asChild
                >
                  <a href="mailto:mr.phyaesonethwim1998@gmail.com">
                    <EnvelopeIcon strokeWidth={5} className="size-4" />
                  </a>
                </Button>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>

        {/* Right — Text */}
        <motion.div
          className="flex flex-col justify-center gap-6"
          variants={slideRight}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-60px" }}
        >
          <motion.div
            className="flex flex-col gap-4 text-sm leading-relaxed text-muted-foreground"
            variants={textStagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            <motion.p variants={paragraphItem}>
              <span className="font-semibold text-foreground">
                Engineering isn&apos;t just my job. It&apos;s how I think.
              </span>{" "}
              I started building software to solve real problems and found that
              the craft itself, from architecture to tradeoffs to the details,
              is what drives me.
            </motion.p>

            <motion.p variants={paragraphItem}>
              <span className="font-semibold text-foreground">
                My approach is rooted in clarity and ownership.
              </span>{" "}
              I focus on understanding the why behind every feature, designing
              systems that last, and shipping software that teams are proud to
              maintain.
            </motion.p>

            <motion.p variants={paragraphItem}>
              <span className="font-semibold text-foreground">
                I&apos;m deliberate about the details because they compound.
              </span>{" "}
              Clean code, thoughtful APIs, and reliable deployments all add up
              to products that hold up in production.
            </motion.p>
          </motion.div>

          <motion.div
            className="flex items-center gap-3 pt-5"
            variants={paragraphItem}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            <Button variant="default" className="rounded-full" asChild>
              <Link href="/about">More About Me</Link>
            </Button>
            <Button variant="secondary" className="rounded-full" asChild>
              <Link href="/contact">Get in Touch</Link>
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
