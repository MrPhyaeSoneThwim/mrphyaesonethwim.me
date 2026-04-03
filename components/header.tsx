"use client"
import React from "react"
import Link from "next/link"
import { useTheme } from "next-themes"
import { MoonIcon, SunIcon } from "@phosphor-icons/react"
import { Button, buttonVariants } from "@/components/ui/button"
import { MenuToggleIcon } from "@/components/ui/menu-toggle-icon"
import { useScroll } from "@/hooks/use-scroll"
import { cn } from "@/lib/utils"

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Projects", href: "/projects" },
  { label: "About", href: "/about" },
]

const mobileLinks = [
  { label: "Home", href: "/" },
  { label: "Projects", href: "/projects" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
]

function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme()
  const [mounted, setMounted] = React.useState(false)

  React.useEffect(() => setMounted(true), [])

  if (!mounted) return <div className="size-9" />

  return (
    <Button
      size="icon"
      variant="ghost"
      onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
      aria-label="Toggle theme"
      className="rounded-full"
    >
      {resolvedTheme === "dark" ? (
        <SunIcon className="size-4" />
      ) : (
        <MoonIcon className="size-4" />
      )}
    </Button>
  )
}

export function Header() {
  const [open, setOpen] = React.useState(false)
  const scrolled = useScroll(10)

  React.useEffect(() => {
    document.body.style.overflow = open ? "hidden" : ""
    return () => {
      document.body.style.overflow = ""
    }
  }, [open])

  return (
    <header className="sticky top-0 z-50 flex w-full justify-center px-4 pt-4 pb-2">
      <nav
        className={cn(
          "flex h-12 w-full max-w-5xl items-center justify-between gap-4 rounded-full border bg-background/80 px-2 backdrop-blur-xl transition-all duration-300 supports-[backdrop-filter]:bg-background/60",
          scrolled && !open ? "shadow-md" : "shadow-sm"
        )}
      >
        {/* Left: Brand */}
        <Link
          href="/"
          className="shrink-0 pl-3 font-heading text-xs font-semibold tracking-tight md:text-sm"
        >
          Phyae Sone Thwim
        </Link>

        {/* Center: Nav links (desktop) */}
        <div className="hidden flex-1 items-center justify-center gap-1 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={buttonVariants({ variant: "ghost", size: "sm" })}
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Right: Theme toggle + Let's talk */}
        <div className="hidden items-center gap-1.5 pr-1 md:flex">
          <ThemeToggle />
          <Button size="sm" asChild className="gap-1.5 rounded-full">
            <Link href="/contact">Let&apos;s contact</Link>
          </Button>
        </div>

        {/* Mobile: Theme toggle + Hamburger */}
        <div className="flex items-center gap-1 pr-1 md:hidden">
          <ThemeToggle />
          <Button
            size="icon"
            variant="ghost"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
            className="rounded-full"
          >
            <MenuToggleIcon open={open} className="size-5" duration={300} />
          </Button>
        </div>
      </nav>

      {/* Mobile menu */}
      {open && (
        <div className="fixed inset-0 top-20 z-40 md:hidden">
          <div
            data-slot={open ? "open" : "closed"}
            className="mx-4 rounded-2xl border bg-background/95 p-4 shadow-lg backdrop-blur-xl ease-out data-[slot=closed]:animate-out data-[slot=closed]:zoom-out-95 data-[slot=open]:animate-in data-[slot=open]:zoom-in-95"
          >
            <div className="grid gap-1">
              {mobileLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className={buttonVariants({
                    variant: "ghost",
                    className: "justify-start rounded-xl",
                  })}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
