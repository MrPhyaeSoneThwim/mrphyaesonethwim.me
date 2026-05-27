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
      "TanStack Query",
      "REST API",
      "Firebase",
      "EAS Build",
      "GitHub Actions",
    ],

    hero: {
      title: "DayTwo Mobile App",
      summary:
        "Built and shipped a production React Native fintech app helping SMEs track finances, manage debt, and get AI-assisted business guidance, with offline-first support across iOS and Android.",
      meta: {
        role: "Senior Frontend Engineer",
        teamSize: "5-person team",
        duration: "1 yr 9 mos",
        period: "Jul 2024 – Mar 2026",
        platform: "Mobile",
      },
    },

    challenge: {
      prose:
        "Most SME owners tracked business finances through notebooks or spreadsheets with no clear visibility into cash flow, expenses, or debts, making it difficult to make informed business decisions. The engineering challenge was building a production-ready fintech app from scratch with a 5-person team, covering AI-assisted guidance and offline reliability in low-connectivity environments.",
      pullQuote:
        "By the time most SME owners knew they were losing money, it was already too late to act.",
    },

    whatIDid: {
      intro:
        "Owned frontend architecture and mobile delivery for the DayTwo app, from system design through production release on iOS and Android.",

      contributions: [
        {
          icon: "Layers",
          title: "Mobile architecture and state layer",
          detail:
            "Defined the React Native architecture using TypeScript, Zustand, and TanStack Query, establishing predictable data flow and reusable patterns that let the product scale without significant rework.",
        },
        {
          icon: "BarChart2",
          title: "Core financial system",
          detail:
            "Built end-to-end financial workflows covering cash tracking, sales, expenses, debt management, and lending flows used by SME owners for daily business operations.",
        },
        {
          icon: "Camera",
          title: "AI-assisted receipt capture",
          detail:
            "Shipped OCR-based receipt scanning that extracted transaction data from photos and mapped it into structured financial records, reducing manual entry for high-frequency users.",
        },
        {
          icon: "MessageCircle",
          title: "AI business advisor chat",
          detail:
            "Built a production LLM-powered chat experience with token streaming, structured response rendering, and retry handling, turning AI outputs into clear financial guidance for business owners.",
        },
        {
          icon: "Database",
          title: "Offline-first data sync",
          detail:
            "Designed local persistence with background sync to the REST API, ensuring users could record and review financial data reliably even without a stable internet connection.",
        },
        {
          icon: "Bell",
          title: "Push notifications for lending workflows",
          detail:
            "Integrated Firebase push notifications for repayment reminders and lending status updates, keeping borrowers and lenders informed of time-sensitive lending activities.",
        },
        {
          icon: "GitBranch",
          title: "Release pipeline and engineering standards",
          detail:
            "Built and owned iOS and Android release pipelines using EAS and GitHub Actions, enabling stable cross-platform delivery and consistent release workflows.",
        },
      ],
    },

    technicalDecisions: [
      {
        decision: "TanStack Query and Zustand over a single global store",
        rationale:
          "Separating server state from local UI state reduced unnecessary API calls by 40%, eliminated stale data across shared financial screens, and made the data flow easier to debug as the product grew.",
      },
      {
        decision: "Offline-first architecture built from the start",
        rationale:
          "Many users operated in low-connectivity environments. Designing local persistence and background sync as core infrastructure from day one avoided the data consistency issues that come from adding offline support later.",
      },
      {
        decision: "Streaming-first rendering for AI responses",
        rationale:
          "AI response latency made standard request-response patterns feel slow. Token streaming with structured rendering made the advisor feel responsive and readable from the first token.",
      },
      {
        decision: "NativeWind for a shared component system",
        rationale:
          "With a small team and shared design decisions across web and mobile, NativeWind kept styling consistent and reduced the overhead of maintaining a separate mobile component system.",
      },
    ],

    visuals: [
      {
        src: "/projects/daytwo/daytwo-01.png",
        caption:
          "Cash dashboard with current balance, manual cash verification, and AI business insights",
      },
      {
        src: "/projects/daytwo/daytwo-02.png",
        caption:
          "Transaction entry flow for managing cash updates, loans, sales, expenses, and receipt capture",
      },
      {
        src: "/projects/daytwo/daytwo-03.png",
        caption:
          "POS interface with number pad for fast multi-item sales and expense recording",
      },
      {
        src: "/projects/daytwo/daytwo-04.png",
        caption:
          "Credit management dashboard showing payables, receivables, and overdue payment status",
      },
      {
        src: "/projects/daytwo/daytwo-05.png",
        caption:
          "AI business advisor chat with streaming responses, suggested prompts, and conversation history",
      },
      {
        src: "/projects/daytwo/daytwo-06.png",
        caption:
          "Goal tracking for savings, expenses, sales targets, and cash buffer",
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
        value: "40%",
        label: "API Calls Reduced",
        description:
          "Reduced through TanStack Query caching and request deduplication",
      },
      {
        icon: "MessageCircle",
        value: "AI-powered",
        label: "Business Advisor Chat",
        description:
          "Production LLM chat with streaming responses and structured output rendering",
      },
      {
        icon: "Database",
        value: "Offline-first",
        label: "Reliable on Any Network",
        description:
          "Local persistence and background sync for low-connectivity environments",
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
        lead: "Real production usage exposes problems that testing never catches.",
        detail:
          "Machine downtime, inventory gaps, and interrupted payments only appeared after launch, which reinforced the value of building error handling into the system from the beginning.",
      },
      {
        lead: "Performance requirements need to be defined before building, not after.",
        detail:
          "Setting checkout speed as a goal from day one shaped how the entire ordering flow was designed and built.",
      },
      {
        lead: "A payment flow is only as reliable as its failure handling.",
        detail:
          "Handling retries and interrupted sessions was what made Stripe integration trustworthy for users under real mobile network conditions.",
      },
      {
        lead: "External system integration requires reliable synchronization.",
        detail:
          "Machine inventory and status were managed by an external backend system, making reliable synchronization essential to ensure orders were only placed against accurate and up-to-date machine data.",
      },
    ],

    sidebar: {
      role: "Owned frontend architecture, AI chat integration, offline sync, and full iOS and Android release pipeline",

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
          technologies: ["GitHub Actions", "EAS Build"],
        },
      ],

      constraints: [
        "Built from scratch with a 5-person team",
        "Cross-platform iOS and Android delivery",
        "LLM response latency requiring streaming and optimistic UI",
        "Offline reliability in low-connectivity environments",
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
    hasCaseStudy: true,

    coreTechStack: [
      "React Native",
      "JavaScript",
      "Zustand",
      "Node.js",
      "GraphQL",
      "Strapi CMS",
      "Stripe",
      "Mapbox",
      "EAS Build",
      "GitHub Actions",
    ],

    hero: {
      title: "JAVIS Mobile Ordering App",
      summary:
        "Designed and delivered a cross-platform mobile ordering app for self-service beverage machines, enabling real-time machine discovery, digital payments, and live order tracking across iOS and Android.",
      meta: {
        role: "Full Stack Developer",
        teamSize: "5-person team",
        duration: "1 yr",
        period: "Feb 2022 – Jan 2023",
        platform: "Mobile",
      },
    },

    challenge: {
      prose:
        "Customers had no way to check machine availability, queue length, or wait time before arriving at a location. Orders were placed on-site with no pre-ordering capability, no digital payment option, and no visibility into order status after placing. The engineering challenge was building a real-time ordering system tightly coupled with live machine state, where stale data or failed payments could not be tolerated.",
      pullQuote:
        "By the time customers arrived, machines were often unavailable. There was no way to know until they got there.",
    },

    whatIDid: {
      intro:
        "Owned full-stack engineering for the JAVIS mobile ordering platform, from system architecture through production delivery on iOS and Android.",

      contributions: [
        {
          icon: "Layers",
          title: "End-to-end system architecture",
          detail:
            "Designed the full mobile and backend architecture, defining API structure, state management, and data flow for ordering, payments, and real-time machine availability.",
        },
        {
          icon: "ShoppingCart",
          title: "Real-time ordering under machine constraints",
          detail:
            "Built ordering workflows tightly coupled with live machine state, handling inventory discrepancies, machine downtime, and unstable network conditions to keep checkout behavior consistent.",
        },
        {
          icon: "CreditCard",
          title: "Stripe payment reliability and recovery",
          detail:
            "Integrated Stripe with retry logic and payment recovery handling, ensuring secure checkout completion even when connections are unstable or interrupted.",
        },
        {
          icon: "Map",
          title: "Location-based machine discovery",
          detail:
            "Built Mapbox-powered discovery showing nearby machines with live queue length, wait time, and distance so users could decide before heading out.",
        },
        {
          icon: "Zap",
          title: "Checkout performance optimization",
          detail:
            "Reduced checkout time by 50% through API optimization, improved state handling, and a simplified ordering flow, making the app faster than ordering on-site.",
        },
        {
          icon: "GitBranch",
          title: "CI/CD and release pipeline",
          detail:
            "Owned iOS and Android release pipelines using Expo, EAS, and GitHub Actions, enabling stable deployments and consistent release workflows.",
        },
        {
          icon: "Handshake",
          title: "Production delivery and client handover",
          detail:
            "Led structured production handover with documentation, system walkthroughs, and deployment guidance for the client team taking over the system.",
        },
      ],
    },

    technicalDecisions: [
      {
        decision: "Live machine data fetched fresh, never cached",
        rationale:
          "Machine availability changed frequently and unpredictably. Always fetching live data prevented stale availability from causing failed orders or incorrect displays.",
      },
      {
        decision: "Stripe with explicit retry and interrupted payment recovery",
        rationale:
          "Mobile payment sessions are vulnerable to dropped connections. Building explicit retry and recovery flows ensured failed sessions could complete without duplicate charges or lost order state.",
      },
      {
        decision: "Checkout speed treated as a core engineering requirement",
        rationale:
          "The app needed to outperform walking up to a machine. Treating checkout speed as a core requirement from the start drove better API design, leaner state management, and a simpler ordering flow rather than treating it as an afterthought.",
      },
      {
        decision: "Mapbox for location-based machine discovery",
        rationale:
          "Finding nearby machines depended on accurate location data. Mapbox provided reliable location filtering, real-time availability display, and in-app navigation in one integrated layer.",
      },
    ],

    results: [
      {
        icon: "ShoppingCart",
        value: "300+",
        label: "Daily Orders per Machine",
        description: "Supported high-volume self-service machine transactions",
      },
      {
        icon: "Clock",
        value: "50%",
        label: "Faster Checkout",
        description:
          "Reduced through API optimization, state handling, and simplified ordering flow",
      },
      {
        icon: "Users",
        value: "100+",
        label: "Concurrent Users",
        description: "Handled simultaneous real-time ordering activity",
      },
      {
        icon: "RefreshCcw",
        value: "Live sync",
        label: "Machine Availability",
        description:
          "Ordering state kept aligned with real-world machine status",
      },
    ],

    visuals: [
      {
        src: "/projects/javis/javis-01.png",
        caption:
          "Machine discovery with live queue length, wait time, and distance",
      },
      {
        src: "/projects/javis/javis-02.png",
        caption: "Beverage menu with signature drinks and custom build options",
      },
      {
        src: "/projects/javis/javis-03.png",
        caption: "Checkout with order summary, pickup time, and Stripe payment",
      },
      {
        src: "/projects/javis/javis-04.png",
        caption:
          "Order history with real-time status tracking across locations",
      },
      {
        src: "/projects/javis/javis-05.png",
        caption:
          "Order detail with itemized receipt, coupon applied, and reorder",
      },
      {
        src: "/projects/javis/javis-06.png",
        caption: "User profile with JAVIS PAY wallet and bank card management",
      },
      {
        src: "/projects/javis/javis-07.png",
        caption: "Loyalty rewards with tier progression and redeemable coupons",
      },
    ],

    whatILearned: [
      {
        lead: "Edge cases are where real systems get tested",
        detail:
          "Inventory discrepancies, machine downtime, and interrupted payments were regular occurrences in production. Designing for failure paths from the start made the system significantly more reliable.",
      },
      {
        lead: "Checkout speed is a product decision, not an afterthought",
        detail:
          "Treating speed as a core requirement from day one drove better API design, leaner state management, and a simpler ordering flow compared to optimizing at the end.",
      },
      {
        lead: "Payment reliability requires planning for failures, not just successes",
        detail:
          "Stripe works well for straightforward flows. The real engineering work was building retry logic and recovery handling that prevented duplicate charges and lost order state under real mobile network conditions.",
      },
      {
        lead: "Live data must be verified, not assumed",
        detail:
          "Always fetching fresh machine availability instead of relying on cached data prevented an entire class of bugs that would have caused customers to order from unavailable machines.",
      },
    ],

    sidebar: {
      role: "Owned full-stack engineering and mobile delivery for a real-time self-service machine ordering platform",

      technologyStack: [
        {
          groupLabel: "Frontend",
          technologies: [
            "React Native",
            "JavaScript",
            "Expo",
            "Zustand",
            "Mapbox",
          ],
        },
        {
          groupLabel: "Backend",
          technologies: ["Node.js", "GraphQL", "Strapi", "Stripe"],
        },
        {
          groupLabel: "Infrastructure",
          technologies: ["GitHub Actions", "EAS Build"],
        },
      ],

      constraints: [
        "Cross-platform iOS and Android delivery",
        "Real-time machine availability synchronization",
        "Stripe reliability under unstable mobile connections",
        "Location-based ordering with live machine state",
      ],

      collaborators:
        "Backend engineers · Mobile developers · UI/UX designers · Operations stakeholders",

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
    thumbnailImage: "/projects/surveillance/surveillance-01.png",
    targetPlatform: "Web",
    industrySectors: ["GovTech", "Enterprise", "Featured"],
    externalLink: "https://oneberry.com/anomaly-detection-ai/",
    isPrivate: true,
    hasCaseStudy: true,

    coreTechStack: [
      "Next.js",
      "TypeScript",
      "Redux",
      "NestJS",
      "PostgreSQL",
      "Redis",
      "RabbitMQ",
      "Docker",
      "Nginx",
      "GitHub Actions",
    ],

    hero: {
      title: "Surveillance Platform",
      summary:
        "Architected and deployed a production-ready surveillance platform supporting 10,000 CCTV cameras, 24/7 monitoring, and real-time incident management, independently deployed and configured for 3 government agencies.",
      meta: {
        role: "Senior Fullstack Engineer",
        teamSize: "10-person team",
        duration: "18 mos",
        period: "Feb 2023 – Jul 2024",
        platform: "Web",
      },
    },

    challenge: {
      prose:
        "Each government agency was managing surveillance operations through fragmented, outdated systems with no centralized way to monitor camera feeds, track incidents, or manage access within their own organization. The engineering challenge was building a single production-ready platform that could be deployed and configured independently for each agency, supporting nearly 10,000 camera feeds, strict access control, real-time incident monitoring, and 24/7 high-availability operations.",
      pullQuote:
        "Each agency needed a production-grade surveillance system built to their own security and operational requirements.",
    },

    whatIDid: {
      intro:
        "Led full-stack engineering across frontend, backend, middleware, and infrastructure for a large-scale government surveillance platform. Owned architecture decisions, VMS integration, real-time monitoring workflows, and engineering standards across the platform.",

      contributions: [
        {
          icon: "Layout",
          title: "Frontend architecture for real-time monitoring",
          detail:
            "Architected the frontend using Next.js, Redux Toolkit, and RTK Query to support live camera monitoring, incident management, and real-time dashboard updates across large-scale surveillance operations.",
        },
        {
          icon: "Database",
          title: "Backend and middleware services for VMS integration",
          detail:
            "Built NestJS APIs and secured middleware services that connected directly with third-party VMS systems inside protected intranet environments, handling camera sync, live streams, snapshots, and health status.",
        },
        {
          icon: "Map",
          title: "Geospatial map monitoring with Redis indexing",
          detail:
            "Built Mapbox monitoring features integrated with Redis geospatial indexing and real-time camera updates, improving operator visibility and incident response across distributed camera sites.",
        },
        {
          icon: "Shield",
          title: "Multi-tier role-based access control and SSO",
          detail:
            "Designed a multi-tier permission system with OAuth 2.0 SSO, ensuring operators only accessed camera feeds and incident data within their assigned boundary.",
        },
        {
          icon: "Workflow",
          title: "Background processing for evidence and video clips",
          detail:
            "Built BullMQ worker pipelines for video clip generation, evidence processing, and MinIO S3 uploads, isolating CPU-intensive workloads from real-time monitoring services.",
        },
        {
          icon: "GitBranch",
          title: "Monorepo setup and engineering standards",
          detail:
            "Introduced Lerna monorepo, automated testing with Jest and Cypress, and CI/CD pipelines via GitHub Actions across frontend, backend, and middleware services.",
        },
        {
          icon: "Server",
          title: "Infrastructure scaling and production delivery",
          detail:
            "Collaborated on deployment architecture using Docker and Nginx, supporting horizontal scaling, security hardening, and high-availability deployments across distributed government environments.",
        },
      ],
    },

    technicalDecisions: [
      {
        decision: "Lerna monorepo across frontend, backend, and middleware",
        rationale:
          "Multiple frontend apps, backend services, and middleware packages needed shared TypeScript types and consistent CI/CD. A monorepo reduced duplication and kept dependency management under control as the team grew.",
      },
      {
        decision: "Separated backend and middleware into distinct services",
        rationale:
          "Middleware operated inside secured intranet environments with direct VMS access. Keeping it separate from the public-facing backend improved security isolation and let each layer scale independently.",
      },
      {
        decision: "RabbitMQ for asynchronous service communication",
        rationale:
          "Camera sync, incident processing, and streaming workflows ran concurrently across distributed services. RabbitMQ provided reliable message delivery without tightly coupling services under high concurrency.",
      },
      {
        decision: "BullMQ for video clip and evidence processing",
        rationale:
          "Video clip generation was CPU-intensive and unpredictable in duration. Moving it into background workers meant heavy alert activity could never block live monitoring workflows.",
      },
    ],

    visuals: [
      {
        src: "/projects/surveillance/surveillance-01.png",
        caption:
          "Command dashboard — site map with active camera count and real-time alert status per location",
      },
      {
        src: "/projects/surveillance/surveillance-02.png",
        caption:
          "Camera map — geospatial camera monitoring with live alert visibility across zones",
      },
      {
        src: "/projects/surveillance/surveillance-03.png",
        caption:
          "Zone selection — drag-to-select cameras by area for rapid group assignment",
      },
      {
        src: "/projects/surveillance/surveillance-04.png",
        caption:
          "Live monitoring — simultaneous camera feeds with real-time incident alerts",
      },
      {
        src: "/projects/surveillance/surveillance-05.png",
        caption:
          "Incident review — full feed playback with timeline navigation and evidence clip creation",
      },
      {
        src: "/projects/surveillance/surveillance-06.png",
        caption:
          "Alert management — prioritized incident log with severity filtering and audit export",
      },
      {
        src: "/projects/surveillance/surveillance-07.png",
        caption:
          "Case management — structured incident workspace linking evidence footage and team notes",
      },
      {
        src: "/projects/surveillance/surveillance-08.png",
        caption:
          "Access control — role-based camera permissions scoped per agency and site",
      },
    ],

    results: [
      {
        icon: "Video",
        value: "10,000+",
        label: "CCTV Cameras",
        description:
          "Supported across a single platform built for large-scale surveillance operations",
      },
      {
        icon: "ShieldCheck",
        value: "3",
        label: "Government Agencies",
        description:
          "Platform independently deployed and configured for each agency",
      },
      {
        icon: "Zap",
        value: "50%",
        label: "Faster Map Rendering",
        description:
          "Improved through optimized state management and geospatial indexing",
      },
      {
        icon: "TrendingUp",
        value: "~60%",
        label: "Fewer Production Defects",
        description: "Reduced through automated testing and TDD practices",
      },
      {
        icon: "Clock",
        value: "20%",
        label: "Faster Deployments",
        description:
          "Achieved through CI/CD automation and monorepo pipeline improvements",
      },
      {
        icon: "Server",
        value: "24/7",
        label: "Continuous Monitoring",
        description:
          "High-availability surveillance operations across all agency sites",
      },
    ],

    whatILearned: [
      {
        lead: "Clear service boundaries make systems easier to reason about",
        detail:
          "Separating frontend, backend, and middleware into distinct layers kept failures contained and made the system significantly easier to debug and scale as complexity grew.",
      },
      {
        lead: "State consistency is a design requirement, not an afterthought",
        detail:
          "Working on real-time monitoring taught me to treat synchronization between camera status, alerts, and frontend state as a core architectural concern from the start.",
      },
      {
        lead: "Offloading heavy processing early keeps critical workflows stable",
        detail:
          "Moving video clip generation into background workers before it became a bottleneck meant live monitoring stayed unaffected even during the heaviest alert spikes in production.",
      },
      {
        lead: "Government delivery sharpens your instinct for reliability",
        detail:
          "Operating in a mission-critical environment shifted my priorities toward deployment stability, fast production support, and recovery planning as core engineering responsibilities.",
      },
      {
        lead: "Security and compliance are engineering constraints, not checklists",
        detail:
          "Deploying on government infrastructure taught me to treat security hardening and GDPR compliance as first-class requirements built into the architecture, not steps added at the end.",
      },
    ],

    sidebar: {
      role: "Led full-stack engineering and architecture for a real-time surveillance platform independently deployed across 3 government agencies",

      technologyStack: [
        {
          groupLabel: "Frontend",
          technologies: [
            "Next.js",
            "TypeScript",
            "Redux Toolkit",
            "RTK Query",
            "Material UI",
            "Mapbox",
          ],
        },
        {
          groupLabel: "Backend",
          technologies: [
            "NestJS",
            "PostgreSQL",
            "Redis",
            "RabbitMQ",
            "BullMQ",
            "REST API",
            "MQTT broker",
          ],
        },
        {
          groupLabel: "Infrastructure",
          technologies: [
            "Docker",
            "Nginx",
            "GitHub Actions",
            "Lerna",
            "MinIO S3",
            "Proxmox VE",
          ],
        },
      ],

      constraints: [
        "24/7 monitoring across 10,000 CCTV cameras",
        "Independently deployed and configured per government agency",
        "High-availability distributed surveillance infrastructure",
        "Low-latency incident monitoring and real-time alerts",
      ],

      collaborators:
        "Frontend engineers · Backend engineers · DevOps engineers · QA engineers · UI/UX designers · Government stakeholders",

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
    thumbnailImage: "/projects/dap/dap-01.png",
    targetPlatform: "Web",
    industrySectors: ["Fintech", "Enterprise"],
    externalLink:
      "https://www.hitachi.asia/fibu/product/digital-advisor-platform/",
    isPrivate: true,
    hasCaseStudy: true,

    coreTechStack: [
      "React",
      "TypeScript",
      "Zustand",
      "Bootstrap",
      "AWS Cognito",
      "AWS AppSync",
      "GraphQL",
      "AWS Amplify",
      "Nx Monorepo",
    ],

    hero: {
      title: "Digital Advisor Platform",
      summary:
        "Developed and launched a guided financial advisory platform used by 6,000+ insurance advisors to run live client sessions, capture structured financial data, and complete end-to-end advisory workflows across protection, savings, investment, and retirement planning.",
      meta: {
        role: "Frontend Developer",
        teamSize: "5-person team",
        duration: "8 mos",
        period: "Feb 2022 – Sep 2022",
        platform: "Web",
      },
    },

    challenge: {
      prose:
        "Insurance advisors were running live client sessions using disconnected tools, with no unified system to capture financial data, validate inputs, and drive end-to-end advisory workflows. Each step directly impacted downstream financial calculations, meaning inconsistent or incomplete data could invalidate an entire session. The system needed strict step-level validation, real-time responsiveness, and reliable state consistency under live usage conditions.",
      pullQuote:
        "One inconsistent input could cascade into incorrect financial outcomes across the entire advisory session.",
    },

    whatIDid: {
      intro:
        "Owned the frontend architecture and implementation across onboarding, financial data capture, and advisory workflows, ensuring correctness, performance, and consistency during live advisory sessions.",

      contributions: [
        {
          icon: "FileText",
          title: "Built structured onboarding and financial data flows",
          detail:
            "Designed multi-step workflows covering identity, dependents, income, expenses, net worth, coverage, and financial goals, with strict validation gates to ensure downstream financial calculations remained consistent and reliable.",
        },
        {
          icon: "BarChart2",
          title: "Built real-time financial planning simulation",
          detail:
            "Developed an interactive simulation engine that recalculates insurance coverage, savings projections, and retirement outcomes instantly as advisors adjust inputs during live client sessions.",
        },
        {
          icon: "GitBranch",
          title: "Designed modular frontend architecture using Nx",
          detail:
            "Structured the application into a Nx monorepo with shared libraries and feature-based modules across onboarding, advisory, and simulation domains, enabling scalable development across the team.",
        },
        {
          icon: "Layout",
          title: "Established frontend engineering standards",
          detail:
            "Defined reusable UI patterns, Zustand-based state conventions, GraphQL data fetching guidelines, and component architecture standards that ensured consistency across a 5-person frontend team.",
        },
        {
          icon: "Shield",
          title: "Integrated secure authentication and access control",
          detail:
            "Implemented AWS Cognito-based SSO, OTP authentication, and role-based access control to ensure secure handling of sensitive financial and customer data.",
        },
        {
          icon: "Cloud",
          title: "Integrated APIs and deployment workflows",
          detail:
            "Connected GraphQL APIs via AWS AppSync and configured AWS Amplify deployment pipelines across UAT and production environments for reliable delivery.",
        },
      ],
    },

    technicalDecisions: [
      {
        decision: "Zustand for multi-step workflow state management",
        rationale:
          "A shared state model ensured consistency across onboarding and advisory steps, preventing mismatched data from affecting financial calculations and improving session reliability.",
      },
      {
        decision: "AWS AppSync with GraphQL for data access",
        rationale:
          "GraphQL allowed each workflow step to fetch only the required data in a single request, reducing over-fetching and simplifying complex data dependencies across advisory flows.",
      },
      {
        decision: "Nx monorepo for frontend scalability",
        rationale:
          "A modular monorepo structure enabled shared utilities while maintaining clear boundaries between onboarding, advisory, and simulation features, improving maintainability across the team.",
      },
    ],

    visuals: [
      {
        src: "/projects/dap/dap-01.png",
        caption:
          "Client profile — household overview with net worth, coverage, and cash flow",
      },
      {
        src: "/projects/dap/dap-02.png",
        caption:
          "Goals dashboard — protection, savings, and retirement planning with gap analysis",
      },
      {
        src: "/projects/dap/dap-03.png",
        caption:
          "Protection analysis — coverage shortfall projections across scenarios",
      },
      {
        src: "/projects/dap/dap-04.png",
        caption:
          "Recommendation engine — insurance product matching with coverage breakdown",
      },
      {
        src: "/projects/dap/dap-05.png",
        caption:
          "Peer benchmarking — coverage comparison across similar profiles",
      },
      {
        src: "/projects/dap/dap-06.png",
        caption: "Advisor community — financial discussion and engagement hub",
      },
      {
        src: "/projects/dap/dap-07.png",
        caption:
          "Expert sessions — live advisory and financial planning events",
      },
      {
        src: "/projects/dap/dap-08.png",
        caption:
          "Investment planning — monthly savings requirement and gap analysis",
      },
    ],

    results: [
      {
        icon: "Users",
        value: "6,000+",
        label: "Active Advisors",
        description:
          "Insurance advisors using the platform for live financial advisory sessions",
      },
      {
        icon: "CheckCircle",
        value: "7",
        label: "Workflow Modules",
        description: "End-to-end onboarding and advisory workflows delivered",
      },
      {
        icon: "Zap",
        value: "Real-time",
        label: "Financial Simulation",
        description:
          "Instant recalculation of financial outcomes during live sessions",
      },
      {
        icon: "Shield",
        value: "Secure",
        label: "Access Control",
        description: "SSO, OTP, and role-based access via AWS Cognito",
      },
    ],

    whatILearned: [
      {
        lead: "Data correctness must be enforced at the entry point",
        detail:
          "Early validation prevented invalid inputs from propagating into financial models that advisors and clients rely on during live sessions.",
      },
      {
        lead: "State consistency is foundational in multi-step workflows",
        detail:
          "A shared state layer was the only reliable way to enforce step completion, track progression, and keep financial data accurate across a multi-step advisory session.",
      },
      {
        lead: "Performance directly impacts trust in live advisory sessions",
        detail:
          "Even small delays during client sessions disrupted workflow continuity, making responsiveness as important as correctness.",
      },
      {
        lead: "Modular architecture makes teams faster",
        detail:
          "Separating onboarding, advisory, and simulation into distinct modules reduced coordination overhead and enabled parallel development across the team.",
      },
    ],

    sidebar: {
      role: "Built the frontend system for a live financial advisory platform used by 6,000+ insurance advisors",

      technologyStack: [
        {
          groupLabel: "Frontend",
          technologies: ["React", "TypeScript", "Zustand", "Bootstrap"],
        },
        {
          groupLabel: "Backend",
          technologies: ["AWS AppSync", "GraphQL", "AWS Cognito"],
        },
        {
          groupLabel: "Infrastructure",
          technologies: ["AWS Amplify", "Nx Monorepo"],
        },
      ],

      constraints: [
        "6,000+ advisors in live sessions",
        "Strict step-by-step financial validation",
        "Consistent financial data state across multi-step advisory workflows",
      ],

      collaborators:
        "Frontend engineer · Backend engineer · QA engineer · Product manager",

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
    thumbnailImage: "/projects/b2b/b2b-01.png",
    targetPlatform: "Web",
    industrySectors: ["Enterprise", "Supply Chain"],
    externalLink: "https://shengsiong.com.sg/",
    isPrivate: true,
    hasCaseStudy: true,

    coreTechStack: [
      "Next.js",
      "JavaScript",
      "Redux",
      "Node.js",
      "Express.js",
      "GraphQL",
      "MySQL",
      "Nginx",
      "AWS EC2",
      "AWS S3",
      "AWS RDS",
    ],

    hero: {
      title: "B2B Supplier Portal",
      summary:
        "Modernized an enterprise procurement platform for Sheng Siong Group and CMM, unifying purchase orders, pricing, rebates, and invoices across 100+ vendors into a single operational system.",
      meta: {
        role: "Full Stack Engineer",
        teamSize: "10-person team",
        duration: "10 mos",
        period: "Aug 2022 – Jun 2023",
        platform: "Web",
      },
    },

    challenge: {
      prose:
        "The portal supported procurement and financial operations for more than 100 vendors. As transaction volume grew into millions of records, heavy data ingestion workloads introduced bottlenecks and slower workflows across procurement and finance teams. The system needed a full redesign built around how teams actually operated in production.",
      pullQuote:
        "Growing transaction volume exposed bottlenecks that needed a system rebuild, not a patch.",
    },

    whatIDid: {
      intro:
        "Owned the full-stack implementation across database, backend services, and frontend, starting with researching the legacy system workflows through direct collaboration with operational stakeholders.",

      contributions: [
        {
          icon: "Layout",
          title: "Unified procurement and finance workflows",
          detail:
            "Replaced fragmented vendor processes with a single dashboard covering purchase orders, pricing updates, rebates, and invoices used daily by vendor, procurement, and finance teams.",
        },
        {
          icon: "Tag",
          title: "Built vendor pricing update submission system",
          detail:
            "Collaborated with stakeholders to define price change rules and built three submission flows covering permanent price changes, promotions, and advertising campaigns, each with product selection and price change document upload.",
        },
        {
          icon: "Database",
          title: "Built procurement data ingestion pipeline",
          detail:
            "Designed and built a dedicated backend service that reads, validates, and transforms CSV, Excel, and PDF procurement files into structured database records, stores Excel and PDF files in AWS S3, and sends email notifications with processing results.",
        },
        {
          icon: "TrendingUp",
          title:
            "Designed database schema and optimized integration performance",
          detail:
            "Designed the full database schema to normalize procurement data across vendors, products, and transactions, optimized query performance to handle over 1M records, and reduced integration latency by 30%.",
        },
        {
          icon: "Shield",
          title: "Redesigned permission model to match team responsibilities",
          detail:
            "Designed and enforced a four-tier access model covering Admin, Supplier Admin, Finance, and PO roles to ensure each team only accessed procurement and financial data relevant to their responsibilities.",
        },
        {
          icon: "Users",
          title: "Automated vendor account provisioning",
          detail:
            "Built a vendor onboarding flow that detected new vendors from integrated procurement data, triggered signup emails, and guided them through account verification to access their orders and financial workflows.",
        },
        {
          icon: "Cloud",
          title: "Led production deployment and technical handover",
          detail:
            "Wrote deployment documentation for AWS EC2, S3, and RDS across UAT and production environments, then supported the client team through project setup, deployment, and production issue resolution during the handover process.",
        },
      ],
    },

    technicalDecisions: [
      {
        decision: "GraphQL over REST for procurement data retrieval",
        rationale:
          "Procurement entities like orders, suppliers, and invoices are deeply related, so GraphQL let each view fetch exactly what it needed in one query, cutting the over-fetching that REST endpoints were producing.",
      },
      {
        decision: "Dedicated ingestion pipeline separate from the API layer",
        rationale:
          "Running data ingestion inside the transactional API slowed down responses for other users during heavy data integrations, so separating it into its own service kept both layers stable and independently scalable.",
      },
      {
        decision: "Optimize queries before scaling infrastructure",
        rationale:
          "Analyzing query patterns first and improving indexing achieved a 30% latency reduction without any additional infrastructure cost, which was more effective than scaling up the database instance.",
      },
    ],

    visuals: [
      {
        src: "/projects/b2b/b2b-01.png",
        caption:
          "Supplier dashboard with pending orders, expiring POs, user counts, and system announcements",
      },
      {
        src: "/projects/b2b/b2b-02.png",
        caption:
          "Purchase order list with outlet filtering, PO details, and direct invoice conversion",
      },
      {
        src: "/projects/b2b/b2b-03.png",
        caption:
          "Purchase JIT setting with preferred delivery days and times per outlet",
      },
      {
        src: "/projects/b2b/b2b-04.png",
        caption:
          "Invoice update for submitting invoice numbers and dates against purchase orders",
      },
      {
        src: "/projects/b2b/b2b-05.png",
        caption:
          "E-payment voucher list with vendor payment records, amounts, and transaction details",
      },
      {
        src: "/projects/b2b/b2b-06.png",
        caption:
          "E-pricing list with current item prices across CMM and SS and product selection",
      },
      {
        src: "/projects/b2b/b2b-07.png",
        caption:
          "Price change submission with uploaded Excel showing current and proposed prices for review",
      },
      {
        src: "/projects/b2b/b2b-08.png",
        caption:
          "Price change final review with submission date, promotion period, and full price comparison",
      },
    ],

    results: [
      {
        icon: "Users",
        value: "100+",
        label: "Active Vendors",
        description:
          "Vendors using the platform across procurement and finance workflows",
      },
      {
        icon: "Database",
        value: "1M+",
        label: "Transaction Records",
        description:
          "Records processed across purchase orders, invoices, pricing, and rebates",
      },
      {
        icon: "TrendingUp",
        value: "30%",
        label: "Query Latency Reduced",
        description:
          "Achieved through MySQL indexing redesign and query rewrites",
      },
      {
        icon: "CheckCircle",
        value: "100%",
        label: "Workflow Coverage",
        description:
          "Procurement, pricing, rebate, and invoice workflows unified into one system",
      },
    ],

    whatILearned: [
      {
        lead: "Observe before system design",
        detail:
          "Researching legacy workflows with operational stakeholders before writing any code clarified real process dependencies and shaped the entire system architecture.",
      },
      {
        lead: "Decouple ingestion from core services",
        detail:
          "Isolating data ingestion into its own service kept large procurement integrations from affecting the API performance that vendor and finance teams depended on daily.",
      },
      {
        lead: "Data modeling drives scalability",
        detail:
          "Designing the schema correctly from the start made handling millions of procurement records and maintaining query performance significantly more manageable as data volume grew.",
      },
      {
        lead: "Align authorization with operational structure",
        detail:
          "Mapping role boundaries to how procurement and finance teams actually divided their work prevented teams from accessing data outside their responsibilities.",
      },
      {
        lead: "End-to-end integration work builds deep operational knowledge",
        detail:
          "Building this platform gave me a clear understanding of how B2B businesses manage their day-to-day supplier workflows and why timely data updates are critical to keeping procurement and finance operations running accurately.",
      },
    ],

    sidebar: {
      role: "Owned full-stack delivery of an enterprise procurement platform supporting vendor operations and high-volume transaction processing",

      technologyStack: [
        {
          groupLabel: "Frontend",
          technologies: ["Next.js", "Redux", "JavaScript"],
        },
        {
          groupLabel: "Backend",
          technologies: ["Node.js", "Express.js", "GraphQL", "MySQL"],
        },
        {
          groupLabel: "Infrastructure",
          technologies: ["AWS EC2", "AWS S3", "AWS RDS", "Nginx"],
        },
      ],

      constraints: [
        "100+ vendors across procurement workflows",
        "Million-scale transaction records",
        "High-volume CSV, Excel, and PDF ingestion",
        "Strict data consistency across procurement and finance",
      ],

      collaborators:
        "Frontend engineers · Backend engineers · QA engineers · DevOps · PM",

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
