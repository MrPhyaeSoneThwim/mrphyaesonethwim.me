import { ExperienceItemType } from "@/components/ui/work-experience"
import { CodeXmlIcon } from "lucide-react"

export interface ImpactMetric {
  value: string
  label: string
}

export interface VisualHighlight {
  title: string
  description: string
  imageUrl: string
}

export interface EngineeringDecision {
  decision: string
  rationale: string
}

export interface ImpactMetric {
  value: string
  label: string
}

export interface VisualHighlight {
  title: string
  description: string
  imageUrl: string
}

export interface EngineeringDecision {
  decision: string
  rationale: string
}

export interface TechnologyGroup {
  groupLabel:
    | "Frontend"
    | "Backend"
    | "Infra"
    | "Mobile"
    | "Integration"
    | "Deployment"
  technologies: string[]
}

export interface Project {
  id: string
  name: string
  thumbnailImage: string
  targetPlatform: "Web" | "Mobile"
  industrySectors: string[]
  summary: string
  mainMetric: string
  isPrivate: boolean
  externalLink: string
  impactMetrics: ImpactMetric[]
  technologyStack: TechnologyGroup[]
  visualHighlights: VisualHighlight[]
  whatChanged: string
  keyAchievements: { title: string; detail: string }[]
  technicalDecisions: EngineeringDecision[]
  role: string
  teamContext: string
  duration: string
  primaryMilestone: string
  responsibilities: string[]
}

