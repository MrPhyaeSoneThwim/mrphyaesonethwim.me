"use client"

import { motion, type Variants } from "motion/react"
import {
  EnvelopeIcon,
  PhoneIcon,
  GithubLogoIcon,
  LinkedinLogoIcon,
  MapPinIcon,
  ClockIcon,
} from "@phosphor-icons/react"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import { ArrowRightIcon, SendHorizonalIcon } from "lucide-react"
import { useForm, Controller } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { z } from "zod"
import { toast } from "sonner"

const contactSchema = z.object({
  name: z.string().optional(),
  email: z.string().email("Enter a valid email address."),
  subject: z.string().min(1, "Subject is required."),
  message: z.string().min(10, "Message must be at least 10 characters."),
})

type ContactFormValues = z.infer<typeof contactSchema>

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
  },
}

const stagger: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08, delayChildren: 0.1 } },
}

const contactLinks = [
  {
    icon: EnvelopeIcon,
    label: "EMAIL",
    value: "mr.phyaesonethwim1998@gmail.com",
    href: "mailto:mr.phyaesonethwim1998@gmail.com",
  },
  {
    icon: PhoneIcon,
    label: "PHONE",
    value: "+66 65 963 0870",
    href: "tel:+66659630870",
  },
  {
    icon: GithubLogoIcon,
    label: "GITHUB",
    value: "github.com/MrPhyaeSoneThwim",
    href: "https://github.com/MrPhyaeSoneThwim",
  },
  {
    icon: LinkedinLogoIcon,
    label: "LINKEDIN",
    value: "phyaesonethwim",
    href: "https://www.linkedin.com/in/phyaesonethwim",
  },
]

