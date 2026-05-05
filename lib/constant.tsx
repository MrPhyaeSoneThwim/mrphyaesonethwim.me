"use client"
import { ExperienceItemType } from "@/components/ui/work-experience"
import type { Icon } from "@phosphor-icons/react"
import {
  UsersThreeIcon,
  BankIcon,
  LightningIcon,
  ChartLineUpIcon,
  StorefrontIcon,
  ClockIcon,
  VideoCameraSlashIcon,
  ShieldCheckIcon,
  UsersFourIcon,
  CheckCircleIcon,
  TreeStructureIcon,
} from "@phosphor-icons/react"

export interface ImpactMetric {
  icon: Icon
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
  groupLabel: "Frontend" | "Backend" | "Deployment" | "Deployment & Infra"
  technologies: string[]
}

export interface Project {
  // ===== COMMON =====
  id: string
  name: string
  thumbnailImage: string
  targetPlatform: "Web" | "Mobile"
  industrySectors: string[]

  role: string
  teamSize: string
  duration: string
  ownership: string // detail only

  isPrivate: boolean
  externalLink?: string

  impactMetrics: ImpactMetric[]

  // ===== LIST =====
  summary: string

  // ===== DETAIL =====
  fullSummary: string
  mainAchievement: string
  technologyStack: TechnologyGroup[]
  visualHighlights: {
    title: string
    description: string
    imageUrl: string
  }[]
  whatChanged: string
  keyAchievements: { title: string; detail: string }[]
  technicalDecisions: { decision: string; rationale: string }[]
  teamContext: string
  primaryMilestone: string
  responsibilities: string[]
}