export const projects: Project[] = [
  {
    id: "daytwo-mobile",
    name: "DayTwo Mobile App",
    thumbnailImage: "/projects/daytwo/daytwo-01.png",
    targetPlatform: "Mobile",
    industrySectors: ["Fintech", "Featured"],

    summary:
      "Mobile fintech platform enabling SMEs to digitize financial records, track cash flow, access AI-powered business insights, and generate credit profiles for loan eligibility based on real business activity.",

    mainMetric:
      "800+ SMEs onboarded and $37K+ revenue generated through a production-ready mobile platform.",

    isPrivate: false,
    externalLink: "https://play.google.com/store/search?q=daytwo&c=apps",

    impactMetrics: [
      { value: "800+", label: "SMEs Onboarded" },
      { value: "$37K+", label: "Revenue Generated" },
      { value: "40%", label: "API Calls Reduced" },
    ],

    technologyStack: [
      {
        groupLabel: "Frontend",
        technologies: [
          "React Native",
          "TypeScript",
          "React Query",
          "Zustand",
          "RESTful API",
          "NativeWind",
          "Expo",
        ],
      },
      {
        groupLabel: "Backend",
        technologies: ["Firebase", "Firebase Cloud Messaging", "FastAPI"],
      },
      {
        groupLabel: "Deployment",
        technologies: ["EAS", "CI/CD", "GitHub Actions"],
      },
    ],

    visualHighlights: [
      {
        title: "Growth Intelligence Hub",
        description:
          "Displays current cash position with key business signals, priority actions, and AI-driven insights to help SMEs monitor performance and make faster decisions.",
        imageUrl: "/projects/daytwo/daytwo-01.png",
      },
      {
        title: "Quick-Action Support",
        description:
          "Optimized navigation for fast entry of sales, expenses, loans, and daily cash reconciliation, helping users keep financial records accurate and up to date.",
        imageUrl: "/projects/daytwo/daytwo-02.png",
      },
      {
        title: "Automated Record Processing",
        description:
          "Processes unstructured data from voice and image inputs through AI pipelines to generate structured, validated financial transactions.",
        imageUrl: "/projects/daytwo/daytwo-03.png",
      },
      {
        title: "Point-of-Sale Tracker",
        description:
          "Supports manual entry of sales and expenses with multiple items, including quantity, pricing, and discount logic for accurate financial records.",
        imageUrl: "/projects/daytwo/daytwo-04.png",
      },
      {
        title: "Loan Management",
        description:
          "Helps SMEs track loans, repayments, receivables, and payables in one place to stay on top of borrowing and maintain healthy cash flow.",
        imageUrl: "/projects/daytwo/daytwo-05.png",
      },
      {
        title: "AI Business Assistant",
        description:
          "AI-powered business assistance chat that answers financial and business questions in simple language and helps SME users make informed decisions.",
        imageUrl: "/projects/daytwo/daytwo-06.png",
      },
      {
        title: "Business Health Profile",
        description:
          "Converts financial activity into a simple profile showing business health and credit strength, helping SMEs understand their financial stability and loan eligibility.",
        imageUrl: "/projects/daytwo/daytwo-07.png",
      },
    ],

    whatChanged:
      "Replaced manual SME record-keeping with a mobile-first application that converts unstructured financial data into structured records, generates loan eligibility profiles, provides actionable business recommendations, and includes an AI assistant chat for real-time business support within the application.",

    keyAchievements: [
      {
        title: "Intelligent Data Capture",
        detail:
          "Built mobile inputs that convert unstructured voice and image data into structured, validated financial records for faster, reliable accounting and simpler business operations.",
      },
      {
        title: "Frontend–Backend Integration",
        detail:
          "Integrated mobile application with backend validation pipelines to ensure accurate financial data processing for business health analysis and deliver AI-driven insights with recommended actions based on user activity.",
      },
      {
        title: "Optimized Data Fetching",
        detail:
          "Improved application performance and reduced unnecessary network requests by ~40% through caching, request deduplication, and efficient server-state synchronization.",
      },
      {
        title: "Lending Workflow Notifications",
        detail:
          "Implemented real-time loan lifecycle updates including submission, approval, rejection, and disbursement to improve user visibility and trust in lending processes.",
      },
      {
        title: "App-Wide Language Support",
        detail:
          "Implemented full application localization where UI content and AI responses dynamically adapt to the selected language for a consistent multilingual experience.",
      },
    ],

    technicalDecisions: [
      {
        decision: "Expo & EAS",
        rationale:
          "Accelerated development and simplified build and deployment pipelines, enabling faster and more reliable production releases.",
      },
      {
        decision: "Zustand for State Management",
        rationale:
          "Used as a simple, lightweight state manager for financial record workflows and chat conversations, handling draft inputs, manual entries, and structured data from voice and image inputs for smooth multi-step flows within the application.",
      },
      {
        decision: "React Query for Server Data",
        rationale:
          "Standardized data fetching with caching and request deduplication, improving performance and reducing redundant network requests.",
      },
      {
        decision: "Zod for Data Validation",
        rationale:
          "Implemented schema-based validation for financial records to enforce strict data formats, ensure consistent inputs, and maintain data correctness across transaction flows.",
      },
      {
        decision: "NativeWind Styling",
        rationale:
          "Enabled consistent UI development and faster iteration using a utility-first styling approach and a reusable component library aligned with the application design system.",
      },
      {
        decision: "AI Assistant Chat Interface",
        rationale:
          "Designed a business support chat that transforms raw AI outputs into clear, user-friendly responses with actionable guidance for SME users within the application.",
      },
      {
        decision: "React Native Architecture",
        rationale:
          "Structured the application with clear separation of server state managed by React Query, UI state managed by Zustand, and derived logic to ensure predictable updates, scalability, and fewer unnecessary re-renders.",
      },
    ],

    role: "Senior Frontend Engineer",
    teamContext: "3-person team",
    duration: "Jan 2024 – Sep 2025 · 1 yr 9 mos",

    primaryMilestone:
      "Achieved first 100 SME onboardings within 6 weeks of initial product launch.",

    responsibilities: [
      "Led end-to-end mobile development from architecture to production, iterating based on SME user feedback.",
      "Collaborated with backend and AI engineers to integrate financial tracking, business insights, and AI chat features.",
      "Worked in design sprints to refine UX flows for non-technical SME users, improving usability across core financial workflows.",
      "Conducted user testing and translated feedback into iterative product improvements across releases.",
      "Led SME onboarding and training post-launch to improve platform adoption and user retention.",
    ],
  },
  {
    id: "javis-ordering",
    name: "JAVIS Mobile Ordering App",
    thumbnailImage: "/projects/javis/javis-01.png",
    targetPlatform: "Mobile",
    industrySectors: ["Retail Tech", "Featured"],

    summary:
      "Mobile ordering platform for automated beverage machines that allows users to browse location-based menus, customize drinks, and place orders ahead of time, reducing wait time and improving the overall ordering experience.",

    mainMetric:
      "Mobile ordering platform that reduces wait time and supports high-traffic usage.",

    isPrivate: true,
    externalLink:
      "https://www.javisholdings.com/copy-of-emerging-digital-ecosystem-ne",

    impactMetrics: [
      { value: "300+", label: "Daily Orders Per Machine" },
      { value: "~50%", label: "Faster Ordering" },
      { value: "100+", label: "Concurrent Users" },
    ],

    technologyStack: [
      {
        groupLabel: "Frontend",
        technologies: [
          "React Native",
          "JavaScript",
          "Expo",
          "Zustand",
          "NativeWind",
          "Mapbox",
          "Expo SecureStore",
        ],
      },
      {
        groupLabel: "Backend",
        technologies: [
          "Node.js",
          "Express.js",
          "GraphQL",
          "JWT",
          "Stripe",
          "Firebase Cloud Messaging",
        ],
      },
      {
        groupLabel: "Deployment",
        technologies: ["EAS", "CI/CD", "GitHub Actions"],
      },
    ],

    visualHighlights: [
      {
        title: "Machine Discovery",
        description:
          "Helps users discover nearby beverage machines and view what drinks are available at each location before placing an order.",
        imageUrl: "/projects/javis/javis-01.png",
      },
      {
        title: "Location-Based Menu",
        description:
          "Shows only drinks available at the selected beverage machine location, helping users quickly choose what they can order.",
        imageUrl: "/projects/javis/javis-02.png",
      },
      {
        title: "Drink Customization",
        description:
          "Allows users to customize drinks with options such as base selection, sugar level, and toppings based on each machine’s available configurations.",
        imageUrl: "/projects/javis/javis-03.png",
      },
      {
        title: "Checkout Flow",
        description:
          "Provides a fast and reliable checkout experience with secure payment processing and safeguards against duplicate transactions.",
        imageUrl: "/projects/javis/javis-04.png",
      },
      {
        title: "Order History",
        description:
          "A complete list of past orders that allows users to easily review their previous purchases at any time.",
        imageUrl: "/projects/javis/javis-05.png",
      },
      {
        title: "Order Details",
        description:
          "A detailed view of each order showing items, quantities, and provides an option to reorder in a few steps.",
        imageUrl: "/projects/javis/javis-06.png",
      },
      {
        title: "Profile Management",
        description:
          "Allows users to manage account details, personal information, payment cards, and securely stored data for a smooth app experience.",
        imageUrl: "/projects/javis/javis-07.png",
      },
      {
        title: "Rewards System",
        description:
          "Tracks user points and rewards based on activity, encouraging repeat usage and long-term engagement within the app.",
        imageUrl: "/projects/javis/javis-08.png",
      },
    ],

    whatChanged:
      "Replaced kiosk-based ordering with a mobile-first system that allows users to place orders ahead of time, while beverage machines push item availability updates to the backend and consume order data for fulfillment.",

    keyAchievements: [
      {
        title: "End-to-End Product Delivery",
        detail:
          "Delivered a complete mobile ordering experience covering menu browsing, drink customization, payment, and real-time order tracking, ensuring a smooth and consistent user journey.",
      },
      {
        title: "Reliable Ordering Flow",
        detail:
          "Ensured uninterrupted order completion under poor connectivity by retrying failed requests and providing clear user feedback, including connection status, location availability, waiting time, and order tracking.",
      },
      {
        title: "Machine Integration",
        detail:
          "Designed and documented API contracts for external beverage machine systems, enabling real-time availability updates and webhook-based order status synchronization with the backend system, ensuring consistent synchronization between machines and the app.",
      },
      {
        title: "Maintainable System Design",
        detail:
          "Built a scalable React Native architecture using a feature-based structure with clear separation of concerns and single-responsibility principles, making the codebase easier to maintain, extend, and scale over time.",
      },
    ],

    technicalDecisions: [
      {
        decision: "Expo & EAS",
        rationale:
          "Used Expo to speed up React Native development and EAS to ensure consistent builds and reliable deployment across iOS and Android.",
      },
      {
        decision: "Zustand State Management",
        rationale:
          "Used Zustand for scalable state management to handle complex flows such as drink customization, cart management, and multi-step ordering across screens.",
      },
      {
        decision: "GraphQL Data Layer",
        rationale:
          "Used GraphQL to fetch only the required data per screen, improving performance across menus, orders, and real-time machine availability.",
      },
      {
        decision: "Secure Authentication",
        rationale:
          "Used token-based authentication with secure storage to protect user sessions and securely handle account and payment information.",
      },
      {
        decision: "Machine Integration via API",
        rationale:
          "Built a structured API layer connecting the app with beverage machines to handle real-time availability updates and order processing.",
      },
    ],

    role: "Full Stack Developer",
    teamContext: "5-person team",
    duration: "Feb 2022 – Jan 2023 · 1 yr",

    primaryMilestone:
      "Launched a production mobile ordering system used across multiple locations, handling high-traffic periods reliably.",

    responsibilities: [
      "Led React Native frontend development using Expo, building core flows including ordering, drink customization, checkout, and order tracking.",
      "Designed backend APIs for ordering, payments, and machine integration to ensure stable communication between app, backend, and machines.",
      "Managed iOS and Android releases using EAS with consistent build and deployment cycles.",
      "Improved pre-order flow by reducing steps and simplifying the ordering experience.",
      "Defined API contracts and created Postman documentation for machine integration used by internal teams and client stakeholders.",
      "Integrated Stripe payments with secure validation for high-volume transaction handling.",
      "Built drink customization and order tracking based on real-time machine availability data.",
      "Collaborated with UI/UX designers, backend engineers, and stakeholders to deliver production-ready features.",
    ],
  },
  {
    id: "surveillance-platform",
    name: "Surveillance Platform",
    thumbnailImage: "/projects/surveillance.png",
    targetPlatform: "Web",
    industrySectors: ["GovTech", "Enterprise", "Featured"],
    summary:
      "Enterprise surveillance platform for real-time monitoring and incident tracking across government agencies.",
    mainMetric:
      "4,000+ cameras deployed across 3 government agencies with real-time monitoring and incident reporting.",
    isPrivate: true,
    externalLink: "https://oneberry.com/anomaly-detection-ai/",
    impactMetrics: [
      { value: "4,000+", label: "Live Cameras" },
      { value: "3", label: "Gov Agencies" },
      { value: "~60%", label: "Defect Reduction" },
    ],
    technologyStack: [
      {
        groupLabel: "Frontend",
        technologies: [
          "Next.js",
          "TypeScript",
          "Redux Toolkit",
          "RTK Query",
          "Material UI",
        ],
      },
      {
        groupLabel: "Backend",
        technologies: ["NestJS", "PostgreSQL", "Redis", "TypeORM"],
      },
      {
        groupLabel: "Infra",
        technologies: ["Lerna", "Docker", "GitHub Actions", "Nginx"],
      },
    ],
    visualHighlights: [
      {
        title: "Live Camera Grid",
        description:
          "Real-time monitoring with grid layouts for 4,000+ camera feeds.",
        imageUrl: "https://picsum.photos/seed/surv-1/800/600",
      },
      {
        title: "Geospatial View",
        description: "Redis-indexed map rendering for camera locations.",
        imageUrl: "https://picsum.photos/seed/surv-2/800/600",
      },
    ],
    whatChanged:
      "Government agencies needed unified monitoring of thousands of cameras across disconnected dashboards with strict security requirements.",
    keyAchievements: [
      {
        title: "Redis Geo-Indexing",
        detail:
          "Optimized geospatial rendering, improving map performance by ~50%.",
      },
      {
        title: "CI/CD Modernization",
        detail:
          "Introduced Jest and Cypress quality gates, reducing production defects by ~60%.",
      },
    ],
    technicalDecisions: [
      {
        decision: "Redis for Geospatial data",
        rationale:
          "Achieved 10x faster query times for 4,000+ cameras compared to PostgreSQL-only.",
      },
      {
        decision: "NestJS Backend",
        rationale:
          "Standardized backend architecture for high-availability enterprise requirements.",
      },
    ],
    role: "Frontend Architect",
    teamContext: "4-person team",
    duration: "14 months - 2022-2023",
    primaryMilestone: "All 3 agencies live by month 10",
    responsibilities: [
      "Led frontend architecture",
      "Designed CI/CD pipelines",
      "Optimized real-time monitoring components",
    ],
  },
  {
    id: "digital-advisor",
    name: "Digital Advisor Platform",
    thumbnailImage: "/projects/digital-advisor.png",
    targetPlatform: "Web",
    industrySectors: ["Fintech", "Enterprise"],
    summary:
      "Enterprise financial advisory platform for AIA Singapore agents, enabling customer onboarding, financial needs analysis, and performance management.",
    mainMetric:
      "Digitised onboarding for 6,000+ AIA Singapore agents, supporting end-to-end KYC and financial needs analysis workflows.",
    isPrivate: true,
    externalLink:
      "https://www.hitachi.asia/fibu/product/digital-advisor-platform/",
    impactMetrics: [
      { value: "6,000+", label: "Agents Onboarded" },
      { value: "100%", label: "KYC Digitized" },
      { value: "7", label: "Compliance Flows" },
    ],
    technologyStack: [
      {
        groupLabel: "Frontend",
        technologies: ["React", "TypeScript", "Zustand", "Bootstrap"],
      },
      {
        groupLabel: "Backend",
        technologies: ["GraphQL", "AWS AppSync", "AWS Amplify"],
      },
      {
        groupLabel: "Infra",
        technologies: ["Nx Monorepo", "Amplify CI/CD"],
      },
    ],
    visualHighlights: [
      {
        title: "KYC Verification",
        description: "Audit event logging at every state transition.",
        imageUrl: "https://picsum.photos/seed/da-1/800/600",
      },
    ],
    whatChanged:
      "Paper-based agent onboarding was error-prone, making compliance checks and audit reporting unreliable.",
    keyAchievements: [
      {
        title: "Workflow Digitalization",
        detail:
          "Replaced paper-based KYC and compliance checks with structured digital state machines.",
      },
      {
        title: "Audit Event Logging",
        detail:
          "Designed a system to capture and log every state transition for regulatory audit readiness.",
      },
    ],
    technicalDecisions: [
      {
        decision: "Zustand State Management",
        rationale:
          "Reduced mental overhead for complex onboarding forms compared to Redux.",
      },
    ],
    role: "Frontend Engineer",
    teamContext: "3-person team",
    duration: "9 months - 2022",
    primaryMilestone: "Full KYC workflow live and adopted at month 5",
    responsibilities: [
      "Developed KYC module",
      "Integrated AWS Amplify",
      "Built audit trail logging",
    ],
  },
  {
    id: "b2b-portal",
    name: "B2B Supplier Portal",
    thumbnailImage: "/projects/b2b.png",
    targetPlatform: "Web",
    industrySectors: ["Enterprise", "Supply Chain"],
    summary:
      "Supplier management portal facilitating procurement, inventory, and supplier e-commerce data integration.",
    mainMetric:
      "Reduced frontend load time and ecommerce integration time by ~30% through legacy migration and API redesign.",
    isPrivate: true,
    externalLink: "https://shengsiong.com.sg/",
    impactMetrics: [
      { value: "30%", label: "Integration Speed" },
      { value: "40%", label: "Frontend Performance" },
      { value: "100%", label: "Migration Complete" },
    ],
    technologyStack: [
      {
        groupLabel: "Frontend",
        technologies: ["Next.js", "JavaScript", "Redux", "Bootstrap"],
      },
      {
        groupLabel: "Backend",
        technologies: ["GraphQL", "Express.js", "Strapi CMS", "MySQL"],
      },
      { groupLabel: "Infra", technologies: ["AWS EC2", "AWS S3"] },
    ],
    visualHighlights: [
      {
        title: "Inventory Dashboard",
        description:
          "Real-time stock alerts via standardized GraphQL contracts.",
        imageUrl: "https://picsum.photos/seed/b2b-1/800/600",
      },
    ],
    whatChanged:
      "Legacy portal required manual reconciliation of weekly data mismatches between systems.",
    keyAchievements: [
      {
        title: "Legacy Migration",
        detail:
          "Led the migration from legacy infrastructure to a scalable Next.js stack.",
      },
      {
        title: "API Redesign",
        detail:
          "Redesigned API architecture to eliminate data mismatches and reduce integration time.",
      },
    ],
    technicalDecisions: [
      {
        decision: "Full Stack Migration",
        rationale:
          "Legacy technical debt made incremental migration higher risk than a full rebuild.",
      },
    ],
    role: "Full-stack Engineer",
    teamContext: "Solo",
    duration: "8 months - 2021-2022",
    primaryMilestone: "Migration completed with zero data loss",
    responsibilities: [
      "Led migration architecture",
      "Designed GraphQL schemas",
      "Configured AWS environment",
    ],
  },
  {
    id: "onenergy-mobile",
    name: "ONenergy Mobile",
    thumbnailImage: "/projects/onenergy.png",
    targetPlatform: "Mobile",
    industrySectors: ["CleanTech", "IoT"],
    summary:
      "Mobile app for real-time energy monitoring, providing appliance-level insights through GraphQL backend integration.",
    mainMetric:
      "Energy consumption monitoring across 600 households - 119 appliances tracked every 2s with zero manual intervention.",
    isPrivate: false,
    externalLink:
      "https://play.google.com/store/apps/details?id=com.singaporetestlab.on_energy.twa",
    impactMetrics: [
      { value: "600", label: "Household Reach" },
      { value: "2s", label: "Live Data Updates" },
      { value: "119", label: "Appliance Coverage" },
    ],
    technologyStack: [
      {
        groupLabel: "Mobile",
        technologies: ["Expo", "JavaScript", "Zustand"],
      },
      {
        groupLabel: "Integration",
        technologies: ["GraphQL API"],
      },
    ],
    visualHighlights: [
      {
        title: "Energy Dashboard",
        description:
          "Real-time appliance-level energy insights powered by GraphQL subscriptions.",
        imageUrl: "https://picsum.photos/seed/onw-1/800/600",
      },
    ],
    whatChanged:
      "Users required real-time visibility into household energy consumption across appliances.",
    keyAchievements: [
      {
        title: "Real-time Monitoring",
        detail:
          "Enabled 2-second refresh energy tracking across 600+ households.",
      },
    ],
    technicalDecisions: [
      {
        decision: "GraphQL Integration",
        rationale:
          "Ensured efficient real-time data updates from backend services.",
      },
    ],
    role: "Mobile Engineer",
    teamContext: "Solo",
    duration: "7 months - 2022",
    primaryMilestone: "600 households actively monitored in real-time system",
    responsibilities: [
      "Built mobile UI in Expo",
      "Integrated GraphQL APIs",
      "Implemented real-time data rendering",
    ],
  },
  {
    id: "onenergy-web",
    name: "ONenergy Web Platform",
    thumbnailImage: "/projects/onenergy-web.png",
    targetPlatform: "Web",
    industrySectors: ["CleanTech", "IoT"],
    summary:
      "Full-stack energy monitoring platform delivering real-time dashboards, backend services, and IoT data processing for smart meter analytics across households and appliances.",
    mainMetric:
      "Energy consumption monitoring across 600 households - 119 appliances tracked every 2s with full-stack real-time dashboard system.",
    isPrivate: false,
    externalLink: "https://web.neahecs.com/",
    impactMetrics: [
      { value: "600", label: "Household Reach" },
      { value: "2s", label: "Live Data Updates" },
      { value: "119", label: "Appliance Coverage" },
    ],

    technologyStack: [
      {
        groupLabel: "Frontend",
        technologies: ["Next.js", "JavaScript", "Zustand"],
      },
      {
        groupLabel: "Backend",
        technologies: ["Express.js", "GraphQL", "Node.js"],
      },
      {
        groupLabel: "Deployment",
        technologies: ["Docker", "GitHub Actions", "Vercel"],
      },
    ],

    visualHighlights: [
      {
        title: "Energy Dashboard",
        description:
          "Real-time web dashboard visualizing appliance-level energy consumption with 2-second IoT data updates.",
        imageUrl: "https://picsum.photos/seed/onw-2/800/600",
      },
    ],

    whatChanged:
      "Lack of a centralized system to process, serve, and visualize real-time energy consumption data across households and IoT devices.",

    keyAchievements: [
      {
        title: "IoT Data Pipeline",
        detail:
          "Built real-time ingestion pipeline handling 2-second smart meter updates across 600+ households.",
      },
      {
        title: "System Migration",
        detail:
          "Migrated legacy architecture to a scalable full-stack system with improved performance and data flow efficiency.",
      },
    ],

    technicalDecisions: [
      {
        decision: "GraphQL + Express Backend",
        rationale:
          "Enabled flexible querying and efficient real-time data delivery for high-frequency IoT updates.",
      },
      {
        decision: "Full-stack Ownership",
        rationale:
          "Web platform required end-to-end control over frontend, backend, and deployment pipelines.",
      },
    ],

    role: "Full-stack Engineer",
    teamContext: "Solo",
    duration: "7 months - 2022",
    primaryMilestone: "Deployed scalable real-time energy analytics platform",

    responsibilities: [
      "Built full web dashboard system in Next.js",
      "Developed backend APIs using Express.js and GraphQL",
      "Designed real-time IoT data architecture",
      "Implemented CI/CD and deployment pipelines",
    ],
  },
  {
    id: "smu-portal",
    name: "SMU Research Portal",
    thumbnailImage: "/projects/smu.png",
    targetPlatform: "Web",
    industrySectors: ["Education", "Data"],
    summary:
      "Academic data portal for SMU featuring automated ingestion pipelines and daily citation syncs.",
    mainMetric:
      "Managed 14,798 publications and 363K citations via automated academic document management - zero manual effort.",
    isPrivate: false,
    externalLink: "https://smu.oneberryhub.com",
    impactMetrics: [
      { value: "14,798", label: "Publications" },
      { value: "363K+", label: "Citations" },
      { value: "0", label: "Manual Intervention" },
    ],
    technologyStack: [
      {
        groupLabel: "Frontend",
        technologies: ["Next.js", "JavaScript", "Zustand"],
      },
      {
        groupLabel: "Backend",
        technologies: ["Strapi CMS", "GraphQL", "Node.js"],
      },
      {
        groupLabel: "Infra",
        technologies: ["Docker", "AWS S3", "GitHub Actions"],
      },
    ],
    visualHighlights: [
      {
        title: "Integrity Console",
        description: "Lists flagged records and schema validation failures.",
        imageUrl: "https://picsum.photos/seed/smu-1/800/600",
      },
    ],
    whatChanged:
      "Research records and citation counts were manually curated, leading to stale and disconnected data.",
    keyAchievements: [
      {
        title: "Automated Pipeline",
        detail:
          "Built an ingestion pipeline with daily syncs and per-minute integrity checks.",
      },
      {
        title: "Data Accuracy",
        detail:
          "Implemented duplicate detection layer, catching ~4% record overlap missed by external IDs.",
      },
    ],
    technicalDecisions: [
      {
        decision: "Custom Deduplication Engine",
        rationale:
          "Essential for maintaining publication integrity that standard academic IDs couldn't guarantee.",
      },
    ],
    role: "Frontend Engineer",
    teamContext: "Solo",
    duration: "6 months - 2021",
    primaryMilestone: "Full dataset verified clean at month 4",
    responsibilities: [
      "Sole engineer end-to-end",
      "Built automated backend pipeline",
      "Implemented reporting exports",
    ],
  },
  {
    id: "collegedao",
    name: "CollegeDAO Platform",
    thumbnailImage: "/projects/collegedao.png",
    targetPlatform: "Web",
    industrySectors: ["Web3", "Community"],
    summary:
      "Web3 platform connecting university blockchain communities worldwide for student collaboration.",
    mainMetric:
      "Reached 14.6K+ users across 100+ universities and 80+ blockchain communities via scalable Web3 community discovery.",
    isPrivate: false,
    externalLink: "https://collegedao.io/",
    impactMetrics: [
      { value: "14.6K+", label: "Users" },
      { value: "100+", label: "Universities" },
      { value: "80+", label: "Communities" },
    ],
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
      { groupLabel: "Backend", technologies: ["GraphQL", "Strapi CMS"] },
      {
        groupLabel: "Infra",
        technologies: ["Vercel", "Docker", "GitHub Actions"],
      },
    ],
    visualHighlights: [
      {
        title: "Community Hub",
        description:
          "Statically generated pages for viral university discovery.",
        imageUrl: "https://picsum.photos/seed/cdao-1/800/600",
      },
    ],
    whatChanged:
      "University clubs operated in silos with no centralized hub for community collaboration.",
    keyAchievements: [
      {
        title: "Scalable Architecture",
        detail:
          "Built a frontend that supported tripling content volume without refactors.",
      },
      {
        title: "Optimized discovery",
        detail: "Improved load speeds by ~40% using SSG for community pages.",
      },
    ],
    technicalDecisions: [
      {
        decision: "SSG for Community Pages",
        rationale:
          "Enabled instant load times for viral growth while keeping SEO high.",
      },
    ],
    role: "Frontend Engineer",
    teamContext: "Solo",
    duration: "5 months - 2022",
    primaryMilestone: "10K users hit 3 weeks ahead of target",
    responsibilities: [
      "Architected full frontend system",
      "Designed community UI system",
      "Managed deployments",
    ],
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
        icon: <CodeXmlIcon className="size-4" />,
        description: [
          "Led architecture and delivery of an AI-powered web and mobile platform serving 800+ SMEs, generating $37K+ revenue",
          "Reduced API calls by ~40% through React Query caching and optimized state management",
          "Designed reusable cross-platform UI systems to improve scalability and consistency",
          "Owned mobile release pipeline using EAS with automated testing (Jest, Detox)",
          "Built real-time notification infrastructure using Firebase for time-sensitive workflows",
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
          "Firebase",
          "Expo",
          "EAS",
          "Jest",
          "Detox",
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
        icon: <CodeXmlIcon className="size-4" />,
        description: [
          "Led architecture and delivery of a real-time surveillance platform supporting 4,000+ cameras across 3 government agencies",
          "Built cross-platform mobile apps (iOS & Android) using React Native and Expo for production systems",
          "Reduced query latency by ~60% using Redis-based geospatial indexing",
          "Improved deployment speed by ~20% through CI/CD pipelines with Docker and GitHub Actions",
          "Reduced production defects by ~60% by establishing Jest and Cypress testing standards",
          "Led 3 cross-functional teams across multiple projects, driving code quality and mentoring",
        ],
        skills: [
          "Next.js",
          "TypeScript",
          "Bootstrap",
          "Node.js",
          "NestJS",
          "React Native",
          "Expo",
          "Redis",
          "PostgreSQL",
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
        icon: <CodeXmlIcon className="size-4" />,
        description: [
          "Migrated legacy supplier platform to Next.js and TypeScript, reducing data integration time by ~30%",
          "Built digital onboarding platform for 6,000+ AIA Singapore agents with KYC and compliance workflows",
          "Designed scalable APIs and data pipelines for complex enterprise systems",
          "Delivered responsive and accessible features across multiple production apps",
        ],
        skills: [
          "React",
          "Next.js",
          "TypeScript",
          "GraphQL",
          "Zustand",
          "Express.js",
          "MySQL",
          "AWS S3",
          "AWS EC2",
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
        icon: <CodeXmlIcon className="size-4" />,
        description: [
          "Built Web3 platform supporting 100+ active communities with scalable frontend architecture",
          "Developed REST APIs using Node.js and MongoDB for reliable backend services",
          "Implemented wallet-based and social authentication with secure access control",
          "Delivered responsive frontend using React, Redux, and Tailwind CSS",
        ],
        skills: [
          "React",
          "Redux",
          "Tailwind CSS",
          "Node.js",
          "Express.js",
          "MongoDB",
          "Web3",
          "Solana",
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
        icon: <CodeXmlIcon className="size-4" />,
        description: [
          "Built lost vehicle reporting system contributing to recovery of 195 motorcycles",
          "Developed admin dashboard and public-facing UI with React and Tailwind CSS",
          "Integrated APIs and collaborated with design to deliver user-focused features",
        ],
        skills: ["React", "Tailwind CSS", "JavaScript", "REST API"],
      },
    ],
    isCurrentEmployer: false,
  },
]
