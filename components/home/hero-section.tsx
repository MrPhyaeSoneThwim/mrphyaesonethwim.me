"use client"
import React from "react"
import Link from "next/link"
import Image from "next/image"
import { AnimatePresence, motion } from "motion/react"
import { Button } from "@/components/ui/button"
import {
  VideoCameraIcon,
  UsersIcon,
  BuildingsIcon,
  TrendUpIcon,
} from "@phosphor-icons/react"

const roles = [
  "Full Stack Engineer",
  "Software Engineer",
  "Frontend Engineer",
  "Mobile Engineer",
]

export function HeroSection() {
  const [currentRole, setCurrentRole] = React.useState(0)

  React.useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRole((prev) => (prev + 1) % roles.length)
    }, 2500)
    return () => clearInterval(interval)
  }, [])

  return (
    <section className="py-8 md:py-14 lg:py-16">
      <div className="grid grid-cols-1 items-center gap-10 md:gap-12 lg:grid-cols-2 lg:gap-16">
        {/* ── Left ── */}
        <div className="space-y-4">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="inline-flex w-fit items-center gap-2 rounded-full border px-3 py-1.5 text-xs font-medium"
          >
            <span className="relative flex size-2">
              <span className="absolute inline-flex size-full animate-ping rounded-full bg-green-500 opacity-75" />
              <span className="relative inline-flex size-2 rounded-full bg-green-500" />
            </span>
            Open to Opportunities
          </motion.span>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <p className="font-sans text-2xl text-secondary-foreground sm:text-3xl lg:text-4xl">
              Hi, I&apos;m
            </p>
            <h1 className="font-heading text-4xl font-bold tracking-tight text-secondary-foreground sm:text-5xl md:text-6xl">
              Phyae Sone Thwim
            </h1>
            <div className="mt-2 overflow-hidden">
              <AnimatePresence mode="wait">
                <motion.p
                  key={currentRole}
                  initial={{ y: -16, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: 16, opacity: 0 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                  className="text-lg font-semibold text-primary sm:text-xl md:text-2xl"
                >
                  {roles[currentRole]}
                </motion.p>
              </AnimatePresence>
            </div>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="max-w-md text-sm leading-relaxed text-muted-foreground"
          >
            6+ years building production-grade web and mobile applications
            across fintech, enterprise, and government platforms.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-wrap gap-3"
          >
            <Button className="rounded-full" asChild>
              <Link href="/contact">Let&apos;s work together</Link>
            </Button>
            <Button variant="outline" className="rounded-full" asChild>
              <Link href="/projects">View Projects</Link>
            </Button>
          </motion.div>
        </div>

        {/* ── Right ── */}
        <div className="flex flex-col items-center gap-6 xl:justify-center">
          <div className="flex w-full items-center justify-center xl:overflow-x-visible">
            {/*
              Outer shell: true square, no padding (avoids oval distortion).
              Cards overflow via negative absolute positions on the inner layer.
            */}
            <div className="relative aspect-square w-full max-w-[400px] sm:max-w-[480px] xl:max-w-[500px]">
              {/*
                Inner square with small uniform padding — gives card bleed room.
                p-[8%] is equal on all sides so the inner square stays square.
              */}
              <div className="absolute inset-0 p-[8%]">
                <div className="relative h-full w-full">
                  {/* ── LAYER 1: Rings — isolated, no borders, background only ── */}
                  <div className="pointer-events-none absolute inset-0">
                    {/* Ring 3 — outermost, most transparent */}
                    <motion.div
                      className="absolute inset-0 rounded-full bg-foreground/[0.04]"
                      animate={{ scale: [1, 1.04, 1] }}
                      transition={{
                        duration: 3.5,
                        repeat: Infinity,
                        ease: "linear",
                        delay: 0.3,
                      }}
                    />
                    {/* Ring 2 — middle */}
                    <motion.div
                      className="absolute inset-[10%] rounded-full bg-foreground/[0.06]"
                      animate={{ scale: [1, 1.04, 1] }}
                      transition={{
                        duration: 3.5,
                        repeat: Infinity,
                        ease: "linear",
                        delay: 0.15,
                      }}
                    />
                    {/* Ring 1 — innermost */}
                    <motion.div
                      className="absolute inset-[20%] rounded-full bg-foreground/[0.08]"
                      animate={{ scale: [1, 1.04, 1] }}
                      transition={{
                        duration: 3.5,
                        repeat: Infinity,
                        ease: "linear",
                        delay: 0,
                      }}
                    />
                  </div>

                  {/*
                    ── LAYER 2: Avatar ──
                    inset-[10%] = same as the MEDIUM ring.
                    Plain div (not motion) so ring animations never touch it.
                    overflow-hidden + rounded-full = true circle clip.
                    motion.div inside: one-time slide-up only, no loop.
                  */}
                  <div className="absolute inset-0 overflow-hidden rounded-full lg:inset-[10%]">
                    <motion.div
                      className="absolute inset-0"
                      initial={{ y: "100%" }}
                      animate={{ y: "0%" }}
                      transition={{
                        duration: 0.65,
                        ease: [0.22, 1, 0.36, 1],
                      }}
                    >
                      <Image
                        src="/hero-avatar.png"
                        alt="Phyae Sone Thwim"
                        fill
                        className="scale-110 object-cover object-top"
                        priority
                      />
                    </motion.div>
                  </div>

                  {/* ── LAYER 3: Stat cards ── */}

                  {/* 4,000+ — top-left */}
                  <motion.div
                    className="absolute top-[2%] -left-[28%] z-20 hidden w-[54%] rounded-lg border bg-background/95 p-2 shadow-sm backdrop-blur-sm md:block xl:p-3"
                    initial={{ opacity: 0, x: -12 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.5 }}
                  >
                    <div className="mb-1 flex items-center gap-1.5">
                      <VideoCameraIcon className="size-3 shrink-0 text-muted-foreground" />
                      <span className="truncate text-[10px] text-muted-foreground">
                        Live Cameras Monitored
                      </span>
                    </div>
                    <p className="font-heading text-base leading-tight font-bold sm:text-lg">
                      4,000+
                    </p>
                    <p className="mt-0.5 text-[10px] text-muted-foreground">
                      Across 3 gov agencies
                    </p>
                  </motion.div>

                  {/* 6,000+ — top-right */}
                  <motion.div
                    className="absolute top-[0%] -right-[28%] z-20 hidden w-[52%] rounded-lg border bg-background/95 p-2 shadow-sm backdrop-blur-sm md:block xl:p-3"
                    initial={{ opacity: 0, x: 12 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.6 }}
                  >
                    <div className="mb-1 flex items-center gap-1.5">
                      <UsersIcon className="size-3 shrink-0 text-muted-foreground" />
                      <span className="truncate text-[10px] text-muted-foreground">
                        Agents Served
                      </span>
                    </div>
                    <p className="font-heading text-base leading-tight font-bold sm:text-lg">
                      6,000+
                    </p>
                    <p className="mt-0.5 text-[10px] text-muted-foreground">
                      Digital onboarding
                    </p>
                  </motion.div>

                  {/* $37K+ — bottom-left */}
                  <motion.div
                    className="absolute bottom-[2%] -left-[28%] z-20 hidden w-[52%] rounded-lg border bg-background/95 p-2 shadow-sm backdrop-blur-sm md:block xl:p-3"
                    initial={{ opacity: 0, x: -12 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.7 }}
                  >
                    <div className="mb-1 flex items-center gap-1.5">
                      <TrendUpIcon className="size-3 shrink-0 text-green-500" />
                      <span className="truncate text-[10px] text-muted-foreground">
                        Pilot Revenue
                      </span>
                    </div>
                    <p className="font-heading text-base leading-tight font-bold sm:text-lg">
                      $37K+
                    </p>
                    <p className="mt-0.5 text-[10px] text-muted-foreground">
                      On initial release
                    </p>
                  </motion.div>

                  {/* 800+ — bottom-right */}
                  <motion.div
                    className="absolute -right-[28%] bottom-[0%] z-20 hidden w-[54%] rounded-lg border bg-background/95 p-2 shadow-sm backdrop-blur-sm md:block xl:p-3"
                    initial={{ opacity: 0, x: 12 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.8 }}
                  >
                    <div className="mb-1 flex items-center gap-1.5">
                      <BuildingsIcon className="size-3 shrink-0 text-muted-foreground" />
                      <span className="truncate text-[10px] text-muted-foreground">
                        SMEs Supported
                      </span>
                    </div>
                    <p className="font-heading text-base leading-tight font-bold sm:text-lg">
                      800+
                    </p>
                    <p className="mt-0.5 text-[10px] text-muted-foreground">
                      Fintech platform
                    </p>
                  </motion.div>
                </div>
              </div>
            </div>
          </div>

          {/* Stacked metrics — small screens only */}
          <motion.div
            className="w-full overflow-hidden rounded-xl border md:hidden"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            <div className="flex divide-x">
              <motion.div
                className="flex flex-1 flex-col gap-1 p-4"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.6 }}
              >
                <div className="flex items-center gap-1.5">
                  <VideoCameraIcon className="size-3 shrink-0 text-muted-foreground" />
                  <span className="text-[10px] text-muted-foreground">
                    Camera Streams
                  </span>
                </div>
                <p className="font-heading text-lg font-bold">4,000+</p>
                <p className="text-[10px] text-muted-foreground">
                  Across 3 gov agencies
                </p>
              </motion.div>
              <motion.div
                className="flex flex-1 flex-col gap-1 p-4"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.7 }}
              >
                <div className="flex items-center gap-1.5">
                  <UsersIcon className="size-3 shrink-0 text-muted-foreground" />
                  <span className="text-[10px] text-muted-foreground">
                    Agents Served
                  </span>
                </div>
                <p className="font-heading text-lg font-bold">6,000+</p>
                <p className="text-[10px] text-muted-foreground">
                  Digital onboarding
                </p>
              </motion.div>
            </div>
            <div className="flex divide-x border-t">
              <motion.div
                className="flex flex-1 flex-col gap-1 p-4"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.8 }}
              >
                <div className="flex items-center gap-1.5">
                  <TrendUpIcon className="size-3 shrink-0 text-green-500" />
                  <span className="text-[10px] text-muted-foreground">
                    Performance
                  </span>
                </div>
                <p className="font-heading text-lg font-bold">~50%</p>
                <p className="text-[10px] text-muted-foreground">Improvement</p>
              </motion.div>
              <motion.div
                className="flex flex-1 flex-col gap-1 p-4"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.9 }}
              >
                <div className="flex items-center gap-1.5">
                  <BuildingsIcon className="size-3 shrink-0 text-muted-foreground" />
                  <span className="text-[10px] text-muted-foreground">
                    SMEs Supported
                  </span>
                </div>
                <p className="font-heading text-lg font-bold">800+</p>
                <p className="text-[10px] text-muted-foreground">
                  Fintech platform
                </p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
