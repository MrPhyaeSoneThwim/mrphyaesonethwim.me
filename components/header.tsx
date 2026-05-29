"use client"
import React from "react"
import { createPortal } from "react-dom"
import Link from "next/link"
import { useTheme } from "next-themes"
import { MoonIcon, SunIcon } from "@phosphor-icons/react"
import { Button, buttonVariants } from "@/components/ui/button"
import { MenuToggleIcon } from "@/components/ui/menu-toggle-icon"
import { useScroll } from "@/hooks/use-scroll"
import { cn } from "@/lib/utils"

const NAV_LINKS = [
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
  const [mounted, setMounted] = React.useState(false)
  const navRef = React.useRef<HTMLElement>(null)
  const [panelStyle, setPanelStyle] = React.useState<React.CSSProperties>({})
  const scrolled = useScroll(10)

  React.useEffect(() => setMounted(true), [])

  // Measure the nav's exact rendered rect when menu opens so the panel aligns perfectly
  React.useEffect(() => {
    if (open && navRef.current) {
      const { left, width, bottom } = navRef.current.getBoundingClientRect()
      setPanelStyle({ left, width, top: bottom + 6 })
    }
  }, [open])

  React.useEffect(() => {
    document.body.style.overflow = open ? "hidden" : ""
    return () => {
      document.body.style.overflow = ""
    }
  }, [open])

  return (
    <>
      <header className="sticky top-0 z-50 flex w-full justify-center px-3 pt-4 pb-2">
        <nav
          ref={navRef}
          className={cn(
            "flex h-14 w-full max-w-5xl items-center justify-between gap-4 rounded-full border bg-background/80 px-2 backdrop-blur-xl transition-all duration-300 supports-[backdrop-filter]:bg-background/60",
            scrolled && !open ? "shadow-md" : "shadow-sm"
          )}
        >
          {/* Left: Brand */}
          <Link
            href="/"
            className="shrink-0 pl-3 font-heading text-xs font-semibold tracking-tight md:text-sm"
            onClick={() => setOpen(false)}
          >
            Phyae Sone Thwim
          </Link>

          {/* Center: Nav links (desktop) */}
          <div className="hidden flex-1 items-center justify-center gap-1 md:flex">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={buttonVariants({ variant: "ghost" })}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Right: Theme toggle */}
          <div className="hidden items-center pr-1 md:flex">
            <ThemeToggle />
          </div>

          {/* Mobile: Theme toggle + Hamburger */}
          <div className="flex items-center gap-1 pr-1 md:hidden">
            <ThemeToggle />
            <Button
              size="icon"
              variant="ghost"
              onClick={() => setOpen((v) => !v)}
              aria-label="Toggle menu"
              className="rounded-full"
            >
              <MenuToggleIcon open={open} className="size-5" duration={300} />
            </Button>
          </div>
        </nav>
      </header>

      {/* Portal — renders outside header to avoid stacking-context issues */}
      {mounted &&
        open &&
        createPortal(
          <>
            {/* Full-screen backdrop */}
            <div
              className="fixed inset-0 z-40 md:hidden"
              onClick={() => setOpen(false)}
            />
            {/* Panel — positioned by measuring the nav's actual rendered rect */}
            <div
              className="fixed z-50 md:hidden"
              style={panelStyle}
            >
              <div className="rounded-2xl border bg-background p-2.5 shadow-xl animate-in zoom-in-95 duration-200">
                <div className="grid gap-0.5">
                  {NAV_LINKS.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      onClick={() => setOpen(false)}
                      className={buttonVariants({
                        variant: "ghost",
                        className: "justify-start",
                        size: "lg",
                      })}
                    >
                      {link.label}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </>,
          document.body
        )}
    </>
  )
}
