# Technical Specification – Personal Portfolio Website

## 1. Overview

A personal portfolio website for a Senior Full Stack Engineer. Showcases experience, selected projects, tech stack, and provides a working contact form. Built spec-first with Claude Code as the primary development tool.

### Core Features

- Multi-page site with shared layout (Header, Footer)
- Home page with Hero, Tech Stack, Featured Work, and Brief Introduction sections
- Projects page listing all projects as case-study cards
- About page with personal intro, work experience timeline, and skills bento grid
- Contact page with validated form that sends email via Resend

### Tech

- Next.js (App Router) + TypeScript
- Tailwind CSS + Shadcn/ui component primitives
- Framer Motion (`motion/react`) for animations
- React Hook Form + Zod for form validation
- Resend for transactional email
- Phosphor Icons + Lucide Icons
- Devicon (CDN) for tech stack icons

---

## 2. Architecture

### 2.1 High-Level Architecture

- **Frontend:** Next.js App Router — server components for pages, client components for interactive sections
- **API:** Single route handler `app/api/contact/route.ts` for contact form email
- **Email:** Resend SDK called server-side from the API route
- **Data:** Fully static — all content lives in `lib/constant.tsx` as typed arrays

### 2.2 Application Layers

**Presentation layer**

- Next.js pages under `app/`
- Section components under `components/`
- Tailwind CSS for styling; Shadcn/ui for primitives

**API layer**

- `POST /api/contact` — validates with Zod, sends via Resend

**Data layer**

- `lib/constant.tsx` exports `projects: Project[]` and `EXPERIENCE: ExperienceItemType[]`
- No database, no CMS

---

## 3. Functional Requirements

### 3.1 Navigation

- Sticky header, floating pill shape, backdrop blur
- Desktop: brand left · nav center (Home, Projects, About) · theme toggle + "Let's contact" CTA right
- Mobile: theme toggle + hamburger right; tapping hamburger opens a dropdown with all four links
- Scroll shadow appears after 10px scroll

### 3.2 Home Page

Sections render in this exact order:

1. Hero
2. Tech Stack
3. Featured Work
4. Brief Introduction

### 3.3 Projects Page

- Renders all projects from `lib/constant.tsx` using `<ProjectList />`
- Same alternating card layout as Featured Work
- Each card: name, description, achievements list, tech badges, "View Case Study" link button

### 3.4 About Page

Sections render in this order:

1. Intro (photo + bio text)
2. Experience (work timeline)
3. Skills (bento grid — same layout as Tech Stack on Home)

### 3.5 Contact Page

- Two-column layout: info left, form right
- On submit: `POST /api/contact`, show toast on success or failure
- Reset form after successful submission

### 3.6 Contact Form Validation

| Field   | Rule                         |
| ------- | ---------------------------- |
| Name    | Optional string              |
| Email   | Required, valid email format |
| Subject | Required, non-empty          |
| Message | Required, min 10 characters  |

Inline error messages under each invalid field. Submit button disabled while in-flight.

---

## 4. Layout

### 4.1 Header

```
[ Phyae Sone Thwim ]   [ Home  Projects  About ]   [ 🌙  Let's contact ]
```

- Sticky `z-50`, floating pill nav: `rounded-full border bg-background/80 backdrop-blur-xl`
- Brand: `font-heading text-sm font-semibold`, links to `/`
- Desktop nav links: ghost buttons, centered
- Right: theme toggle (sun/moon) + "Let's contact" pill button → `/contact`
- Mobile: hide center nav and right CTA; show theme toggle + animated hamburger
- Mobile menu: overlay card `rounded-2xl border bg-background/95 backdrop-blur-xl` with all four links

### 4.2 Footer

```
[ Phyae Sone Thwim          ]   [ GENERAL      LINKS    ]
[ tagline                   ]   [ Home         GitHub   ]
                                [ Projects     LinkedIn ]
                                [ About        Email    ]
                                [ Contact               ]

─────────────────────────────────────────────────────────
© 2025 Phyae Sone Thwim. All rights reserved.
```

