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
- `@phosphor-icons/react` + `lucide-react` — icons
- Devicon (CDN, loaded in `app/layout.tsx`) — tech stack icons

### Project Structure

```
app/                        # Next.js App Router pages
├── page.tsx                # Home
├── projects/page.tsx
├── about/page.tsx
├── contact/page.tsx
├── api/contact/route.ts    # Email sending endpoint
└── layout.tsx              # Global layout: Header + Footer + Toaster

components/
├── ui/                     # Shadcn/ui primitives
├── home/                   # Hero, TechStack, FeaturedWork, Intro sections
├── projects/               # ProjectList (shared with home featured work)
├── about/                  # Intro, Experience, Skills sections
├── contact/                # ContactSection with form
├── header.tsx
└── footer.tsx

lib/
└── constant.tsx            # All static content: projects[], EXPERIENCE[]
```

- `@/*` path alias maps to the project root
- All static content lives in `lib/constant.tsx` — edit there, not in components
