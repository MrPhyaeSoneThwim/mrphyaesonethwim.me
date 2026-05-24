import type { ExperienceItemType } from "@/components/ui/work-experience"

export interface Contribution {
  icon: string
  title: string
  detail: string
}

export interface Result {
  icon: string
  value: string
  label: string
  description: string
}

export interface CoverImage {
  src: string
  alt: string
}

export interface Visual {
  src: string
  caption: string
}

export interface TechnologyGroup {
  groupLabel: "Frontend" | "Backend" | "Infrastructure"
  technologies: string[]
}

export interface Project {
  id: string
  name: string
  slug: string
  thumbnailImage: string
  targetPlatform: "Web" | "Mobile"
  industrySectors: string[]
  externalLink?: string
  demoLinks?: { web?: string; ios?: string; android?: string }
  isPrivate: boolean
  hasCaseStudy: boolean
  coreTechStack: string[]
  hero: {
    title: string
    summary: string
    meta: {
      role: string
      teamSize: string
      duration: string
      period: string
      platform: "Web" | "Mobile"
    }
  }

  coverImages: CoverImage[]

  challenge: {
    prose: string
    pullQuote?: string
  }

  whatIDid: {
    intro: string
    contributions: Contribution[]
  }

  technicalDecisions: { decision: string; rationale: string }[]

  visuals: Visual[]

  results: Result[]

  whatILearned: { lead: string; detail: string }[]

  sidebar: {
    role: string
    technologyStack: TechnologyGroup[]
    constraints?: string[]
    collaborators?: string
    cta?: { label: string; url: string }
  }
}