- Two-column layout: `flex flex-col md:flex-row md:justify-between`
- Left: name + tagline `"I'm a full-stack engineer, builder, and problem solver. Thanks for checking out my site!"`
- Right: two link groups — **GENERAL** (site pages) and **LINKS** (GitHub, LinkedIn, Email)
- Bottom: `border-t` copyright line

---

## 5. Pages & Content

### 5.1 Home Page

#### Hero Section

Two-column layout — left: text + CTA, right: avatar + metric cards.

**Left column**

| Element       | Content                                                                                                             |
| ------------- | ------------------------------------------------------------------------------------------------------------------- |
| Label         | `Senior Full Stack Engineer`                                                                                        |
| Heading       | `Hi, I'm Phyae Sone Thwim`                                                                                          |
| Subheading    | `I build scalable systems with performance, clean architecture, and real-world impact.`                             |
| Description   | `I design and deliver production-grade applications used by thousands — from real-time systems to fintech platforms.`|
| Animated role | Cycles: Frontend Engineer → Backend Engineer → Full Stack Engineer → Mobile Engineer                                |
| CTA           | `View Projects` (outline) · `Contact Me` (default)                                                                 |

**Right column**

- Avatar `/avatar.png`, no background card
- Floating metric cards:

| Value   | Label                    | Sublabel                     |
| ------- | ------------------------ | ---------------------------- |
| 4,000+  | Real-Time Camera Streams | Across 3 government agencies |
| 6,000+  | Insurance Agents Served  | Digital onboarding system    |
| 800+    | SMEs Supported           | Fintech platform             |
| ~40–50% | Performance Improvement  | —                            |
| ~60%    | Bug Reduction            | —                            |

#### Tech Stack Section

Bento grid — two cards stacked left, one tall card right.

Each card: category icon + label (top-left) · skill badges (staggered) · title + description (bottom).

| Group                        | Title                          | Description                                                                                                    |
| ---------------------------- | ------------------------------ | -------------------------------------------------------------------------------------------------------------- |
| Frontend & Mobile            | Pixel-Perfect, Cross-Platform  | Responsive web apps and cross-platform mobile, built for consistent quality across every screen and device.    |
| Backend Systems              | APIs That Scale Under Pressure | Production backends handling thousands of concurrent users, from REST and GraphQL to real-time data pipelines. |
| Engineering & Infrastructure | Ship Fast. Break Nothing.      | CI/CD pipelines, containerised deployments, and automated testing so every release is confident.               |

Skills per group: see §6.3.

#### Featured Work Section

- Badge: `Case Study`
- Heading: `Designing for Real-World Impact`
- Subtext: `A problem-first approach translating user needs into scalable, thoughtful solutions that deliver measurable value.`
- Renders projects where `featured: true` via `<ProjectList />`
- Bottom CTA banner: total project count · "3+ Industries" · "See all work" → `/projects`

**Project card layout** (alternating per row):

- Odd rows: text left, image right
- Even rows: image left, text right
- Each card: name · description · achievements with check icon · tech badges · "View Case Study" button

#### Brief Introduction Section

Two-column layout — left: photo + identity, right: bio + CTAs.

**Left column**

- Square avatar `/avatar.png` (`rounded-2xl`, 1:1 aspect ratio)
- "Available for Work" badge overlaid at bottom-center of image
- Below image: name + title left · social icon buttons right (GitHub, LinkedIn, Email)

**Right column**

Bio paragraphs (each with a bold opener):

1. `"Engineering isn't just my job. It's how I think."` — motivation
2. `"My approach is rooted in clarity and ownership."` — methodology
3. `"I'm deliberate about the details because they compound."` — quality

CTAs: `Get in Touch` → `/contact` · `View Projects` → `/projects` (both `rounded-full`)

---

### 5.2 Projects Page

Section header — two-column:

- Left: badge `Projects` + heading
- Right: subtext

Renders all projects from `lib/constant.tsx` via `<ProjectList />` (same component used in Featured Work).

---

### 5.3 About Page

#### Intro Section

Section header — two-column:

