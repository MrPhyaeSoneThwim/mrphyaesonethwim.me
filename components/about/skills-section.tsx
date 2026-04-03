"use client"

import Image from "next/image"
import { motion, type Variants } from "motion/react"
import {
  DeviceMobileIcon,
  HardDrivesIcon,
  GearIcon,
} from "@phosphor-icons/react"
import { Badge } from "@/components/ui/badge"

type Skill = {
  label: string
  type?: "icon" | "image"
  icon?: string
  image?: string
}

type Category = {
  label: string
  icon: React.ElementType
  title: string
  description: string
  skills: Skill[]
}

function SkillIcon({ skill }: { skill: Skill }) {
  if (skill.type === "image" && skill.image) {
    return (
      <Image
        src={skill.image}
        alt={skill.label}
        width={14}
        height={14}
        className="size-3.5 rounded-sm object-contain"
      />
    )
  }
  if (skill.icon) {
    return <i className={`${skill.icon} text-sm leading-none`} />
  }
  return null
}

const categories: Category[] = [
  {
    label: "Frontend & Mobile",
    icon: DeviceMobileIcon,
    title: "Pixel-Perfect, Cross-Platform",
    description:
      "Responsive web apps and cross-platform mobile, built for consistent quality across every screen and device.",
    skills: [
      { label: "React", icon: "devicon-react-original colored" },
      { label: "React Native", icon: "devicon-react-original colored" },
      { label: "Next.js", icon: "devicon-nextjs-plain colored" },
      { label: "Redux", icon: "devicon-redux-original colored" },
      { label: "Zustand", icon: "devicon-zustand-plain colored" },
      { label: "React Query", type: "image", image: "/tools/tanstack.png" },
      { label: "Tailwind CSS", icon: "devicon-tailwindcss-plain colored" },
      { label: "NativeWind", icon: "devicon-tailwindcss-plain colored" },
    ],
  },
  {
    label: "Backend Systems",
    icon: HardDrivesIcon,
    title: "APIs That Scale Under Pressure",
    description:
      "Production backends handling thousands of concurrent users, from REST and GraphQL to real-time data pipelines.",
    skills: [
      { label: "Node.js", icon: "devicon-nodejs-plain colored" },
      { label: "Express.js", icon: "devicon-express-original colored" },
      { label: "NestJS", icon: "devicon-nestjs-plain colored" },
      { label: "REST APIs" },
      { label: "GraphQL", icon: "devicon-graphql-plain colored" },
      { label: "MQTT" },
      { label: "TypeORM" },
      { label: "PostgreSQL", icon: "devicon-postgresql-plain colored" },
      { label: "MongoDB", icon: "devicon-mongodb-plain colored" },
      { label: "Redis", icon: "devicon-redis-plain colored" },
      { label: "MySQL", icon: "devicon-mysql-plain colored" },
      { label: "Firebase", icon: "devicon-firebase-plain colored" },
    ],
  },
  {
    label: "Engineering & Infrastructure",
    icon: GearIcon,
    title: "Ship Fast. Break Nothing.",
    description:
      "CI/CD pipelines, containerised deployments, and automated testing so every release is confident and production-ready.",
    skills: [
      { label: "Docker", icon: "devicon-docker-plain colored" },
      { label: "GitHub Actions", icon: "devicon-github-original colored" },
      { label: "Nginx", type: "image", image: "/tools/nginx.png" },
      { label: "Cloudflare", icon: "devicon-cloudflare-plain colored" },
      { label: "EAS", icon: "devicon-expo-original colored" },
      { label: "Jest", icon: "devicon-jest-plain colored" },
      { label: "Cypress", icon: "devicon-cypressio-plain colored" },
      { label: "Detox" },
      { label: "CI/CD" },
      { label: "Microservices" },
      { label: "System Design" },
      { label: "RBAC" },
      { label: "WebSockets", icon: "devicon-socketio-original" },
      { label: "Agile/Scrum" },
      { label: "Code Review" },
    ],
  },
]

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 20, scale: 0.98 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
  },
}

const badgeContainer: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.04, delayChildren: 0.15 } },
}

const badgeItem: Variants = {
  hidden: { opacity: 0, scale: 0.85 },
  show: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.22, ease: "easeOut" },
  },
}

const textVariants: Variants = {
  hidden: { opacity: 0, y: 10 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: [0.22, 1, 0.36, 1], delay: 0.25 },
  },
}

function SkillCard({
  category,
  delay = 0,
  className = "",
}: {
  category: Category
  delay?: number
  className?: string
}) {
  const Icon = category.icon
  return (
    <motion.div
      className={`flex flex-col justify-between gap-6 rounded-2xl border p-5 ${className}`}
      variants={cardVariants}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1], delay }}
    >
      <div className="flex flex-col gap-4">
        <div className="flex items-center gap-2">
          <Icon
            weight="fill"
            className="size-4 shrink-0 text-secondary-foreground/80"
          />
          <span className="text-xs font-medium text-secondary-foreground/80">
            {category.label}
          </span>
        </div>

        <motion.div
          className="flex flex-wrap gap-2"
          variants={badgeContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          {category.skills.map((skill) => (
            <motion.div key={skill.label} variants={badgeItem}>
              <Badge variant="secondary" className="h-auto gap-1.5 px-3 py-1.5">
                <SkillIcon skill={skill} />
                {skill.label}
              </Badge>
            </motion.div>
          ))}
        </motion.div>
      </div>

      <motion.div
        className="flex flex-col gap-1.5 pt-4"
        variants={textVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
      >
        <p className="font-heading text-base font-bold tracking-tight">
          {category.title}
        </p>
        <p className="text-sm leading-relaxed text-muted-foreground">
          {category.description}
        </p>
      </motion.div>
    </motion.div>
  )
}

export function SkillsSection() {
  const [frontend, backend, infra] = categories

  return (
    <section className="pb-12 sm:pb-14 lg:pb-16">
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        <div className="flex flex-col gap-4">
          <SkillCard category={frontend} delay={0} />
          <SkillCard category={backend} delay={0.08} />
        </div>
        <SkillCard category={infra} delay={0.16} className="md:h-full" />
      </div>
    </section>
  )
}
