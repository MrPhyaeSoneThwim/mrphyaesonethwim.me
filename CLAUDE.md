# CLAUDE.md

We're building the portfolio described in @SPEC.md. Read that file for general architectural decisions, section content, component structure, and data shape before making any changes.

Keep replies extremely concise. Focus on the key information — no unnecessary explanations, no long code blocks.

Whenever working with a third-party library (Resend, React Hook Form, Zod, Framer Motion, Shadcn/ui, etc.), look up the official documentation to ensure you're working with up-to-date APIs.

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev        # Start development server (http://localhost:3000)
npm run build      # Build for production
npm run lint       # Run ESLint
npm run format     # Format with Prettier
npm run typecheck  # Run tsc --noEmit
```

## Architecture

This is a Next.js (App Router) portfolio site with:

- **Language**: TypeScript (strict mode)
- **Styling**: Tailwind CSS + Shadcn/ui primitives
- **Animations**: Framer Motion via `motion/react`
- **Forms**: React Hook Form + Zod validation
- **Email**: Resend SDK (server-side, via API route)
- **Data**: Fully static — no database, no CMS

### Key Dependencies

- `motion/react` — animations (`fadeUp`, `slideLeft/Right`, `staggerChildren`)
- `react-hook-form` + `@hookform/resolvers` + `zod` — contact form validation
- `resend` — transactional email from `app/api/contact/route.ts`
- `sonner` — toast notifications for form success/failure
- `@phosphor-icons/react` — primary icon library used throughout
- `lucide-react` — secondary icons (some UI primitives)
- `yet-another-react-lightbox` — image lightbox on case study visuals
- Devicon (CDN, loaded in `app/layout.tsx`) — tech stack icons

### Project Structure

```
app/                          # Next.js App Router pages
├── page.tsx                  # Home
├── projects/
│   ├── page.tsx              # All projects list
│   └── [id]/page.tsx         # Individual case study
├── about/page.tsx
├── contact/page.tsx
├── api/contact/route.ts      # Email sending endpoint
└── layout.tsx                # Global layout: Header + Footer + Toaster

components/
├── ui/                       # Shadcn/ui primitives
├── home/                     # Hero, TechStack, FeaturedWork, Intro sections
├── projects/
│   ├── project-list.tsx      # Shared card list (home featured + projects page)
│   ├── project-case-study.tsx# Full case study layout with lightbox
│   ├── projects-header.tsx   # Projects page section header
│   └── project-filter.tsx    # Project filtering UI
├── about/                    # Intro, Experience, Education, Skills sections
├── contact/                  # ContactSection with form
├── header.tsx                # Sticky pill nav; mobile menu via createPortal
├── nav-bar.tsx
└── footer.tsx

lib/
└── constant.tsx              # All static content: projects[], EXPERIENCE[], EDUCATION[]
```

### Notable Implementation Details

- **Mobile nav**: `createPortal` into `document.body`; panel positioned via `getBoundingClientRect()` for pixel-perfect width match with the nav pill
- **Horizontal overflow**: `overflow-x: clip` on `body` prevents layout shift from animation initial offsets and hero stat card bleed
- `@/*` path alias maps to the project root
- All static content lives in `lib/constant.tsx` — edit there, not in components