- Left: badge `About Me` + heading `"Engineering with Purpose."`
- Right: subtext `"I build systems that scale, teams that grow, and software that makes a measurable difference in the real world."`

Body: same two-column layout as §5.1 Brief Introduction (avatar left, bio text right).

#### Experience Section

Section header — two-column:

- Left: badge `Experience` + heading `"Experience that delivers."`
- Right: subtext `"Across fintech, enterprise, and government platforms, shipping software that holds up in production."`

Uses `<WorkExperience />` component with `EXPERIENCE` from `lib/constant.tsx`.

#### Skills Section

Same bento grid layout and skill groups as §5.1 Tech Stack. Uses the same categories.

---

### 5.4 Contact Page

**Left column**

- Animated availability badge (green pulse dot): `"Open to Opportunities"`
- Heading: `"Let's start a conversation"`
- Location badge: `Chiang Mai, Thailand`
- Timezone badge: `Flexible across time zones`
- Contact links list (see table below)

**Right column**

- Heading: `"Send a message"`
- Subtext: `"I typically reply within one business day."`
- Contact form — validation rules in §3.6

**Contact links**

| Icon        | Label    | Display value                   | href                                        |
| ----------- | -------- | ------------------------------- | ------------------------------------------- |
| Envelope    | EMAIL    | mr.phyaesonethwim1998@gmail.com | `mailto:mr.phyaesonethwim1998@gmail.com`    |
| Phone       | PHONE    | +66 65 963 0870                 | `tel:+66659630870`                          |
| GitHub logo | GITHUB   | github.com/phyaesone            | `https://github.com/MrPhyaeSoneThwim`       |
| LinkedIn    | LINKEDIN | phyaesonethwim                  | `https://www.linkedin.com/in/phyaesonethwim`|

---

## 6. Data (`lib/constant.tsx`)

### 6.1 Project Type

```typescript
type TechItem = {
  label: string
  type?: "icon" | "image"
  icon?: string   // devicon class name
  image?: string  // path under /public/
}

type Project = {
  name: string
  description: string
  achievements: string[]
  technologies: TechItem[]
  featured: boolean  // true = shown in Home Featured Work
  image: string      // path under /public/projects/
  link: string       // external URL
}
```

### 6.2 Projects

| Name                                    | Featured | Image                          |
| --------------------------------------- | -------- | ------------------------------ |
| DayTwo Mobile App                       | ✓        | `/projects/daytwo.png`         |
| JAVIS Smart Bubble Tea Ordering App     | ✓        | `/projects/javis-mobile.png`   |
| Surveillance Platform                   | ✓        | `/projects/surveillance.png`   |
| Digital Advisor Platform                | —        | `/projects/digital-advisor.png`|
| CollegeDAO Web Platform                 | —        | `/projects/collegedao.png`     |
| ONenergy Monitoring Platform            | —        | `/projects/onenergy.png`       |
| B2B Supplier Portal                     | —        | `/projects/b2b.png`            |
| SMU Research Portal                     | —        | `/projects/smu.png`            |

### 6.3 Tech Skills

**Frontend & Mobile**
React, React Native, Next.js, Redux, Zustand, React Query, Tailwind CSS, NativeWind

**Backend Systems**
Node.js, Express.js, NestJS, REST APIs, GraphQL, MQTT, TypeORM, PostgreSQL, MongoDB, Redis, MySQL, Firebase

**Engineering & Infrastructure**
Docker, GitHub Actions, Nginx, Cloudflare, EAS, Jest, Cypress, Detox, CI/CD, Microservices, System Design, RBAC, WebSockets, Agile/Scrum, Code Review

### 6.4 Experience Type

```typescript
type Position = {
  id: string
  title: string
  employmentPeriod: { start: string; end: string }
  employmentType: string
  icon: React.ReactNode
  description: string[]
  skills: string[]
  isExpanded?: boolean
}

type ExperienceItemType = {
  id: string
  companyName: string
  companyLogo: string
  companyWebsite: string
  positions: Position[]
  isCurrentEmployer: boolean
}
```

### 6.5 Work Experience

