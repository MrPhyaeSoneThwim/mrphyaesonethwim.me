"use client"
import { ExperienceItemType } from "@/components/ui/work-experience"
import { CodeXmlIcon } from "lucide-react"
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
  HouseLineIcon,
  DeviceMobileIcon,
  BookOpenIcon,
  GlobeIcon,
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
  groupLabel: "Frontend" | "Backend" | "Deployment"
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
    thumbnailImage: "/projects/daytwo/daytwo-01.png",
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
        technologies: ["FastAPI", "Firebase", "Cloud Messaging"],
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
    thumbnailImage: "/projects/javis/javis-01.png",
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
    thumbnailImage: "/projects/surveillance.png",
    targetPlatform: "Web",
    industrySectors: ["GovTech", "Enterprise", "Featured"],

    role: "Frontend Architect",
    teamSize: "4-person team",
    duration: "2022 – 2023 · 14 mos",
    ownership:
      "Led frontend architecture for real-time multi-agency surveillance platform",

    isPrivate: true,
    externalLink: "https://oneberry.com/anomaly-detection-ai/",

    impactMetrics: [
      { icon: VideoCameraSlashIcon, value: "4,000+", label: "Live Cameras" },
      { icon: ShieldCheckIcon, value: "3", label: "Gov Agencies Live" },
      { icon: ChartLineUpIcon, value: "~60%", label: "Defects Reduced" },
    ],

    summary:
      "Real-time monitoring platform that unifies thousands of live camera feeds into a single operational system for continuous surveillance, incident tracking, and real-time response across multiple government agencies.",

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
        technologies: ["NestJS", "PostgreSQL", "Redis"],
      },
      {
        groupLabel: "Deployment",
        technologies: ["Docker", "Nginx", "GitHub Actions"],
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
    thumbnailImage: "/projects/digital-advisor.png",
    targetPlatform: "Web",
    industrySectors: ["Fintech", "Enterprise"],

    role: "Frontend Engineer",
    teamSize: "3-person team",
    duration: "2022 · 9 mos",
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
        groupLabel: "Deployment",
        technologies: ["AWS Amplify"],
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
    thumbnailImage: "/projects/b2b.png",
    targetPlatform: "Web",
    industrySectors: ["Enterprise", "Supply Chain"],

    role: "Full-Stack Engineer",
    teamSize: "Solo",
    duration: "2021 – 2022 · 8 mos",
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
    thumbnailImage: "/projects/onenergy.png",
    targetPlatform: "Mobile",
    industrySectors: ["CleanTech", "IoT"],

    role: "Mobile Engineer",
    teamSize: "Solo",
    duration: "7 months - 2022",
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
        technologies: ["Expo", "JavaScript", "Zustand"],
      },
      {
        groupLabel: "Backend",
        technologies: ["GraphQL API"],
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
    thumbnailImage: "/projects/onenergy-web.png",
    targetPlatform: "Web",
    industrySectors: ["CleanTech", "IoT"],

    role: "Full-stack Engineer",
    teamSize: "Solo",
    duration: "7 months - 2022",
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
    thumbnailImage: "/projects/smu.png",
    targetPlatform: "Web",
    industrySectors: ["Education", "Data"],

    role: "Frontend Engineer",
    teamSize: "Solo",
    duration: "6 months - 2021",
    ownership:
      "Built automated academic data pipeline for publication and citation synchronization",

    isPrivate: false,
    externalLink: "https://smu.oneberryhub.com",

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
    thumbnailImage: "/projects/collegedao.png",
    targetPlatform: "Web",
    industrySectors: ["Web3", "Community"],

    role: "Frontend Engineer",
    teamSize: "Solo",
    duration: "5 months - 2022",
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