export const projects: Project[] = [
  {
    id: "daytwo-mobile",
    name: "DayTwo Mobile App",
    slug: "daytwo-mobile",
    thumbnailImage: "/projects/daytwo/daytwo-00.png",
    targetPlatform: "Mobile",
    industrySectors: ["Fintech", "AI-Driven", "Featured"],
    demoLinks: {
      ios: "https://apps.apple.com/us/app/daytwo/id6764878687",
      android: "https://play.google.com/store/search?q=daytwo&c=apps&hl=en",
    },
    isPrivate: false,
    hasCaseStudy: true,

    coreTechStack: [
      "React Native",
      "TypeScript",
      "Expo",
      "FastAPI",
      "Firebase",
      "GitHub Actions",
    ],

    hero: {
      title: "DayTwo Mobile App",
      summary:
        "AI-powered fintech platform for SMEs that helps business owners track cash, sales, expenses, debts, and financial goals through offline-first workflows, real-time insights, and AI-assisted business guidance.",
      meta: {
        role: "Senior Frontend Engineer",
        teamSize: "5-person team",
        duration: "1 yr 9 mos",
        period: "Jul 2024 – Mar 2026",
        platform: "Mobile",
      },
    },

    coverImages: [],

    challenge: {
      prose:
        "Most SME owners managed business finances using notebooks or spreadsheets with no real-time visibility into cash flow, expenses, debts, or overall business performance. We needed to build a production-ready fintech platform from scratch that could simplify bookkeeping, provide actionable financial insights, support AI-assisted business guidance, and work reliably in low-connectivity environments for everyday business operations.",
      pullQuote:
        "Most SME owners lacked real-time visibility into cash flow and profitability until the end of the month.",
    },

    whatIDid: {
      intro:
        "I led frontend architecture and delivery for the DayTwo mobile app, owning the mobile system design, AI-powered advisor experience, offline-first workflows, and iOS and Android production releases. I worked closely with backend engineers, designers, and product owners to deliver fintech tools used by 800+ SMEs.",

      contributions: [
        {
          icon: "Layers",
          title: "Mobile architecture",
          detail:
            "Designed scalable mobile architecture using React Native, TypeScript, Zustand, and TanStack Query, establishing reusable patterns for state management, API handling, and shared UI systems across the product.",
        },
        {
          icon: "BarChart2",
          title: "Core financial system",
          detail:
            "Built the end-to-end financial workflows including cash tracking, sales and expense recording, debt tracking, lending flows, and real-time business insights covering cash position, income, expenses, and cash buffer goals.",
        },
        {
          icon: "Camera",
          title: "OCR transaction entry",
          detail:
            "Implemented AI-assisted OCR workflows allowing users to snap photos of receipts and automatically extract transaction data into structured financial records.",
        },
        {
          icon: "MessageCircle",
          title: "AI business advisor system",
          detail:
            "Delivered a production AI chat system powered by LLM APIs, focusing on structured response rendering, streaming UX, retry handling, and transforming raw model outputs into readable financial guidance for business decision-making.",
        },
        {
          icon: "Database",
          title: "Offline-first system",
          detail:
            "Designed offline-first workflows using Supabase to ensure reliable transaction recording and data synchronization in low and unstable connectivity environments.",
        },
        {
          icon: "Globe",
          title: "Multilingual support",
          detail:
            "Implemented multi-language support and localization features to improve accessibility for SME users across different regions and languages.",
        },
        {
          icon: "Bell",
          title: "Push notifications",
          detail:
            "Implemented Firebase push notifications for lending updates, repayment reminders, and lifecycle events across borrower and lender workflows.",
        },
        {
          icon: "GitBranch",
          title: "Release automation pipeline",
          detail:
            "Automated iOS and Android builds, deployments, and release workflows using EAS and GitHub Actions, enabling faster iteration cycles and reliable hotfix delivery.",
        },
        {
          icon: "Users",
          title: "User and product collaboration",
          detail:
            "Worked directly with SME users, designers, and product owners through training sessions, usability testing, and design sprints to refine workflows and validate product decisions.",
        },
      ],
    },

    technicalDecisions: [
      {
        decision:
          "Used TanStack Query and Zustand for scalable state management",
        rationale:
          "This reduced unnecessary API calls by ~40%, improved frontend performance, and simplified synchronization across complex financial workflows.",
      },
      {
        decision: "Built offline-first support from the beginning",
        rationale:
          "Many users operated in unstable network conditions, making offline reliability essential for daily transaction recording and business continuity.",
      },
      {
        decision: "Focused heavily on AI response rendering and usability",
        rationale:
          "AI-generated outputs needed structured rendering and defensive UX handling to feel reliable, readable, and actionable for business users.",
      },
      {
        decision: "Used reusable component systems with NativeWind",
        rationale:
          "This improved development speed, UI consistency, and maintainability across a rapidly evolving mobile product.",
      },
    ],

    visuals: [
      {
        src: "/projects/daytwo/daytwo-01.png",
        caption:
          "Live cash dashboard with reconciliation and AI-driven business insights",
      },
      {
        src: "/projects/daytwo/daytwo-02.png",
        caption:
          "Multi-channel entry menu — loans, sales, expenses, and Quick Capture via voice, photo, or text",
      },
      {
        src: "/projects/daytwo/daytwo-03.png",
        caption:
          "POS-style number pad for fast multi-item sales and expense recording",
      },
      {
        src: "/projects/daytwo/daytwo-04.png",
        caption:
          "Payable and receivable credit tracker with urgency-based overdue prioritisation",
      },
      {
        src: "/projects/daytwo/daytwo-05.png",
        caption:
          "Bizzy — AI business advisor chat with voice support, suggested prompts, and conversation history",
      },
      {
        src: "/projects/daytwo/daytwo-06.png",
        caption:
          "Goal management for savings, sales, expenses, and cash buffer with AI bill detection",
      },
    ],

    results: [
      {
        icon: "Users",
        value: "800+",
        label: "SMEs Onboarded",
        description: "Businesses actively using the platform after launch",
      },
      {
        icon: "Landmark",
        value: "$37K+",
        label: "Revenue Generated",
        description: "Generated through lending and financial workflows",
      },
      {
        icon: "TrendingUp",
        value: "~40%",
        label: "API Calls Reduced",
        description: "Reduced through caching and request deduplication",
      },
      {
        icon: "MessageCircle",
        value: "AI-powered",
        label: "Business Advisor Chat",
        description:
          "Delivered production-ready AI financial guidance workflows",
      },
      {
        icon: "Database",
        value: "Offline-first",
        label: "Reliable Mobile Experience",
        description: "Supported SME usage in unstable network environments",
      },
      {
        icon: "Globe",
        value: "Multi-language",
        label: "Localized Experience",
        description:
          "Supported accessibility across multiple regions and languages",
      },
    ],

    whatILearned: [
      {
        lead: "Frontend architecture drives product velocity",
        detail:
          "Early architectural decisions determine how quickly features can be shipped and how sustainably the codebase evolves as complexity increases.",
      },
      {
        lead: "AI UX is as important as AI capability",
        detail:
          "AI features only succeed in production when outputs are structured, readable, and resilient to latency through streaming, retries, and clear loading states.",
      },
      {
        lead: "Real user feedback exposes system gaps",
        detail:
          "Direct interaction with SME users consistently revealed mismatches between assumed workflows and real-world usage patterns.",
      },
      {
        lead: "Automation is critical for delivery speed",
        detail:
          "Automating build and release workflows reduced operational overhead and enabled faster, more reliable production iteration cycles.",
      },
      {
        lead: "Offline-first is a core product requirement",
        detail:
          "Unstable connectivity is a normal condition for many users, making offline-first design essential for reliable day-to-day financial operations.",
      },
    ],

    sidebar: {
      role: "Led frontend architecture and delivery for an AI-powered fintech platform serving SMEs",

      technologyStack: [
        {
          groupLabel: "Frontend",
          technologies: [
            "React Native",
            "TypeScript",
            "Expo",
            "TanStack Query",
            "Zustand",
            "NativeWind",
          ],
        },
        {
          groupLabel: "Backend",
          technologies: [
            "FastAPI",
            "LLM APIs",
            "RAG",
            "Vector Search",
            "Firebase",
            "Supabase",
          ],
        },
        {
          groupLabel: "Infrastructure",
          technologies: ["GitHub Actions", "CI/CD", "EAS Build"],
        },
      ],

      constraints: [
        "5-person engineering team",
        "Cross-platform mobile delivery",
        "Low-connectivity user environments",
        "Production AI feature delivery",
      ],

      collaborators:
        "Backend engineer · AI engineer · Product owner · UI/UX designer",
    },
  },

  {
    id: "javis-ordering",
    name: "JAVIS Mobile Ordering App",
    slug: "javis-ordering",
    thumbnailImage: "/projects/javis/javis-00.png",
    targetPlatform: "Mobile",
    industrySectors: ["Retail Tech", "Featured"],
    externalLink:
      "https://www.javisholdings.com/copy-of-emerging-digital-ecosystem-ne",
    isPrivate: true,
    hasCaseStudy: false,
    coreTechStack: [],
    hero: {
      title: "JAVIS Mobile Ordering App",
      summary:
        "Mobile ordering app for beverage machines that enables users to discover nearby locations, customize drinks, and place instant pre-orders through a fast, real-time, location-aware ordering experience.",
      meta: {
        role: "Full Stack Developer",
        teamSize: "5-person team",
        duration: "1 yr",
        period: "Feb 2022 – Jan 2023",
        platform: "Mobile",
      },
    },

    coverImages: [],

    challenge: {
      prose:
        "Customers walked up to machines and paid with cash — with no way to pre-order, no inventory visibility, and no digital receipt. Operators had no data on which machines were running low or which locations were underperforming. The brief was to move the entire ordering flow to mobile without adding friction to an experience that already took under a minute.",
      pullQuote:
        "Customers walked up to machines and paid with cash — with no idea if the drink they wanted was even in stock.",
    },

    whatIDid: {
      intro:
        "JAVIS is a B2C mobile app that lets customers find nearby automated beverage machines on a live map, customize their order, and pay in under 30 seconds. I owned the full React Native client and contributed to the Node.js/GraphQL backend — building the real-time ordering pipeline from cart through Stripe payment confirmation.",
      contributions: [
        {
          icon: "Zap",
          title: "Reduced ordering flow to under 5 taps",
          detail:
            "Redesigned the discovery-to-payment UX, cutting required interactions by 60% compared to the initial prototype. Combined Mapbox marker tap-to-order with optimistic cart updates for a near-instant feel.",
        },
        {
          icon: "Radio",
          title: "Real-time machine availability via WebSocket",
          detail:
            "Integrated WebSocket subscriptions for live stock and machine status, preventing orders against out-of-stock or offline machines — a key source of failed orders in the beta.",
        },
        {
          icon: "CreditCard",
          title: "Stripe payment flow with under 1% failure rate",
          detail:
            "Built the full Stripe React Native SDK integration with saved cards, payment failure recovery, and server-side receipt generation, achieving sub-1% payment failure in production.",
        },
      ],
    },

    technicalDecisions: [
      {
        decision: "Mapbox over Google Maps for machine discovery",
        rationale:
          "Mapbox gave us precise control over marker clustering and custom map styling needed to surface active machines clearly. It also paired better with the GraphQL geospatial queries powering machine proximity lookups.",
      },
      {
        decision: "GraphQL for the ordering API",
        rationale:
          "The ordering domain has deep nesting: machines → slots → products → customizations → pricing tiers. GraphQL let the mobile client fetch exactly what each screen needed, keeping payloads small on mobile connections.",
      },
    ],

    visuals: [],

    results: [
      {
        icon: "ShoppingCart",
        value: "300+",
        label: "Daily Orders / Machine",
        description: "Orders processed per machine at peak throughput",
      },
      {
        icon: "Clock",
        value: "~50%",
        label: "Faster Ordering",
        description: "vs. walk-up cash purchase before the app",
      },
      {
        icon: "Users",
        value: "100+",
        label: "Concurrent Users",
        description: "Simultaneous users with no performance degradation",
      },
    ],

    whatILearned: [
      {
        lead: "Map UX is the product when location is the core feature.",
        detail:
          "Mapbox gave us precise control over marker clustering and map styling that Google Maps couldn't match. Investing in the right mapping SDK early shaped every discovery interaction downstream.",
      },
      {
        lead: "GraphQL shines when your data model has deep nesting.",
        detail:
          "The ordering domain had machines → slots → products → customizations → pricing tiers. GraphQL let the mobile client fetch exactly what each screen needed, keeping payloads small on mobile connections.",
      },
    ],

    sidebar: {
      role: "Owned mobile ordering experience and real-time commerce flow",
      technologyStack: [
        {
          groupLabel: "Frontend",
          technologies: [
            "React Native",
            "Expo",
            "JavaScript",
            "NativeWind",
            "Mapbox",
            "Zustand",
          ],
        },
        {
          groupLabel: "Backend",
          technologies: ["Node.js", "Express.js", "GraphQL API", "Stripe"],
        },
        {
          groupLabel: "Infrastructure",
          technologies: ["EAS", "GitHub Actions"],
        },
      ],
      constraints: [
        "Dual platform (iOS + Android) from day one",
        "Stripe PCI compliance requirements",
        "Dependency on physical beverage machine hardware APIs",
      ],
      collaborators: "2 backend engineers · 1 mobile co-developer · 1 designer",
      cta: {
        label: "Product Site",
        url: "https://www.javisholdings.com/copy-of-emerging-digital-ecosystem-ne",
      },
    },
  },

  {
    id: "surveillance-platform",
    name: "Surveillance Platform",
    slug: "surveillance-platform",
    thumbnailImage: "/projects/surveillance/surveillance-00.png",
    targetPlatform: "Web",
    industrySectors: ["GovTech", "Enterprise", "Featured"],
    externalLink: "https://oneberry.com/anomaly-detection-ai/",
    isPrivate: true,
    hasCaseStudy: false,
    coreTechStack: [],
    hero: {
      title: "Surveillance Platform",
      summary:
        "Real-time monitoring platform that unifies thousands of live camera feeds into a single operational system for continuous surveillance and incident tracking across multiple government agencies.",
      meta: {
        role: "Senior Fullstack Engineer",
        teamSize: "10-person team",
        duration: "18 mos",
        period: "Feb 2023 – Jul 2024",
        platform: "Web",
      },
    },

    coverImages: [],

    challenge: {
      prose:
        "Each of the three government agencies operated its own VMS client with no shared visibility. Incidents that crossed agency jurisdictions fell through the cracks. We were tasked with building a single platform that unified 4,000+ live camera feeds, enforced per-agency access boundaries, and met a 200ms alert delivery SLA mandated in the government contract — all without any downtime to operational systems.",
      pullQuote:
        "Each agency had its own VMS client. Incidents fell through the cracks because no one platform could see everything.",
    },

    whatIDid: {
      intro:
        "A multi-tenant real-time surveillance platform centralizing 4,000+ live camera feeds across 3 government agencies — with AI-powered anomaly detection, WebSocket-based incident alerts, and role-based access per agency. I led frontend architecture, built the NestJS BFF layer, and later drove engineering standards across 4 concurrent projects in a Lerna monorepo.",
      contributions: [
        {
          icon: "Layout",
          title: "Improved map rendering performance by ~50%",
          detail:
            "Replaced direct DOM updates in the camera map with a virtualized RTK Query approach backed by Redis geospatial indexing, eliminating layout thrash when 100+ marker states updated simultaneously.",
        },
        {
          icon: "Shield",
          title: "Reduced production defects by ~60% with TDD",
          detail:
            "Introduced Jest unit tests for all business logic and Cypress e2e tests for critical flows across 4 concurrent projects, cutting the defect rate from 8.4 per sprint to 3.2 over 6 months.",
        },
        {
          icon: "Radio",
          title: "Delivered real-time alert system meeting 200ms SLA",
          detail:
            "Engineered WebSocket-based push alerts with delivery confirmation and polling fallback, meeting the agency-mandated 200ms incident delivery SLA across all three tenants.",
        },
      ],
    },

    technicalDecisions: [
      {
        decision: "Lerna monorepo across all services and frontends",
        rationale:
          "3 agencies, 2 frontends, a BFF, and shared component libraries meant without a monorepo we'd have 5+ repos drifting in TypeScript types and tooling config. Lerna gave us a single CI pipeline and consistent versioning across all packages.",
      },
      {
        decision: "BullMQ for alert video clip generation",
        rationale:
          "Generating video snippets from live streams is CPU-intensive and can't block the HTTP cycle. BullMQ queued these jobs with priority lanes and retry policies, keeping the API responsive during alert bursts that could trigger dozens of clips simultaneously.",
      },
    ],

    visuals: [],

    results: [
      {
        icon: "Video",
        value: "4,000+",
        label: "Live Cameras",
        description: "Concurrent feeds unified into one real-time platform",
      },
      {
        icon: "ShieldCheck",
        value: "3",
        label: "Gov Agencies",
        description: "Onboarded with isolated multi-tenant access control",
      },
      {
        icon: "TrendingUp",
        value: "~60%",
        label: "Defects Reduced",
        description: "Defect rate drop after TDD across 4 concurrent projects",
      },
    ],

    whatILearned: [
      {
        lead: "A monorepo pays off immediately when sharing types across services.",
        detail:
          "3 agencies, 2 frontends, a BFF, and shared component libraries meant without a monorepo we'd have had 5+ repos drifting in TypeScript types. Lerna gave us a single CI pipeline and consistent versioning from day one.",
      },
      {
        lead: "CPU-intensive jobs must never block the request cycle.",
        detail:
          "Generating video snippets from live streams is expensive. BullMQ with priority lanes kept the API responsive during alert bursts that would otherwise have queued dozens of clip jobs on the main thread.",
      },
    ],

    sidebar: {
      role: "Led frontend architecture for real-time multi-agency surveillance platform",
      technologyStack: [
        {
          groupLabel: "Frontend",
          technologies: [
            "Next.js",
            "TypeScript",
            "Redux Toolkit",
            "RTK Query",
            "Material UI",
            "REST API",
          ],
        },
        {
          groupLabel: "Backend",
          technologies: [
            "Node.js",
            "Express.js",
            "BullMQ",
            "PostgreSQL",
            "Redis",
          ],
        },
        {
          groupLabel: "Infrastructure",
          technologies: [
            "Lerna",
            "Docker",
            "Nginx",
            "Cloudflare",
            "GitHub Actions",
          ],
        },
      ],
      constraints: [
        "200ms alert delivery SLA mandated by agencies",
        "Government security audit before go-live",
        "Zero-downtime deployment for live operational system",
      ],
      collaborators: "3 cross-functional teams · backend, DevOps, QA, PM leads",
      cta: {
        label: "Product Site",
        url: "https://oneberry.com/anomaly-detection-ai/",
      },
    },
  },

  {
    id: "digital-advisor",
    name: "Digital Advisor Platform",
    slug: "digital-advisor",
    thumbnailImage: "/projects/dap/dap-00.png",
    targetPlatform: "Web",
    industrySectors: ["Fintech", "Enterprise"],
    externalLink:
      "https://www.hitachi.asia/fibu/product/digital-advisor-platform/",
    isPrivate: true,
    hasCaseStudy: false,
    coreTechStack: [],
    hero: {
      title: "Digital Advisor Platform",
      summary:
        "Digital platform connecting financial advisors and customers for collaborative financial planning through interactive life simulations, improving understanding of financial decisions and outcomes.",
      meta: {
        role: "Frontend Developer",
        teamSize: "5-person team",
        duration: "8 mos",
        period: "Feb 2022 – Sep 2022",
        platform: "Web",
      },
    },

    coverImages: [],

    challenge: {
      prose:
        "AIA Singapore's 6,000+ advisors were filling paper KYC forms at client meetings, then manually re-entering the same data into compliance systems. A hard cutover date with no parallel-run period meant we had to replace the entire paper workflow on day one — with MAS-regulated compliance flows that could not go live with defects.",
      pullQuote:
        "Advisors were filling paper forms at client meetings, then manually re-entering the same data into compliance systems — twice.",
    },

    whatIDid: {
      intro:
        "A digital platform for AIA Singapore that replaced paper-based KYC and agent onboarding with structured digital workflows — covering identity verification, compliance forms, and an interactive financial life simulator used during client advisory sessions. I built all 7 compliance flows, the simulation module, and the shared Nx component library.",
      contributions: [
        {
          icon: "FileText",
          title: "Built all 7 KYC and compliance flows end-to-end",
          detail:
            "Implemented multi-step forms with conditional field logic, cross-step validation, and digital signature capture — achieving 100% KYC digitization on the launch day rollout.",
        },
        {
          icon: "BarChart2",
          title:
            "Interactive financial life simulator with real-time recalculation",
          detail:
            "Built the simulation tool advisors use to model income, expenses, and insurance coverage interactively during client sessions, with instant recalculation as variables change.",
        },
      ],
    },

    technicalDecisions: [
      {
        decision: "AWS AppSync for real-time advisor-client session sync",
        rationale:
          "Advisory sessions involve two people reviewing the same data simultaneously. AppSync's managed GraphQL subscriptions gave us real-time sync without building a WebSocket server, and its IAM integration handled auth against the existing AIA identity setup.",
      },
      {
        decision: "Zustand for cross-step KYC form state",
        rationale:
          "The KYC flows have 50+ fields across 7 steps with complex conditional logic between them. Zustand's flat store made cross-step field dependencies straightforward — Redux's action/reducer pattern would have doubled the boilerplate for the same outcome.",
      },
    ],

    visuals: [],

    results: [
      {
        icon: "Users",
        value: "6,000+",
        label: "Agents Onboarded",
        description: "AIA Singapore advisors migrated from paper on launch day",
      },
      {
        icon: "CheckCircle",
        value: "100%",
        label: "KYC Digitized",
        description: "Paper KYC submissions eliminated on launch day",
      },
      {
        icon: "GitBranch",
        value: "7",
        label: "Compliance Flows",
        description: "Multi-step KYC flows with conditional field logic",
      },
    ],

    whatILearned: [
      {
        lead: "Managed subscriptions eliminate WebSocket infrastructure at a real cost.",
        detail:
          "AppSync's managed GraphQL subscriptions gave us real-time advisor-client sync without building a WebSocket server. The IAM integration also handled auth against AIA's existing identity setup — two infrastructure problems solved in one decision.",
      },
      {
        lead: "Flat stores win over reducers when field dependencies are deep.",
        detail:
          "The KYC flows had 50+ fields across 7 steps with complex conditional logic between them. Zustand's flat store made cross-step field dependencies straightforward — Redux's action/reducer pattern would have doubled the boilerplate.",
      },
    ],

    sidebar: {
      role: "Built structured onboarding system replacing manual compliance workflows",
      technologyStack: [
        {
          groupLabel: "Frontend",
          technologies: ["React", "TypeScript", "Zustand", "Bootstrap"],
        },
        {
          groupLabel: "Backend",
          technologies: ["AWS AppSync", "GraphQL API"],
        },
        {
          groupLabel: "Infrastructure",
          technologies: ["AWS Amplify", "Nx Monorepo"],
        },
      ],
      constraints: [
        "MAS regulatory compliance for all KYC flows",
        "AIA identity system integration (no direct DB access)",
        "Hard cutover date — no parallel-run period",
      ],
      collaborators:
        "1 frontend co-developer · 1 backend engineer · 1 QA · 1 PM",
      cta: {
        label: "Product Site",
        url: "https://www.hitachi.asia/fibu/product/digital-advisor-platform/",
      },
    },
  },

  {
    id: "b2b-portal",
    name: "B2B Supplier Portal",
    slug: "b2b-portal",
    thumbnailImage: "/projects/b2b/b2b-00.png",
    targetPlatform: "Web",
    industrySectors: ["Enterprise", "Supply Chain"],
    externalLink: "https://shengsiong.com.sg/",
    isPrivate: true,
    hasCaseStudy: false,
    coreTechStack: [],
    hero: {
      title: "B2B Supplier Portal",
      summary:
        "Enterprise procurement platform that replaces legacy workflows with a unified data-driven system, eliminating data inconsistencies and improving operational efficiency across large-scale supply chain processes.",
      meta: {
        role: "Full-Stack Engineer",
        teamSize: "10-person team",
        duration: "10 mos",
        period: "Aug 2022 – Jun 2023",
        platform: "Web",
      },
    },

    coverImages: [],

    challenge: {
      prose:
        "Sheng Siong's 200+ suppliers were faxing purchase orders and submitting CSVs by email. The operations team manually reconciled these against internal records — a process that took days and introduced errors on every cycle. The legacy system had no schema documentation, and data existed only in flat files. We had to migrate everything with zero data loss and keep the business running during the cutover.",
      pullQuote:
        "Suppliers were faxing purchase orders. The operations team was manually reconciling CSVs. Nobody had real-time order status.",
    },

    whatIDid: {
      intro:
        "A modern B2B procurement portal for Sheng Siong — Singapore's third-largest supermarket chain — that replaced a decade-old legacy system handling supplier onboarding, purchase orders, invoicing, and delivery confirmations. I led the full-stack rebuild: Next.js frontend, GraphQL API design, and MySQL schema migration.",
      contributions: [
        {
          icon: "Database",
          title: "Reduced data integration time by 30%",
          detail:
            "Replaced REST polling with optimized GraphQL queries using DataLoader batching, eliminating N+1 queries across the supplier/product/PO relationship graph that had been the primary bottleneck.",
        },
        {
          icon: "Zap",
          title: "40% frontend performance improvement on critical pages",
          detail:
            "Migrated high-traffic supplier dashboard and PO list views from client-side rendering to Next.js SSR and ISR, reducing Time-to-Interactive from 4.2s to 2.5s on average connections.",
        },
        {
          icon: "CheckCircle",
          title: "100% legacy data migrated with zero loss",
          detail:
            "Wrote migration scripts transforming legacy flat-file records into the normalized MySQL schema with validation checkpoints and per-batch rollback — enabling a clean cutover with no data recovery incidents.",
        },
      ],
    },

    technicalDecisions: [
      {
        decision: "GraphQL over REST for the procurement API",
        rationale:
          "Procurement data has deep nesting: POs → line items → products → suppliers → contracts. GraphQL reduced average page-load API calls from 12 to 3, cutting both latency and backend load during peak supplier activity.",
      },
      {
        decision: "Strapi CMS for supplier catalog and document management",
        rationale:
          "Supplier profiles and document templates changed frequently. Strapi gave business users a non-technical interface to manage them without engineering involvement, cutting content update turnaround from days to minutes.",
      },
    ],

    visuals: [],

    results: [
      {
        icon: "TrendingUp",
        value: "30%",
        label: "Faster Integration",
        description: "Via GraphQL with DataLoader batching over REST polling",
      },
      {
        icon: "Zap",
        value: "40%",
        label: "Frontend Performance",
        description: "TTI dropped from 4.2s → 2.5s with Next.js SSR/ISR",
      },
      {
        icon: "CheckCircle",
        value: "100%",
        label: "Migration Complete",
        description: "Legacy flat-file records to MySQL with zero data loss",
      },
    ],

    whatILearned: [
      {
        lead: "GraphQL pays for itself when the data model has real depth.",
        detail:
          "Procurement data had POs → line items → products → suppliers → contracts. GraphQL reduced average page-load API calls from 12 to 3, cutting both latency and backend load during peak supplier activity.",
      },
      {
        lead: "Give non-technical users control over their own content.",
        detail:
          "Supplier profiles and document templates changed frequently. Strapi gave business users a non-technical interface without engineering involvement, cutting content update turnaround from days to minutes.",
      },
    ],

    sidebar: {
      role: "Led full-stack rebuild of legacy procurement system into modern GraphQL platform",
      technologyStack: [
        {
          groupLabel: "Frontend",
          technologies: ["Next.js", "Redux", "Bootstrap"],
        },
        {
          groupLabel: "Backend",
          technologies: [
            "Node.js",
            "Express.js",
            "GraphQL API",
            "Strapi CMS",
            "MySQL",
          ],
        },
        {
          groupLabel: "Infrastructure",
          technologies: ["AWS EC2", "AWS S3"],
        },
      ],
      constraints: [
        "Zero data loss across 200+ supplier records",
        "Zero-downtime cutover from legacy system",
        "Legacy data in flat-file format with no schema documentation",
      ],
      collaborators:
        "2 frontend engineers · 3 backend engineers · 2 QA · 1 DevOps · 1 PM",
      cta: {
        label: "Product Site",
        url: "https://shengsiong.com.sg/",
      },
    },
  },

  {
    id: "onenergy-mobile",
    name: "ONenergy Mobile",
    slug: "onenergy-mobile",
    thumbnailImage: "/projects/onenergy-mobile/onenergy-mobile-00.png",
    targetPlatform: "Mobile",
    industrySectors: ["CleanTech", "IoT"],
    externalLink:
      "https://play.google.com/store/apps/details?id=com.singaporetestlab.on_energy.twa",
    isPrivate: false,
    hasCaseStudy: false,
    coreTechStack: [],
    hero: {
      title: "ONenergy Mobile",
      summary:
        "Mobile app that delivers real-time visibility of household electricity usage at appliance level, enabling continuous monitoring of energy consumption through live IoT updates.",
      meta: {
        role: "Full-stack Engineer",
        teamSize: "6-person team",
        duration: "7 mos",
        period: "May 2024 – Nov 2024",
        platform: "Mobile",
      },
    },

    coverImages: [],

    challenge: {
      prose:
        "Homeowners had no visibility into how individual appliances contributed to their electricity bill until the monthly statement arrived. The IoT hardware produced sensor readings every 2 seconds per appliance — 119 appliances per household — and the mobile client had to display this live without exhausting the battery or the network. I was the sole mobile developer with 7 months to deliver from scratch to Play Store.",
      pullQuote:
        "Homeowners only discovered they'd overspent on electricity when the bill arrived at the end of the month.",
    },

    whatIDid: {
      intro:
        "ONenergy Mobile gives homeowners real-time visibility of electricity consumption at individual appliance level, with a 2-second live update cycle driven by IoT sensors. I was the sole mobile developer — building the full React Native client from architecture through Play Store deployment, implementing Apollo subscriptions for the live data feed.",
      contributions: [
        {
          icon: "Radio",
          title: "2-second live appliance updates via GraphQL subscriptions",
          detail:
            "Implemented Apollo Client subscriptions against the IoT data pipeline with optimistic cache updates and automatic reconnection logic for intermittent connections — avoiding the ~60 requests/minute polling would have required.",
        },
        {
          icon: "Globe",
          title: "Sole delivery from scaffold to Play Store in 7 months",
          detail:
            "Owned the entire mobile development lifecycle: app architecture, component library, state management, data visualization layer, and EAS build pipeline for Android production releases.",
        },
      ],
    },

    technicalDecisions: [
      {
        decision: "Apollo subscriptions over REST polling for live sensor data",
        rationale:
          "With 2-second updates across 119 appliances, polling would have generated ~3,600 requests/hour per user. A single persistent WebSocket subscription reduced server load by ~95% while delivering lower latency updates.",
      },
      {
        decision: "Zustand for UI state alongside Apollo cache",
        rationale:
          "Apollo owns server data (appliance readings, usage history). Zustand manages ephemeral UI state (selected appliance, time range, chart mode) without polluting the Apollo cache with client-only concerns.",
      },
    ],

    visuals: [],

    results: [
      {
        icon: "Users",
        value: "600",
        label: "Households Monitored",
        description: "With real-time appliance-level monitoring at launch",
      },
      {
        icon: "Clock",
        value: "2s",
        label: "Live Update Interval",
        description: "IoT sensor refresh rate across all appliances",
      },
      {
        icon: "Zap",
        value: "119",
        label: "Appliances Tracked",
        description: "Per household via IoT sensors",
      },
    ],

    whatILearned: [
      {
        lead: "A single WebSocket subscription beats polling at scale.",
        detail:
          "With 2-second updates across 119 appliances, polling would have generated ~3,600 requests/hour per user. A persistent Apollo subscription reduced server load by ~95% while delivering lower latency updates.",
      },
      {
        lead: "Separate client state from server cache.",
        detail:
          "Apollo owns server data (appliance readings, usage history). Keeping Zustand for ephemeral UI state (selected appliance, time range, chart mode) kept the Apollo cache clean and predictable.",
      },
    ],

    sidebar: {
      role: "Built real-time mobile energy monitoring experience for household appliance-level tracking",
      technologyStack: [
        {
          groupLabel: "Frontend",
          technologies: [
            "React Native",
            "Expo",
            "JavaScript",
            "Zustand",
            "Apollo Client",
          ],
        },
        {
          groupLabel: "Backend",
          technologies: ["GraphQL API"],
        },
        {
          groupLabel: "Infrastructure",
          technologies: ["EAS"],
        },
      ],
      constraints: [
        "Solo delivery within 7 months",
        "IoT sensor hardware dictated real-time contract",
        "2-second update SLA across all connected appliances",
      ],
      collaborators: "Backend team · IoT hardware engineers · 1 PM",
      cta: {
        label: "View on Google Play",
        url: "https://play.google.com/store/apps/details?id=com.singaporetestlab.on_energy.twa",
      },
    },
  },

  {
    id: "onenergy-web",
    name: "ONenergy Web Platform",
    slug: "onenergy-web",
    thumbnailImage: "/projects/onenergy-web/onenergy-web-00.png",
    targetPlatform: "Web",
    industrySectors: ["CleanTech", "IoT"],
    externalLink: "https://web.neahecs.com/",
    isPrivate: false,
    hasCaseStudy: false,
    coreTechStack: [],
    hero: {
      title: "ONenergy Web Platform",
      summary:
        "Web platform that processes real-time IoT energy data and visualizes household electricity usage across appliances through a unified monitoring dashboard with continuous live updates.",
      meta: {
        role: "Full-stack Engineer",
        teamSize: "6-person team",
        duration: "7 mos",
        period: "May 2024 – Nov 2024",
        platform: "Web",
      },
    },

    coverImages: [],

    challenge: {
      prose:
        "Facility managers and energy researchers needed aggregated visibility across all 600 monitored households — patterns and anomalies that weren't visible from a single homeowner's view. The system had to ingest sensor data at 2-second intervals across 119 appliances per household, serve it to a web dashboard and a mobile app simultaneously, and keep 30-day historical queries fast. I owned the full stack solo.",
      pullQuote:
        "Facility managers had no aggregated view — every household was an island with no cross-home patterns and no early anomaly signals.",
    },

    whatIDid: {
      intro:
        "A full-stack web platform that ingests real-time IoT energy data from 119 appliance-level sensors per household and visualizes consumption across 600 homes in admin and homeowner-facing dashboards. I owned the Node.js backend, GraphQL API, PostgreSQL schema design, and Next.js frontend — building and deploying the complete system.",
      contributions: [
        {
          icon: "Database",
          title: "Designed the PostgreSQL schema for high-frequency IoT data",
          detail:
            "Modeled time-series sensor data with date partitioning and BRIN indexes, keeping 30-day historical report queries under 100ms across 119 appliances per household.",
        },
        {
          icon: "Code",
          title: "Built the GraphQL API serving both web and mobile clients",
          detail:
            "Implemented subscription resolvers that bridged the IoT MQTT pipeline to connected clients — one schema serving the Next.js dashboard and the React Native app, eliminating duplicated business logic.",
        },
      ],
    },

    technicalDecisions: [
      {
        decision: "PostgreSQL over a purpose-built time-series database",
        rationale:
          "The team already ran PostgreSQL and the write throughput was manageable with careful schema design. Adding InfluxDB or TimescaleDB would have introduced operational overhead that wasn't justified for the data volumes at this scale.",
      },
      {
        decision: "One GraphQL schema for web and mobile",
        rationale:
          "Designing a single schema served both clients from day one, avoiding the drift and duplicated resolver logic that would have accumulated if the web and mobile APIs were built separately.",
      },
    ],

    visuals: [],

    results: [
      {
        icon: "Users",
        value: "600",
        label: "Households Monitored",
        description: "Aggregated across facility managers and researchers",
      },
      {
        icon: "Clock",
        value: "2s",
        label: "Live Update Interval",
        description: "IoT data ingested and served across all households",
      },
      {
        icon: "Zap",
        value: "119",
        label: "Appliances Tracked",
        description: "Data points per household via GraphQL pipeline",
      },
    ],

    whatILearned: [
      {
        lead: "Schema design can replace a purpose-built database.",
        detail:
          "The team already ran PostgreSQL. With date partitioning and BRIN indexes, 30-day historical queries stayed under 100ms. Adding InfluxDB or TimescaleDB would have introduced operational overhead that wasn't justified at this scale.",
      },
      {
        lead: "One schema serving two clients prevents long-term drift.",
        detail:
          "Designing a single GraphQL schema for web and mobile from day one avoided the duplicated resolver logic that would have accumulated if the APIs were built separately.",
      },
    ],

    sidebar: {
      role: "Built full-stack real-time energy analytics platform for IoT data visualization and processing",
      technologyStack: [
        {
          groupLabel: "Frontend",
          technologies: ["Next.js", "JavaScript", "Zustand"],
        },
        {
          groupLabel: "Backend",
          technologies: ["Node.js", "Express.js", "GraphQL API", "PostgreSQL"],
        },
        {
          groupLabel: "Infrastructure",
          technologies: ["Docker", "GitHub Actions", "Vercel"],
        },
      ],
      constraints: [
        "Single GraphQL schema serving both web and mobile",
        "High-frequency writes (2s intervals × 119 appliances × 600 households)",
        "Solo full-stack delivery in 7 months",
      ],
      collaborators: "Mobile developer · IoT engineers · 1 PM",
      cta: {
        label: "Live Demo",
        url: "https://web.neahecs.com/",
      },
    },
  },

  {
    id: "smu-portal",
    name: "SMU Research Portal",
    slug: "smu-portal",
    thumbnailImage: "/projects/smu/smu-00.png",
    targetPlatform: "Web",
    industrySectors: ["Education", "Data"],
    externalLink: "https://smu.oneberryhub.com/login",
    isPrivate: false,
    hasCaseStudy: false,
    coreTechStack: [],
    hero: {
      title: "SMU Research Portal",
      summary:
        "Academic data platform that automates ingestion, validation, and synchronization of research publications and citations, keeping institutional records accurate and consistently up to date.",
      meta: {
        role: "Full-stack Engineer",
        teamSize: "4-person team",
        duration: "4 mos",
        period: "Jul 2024 – Nov 2024",
        platform: "Web",
      },
    },

    coverImages: [],

    challenge: {
      prose:
        "The SMU research office was manually updating 14,798 publication records from spreadsheets and database exports. Each sync cycle took weeks, introduced errors at scale, and required a researcher to own the process end-to-end. External academic APIs had inconsistent data quality — conflicting author names, missing DOIs, and duplicate records that had to be resolved without losing data. I built the entire system solo in 4 months.",
      pullQuote:
        "The research office was manually updating 14,798 records from spreadsheets — a sync cycle that took weeks and introduced errors every time.",
    },

    whatIDid: {
      intro:
        "An automated data management portal for Singapore Management University that ingests, validates, and synchronizes 14,798 research publications and 363,613 citation records from external academic APIs. I built the complete system solo — data pipeline, validation engine, Strapi CMS backend, Next.js admin portal, and AWS deployment.",
      contributions: [
        {
          icon: "Globe",
          title: "Automated the full publication sync cycle end-to-end",
          detail:
            "Built a scheduled pipeline that pulls from academic APIs, validates record integrity, resolves duplicates, and updates Strapi — eliminating the research office's manual process entirely from day one.",
        },
        {
          icon: "CheckCircle",
          title:
            "Validated 363K+ citation records across multiple data sources",
          detail:
            "Implemented a citation matching algorithm cross-referencing author names, DOIs, and publication years across API sources, resolving ambiguous records that would have required manual review at scale.",
        },
      ],
    },

    technicalDecisions: [
      {
        decision: "Strapi CMS as the data and content layer",
        rationale:
          "The research office needed a non-technical interface to review and correct records without developer involvement. Strapi's admin panel provided this out of the box, while its GraphQL API served the public-facing portal — one tool handling both use cases.",
      },
      {
        decision: "Batch processing with per-batch validation and rollback",
        rationale:
          "Processing 14,798 publications in a single transaction would have been opaque and risky to recover from. Configurable batch sizes with per-batch validation reports gave the research office visibility and a safe rollback path for each sync cycle.",
      },
    ],

    visuals: [],

    results: [
      {
        icon: "CheckCircle",
        value: "14,798",
        label: "Publications Managed",
        description: "Under fully automated sync and management",
      },
      {
        icon: "TrendingUp",
        value: "363K+",
        label: "Citations Processed",
        description: "Validated from multiple external academic APIs",
      },
      {
        icon: "Zap",
        value: "0",
        label: "Manual Maintenance",
        description: "Fully automated pipeline, no manual steps needed",
      },
    ],

    whatILearned: [
      {
        lead: "A CMS can serve both technical and non-technical users from one tool.",
        detail:
          "The research office needed a non-technical interface to review records without developer involvement. Strapi's admin panel provided this out of the box, while its GraphQL API served the public-facing portal — two use cases, one tool.",
      },
      {
        lead: "Batch boundaries make large data migrations recoverable.",
        detail:
          "Processing 14,798 publications in a single transaction would have been opaque and risky. Configurable batch sizes with per-batch validation reports gave the research office visibility and a safe rollback path for each sync cycle.",
      },
    ],

    sidebar: {
      role: "Built automated academic data pipeline for publication and citation synchronization",
      technologyStack: [
        {
          groupLabel: "Frontend",
          technologies: ["Next.js", "JavaScript", "Zustand"],
        },
        {
          groupLabel: "Backend",
          technologies: ["Node.js", "Express.js", "Strapi CMS", "GraphQL API"],
        },
        {
          groupLabel: "Infrastructure",
          technologies: ["Docker", "AWS S3", "GitHub Actions"],
        },
      ],
      constraints: [
        "14,798 live records — zero loss tolerance",
        "Non-technical research staff as primary end users",
        "External academic APIs with inconsistent data quality",
      ],
      collaborators: "SMU research office · 1 PM · 1 QA",
      cta: {
        label: "Live Demo",
        url: "https://smu.oneberryhub.com/login",
      },
    },
  },

  {
    id: "collegedao",
    name: "CollegeDAO Platform",
    slug: "collegedao",
    thumbnailImage: "/projects/collegedao/collegedao-00.png",
    targetPlatform: "Web",
    industrySectors: ["Web3", "Community"],
    externalLink: "https://collegedao.io/",
    isPrivate: false,
    hasCaseStudy: false,
    coreTechStack: [],
    hero: {
      title: "CollegeDAO Platform",
      summary:
        "Web3 platform enabling discovery, collaboration, and engagement across global university blockchain communities through a decentralized networking ecosystem.",
      meta: {
        role: "Full-stack Engineer",
        teamSize: "4-person team",
        duration: "6 mos",
        period: "May 2023 – Nov 2023",
        platform: "Web",
      },
    },

    coverImages: [],

    challenge: {
      prose:
        "University blockchain clubs at 100+ universities had no shared platform. Collaboration meant cold-messaging people on Twitter and Discord, with no way to discover what other clubs were working on, when events were happening, or how to join. The brief was to build a networking platform that felt polished enough to represent the community publicly — as the sole developer, in 6 months.",
      pullQuote:
        "Blockchain clubs at 100+ universities had no common platform. Collaboration meant cold-messaging people on Twitter and Discord.",
    },

    whatIDid: {
      intro:
        "CollegeDAO is a Web3 networking platform that connects university blockchain clubs worldwide — enabling community discovery, collaboration, and event participation across 100+ universities. I built the complete platform solo: Next.js frontend, Strapi CMS backend, GraphQL API, and Vercel deployment.",
      contributions: [
        {
          icon: "Users",
          title: "Scaled to 14.6K+ users with 80+ active communities",
          detail:
            "Designed and deployed the full platform architecture that handled growth from 0 to 14,600 users within the launch period, with no performance degradation under peak event traffic.",
        },
        {
          icon: "Zap",
          title: "Next.js SSG + ISR for near-instant community page loads",
          detail:
            "Community profile pages are read-heavy but update frequently. Static generation with ISR gave sub-second load times while keeping content fresh within minutes — critical for first impressions that drive membership decisions.",
        },
      ],
    },

    technicalDecisions: [
      {
        decision: "Strapi CMS for community content management",
        rationale:
          "Community profiles, events, and announcements change constantly. Strapi's admin panel let community managers update their own pages without engineering involvement, and the GraphQL API kept the Next.js frontend decoupled from the content schema.",
      },
      {
        decision: "SSG with ISR over full SSR for community pages",
        rationale:
          "Community pages are visited far more often than they're updated. SSG served cached HTML with zero server compute per request, and ISR kept content current within minutes — a better fit than SSR's per-request cost at this traffic scale.",
      },
    ],

    visuals: [],

    results: [
      {
        icon: "Users",
        value: "14.6K+",
        label: "Users",
        description: "Joined within the launch period globally",
      },
      {
        icon: "TrendingUp",
        value: "100+",
        label: "Universities",
        description: "Blockchain clubs discoverable on the platform",
      },
      {
        icon: "Zap",
        value: "80+",
        label: "Communities",
        description: "Active communities with events and memberships",
      },
    ],

    whatILearned: [
      {
        lead: "A CMS with an admin panel removes you from the content loop.",
        detail:
          "Community profiles, events, and announcements change constantly. Strapi's admin panel let community managers update their own pages without engineering involvement — keeping the GraphQL API decoupled from the content schema.",
      },
      {
        lead: "SSG + ISR is the right default for read-heavy, occasionally-updated pages.",
        detail:
          "Community pages are visited far more often than they're updated. SSG served cached HTML with zero server compute per request, and ISR kept content current within minutes — a better fit than SSR's per-request cost at this scale.",
      },
    ],

    sidebar: {
      role: "Built scalable Web3 platform connecting global university blockchain communities",
      technologyStack: [
        {
          groupLabel: "Frontend",
          technologies: [
            "Next.js",
            "TypeScript",
            "Zustand",
            "Framer Motion",
            "Tailwind CSS",
          ],
        },
        {
          groupLabel: "Backend",
          technologies: ["GraphQL API", "Strapi CMS"],
        },
        {
          groupLabel: "Infrastructure",
          technologies: ["Vercel", "Docker", "GitHub Actions"],
        },
      ],
      constraints: [
        "Solo delivery in 6 months",
        "Community managers as non-technical content editors",
        "Rapid scale from 0 to 14K+ users on launch",
      ],
      collaborators: "1 designer · 1 PM · community stakeholders",
      cta: {
        label: "Live Demo",
        url: "https://collegedao.io/",
      },
    },
  },
]