export const projects: Project[] = [
  {
    id: "daytwo-mobile",
    name: "DayTwo Mobile App",
    thumbnailImage: "/projects/daytwo/daytwo-00.png",
    targetPlatform: "Mobile",
    industrySectors: ["Fintech", "Featured"],

    role: "Senior Frontend Engineer",
    teamSize: "3-person team",
    duration: "Jul 2024 – Mar 2026 · 1 yr 9 mos",
    ownership:
      "Led mobile architecture and production delivery of AI-driven SME financial system",

    isPrivate: false,
    externalLink: "https://play.google.com/store/search?q=daytwo&c=apps",

    impactMetrics: [
      { icon: UsersThreeIcon, value: "800+", label: "SMEs Onboarded" },
      { icon: BankIcon, value: "$37K+", label: "Revenue Generated" },
      { icon: ChartLineUpIcon, value: "40%", label: "API Calls Reduced" },
    ],

    summary:
      "Mobile app for SMEs that transforms daily transactions into structured financial records, delivering real-time cash visibility, actionable insights, and a business support chat assistant for informed decision-making.",

    fullSummary: "",
    mainAchievement: "",
    technologyStack: [
      {
        groupLabel: "Frontend",
        technologies: [
          "React Native",
          "TypeScript",
          "Expo",
          "NativeWind",
          "React Query",
          "Zustand",
        ],
      },
      {
        groupLabel: "Backend",
        technologies: ["FastAPI", "Firebase"],
      },
      {
        groupLabel: "Deployment",
        technologies: ["EAS", "GitHub Actions"],
      },
    ],

    visualHighlights: [],
    whatChanged: "",
    keyAchievements: [],
    technicalDecisions: [],
    teamContext: "",
    primaryMilestone: "",
    responsibilities: [],
  },

  {
    id: "javis-ordering",
    name: "JAVIS Mobile Ordering App",
    thumbnailImage: "/projects/javis/javis-00.png",
    targetPlatform: "Mobile",
    industrySectors: ["Retail Tech", "Featured"],

    role: "Full Stack Developer",
    teamSize: "5-person team",
    duration: "Feb 2022 – Jan 2023 · 1 yr",
    ownership: "Owned mobile ordering experience and real-time commerce flow",

    isPrivate: true,
    externalLink:
      "https://www.javisholdings.com/copy-of-emerging-digital-ecosystem-ne",

    impactMetrics: [
      { icon: StorefrontIcon, value: "300+", label: "Daily Orders / Machine" },
      { icon: ClockIcon, value: "~50%", label: "Faster Ordering" },
      { icon: UsersThreeIcon, value: "100+", label: "Concurrent Users" },
    ],

    summary:
      "Mobile ordering app for beverage machines that enables users to discover nearby locations, customize drinks, and place instant pre-orders through a fast, real-time, location-aware ordering experience.",

    fullSummary: "",
    mainAchievement: "",
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
        technologies: ["Node.js", "Express", "GraphQL", "Stripe"],
      },
      {
        groupLabel: "Deployment",
        technologies: ["EAS", "GitHub Actions"],
      },
    ],

    visualHighlights: [],
    whatChanged: "",
    keyAchievements: [],
    technicalDecisions: [],
    teamContext: "",
    primaryMilestone: "",
    responsibilities: [],
  },

  {
    id: "surveillance-platform",
    name: "Surveillance Platform",
    thumbnailImage: "/projects/surveillance/surveillance-00.png",
    targetPlatform: "Web",
    industrySectors: ["GovTech", "Enterprise", "Featured"],

    role: "Senior Fullstack Engineer",
    teamSize: "10-person team",
    duration: "Feb 2023 – July 2024 · 18 mos",
    ownership:
      "Led frontend architecture for real-time multi-agency surveillance platform",

    isPrivate: true,
    externalLink: "https://oneberry.com/anomaly-detection-ai/",

    impactMetrics: [
      { icon: VideoCameraSlashIcon, value: "4,000+", label: "Live Cameras" },
      { icon: ShieldCheckIcon, value: "3", label: "Gov Agencies" },
      { icon: ChartLineUpIcon, value: "~60%", label: "Defects Reduced" },
    ],

    summary:
      "Real-time monitoring platform that unifies thousands of live camera feeds into a single operational system for continuous surveillance and incident tracking across multiple government agencies.",

    fullSummary: "",
    mainAchievement: "",
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
        technologies: ["NestJS", "TypeORM", "BullMQ", "PostgreSQL", "Redis"],
      },
      {
        groupLabel: "Deployment & Infra",
        technologies: [
          "Lerna",
          "Docker",
          "Nginx",
          "Cloudflare",
          "GitHub Actions",
        ],
      },
    ],

    visualHighlights: [],
    whatChanged: "",
    keyAchievements: [],
    technicalDecisions: [],
    teamContext: "",
    primaryMilestone: "",
    responsibilities: [],
  },

  {
    id: "digital-advisor",
    name: "Digital Advisor Platform",
    thumbnailImage: "/projects/dap/dap-00.png",
    targetPlatform: "Web",
    industrySectors: ["Fintech", "Enterprise"],

    role: "Frontend Developer",
    teamSize: "5-person team",
    duration: "Feb 2022 – Sep 2022 · 8 mos",
    ownership:
      "Built structured onboarding system replacing manual compliance workflows",

    isPrivate: true,
    externalLink:
      "https://www.hitachi.asia/fibu/product/digital-advisor-platform/",

    impactMetrics: [
      { icon: UsersFourIcon, value: "6,000+", label: "Agents Onboarded" },
      { icon: CheckCircleIcon, value: "100%", label: "KYC Digitized" },
      { icon: TreeStructureIcon, value: "7", label: "Compliance Flows" },
    ],

    summary:
      "Digital platform connecting financial advisors and customers for collaborative financial planning through interactive life simulations, improving understanding of financial decisions and outcomes.",

    fullSummary: "",
    mainAchievement: "",
    technologyStack: [
      {
        groupLabel: "Frontend",
        technologies: ["React", "TypeScript", "Zustand", "Bootstrap"],
      },
      {
        groupLabel: "Backend",
        technologies: ["AWS AppSync", "GraphQL"],
      },
      {
        groupLabel: "Deployment & Infra",
        technologies: ["AWS Amplify", "Nx Monorepo"],
      },
    ],

    visualHighlights: [],
    whatChanged: "",
    keyAchievements: [],
    technicalDecisions: [],
    teamContext: "",
    primaryMilestone: "",
    responsibilities: [],
  },

  {
    id: "b2b-portal",
    name: "B2B Supplier Portal",
    thumbnailImage: "/projects/b2b/b2b-00.png",
    targetPlatform: "Web",
    industrySectors: ["Enterprise", "Supply Chain"],

    role: "Full-Stack Engineer",
    teamSize: "10-person team",
    duration: "Aug 2022 – Jun 2023 · 10 mos",
    ownership:
      "Led full-stack rebuild of legacy procurement system into modern GraphQL platform",

    isPrivate: true,
    externalLink: "https://shengsiong.com.sg/",

    impactMetrics: [
      { icon: ChartLineUpIcon, value: "30%", label: "Faster Integration" },
      { icon: LightningIcon, value: "40%", label: "Frontend Performance" },
      { icon: CheckCircleIcon, value: "100%", label: "Migration Complete" },
    ],

    summary:
      "Enterprise procurement platform that replaces legacy workflows with a unified data-driven system, eliminating data inconsistencies and improving operational efficiency across large-scale supply chain processes.",

    fullSummary: "",
    mainAchievement: "",
    technologyStack: [
      {
        groupLabel: "Frontend",
        technologies: ["Next.js", "Redux", "Bootstrap"],
      },
      {
        groupLabel: "Backend",
        technologies: ["Express.js", "GraphQL", "Strapi", "MySQL"],
      },
      {
        groupLabel: "Deployment",
        technologies: ["AWS EC2", "AWS S3"],
      },
    ],

    visualHighlights: [],
    whatChanged: "",
    keyAchievements: [],
    technicalDecisions: [],
    teamContext: "",
    primaryMilestone: "",
    responsibilities: [],
  },

  {
    id: "onenergy-mobile",
    name: "ONenergy Mobile",
    thumbnailImage: "/projects/onenergy-mobile/onenergy-mobile-00.png",
    targetPlatform: "Mobile",
    industrySectors: ["CleanTech", "IoT"],

    role: "Full-stack Engineer",
    teamSize: "6-person team",
    duration: "May 2024 - Nov 2024 · 7 months",
    ownership:
      "Built real-time mobile energy monitoring experience for household appliance-level tracking",

    isPrivate: false,
    externalLink:
      "https://play.google.com/store/apps/details?id=com.singaporetestlab.on_energy.twa",

    impactMetrics: [
      { icon: UsersThreeIcon, value: "600", label: "Households Monitored" },
      { icon: ClockIcon, value: "2s", label: "Live Update Interval" },
      { icon: LightningIcon, value: "119", label: "Appliances Tracked" },
    ],

    summary:
      "Mobile app that delivers real-time visibility of household electricity usage at appliance level, enabling continuous monitoring of energy consumption through live IoT updates.",

    fullSummary: "",
    mainAchievement: "",

    technologyStack: [
      {
        groupLabel: "Frontend",
        technologies: [
          "React Native",
          "Expo",
          "JavaScript",
          "Zustand",
          "GraphQL API",
        ],
      },
      {
        groupLabel: "Deployment",
        technologies: ["EAS"],
      },
    ],

    visualHighlights: [],
    whatChanged: "",
    keyAchievements: [],
    technicalDecisions: [],
    teamContext: "Solo",
    primaryMilestone: "",
    responsibilities: [],
  },

  {
    id: "onenergy-web",
    name: "ONenergy Web Platform",
    thumbnailImage: "/projects/onenergy-web/onenergy-web-00.png",
    targetPlatform: "Web",
    industrySectors: ["CleanTech", "IoT"],

    role: "Full-stack Engineer",
    teamSize: "6-person team",
    duration: "May 2024 - Nov 2024 · 7 months",
    ownership:
      "Built full-stack real-time energy analytics platform for IoT data visualization and processing",

    isPrivate: false,
    externalLink: "https://web.neahecs.com/",

    impactMetrics: [
      { icon: UsersThreeIcon, value: "600", label: "Households Monitored" },
      { icon: ClockIcon, value: "2s", label: "Live Update Interval" },
      { icon: LightningIcon, value: "119", label: "Appliances Tracked" },
    ],

    summary:
      "Web platform that processes real-time IoT energy data and visualizes household electricity usage across appliances through a unified monitoring dashboard with continuous live updates.",

    fullSummary: "",
    mainAchievement: "",

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

    visualHighlights: [],
    whatChanged: "",
    keyAchievements: [],
    technicalDecisions: [],
    teamContext: "Solo",
    primaryMilestone: "",
    responsibilities: [],
  },

  {
    id: "smu-portal",
    name: "SMU Research Portal",
    thumbnailImage: "/projects/smu/smu-00.png",
    targetPlatform: "Web",
    industrySectors: ["Education", "Data"],

    role: "Full-stack Engineer",
    teamSize: "4-person team",
    duration: "Jul 2024 – Nov 2024 · 4 mos",
    ownership:
      "Built automated academic data pipeline for publication and citation synchronization",

    isPrivate: false,
    externalLink: "https://smu.oneberryhub.com/login",

    impactMetrics: [
      { icon: CheckCircleIcon, value: "14,798", label: "Publications Managed" },
      { icon: ChartLineUpIcon, value: "363K+", label: "Citations Processed" },
      { icon: LightningIcon, value: "0", label: "Manual Maintenance" },
    ],

    summary:
      "Academic data platform that automates ingestion, validation, and synchronization of research publications and citations, keeping institutional records accurate and consistently up to date.",

    fullSummary: "",
    mainAchievement: "",

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
        groupLabel: "Deployment",
        technologies: ["Docker", "AWS S3", "GitHub Actions"],
      },
    ],

    visualHighlights: [],
    whatChanged: "",
    keyAchievements: [],
    technicalDecisions: [],
    teamContext: "Solo",
    primaryMilestone: "",
    responsibilities: [],
  },

  {
    id: "collegedao",
    name: "CollegeDAO Platform",
    thumbnailImage: "/projects/collegedao/collegedao-00.png",
    targetPlatform: "Web",
    industrySectors: ["Web3", "Community"],

    role: "Full-stack Engineer",
    teamSize: "4-person team",
    duration: "May 2023 – Nov 2023 · 6 mos",
    ownership:
      "Built scalable Web3 platform connecting global university blockchain communities",

    isPrivate: false,
    externalLink: "https://collegedao.io/",

    impactMetrics: [
      { icon: UsersThreeIcon, value: "14.6K+", label: "Users" },
      { icon: ChartLineUpIcon, value: "100+", label: "Universities" },
      { icon: LightningIcon, value: "80+", label: "Communities" },
    ],

    summary:
      "Web3 platform enabling discovery, collaboration, and engagement across global university blockchain communities through a decentralized networking ecosystem.",

    fullSummary: "",
    mainAchievement: "",

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
        technologies: ["GraphQL", "Strapi CMS"],
      },
      {
        groupLabel: "Deployment",
        technologies: ["Vercel", "Docker", "GitHub Actions"],
      },
    ],

    visualHighlights: [],
    whatChanged: "",
    keyAchievements: [],
    technicalDecisions: [],
    teamContext: "Solo",
    primaryMilestone: "",
    responsibilities: [],
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
          "WebSockets",
          "GraphQL",
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
          "GraphQL",
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