export function ContactSection() {
  const {
    control,
    handleSubmit,
    reset,
    formState: { isSubmitting },
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
    defaultValues: { name: "", email: "", subject: "", message: "" },
  })

  async function onSubmit(data: ContactFormValues) {
    const res = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    })

    if (res.ok) {
      toast.success("Message sent!", {
        description: "I'll get back to you within one business day.",
      })
      reset()
    } else {
      const { error } = await res.json().catch(() => ({ error: undefined }))
      toast.error("Failed to send message.", {
        description:
          error ?? "Please try again or reach out directly via email.",
      })
    }
  }

  return (
    <section className="py-8 md:py-14 lg:py-16">
      <div className="grid grid-cols-1 gap-6 md:gap-12 lg:grid-cols-2 lg:gap-16">
        {/* Left column */}
        <div className="flex flex-col gap-8">
          <motion.div
            className="flex flex-col gap-4 md:gap-8"
            variants={stagger}
            initial="hidden"
            animate="show"
          >
            {/* Badge */}
            <motion.span
              variants={fadeUp}
              className="inline-flex w-fit items-center gap-2 rounded-full border px-3 py-1.5 text-xs font-medium"
            >
              <span className="relative flex size-2">
                <span className="absolute inline-flex size-full animate-ping rounded-full bg-green-500 opacity-75" />
                <span className="relative inline-flex size-2 rounded-full bg-green-500" />
              </span>
              Open to Opportunities
            </motion.span>

            {/* Heading */}
            <motion.div variants={fadeUp} className="space-y-4">
              <h1 className="font-heading text-4xl font-bold tracking-tight md:text-5xl">
                Let&apos;s start a conversation
              </h1>
              <p className="text-sm leading-relaxed text-muted-foreground md:text-base">
                I build production-ready systems across fintech, enterprise, and
                real-time platforms.{" "}
                <span className="text-foreground">
                  If you&apos;re hiring or working on something meaningful,
                  I&apos;d love to connect.
                </span>
              </p>
            </motion.div>

            {/* Location / timezone badges */}
            <motion.div variants={fadeUp} className="flex flex-wrap gap-2">
              <Badge
                variant="secondary"
                className="h-auto gap-1.5 rounded-full py-1.5 text-xs"
              >
                <MapPinIcon className="size-3.5" />
                Chiang Mai, Thailand
              </Badge>
              <Badge
                variant="secondary"
                className="h-auto gap-1.5 rounded-full py-1.5 text-xs"
              >
                <ClockIcon className="size-3.5" />
                Flexible across time zones
              </Badge>
            </motion.div>
          </motion.div>

          {/* Contact links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.5,
              ease: [0.22, 1, 0.36, 1],
              delay: 0.35,
            }}
            className="divide-y overflow-hidden rounded-xl border"
          >
            {contactLinks.map(({ icon: Icon, label, value, href }, index) => (
              <motion.a
                key={label}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.45,
                  ease: [0.22, 1, 0.36, 1],
                  delay: 0.4 + index * 0.09,
                }}
                whileHover="hover"
                href={href}
                target={href.startsWith("http") ? "_blank" : undefined}
                rel={
                  href.startsWith("http") ? "noopener noreferrer" : undefined
                }
                className="group flex items-center gap-4 p-3 transition-colors hover:bg-muted/40 md:px-4 md:py-3.5"
              >
                <div className="flex size-8 shrink-0 items-center justify-center rounded-full border bg-background">
                  <Icon
                    strokeWidth={5}
                    className="size-4 text-muted-foreground"
                  />
                </div>
                <div className="flex-1">
                  <p className="text-[10px] font-semibold tracking-widest text-muted-foreground">
                    {label}
                  </p>
                  <p className="text-xs font-medium md:text-sm">{value}</p>
                </div>
                <motion.div
                  variants={{
                    hover: { x: 0, opacity: 1 },
                  }}
                  initial={{ x: -6, opacity: 0 }}
                  transition={{ duration: 0.2, ease: "easeOut" }}
                  className="shrink-0"
                >
                  <ArrowRightIcon className="size-4 text-muted-foreground" />
                </motion.div>
              </motion.a>
            ))}
          </motion.div>
        </div>

        {/* Right column — form */}
        <motion.div
          className="rounded-xl border bg-muted/30 p-4 md:p-6"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1], delay: 0.15 }}
        >
          <div className="mb-4">
            <h2 className="font-heading text-xl font-semibold">
              Send a message
            </h2>
            <p className="mt-1 text-sm text-muted-foreground">
              I typically reply within one business day.
            </p>
          </div>

          <motion.form
            className="flex flex-col gap-3 md:gap-4"
            variants={stagger}
            initial="hidden"
            animate="show"
            onSubmit={handleSubmit(onSubmit)}
          >
            {/* Name */}
            <motion.div variants={fadeUp} className="flex flex-col gap-1.5">
              <Label htmlFor="name" className="text-sm font-medium">
                Name{" "}
                <span className="text-xs font-normal text-muted-foreground">
                  (optional)
                </span>
              </Label>
              <Controller
                name="name"
                control={control}
                render={({ field }) => (
                  <Input
                    {...field}
                    id="name"
                    placeholder="Your name"
                    className="h-9 bg-background text-sm md:h-10 md:text-base"
                  />
                )}
              />
            </motion.div>

            {/* Email */}
            <motion.div variants={fadeUp} className="flex flex-col gap-1.5">
              <Controller
                name="email"
                control={control}
                render={({ field, fieldState }) => (
                  <>
                    <Label htmlFor="email" className="text-sm font-medium">
                      Email
                    </Label>
                    <Input
                      {...field}
                      id="email"
                      type="email"
                      placeholder="you@example.com"
                      aria-invalid={fieldState.invalid}
                      className="h-9 bg-background text-sm md:h-10 md:text-base"
                    />
                    {fieldState.error && (
                      <p className="text-xs text-destructive">
                        {fieldState.error.message}
                      </p>
                    )}
                  </>
                )}
              />
            </motion.div>

            {/* Subject */}
            <motion.div variants={fadeUp} className="flex flex-col gap-1.5">
              <Controller
                name="subject"
                control={control}
                render={({ field, fieldState }) => (
                  <>
                    <Label htmlFor="subject" className="text-sm font-medium">
                      Subject
                    </Label>
                    <Input
                      {...field}
                      id="subject"
                      placeholder="What's this about?"
                      aria-invalid={fieldState.invalid}
                      className="h-9 bg-background text-sm md:h-10 md:text-base"
                    />
                    {fieldState.error && (
                      <p className="text-xs text-destructive">
                        {fieldState.error.message}
                      </p>
                    )}
                  </>
                )}
              />
            </motion.div>

            {/* Message */}
            <motion.div variants={fadeUp} className="flex flex-col gap-1.5">
              <Controller
                name="message"
                control={control}
                render={({ field, fieldState }) => (
                  <>
                    <Label htmlFor="message" className="text-sm font-medium">
                      Message
                    </Label>
                    <Textarea
                      {...field}
                      id="message"
                      placeholder="Tell me about your project or opportunity..."
                      aria-invalid={fieldState.invalid}
                      className="min-h-28 resize-none rounded-lg bg-background text-sm md:min-h-36 md:text-base"
                    />
                    {fieldState.error && (
                      <p className="text-xs text-destructive">
                        {fieldState.error.message}
                      </p>
                    )}
                  </>
                )}
              />
            </motion.div>

            {/* Submit */}
            <motion.div variants={fadeUp} className="flex flex-col gap-2">
              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full gap-2 md:h-11 md:text-base"
              >
                {isSubmitting ? "Sending…" : "Send message"}
                <SendHorizonalIcon className="size-4" />
              </Button>
              <p className="text-center text-xs text-muted-foreground">
                No spam. No newsletters. Just a direct reply.
              </p>
            </motion.div>
          </motion.form>
        </motion.div>
      </div>
    </section>
  )
}
