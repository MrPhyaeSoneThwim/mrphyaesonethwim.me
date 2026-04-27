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
      "Fintech app for SMEs to track income, expenses, and credit, with automated credit score generation to support loan applications.",
    mainMetric: "Onboarded 800+ SMEs - $37K+ revenue generated in production.",
    isPrivate: false,
    externalLink: "https://play.google.com/store/search?q=daytwo&c=apps",
    impactMetrics: [
      { value: "800+", label: "SMEs Onboarded" },
      { value: "$37K+", label: "Revenue" },
      { value: "40%", label: "API Reduction" },
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
        technologies: ["Firebase", "Firebase Cloud Messaging", "Fast API"],
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
          "A unified dashboard offering real-time cash flow visibility and proactive steps to help SMEs improve overall business performance.",
        imageUrl: "/projects/daytwo/daytwo-01.png",
      },
      {
        title: "Quick-Action Interface",
        description:
          "An optimized navigation menu built for high-speed logging of daily sales, business expenses, and automated cash reconciliations.",
        imageUrl: "/projects/daytwo/daytwo-02.png",
      },
      {
        title: "Automated Record Keeping",
        description:
          "A hands-free recording system that instantly converts voice notes and physical receipts into structured business transactions.",
        imageUrl: "/projects/daytwo/daytwo-03.png",
      },
      {
        title: "Point-of-Sale Tracker",
        description:
          "A streamlined sales management system featuring itemized transaction history and responsive real-time inventory adjustments.",
        imageUrl: "/projects/daytwo/daytwo-04.png",
      },
      {
        title: "Liquidity Management",
        description:
          "Detailed monitoring of customer debts and supplier payments to ensure healthy cash flow and sustainable vendor relationships.",
        imageUrl: "/projects/daytwo/daytwo-05.png",
      },
      {
        title: "Bizzy Business Assistant",
        description:
          "A dedicated digital companion providing instant answers to financial questions and deep dives into monthly business performance.",
        imageUrl: "/projects/daytwo/daytwo-06.png",
      },
      {
        title: "Loan Readiness Profile",
        description:
          "A professional financial health assessment that translates business activity into a verifiable credit score for bank applications.",
        imageUrl: "/projects/daytwo/daytwo-07.png",
      },
    ],
    whatChanged:
      "Replaced manual SME record-keeping with a mobile app that captures data digitally and connects to an AI-powered backend for structured records and loan readiness.",
    keyAchievements: [
      {
        title: "Smart Data Input",
        detail:
          "Implemented mobile features that let users submit voice notes and photos, which are processed into structured financial data by backend services.",
      },
      {
        title: "Data Validation Integration",
        detail:
          "Integrated with backend systems that validate and clean incoming data before it is used for credit analysis.",
      },
      {
        title: "Real-Time Notifications",
        detail:
          "Built Firebase-based notifications to deliver alerts and updates to users based on their activity.",
      },
    ],
    technicalDecisions: [
      {
        decision: "Expo & EAS",
        rationale:
          "Used Expo to speed up development and EAS to streamline app builds and releases.",
      },
      {
        decision: "React Query for Server State",
        rationale:
          "Improved data synchronization and reduced unnecessary network requests, lowering API usage by about 40%.",
      },
      {
        decision: "NativeWind Styling",
        rationale:
          "Used a utility-first approach to keep the UI consistent and speed up development.",
      },
    ],
    role: "Senior Frontend Engineer",
    teamContext: "3-person team",
    duration: "Jan 2024 – Sep 2025 · 1 yr 9 mos",
    primaryMilestone: "First 100 SMEs onboarded within 6 weeks",
    responsibilities: [
      "Owned the end-to-end mobile app development, from architecture decisions to production release.",
      "Collaborated with AI and backend teams to integrate financial tracking, intelligent chat, and real-time insights.",
      "Contributed to design sprints by proposing UX improvements to enhance usability and clarity.",
      "Conducted user testing, gathered feedback, and resolved issues ahead of each release cycle.",
      "Onboarded and trained SME users post-launch to ensure effective adoption and usage of the app.",
    ],
  },
  {
    id: "javis-ordering",
    name: "JAVIS Mobile Ordering App",
    thumbnailImage: "/projects/javis-mobile.png",
    targetPlatform: "Mobile",
    industrySectors: ["Retail Tech", "Featured"],
    summary:
      "Cross-platform mobile ordering app for automated beverage machines, supporting high-concurrency peak usage.",
    mainMetric:
      "Cut ordering time by ~50% - sustained 300+ daily orders per beverage machine at peak hours.",
    isPrivate: true,
    externalLink: "https://www.javisholdings.com",
    impactMetrics: [
      { value: "300+", label: "Daily Orders" },
      { value: "~50%", label: "Faster Ordering" },
      { value: "100+", label: "Concurrent Users" },
    ],
    technologyStack: [
      {
        groupLabel: "Frontend",
        technologies: ["React Native", "JavaScript", "Zustand", "Expo"],
      },
      {
        groupLabel: "Backend",
        technologies: [
          "GraphQL",
          "Stripe",
          "Firebase",
          "Firebase Cloud Messaging",
        ],
      },
      {
        groupLabel: "Infra",
        technologies: ["EAS"],
      },
    ],
    visualHighlights: [
      {
        title: "Machine Discovery",
        description: "Real-time availability status and queue count.",
        imageUrl: "https://picsum.photos/seed/javis-1/800/600",
      },
      {
        title: "Pre-Order Flow",
        description: "Seamless payment before reaching the machine.",
        imageUrl: "https://picsum.photos/seed/javis-2/800/600",
      },
    ],
    whatChanged:
      "Kiosks relied on physical buttons; peak periods caused queues and session timeouts.",
    keyAchievements: [
      {
        title: "Real-time Ordering Sync",
        detail:
          "Utilized GraphQL subscriptions to keep machine state in sync across 100+ concurrent connections.",
      },
      {
        title: "Secure Payment Flow",
        detail:
          "Integrated Stripe Payment Intents with idempotency keys to handle peak concurrency.",
      },
    ],
    technicalDecisions: [
      {
        decision: "GraphQL Subscriptions",
        rationale:
          "Held up reliably under 100+ concurrent connections without race conditions.",
      },
    ],
    role: "Frontend Mobile Engineer",
    teamContext: "2-person team",
    duration: "6 months - 2023",
    primaryMilestone: "Pre-order flow adopted by 80% of users in 2 weeks",
    responsibilities: [
      "Developed React Native mobile frontend",
      "Implemented Stripe checkout",
      "Collaborated on machine state protocol",
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
      "Mobile application for real-time energy monitoring, providing appliance-level insights through GraphQL backend integration.",
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
          "Built cross-platform mobile applications (iOS & Android) using React Native and Expo for production systems",
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
          "Delivered responsive and accessible features across multiple production applications",
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
