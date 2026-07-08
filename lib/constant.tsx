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
        "Most SME owners tracked business finances through notebooks or spreadsheets with no clear visibility into cash flow, expenses, or debts, making it difficult to make informed business decisions. The engineering challenge was building a production-ready fintech app with a 5-person team, covering AI-assisted guidance and offline reliability in low-connectivity environments.",
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
          "AI response latency made standard request-response feel slow. Token streaming with structured rendering made the advisor feel responsive and readable from the first token.",
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
        label: "SME Users Onboarded",
        description: "Businesses actively using the platform after launch",
      },
      {
        icon: "Landmark",
        value: "$37K+",
        label: "Total Revenue Generated",
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
        description: "Supported across multiple regions and languages",
      },
    ],

    whatILearned: [
      {
        lead: "Frontend architecture drives how fast the team can deliver.",
        detail:
          "Early architectural decisions determine feature delivery speed and how sustainably the codebase scales as the product grows.",
      },
      {
        lead: "AI features require more than just connecting an API.",
        detail:
          "Making the AI advisor feel trustworthy to users required handling slow responses, failed requests, and unstructured outputs before it was reliable enough to ship.",
      },
      {
        lead: "Offline support needs to be planned from the beginning.",
        detail:
          "For SME users operating in low-connectivity environments, offline reliability is what makes the app usable in their daily operations.",
      },
      {
        lead: "Talking directly to users changes how you build.",
        detail:
          "Working with SME users revealed workflow assumptions that changed how several core features were designed.",
      },
      {
        lead: "Automating releases early removes friction on every sprint.",
        detail:
          "Setting up the build and release pipeline at the start meant the team could ship updates and fix issues without manual steps slowing things down.",
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
          ],
        },
        {
          groupLabel: "Infrastructure",
          technologies: ["GitHub Actions", "EAS Build"],
        },
      ],

      constraints: [
        "Cross-platform iOS and Android delivery",
        "LLM response latency requiring streaming and responsive feedback",
        "Offline reliability in low-connectivity environments",
        "5-person team delivering a production fintech app",
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
        decision:
          "Machine state synced directly from the external backend system",
        rationale:
          "Machine availability was continuously updated via REST API calls to the machine's own backend, ensuring the ordering state always reflected real-world machine status.",
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
        label: "Faster Checkout Time",
        description:
          "Reduced through API optimization, state handling, and simplified ordering flow",
      },
      {
        icon: "Users",
        value: "100+",
        label: "Concurrent Active Users",
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
        lead: "Real production usage exposes problems that testing never catches.",
        detail:
          "Inventory discrepancies, machine downtime, and interrupted payments only appeared after launch, reinforcing the value of building error handling into the system from the beginning.",
      },
      {
        lead: "Checkout speed is a product decision, not an afterthought.",
        detail:
          "Treating speed as a core requirement from day one drove better API design, more efficient state management, and a simpler ordering flow compared to optimizing at the end.",
      },
      {
        lead: "Payment reliability requires planning for failures, not just successes.",
        detail:
          "The real engineering work was building retry logic and recovery handling that prevented duplicate charges and lost order state under real mobile network conditions.",
      },
      {
        lead: "External system integration requires reliable synchronization.",
        detail:
          "Machine inventory and status were managed by an external backend system, making reliable synchronization essential to ensure orders were only placed against accurate and up-to-date machine data.",
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
            "Introduced Lerna monorepo, automated testing with Jest and Cypress, and CI/CD pipelines via GitHub Actions across frontend, backend, and middleware services to improve code quality, reduce deployment risk, and keep engineering practices consistent across the team.",
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
        label: "CCTV Cameras Monitored",
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
        lead: "Clear service boundaries make systems easier to reason about.",
        detail:
          "Separating frontend, backend, and middleware into distinct layers kept failures contained and made the system significantly easier to debug and scale as complexity grew.",
      },
      {
        lead: "State consistency is a design requirement, not an afterthought.",
        detail:
          "Working on real-time monitoring taught me to treat synchronization between camera status, alerts, and frontend state as a core architectural concern from the start.",
      },
      {
        lead: "Offloading heavy processing early keeps critical workflows stable.",
        detail:
          "Moving video clip generation into background workers before it became a bottleneck meant live monitoring stayed unaffected even during the heaviest alert spikes in production.",
      },
      {
        lead: "Government delivery sharpens your instinct for reliability.",
        detail:
          "Operating in a mission-critical environment shifted my priorities toward deployment stability, fast production support, and recovery planning as core engineering responsibilities.",
      },
      {
        lead: "Security and compliance are engineering constraints, not checklists.",
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
        label: "Active Insurance Advisors",
        description:
          "Insurance advisors using the platform for live financial advisory sessions",
      },
      {
        icon: "CheckCircle",
        value: "7",
        label: "Advisory Workflows",
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
        lead: "Data correctness must be enforced at the entry point.",
        detail:
          "Early validation prevented invalid inputs from propagating into financial models that advisors and clients rely on during live sessions.",
      },
      {
        lead: "State consistency is foundational in multi-step workflows.",
        detail:
          "A shared state layer was the only reliable way to enforce step completion, track progression, and keep financial data accurate across a multi-step advisory session.",
      },
      {
        lead: "Performance directly impacts trust in live advisory sessions.",
        detail:
          "Even small delays during client sessions disrupted workflow continuity, making responsiveness as important as correctness.",
      },
      {
        lead: "Modular architecture makes teams faster.",
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
        label: "Active Vendor Accounts",
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
        lead: "Observe before system design.",
        detail:
          "Researching legacy workflows with operational stakeholders before writing any code clarified real process dependencies and shaped the entire system architecture.",
      },
      {
        lead: "Decouple ingestion from core services.",
        detail:
          "Isolating data ingestion into its own service kept large procurement integrations from affecting the API performance that vendor and finance teams depended on daily.",
      },
      {
        lead: "Data modeling drives scalability.",
        detail:
          "Designing the schema correctly from the start made handling millions of procurement records and maintaining query performance significantly more manageable as data volume grew.",
      },
      {
        lead: "Align authorization with operational structure.",
        detail:
          "Mapping role boundaries to how procurement and finance teams actually divided their work prevented teams from accessing data outside their responsibilities.",
      },
      {
        lead: "End-to-end integration work builds deep operational knowledge.",
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
    thumbnailImage: "/projects/onenergy-mobile/onenergy-01.png",
    targetPlatform: "Mobile",
    industrySectors: ["CleanTech", "IoT"],
    externalLink:
      "https://play.google.com/store/apps/details?id=com.singaporetestlab.on_energy.twa",
    isPrivate: false,
    hasCaseStudy: true,

    coreTechStack: [
      "React Native",
      "Expo",
      "JavaScript",
      "Zustand",
      "REST API",
      "EAS Build",
      "GitHub Actions",
    ],

    hero: {
      title: "ONenergy Mobile",
      summary:
        "Built and delivered a React Native mobile app that gives homeowners real-time visibility into household electricity consumption at individual appliance level, powered by IoT sensors with live updates.",
      meta: {
        role: "Full Stack Engineer",
        teamSize: "2-person team",
        duration: "7 mos",
        period: "May 2024 – Nov 2024",
        platform: "Mobile",
      },
    },

    challenge: {
      prose:
        "Homeowners had no visibility into how individual appliances contributed to their electricity bill until the monthly statement arrived. The IoT hardware produced sensor readings every 2 seconds per appliance across up to 119 appliances per household, and the mobile client had to present this live data clearly without overwhelming the user or degrading device performance. I was responsible for delivering the full mobile application from initial planning through Play Store release.",
      pullQuote:
        "Homeowners only discovered they had overspent on electricity when the bill arrived at the end of the month.",
    },

    whatIDid: {
      intro:
        "Owned the full mobile development lifecycle as the primary React Native developer, from breaking down business requirements and system design through to production deployment and client handover.",

      contributions: [
        {
          icon: "Layers",
          title: "Designed full mobile architecture",
          detail:
            "Defined component boundaries, state management approach, and data flow using Expo, Zustand, and REST API integration to keep the codebase consistent and maintainable as the product grew.",
        },
        {
          icon: "Shield",
          title: "Implemented secure authentication",
          detail:
            "Built the authentication layer using Expo Secure Store before any screens were developed, ensuring token storage and session handling worked consistently across the entire app.",
        },
        {
          icon: "Radio",
          title: "Integrated live IoT appliance data",
          detail:
            "Connected the app to REST API endpoints for live appliance consumption data, handling loading states, error recovery, and refresh timing to keep the UI accurate under varying network conditions.",
        },
        {
          icon: "BarChart2",
          title: "Built energy consumption visualization",
          detail:
            "Built interactive charts showing real-time and historical electricity consumption per appliance, balancing data accuracy with rendering performance.",
        },
        {
          icon: "Zap",
          title: "Resolved rendering performance under high-frequency updates",
          detail:
            "Diagnosed and fixed rendering bottlenecks from frequent sensor updates, optimizing how and when components re-rendered to keep the UI smooth and responsive.",
        },
        {
          icon: "Users",
          title: "Led cross-functional collaboration across design and product",
          detail:
            "Translated UI designs into production mobile interfaces and worked with business analysts and the product manager to break down client feedback into clear development tasks.",
        },
        {
          icon: "GitBranch",
          title: "Owned build pipeline, release, and client handover",
          detail:
            "Configured EAS Build for Android with automated signing and versioning, wrote deployment documentation, and supported the client team through setup and production issue resolution.",
        },
      ],
    },

    technicalDecisions: [
      {
        decision: "Zustand for UI state alongside REST API data",
        rationale:
          "Multiple screens shared appliance selection, time range filters, and chart settings. Zustand kept these UI concerns separate from server data in a way that was simple to maintain for a 2-person team.",
      },
      {
        decision: "Expo Secure Store for authentication tokens",
        rationale:
          "Storing tokens in plain async storage would have exposed them on rooted devices. Secure Store encrypts credentials at the hardware level where supported, which is the right approach for an app handling household energy and billing data.",
      },
      {
        decision: "EAS Build for Android production releases",
        rationale:
          "Managing Android signing and build environments manually was slow and error-prone. EAS Build automated the process, making releases faster and removing the risk of inconsistent builds between environments.",
      },
    ],

    visuals: [
      {
        src: "/projects/onenergy-mobile/onenergy-01.png",
        caption:
          "Home dashboard with total consumption, cost summary, and appliance-level breakdown by percentage",
      },
      {
        src: "/projects/onenergy-mobile/onenergy-02.png",
        caption:
          "Appliances list showing energy usage and cost per connected device, filterable by date",
      },
    ],

    results: [
      {
        icon: "Users",
        value: "600+",
        label: "Households Monitored",
        description:
          "Active households with real-time appliance-level monitoring at launch",
      },
      {
        icon: "Clock",
        value: "2s",
        label: "Live Update Interval",
        description:
          "IoT sensor readings refreshed per appliance across all households",
      },
      {
        icon: "Zap",
        value: "119",
        label: "Appliances Tracked",
        description:
          "Per household via IoT sensors across the monitoring system",
      },
      {
        icon: "Gauge",
        value: "Optimized",
        label: "Rendering Performance",
        description:
          "Fixed rendering bottlenecks from high-frequency IoT sensor updates",
      },
    ],

    whatILearned: [
      {
        lead: "Early architecture decisions determine how the product scales.",
        detail:
          "Defining structure early meant every new feature fit naturally into the existing codebase without revisiting core decisions as the product grew.",
      },
      {
        lead: "Auth state is an architecture decision, not an afterthought.",
        detail:
          "Handling session management in one place kept individual screens focused on their own responsibilities without repeating authentication logic.",
      },
      {
        lead: "Clarifying requirements early keeps the team building the right thing.",
        detail:
          "Resolving client feedback with business analysts before development started prevented features from being built in the wrong direction.",
      },
      {
        lead: "High-frequency data requires a deliberate rendering strategy.",
        detail:
          "How often and when the UI updates directly affects whether the app feels responsive or starts to slow down under frequent sensor updates.",
      },
    ],

    sidebar: {
      role: "Primary mobile developer responsible for the full React Native development lifecycle from planning to Play Store release",

      technologyStack: [
        {
          groupLabel: "Frontend",
          technologies: ["React Native", "Expo", "JavaScript", "Zustand"],
        },
        {
          groupLabel: "Backend",
          technologies: ["REST API"],
        },
        {
          groupLabel: "Infrastructure",
          technologies: ["EAS Build", "GitHub Actions"],
        },
      ],

      constraints: [
        "End-to-end mobile delivery across a 7-month project",
        "Live appliance data across up to 119 sensors per household",
        "Frequent sensor updates requiring responsive UI handling",
        "Production release to Google Play Store",
      ],

      collaborators:
        "Backend engineer · UI/UX designer · Business analyst · Product manager",

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
    thumbnailImage: "/projects/onenergy-web/onenergy-01.png",
    targetPlatform: "Web",
    industrySectors: ["CleanTech", "IoT"],
    externalLink: "https://web.neahecs.com/",
    isPrivate: true,
    hasCaseStudy: true,

    coreTechStack: [
      "Next.js",
      "TypeScript",
      "Zustand",
      "Express.js",
      "PostgreSQL",
      "Docker",
      "Nginx",
      "GitHub Actions",
    ],

    hero: {
      title: "ONenergy Web Platform",
      summary:
        "Built and led the full-stack web platform for ONenergy, supporting household electricity monitoring, appliance management, and administrative workflows for managing connected households and IoT devices.",
      meta: {
        role: "Senior Full Stack Engineer",
        teamSize: "5-person team",
        duration: "8 mos",
        period: "Mar 2024 – Nov 2024",
        platform: "Web",
      },
    },

    challenge: {
      prose:
        "Administrators needed a centralized system to manage hundreds of connected households, track IoT device health, and monitor electricity consumption at appliance level. The platform had to support complex household and device management workflows while keeping consumption data accurate and up to date as sensor readings arrived continuously from the field.",
      pullQuote:
        "Without a centralized platform, administrators had no reliable way to track device issues, manage households, or monitor consumption across hundreds of connected homes.",
    },

    whatIDid: {
      intro:
        "Led the full-stack engineering effort across frontend, backend, infrastructure, and team standards, owning architecture decisions and delivery from initial development through production deployment.",

      contributions: [
        {
          icon: "Layers",
          title: "Designed full-stack web architecture",
          detail:
            "Defined the application structure across Next.js frontend and Express.js backend, establishing component boundaries, API conventions, and data flow patterns that kept the system maintainable as features were added throughout the project.",
        },
        {
          icon: "Database",
          title: "Built household and appliance management system",
          detail:
            "Built the backend APIs and frontend workflows for managing households, tracking IoT device health, and maintaining appliance records including category, type, brand, model, and power consumption data across up to 119 appliances per household.",
        },
        {
          icon: "BarChart2",
          title: "Built electricity consumption monitoring and reporting",
          detail:
            "Developed household-level energy usage dashboards showing total consumption, cost, and appliance-level breakdown by percentage, with date range filtering and report generation for administrators and homeowners.",
        },
        {
          icon: "Radio",
          title: "Integrated appliance data synchronization",
          detail:
            "Built the data layer connecting frontend consumption views to backend services receiving IoT sensor data, keeping electricity usage figures accurate and up to date across all household dashboards.",
        },
        {
          icon: "Shield",
          title: "Designed API authentication and access control",
          detail:
            "Built authentication and role-based access control into the API layer from the start, ensuring homeowners and administrators each accessed only the data and actions relevant to their role.",
        },
        {
          icon: "Server",
          title: "Managed deployment and production infrastructure",
          detail:
            "Configured Docker and Nginx for frontend and backend services, set up GitHub Actions for automated deployments across staging and production environments, and resolved production issues to keep the system stable.",
        },
        {
          icon: "Users",
          title: "Led engineering standards and team practices",
          detail:
            "Established coding conventions, component patterns, and API design standards across the team, conducted code reviews, and worked with developers to improve code quality and consistency throughout the project.",
        },
      ],
    },

    technicalDecisions: [
      {
        decision: "Next.js for the web frontend",
        rationale:
          "The platform needed fast initial page loads for data-heavy household and consumption dashboards. Next.js provided server-side rendering alongside a component model that kept frontend development consistent across the team.",
      },
      {
        decision: "Zustand for frontend state management",
        rationale:
          "Multiple pages shared household selection, date filters, and appliance state. Zustand kept these concerns in one place without the overhead of a more complex state management setup for a team of this size.",
      },
      {
        decision: "Express.js with PostgreSQL for backend services",
        rationale:
          "Household, appliance, and consumption data involved structured relationships that PostgreSQL handled reliably. Express.js kept the API layer straightforward and easy for the team to maintain.",
      },
      {
        decision: "Docker and Nginx for deployment",
        rationale:
          "Containerizing frontend and backend services made deployments consistent across staging and production and simplified local development setup for the team.",
      },
    ],

    visuals: [
      {
        src: "/projects/onenergy-web/onenergy-01.png",
        caption:
          "Household list with device issue counts, owner details, installation status, and management actions",
      },
      {
        src: "/projects/onenergy-web/onenergy-02.png",
        caption:
          "Household energy usage with total consumption, cost summary, and appliance-level breakdown by percentage",
      },
      {
        src: "/projects/onenergy-web/onenergy-03.png",
        caption:
          "Edit household form covering installation dates, gateway configuration, and device setup across multiple steps",
      },
      {
        src: "/projects/onenergy-web/onenergy-04.png",
        caption:
          "Appliance list showing 119 devices per household with category, type, brand, model, and power wattage",
      },
      {
        src: "/projects/onenergy-web/onenergy-05.png",
        caption:
          "Add appliance form with category, appliance type, brand, model, and average power consumption",
      },
    ],

    results: [
      {
        icon: "Users",
        value: "600+",
        label: "Households Managed",
        description:
          "Households with appliance-level consumption tracking on the platform",
      },
      {
        icon: "Zap",
        value: "119",
        label: "Appliances per Household",
        description:
          "IoT-connected devices monitored and managed per household",
      },
      {
        icon: "RefreshCcw",
        value: "Real-time",
        label: "IoT Data Synchronization",
        description:
          "Continuous appliance data synchronized from IoT sensors across all households",
      },
      {
        icon: "BarChart2",
        value: "Per Household",
        label: "Consumption Reports",
        description:
          "Energy usage reports with appliance-level breakdown and date range filtering",
      },
    ],

    whatILearned: [
      {
        lead: "System design decisions affect every part of the product.",
        detail:
          "Defining API structure, component boundaries, and data flow at the start shaped how quickly the team could add features and how easy the system was to maintain as it grew.",
      },
      {
        lead: "Engineering standards reduce the cost of collaboration.",
        detail:
          "Establishing consistent patterns for components, API design, and code structure early meant the team spent less time on alignment and more time building as new requirements came in.",
      },
      {
        lead: "IoT data synchronization requires clear ownership boundaries.",
        detail:
          "Keeping the data layer between IoT sensors and the web client well-defined meant consumption data stayed accurate without the frontend needing to account for the complexity of the underlying sensor infrastructure.",
      },
      {
        lead: "Documentation written during development is more reliable.",
        detail:
          "Writing API documentation and deployment guides as features were built produced more accurate references than writing them after the project was complete.",
      },
    ],

    sidebar: {
      role: "Led full-stack engineering across frontend, backend, infrastructure, and team standards for a household electricity monitoring platform",

      technologyStack: [
        {
          groupLabel: "Frontend",
          technologies: ["Next.js", "TypeScript", "Zustand"],
        },
        {
          groupLabel: "Backend",
          technologies: ["Express.js", "PostgreSQL", "REST API"],
        },
        {
          groupLabel: "Infrastructure",
          technologies: ["Docker", "Nginx", "GitHub Actions"],
        },
      ],

      constraints: [
        "Continuous IoT data synchronization across hundreds of households",
        "Role-based access control across homeowner and admin workflows",
        "Stable production deployment with automated release management",
        "Team-wide engineering standards across a 5-person team",
      ],

      collaborators:
        "Frontend engineers · Backend engineers · UI/UX designer · Business analyst · Product manager",

      cta: {
        label: "View Platform",
        url: "https://web.neahecs.com/",
      },
    },
  },

  {
    id: "smu-portal",
    name: "SMU Research Portal",
    slug: "smu-portal",
    thumbnailImage: "/projects/smu/smu-01.png",
    targetPlatform: "Web",
    industrySectors: ["Education"],
    externalLink: "https://smu.oneberryhub.com/login",
    isPrivate: false,
    hasCaseStudy: true,

    coreTechStack: [
      "Next.js",
      "TypeScript",
      "Zustand",
      "GraphQL",
      "Tailwind CSS",
      "Strapi CMS",
      "PostgreSQL",
      "Docker",
      "Nginx",
      "GitHub Actions",
    ],

    hero: {
      title: "SMU Research Portal",
      summary:
        "Built and delivered a full-stack platform for Singapore Management University to manage academic research publications and citation records, automating file validation and submission tracking across 8 schools and notifying administrators when documents are missing.",
      meta: {
        role: "Full Stack Engineer",
        teamSize: "2-person team",
        duration: "4 mos",
        period: "Jul 2024 – Nov 2024",
        platform: "Web",
      },
    },

    challenge: {
      prose:
        "SMU administrators were tracking document submissions manually across 8 schools and multiple academic sessions with no centralized system to validate files, identify gaps, or notify the right people when submissions were incomplete. As the volume of publication and citation records grew, the manual process became unreliable and difficult to scale across schools and stations.",
      pullQuote:
        "As publication records grew, administrators had no reliable way to know which files were missing without checking manually across every school and station.",
    },

    whatIDid: {
      intro:
        "Led frontend implementation and backend development using Strapi CMS, covering content APIs, scheduled integration pipelines, document validation, automated notifications, and deployment across testing and production environments.",

      contributions: [
        {
          icon: "Layout",
          title: "Built file management dashboard",
          detail:
            "Built a file management dashboard using Next.js showing academic file submission data across schools and stations, with bulk ZIP download support for administrators to export multiple documents at once.",
        },
        {
          icon: "Database",
          title: "Built backend APIs and content management",
          detail:
            "Built and configured Strapi CMS as the backend layer, handling content APIs for publication records, file metadata, school and station data, and user management consumed by the frontend.",
        },
        {
          icon: "RefreshCcw",
          title: "Implemented scheduled integration pipelines",
          detail:
            "Implemented scheduled jobs in Strapi CMS that cross-referenced academic CSV records against PDF files in VM directories, uploaded documents to AWS S3, and detected missing records across ~14.8K publications and ~363K citation records.",
        },
        {
          icon: "Mail",
          title: "Built automated integration result notifications",
          detail:
            "Implemented email notification workflows that ran after each integration job, sending each administrator a report of whether their assigned schools and stations had missing files or completed integration successfully.",
        },
        {
          icon: "Download",
          title: "Resolved large document download reliability",
          detail:
            "Reworked the document export process using streaming to prevent browser timeouts and memory issues when downloading large PDF and ZIP files.",
        },
        {
          icon: "Server",
          title: "Owned deployment and operational setup",
          detail:
            "Configured Docker, Nginx, and GitHub Actions pipelines across testing and production environments on AWS EC2, and wrote technical documentation covering deployment steps and system configuration for the client team to maintain the platform after handover.",
        },
      ],
    },

    technicalDecisions: [
      {
        decision: "Strapi CMS for backend workflows",
        rationale:
          "The project required both an admin interface and backend services for managing publication records and uploaded documents. Strapi CMS handled both requirements in a single system.",
      },
      {
        decision: "GraphQL for frontend data fetching",
        rationale:
          "The frontend needed data from multiple related records such as publications, files, users, and schools. GraphQL reduced the need for multiple API requests across pages.",
      },
      {
        decision: "Streaming for file downloads",
        rationale:
          "Large document exports caused browser timeouts when files were loaded fully into memory. Streaming downloads improved reliability for large PDF and ZIP files.",
      },
      {
        decision: "Self-hosted GitHub Actions runners",
        rationale:
          "The production servers were inside a private AWS environment. Self-hosted runners allowed deployment pipelines to connect securely without exposing servers publicly.",
      },
    ],

    visuals: [
      {
        src: "/projects/smu/smu-01.png",
        caption:
          "Dashboard showing publication counts, missing files, and upload status across schools",
      },
      {
        src: "/projects/smu/smu-02.png",
        caption:
          "Station-level file management view showing uploaded documents and missing file checks",
      },
      {
        src: "/projects/smu/smu-03.png",
        caption:
          "User management page with account roles, email addresses, and contact information",
      },
      {
        src: "/projects/smu/smu-04.png",
        caption: "User creation form with role assignment and account details",
      },
    ],

    results: [
      {
        icon: "BookOpen",
        value: "~14.8K",
        label: "Publications Managed",
        description: "Publication records managed through the platform",
      },
      {
        icon: "FileText",
        value: "~363K",
        label: "Citation Records",
        description:
          "Citation and document records processed through validation workflows",
      },
      {
        icon: "School",
        value: "8",
        label: "Schools Supported",
        description:
          "Schools using the platform for publication and file management",
      },
      {
        icon: "CheckCircle",
        value: "Automated",
        label: "File Validation",
        description:
          "Missing file checks handled automatically through CSV validation workflows",
      },
    ],

    whatILearned: [
      {
        lead: "Automated notifications change how quickly problems get resolved.",
        detail:
          "Sending email reports after each integration run meant administrators found and fixed missing files the same day rather than catching them weeks later during manual checks.",
      },
      {
        lead: "Streaming should be planned early for large file downloads.",
        detail:
          "Loading large files into memory worked in development but caused timeouts in production, which showed that the download approach needs to be decided at the architecture stage.",
      },
      {
        lead: "Centralizing the integration pipeline simplifies long-term ownership.",
        detail:
          "Keeping validation, file uploads, and notifications inside one system meant failures were easier to trace and the client team could take over without needing to understand multiple services.",
      },
      {
        lead: "Designing for the user question, not the integration process.",
        detail:
          "Administrators needed to know what was missing and where, not how the integration worked, so building the dashboard around that single question made it more useful than a generic data view.",
      },
    ],

    sidebar: {
      role: "Led frontend implementation, backend workflows in Strapi CMS, file validation logic, and deployment setup for a university publication management platform",

      technologyStack: [
        {
          groupLabel: "Frontend",
          technologies: [
            "Next.js",
            "TypeScript",
            "Zustand",
            "GraphQL",
            "Tailwind CSS",
          ],
        },
        {
          groupLabel: "Backend",
          technologies: ["Strapi CMS", "PostgreSQL"],
        },
        {
          groupLabel: "Infrastructure",
          technologies: [
            "AWS EC2",
            "AWS RDS",
            "AWS S3",
            "Docker",
            "Nginx",
            "GitHub Actions",
          ],
        },
      ],

      constraints: [
        "14,798 publications and 363,613 citation records across 8 schools",
        "CSV and PDF files submitted by external services into VM directories",
        "Automated email notifications per administrator for missing files",
        "Private AWS environment requiring self-hosted deployment runners",
      ],

      collaborators:
        "UI/UX designer · QA engineer · Product manager · SMU stakeholders",

      cta: {
        label: "Live Demo",
        url: "https://smu.oneberryhub.com/login",
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
          "Owned Android and iOS release pipelines using Expo Application Services (EAS) and GitHub Actions, automating build, testing, and deployment workflows to ensure reliable production releases",
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
          "Architected a multi-tenant real-time surveillance platform for 3 government agencies using Next.js + NestJS, supporting 10,000+ concurrent cameras with OAuth/SSO and role-based access control",
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
        title: "Bachelor of Science (BSc) (Hons) — Computing",
        employmentPeriod: { start: "06.2024", end: "05.2025" },
        description: [
          "Covered mobile development, Human-Computer Interaction (HCI), and Enterprise Web Systems Development (EWSD) with a strong emphasis on user-centred design and systems thinking",
          "Studied Requirement Management (RM) and applied Agile methodologies and SDLC practices to structure and deliver software projects iteratively",
          "Completed a final year research project grounded in HCI, EWSD, Agile, SDLC, and Requirement Management",
        ],
      },
    ],
  },
]