| Company          | Period              | Role(s)                                             |
| ---------------- | ------------------- | --------------------------------------------------- |
| ONOW Ascent      | 07.2024 – 03.2026   | Senior Software Engineer                            |
| Nexstack         | 02.2022 – 07.2024   | Full Stack Developer → Senior Full Stack Developer  |
| Digital Central  | 06.2021 – 01.2022   | Full Stack Developer                                |
| Pico Innovation  | 10.2019 – 03.2020   | Frontend Developer                                  |

---

## 7. API Design

### 7.1 POST /api/contact

**Description:** Validates the contact form payload and sends an email via Resend.

**Request body (JSON)**

```json
{
  "name": "Jane Doe",
  "email": "jane@example.com",
  "subject": "Job opportunity",
  "message": "Hi, I'd love to connect..."
}
```

**Validation (Zod)**

```typescript
z.object({
  name: z.string().optional(),
  email: z.string().trim().pipe(z.email()),
  subject: z.string().min(1),
  message: z.string().min(10),
})
```

**Behavior**

- Returns `400` if validation fails
- Sends to `mr.phyaesonethwim1998@gmail.com` with `replyTo` set to the sender's email
- Returns `500` with `{ error: string }` if Resend fails

**Response 200**

```json
{ "success": true }
```

**Response 400 / 500**

```json
{ "error": "Invalid input." }
```

---

## 8. Component Structure

```
app/
├── page.tsx                     # Home
├── projects/page.tsx
├── about/page.tsx
├── contact/page.tsx
├── api/contact/route.ts         # Email sending API
└── layout.tsx                   # Global layout: Header + Footer + Toaster

components/
├── ui/                          # Shadcn/ui primitives (Button, Badge, Input, etc.)
├── home/
│   ├── hero-section.tsx
│   ├── tech-stack-section.tsx
│   ├── featured-work-section.tsx
│   └── intro-section.tsx
├── projects/
│   └── project-list.tsx         # Shared by Home (featured) and Projects page (all)
├── about/
│   ├── intro-section.tsx
│   ├── experience-section.tsx
│   └── skills-section.tsx
├── contact/
│   └── contact-section.tsx
├── header.tsx
├── nav.tsx
└── footer.tsx

lib/
└── constant.tsx                 # All static data: projects[], EXPERIENCE[]
```

**Rules**

- No cross-folder imports between page-specific component folders
- Each page section is its own component file
- `<ProjectList />` is the only component shared across pages
- Reusable UI primitives go in `ui/`

---

## 9. Animation

All animations use `motion/react`. Scroll-triggered sections use `whileInView` with `viewport={{ once: true }}`.

| Pattern                                    | Where used                                          |
| ------------------------------------------ | --------------------------------------------------- |
| `fadeUp` — `opacity 0→1, y 20→0, 0.5s`    | Section headings, hero text, contact form           |
| `slideLeft` / `slideRight` — `x ±40→0, 0.6s` | Project card alternating image/text entrance     |
| `staggerChildren: 0.08`                    | Badge lists, contact link items                     |
| `staggerChildren: 0.04`                    | Tech skill badges inside bento cards                |
| Hero role badge                            | Auto-cycles role text with smooth fade/slide        |
| Contact link rows                          | Arrow icon reveals on `whileHover="hover"`          |

Easing: `[0.22, 1, 0.36, 1]` throughout.

---

## 10. Environment Variables

| Variable         | Description                                    |
| ---------------- | ---------------------------------------------- |
| `RESEND_API_KEY` | Resend API key for sending contact form emails |

---

## 11. Development Workflow

1. Write or update `SPEC.md` before touching any component
2. Define all static content in `lib/constant.tsx` first
3. Build shared layout: Header, Footer, Toaster in `app/layout.tsx`
4. Implement Home page sections in order: Hero → Tech Stack → Featured Work → Intro
5. Build Projects page — reuses `<ProjectList />`
6. Build About page sections: Intro → Experience → Skills
7. Build Contact page + `POST /api/contact` route
8. Run `npm run typecheck && npm run lint` before committing