export const EXPERIENCE: ExperienceItemType[] = [
  {
    id: "onow-ascent",
    companyName: "ONOW Ascent",
    companyLogo: "/companies/onow-ascent.jpg",
    companyWebsite: "",
    positions: [
      {
        id: "1",
        title: "Senior Software Engineer",
        employmentPeriod: {
          start: "07.2024",
          end: "03.2026",
        },
        employmentType: "Full-time",
        description: [
          "Led architecture and delivery of an AI-powered web and mobile fintech platform (Next.js + React Native) serving 800+ SMEs, generating $37K+ in revenue",
          "Owned frontend state and data layer using Zustand and React Query with caching and request deduplication, reducing redundant API calls by ~40%",
          "Built and maintained a reusable design system and component library (Shadcn, Atomic Design) ensuring UI consistency across all product features",
          "Implemented Firebase real-time push notifications for time-critical financial alerts throughout lending workflows",
          "Owned Android release pipeline using EAS and GitHub Actions, automating build and deployment for reliable production releases",
        ],
        skills: [
          "React",
          "Next.js",
          "React Native",
          "TypeScript",
          "Tailwind CSS",
          "NativeWind",
          "Zustand",
          "React Query",
          "REST API",
          "Firebase",
          "Expo",
          "EAS",
          "Shadcn",
          "Jest",
          "Detox",
          "Docker",
          "GitHub Actions",
        ],
        isExpanded: true,
      },
    ],
    isCurrentEmployer: false,
  },
  {
    id: "nexstack",
    companyName: "Nexstack",
    companyLogo: "/companies/nexstack.jpg",
    companyWebsite: "",
    positions: [
      {
        id: "1",
        title: "Senior Full Stack Developer",
        employmentPeriod: {
          start: "02.2023",
          end: "07.2024",
        },
        employmentType: "Full-time",
        description: [
          "Architected a multi-tenant real-time surveillance platform for 3 government agencies using Next.js + NestJS, supporting 4,000+ concurrent cameras with OAuth/SSO and role-based access control",
          "Built a NestJS BFF service integrating NxWitness VMS to orchestrate live camera data and provide structured REST APIs for the frontend",
          "Implemented BullMQ-based background processing to handle CPU-intensive tasks such as generating alert video snippets from live video streams",
          "Engineered WebSocket-based alert and notification systems for real-time delivery of security incidents across agencies",
          "Improved map-based camera marker rendering performance by ~50% using Redux Toolkit, RTK Query, and Redis geospatial indexing",
          "Structured backend, frontend, and middleware services in a Lerna monorepo for shared dependencies, versioning, and scalable service management",
          "Reduced production defects by ~60% by introducing Jest and Cypress TDD standards; cut deployment time by ~20% through CI/CD pipelines with Docker and GitHub Actions",
          "Led 3 cross-functional teams across 4 concurrent projects, driving technical direction, delivery execution, and engineering standards",
        ],
        skills: [
          "Next.js",
          "NestJS",
          "TypeScript",
          "React Native",
          "Redux Toolkit",
          "RTK Query",
          "REST API",
          "WebSockets",
          "GraphQL API",
          "PostgreSQL",
          "Redis",
          "Lerna",
          "BullMQ",
          "Docker",
          "GitHub Actions",
          "Jest",
          "Cypress",
        ],
      },
      {
        id: "2",
        title: "Full Stack Developer",
        employmentPeriod: {
          start: "02.2022",
          end: "01.2023",
        },
        employmentType: "Full-time",
        description: [
          "Migrated a legacy B2B supplier portal for Sheng Siong to Next.js and Express.js, improving frontend performance and reducing data integration time by ~30% through optimized GraphQL queries and data pipelines",
          "Built and deployed a cross-platform React Native ordering app to the App Store and Google Play, supporting 300+ daily orders per automated beverage machine with Stripe integration",
          "Developed a digital advisor platform for 6,000+ AIA Singapore insurance agents, supporting KYC and onboarding workflows with scalable state and data management",
          "Delivered a research management portal for Singapore Management University, handling 14,798 publications and 363,613 citation records with automated data sync and data integrity validation",
        ],
        skills: [
          "React",
          "Next.js",
          "React Native",
          "TypeScript",
          "GraphQL API",
          "Express.js",
          "Zustand",
          "PostgreSQL",
          "Stripe",
          "Expo",
          "EAS",
          "AWS S3",
          "AWS EC2",
          "Nx monorepo",
        ],
      },
    ],
    isCurrentEmployer: false,
  },
  {
    id: "digital-central",
    companyName: "Digital Central",
    companyLogo: "",
    companyWebsite: "",
    positions: [
      {
        id: "1",
        title: "Full Stack Developer",
        employmentPeriod: {
          start: "06.2021",
          end: "01.2022",
        },
        employmentType: "Full-time",
        description: [
          "Owned end-to-end development of a Web3 fan community platform supporting 116 active communities using React.js, Node.js, Express.js, and MongoDB",
          "Integrated Solana Wallet Adapter for wallet-based authentication and SOL payments for premium community features",
          "Implemented OAuth-based social login alongside on-chain payments for secure, scalable access control",
        ],
        skills: [
          "React",
          "Redux",
          "Tailwind CSS",
          "Node.js",
          "Express.js",
          "REST API",
          "MongoDB",
          "Solana Wallet Adapter",
          "Web3",
        ],
      },
    ],
    isCurrentEmployer: false,
  },
  {
    id: "pico-innovation",
    companyName: "Pico Innovation",
    companyLogo: "/companies/pico-innovation.jpg",
    companyWebsite: "",
    positions: [
      {
        id: "1",
        title: "Frontend Developer",
        employmentPeriod: {
          start: "10.2019",
          end: "03.2020",
        },
        employmentType: "Full-time",
        description: [
          "Built a lost vehicle reporting system and admin dashboard contributing to the recovery of 195 motorcycles",
          "Developed public-facing web portal and admin dashboard using React and Tailwind CSS, integrated with REST APIs",
        ],
        skills: ["React", "Tailwind CSS", "JavaScript", "REST API"],
      },
    ],
    isCurrentEmployer: false,
  },
]

export const EDUCATION: ExperienceItemType[] = [
  {
    id: "university-of-greenwich",
    companyName: "University of Greenwich",
    companyLogo: "/universities/uog.jpg",
    positions: [
      {
        id: "bsc-greenwich",
        title: "Bachelor of Science (BSc)",
        employmentPeriod: { start: "06.2024", end: "05.2025" },
      },
    ],
  },
  {
    id: "university-of-technology-yatanarpon",
    companyName: "University of Technology (Yatanarpon Cyber City)",
    companyLogo: "/universities/utycc.jpg",
    positions: [
      {
        id: "be-yatanarpon",
        title: "Bachelor of Engineering, Information Technology",
        employmentPeriod: { start: "12.2014", end: "03.2019" },
      },
    ],
  },
]
