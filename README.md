# Portfolio — Phyae Sone Thwim

Personal portfolio site built with Next.js, Tailwind CSS, and Shadcn/ui.

## Stack

- **Framework**: Next.js (App Router) + TypeScript
- **Styling**: Tailwind CSS + Shadcn/ui
- **Animations**: Framer Motion (`motion/react`)
- **Forms**: React Hook Form + Zod
- **Email**: Resend (via API route)
- **Icons**: Phosphor Icons, Lucide, Devicon (CDN)

## Getting Started

```bash
npm install
npm run dev       # http://localhost:3000
```

## Commands

```bash
npm run build     # Production build
npm run lint      # ESLint
npm run format    # Prettier
npm run typecheck # tsc --noEmit
```

## Project Structure

```
app/                        # Pages (App Router)
├── page.tsx                # Home
├── projects/page.tsx
├── about/page.tsx
├── contact/page.tsx
├── api/contact/route.ts    # Email endpoint (Resend)
└── layout.tsx

components/
├── ui/                     # Shadcn/ui primitives
├── home/                   # Hero, TechStack, FeaturedWork, Intro
├── projects/               # ProjectList
├── about/                  # Intro, Experience, Skills
├── contact/                # Contact form
├── header.tsx
└── footer.tsx

lib/
└── constant.tsx            # All static content: projects[], EXPERIENCE[]
```

All static content (projects, experience) lives in `lib/constant.tsx`.
