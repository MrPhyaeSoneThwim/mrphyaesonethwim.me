import Link from "next/link"

const generalLinks = [
  { label: "Home", href: "/" },
  { label: "Projects", href: "/projects" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
]

const externalLinks = [
  { label: "GitHub", href: "https://github.com/MrPhyaeSoneThwim" },
  { label: "LinkedIn", href: "https://linkedin.com/in/phyaesonethwim" },
  { label: "Email", href: "mailto:mr.phyaesonethwim1998@gmail.com" },
]

export function Footer() {
  return (
    <footer>
      <div className="mx-auto max-w-5xl border-t px-4 py-12">
        <div className="flex flex-col gap-10 md:flex-row md:justify-between">
          <div className="max-w-sm">
            <p className="font-heading text-sm font-semibold">
              Phyae Sone Thwim
            </p>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
              Senior Full Stack Engineer building production-grade systems.
            </p>
          </div>

          <div className="flex gap-12">
            <div>
              <p className="mb-4 text-[10px] font-semibold tracking-widest text-muted-foreground uppercase">
                General
              </p>
              <ul className="space-y-2.5">
                {generalLinks.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <p className="mb-4 text-[10px] font-semibold tracking-widest text-muted-foreground uppercase">
                Links
              </p>
              <ul className="space-y-2.5">
                {externalLinks.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      target={
                        link.href.startsWith("http") ? "_blank" : undefined
                      }
                      rel="noopener noreferrer"
                      className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-10 border-t pt-6">
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} Phyae Sone Thwim. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
