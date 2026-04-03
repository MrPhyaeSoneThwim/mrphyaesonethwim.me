import { ExperienceItemType } from "@/components/ui/work-experience"
import { CodeXmlIcon } from "lucide-react"

export type TechItem = {
  label: string
  type?: "icon" | "image"
  icon?: string
  image?: string
}

export type Project = {
  name: string
  description: string
  achievements: string[]
  technologies: TechItem[]
  featured: boolean
  image: string
  link: string
}

export const projects: Project[] = [
  {
    name: "DayTwo Mobile App",
    description:
      "Fintech app helping SMEs track financial activity and build credit profiles through structured data and OCR.",
    achievements: [
      "Onboarded 800+ SMEs, generating $37K+ in revenue",
      "Owned end-to-end delivery from feature development through production release",
      "Improved data accuracy with OCR-based input processing",
      "Enabled real-time financial alerts via Firebase notifications",
      "Reduced API calls by ~40% using caching and request deduplication",
    ],
    technologies: [
      { label: "React Native", icon: "devicon-react-original colored" },
      { label: "Zustand", icon: "devicon-zustand-plain colored" },
      { label: "Nativewind", icon: "devicon-tailwindcss-original colored" },
      { label: "React Query", type: "image", image: "/tools/tanstack.png" },
      { label: "Expo", icon: "devicon-expo-original" },
      { label: "TypeScript", icon: "devicon-typescript-plain colored" },
      { label: "Firebase", icon: "devicon-firebase-plain colored" },
      { label: "EAS", icon: "devicon-expo-original" },
    ],
    featured: true,
    image: "/projects/daytwo.png",
    link: "https://play.google.com/store/search?q=daytwo&c=apps&hl=en",
  },
  {
    name: "JAVIS Smart Bubble Tea Mobile Ordering App",
    description:
      "Mobile ordering system for automated beverage machines with cashless payments and pre-ordering.",
    achievements: [
      "Handled 300+ daily orders per machine in production",
      "Reduced ordering time by ~50% with mobile pre-order UX",
      "Supported 100+ concurrent users during peak hours",
      "Integrated seamless payment flow using Stripe",
    ],
    technologies: [
      { label: "React Native", icon: "devicon-react-original colored" },
      { label: "Expo", icon: "devicon-expo-original colored" },
      { label: "Zustand", icon: "devicon-zustand-plain colored" },
      { label: "GraphQL", icon: "devicon-graphql-plain colored" },
      { label: "Firebase", icon: "devicon-firebase-plain colored" },
      { label: "Stripe", type: "image", image: "/tools/stripe.jpeg" },
      { label: "TypeScript", icon: "devicon-typescript-plain colored" },
      { label: "EAS", icon: "devicon-expo-original" },
    ],
    featured: true,
    image: "/projects/javis-mobile.png",
    link: "https://www.javisholdings.com/copy-of-emerging-digital-ecosystem-ne",
  },
  {
    name: "Surveillance Platform",
    description:
      "Real-time surveillance platform enabling large-scale camera monitoring with anomaly detection for government agencies.",
    achievements: [
      "Scaled to 4,000+ cameras across 3 government agencies",
      "Improved map rendering performance by ~50% using Redis",
      "Reduced production bugs by ~60% with automated testing",
      "Accelerated deployments by ~20% through CI/CD pipelines",
    ],
    technologies: [
      { label: "Next.js", icon: "devicon-nextjs-plain colored" },
      { label: "TypeScript", icon: "devicon-typescript-plain colored" },
      { label: "Redux", icon: "devicon-redux-plain colored" },
      { label: "NestJS", icon: "devicon-nestjs-plain colored" },
      { label: "TypeORM" },
      { label: "PostgreSQL", icon: "devicon-postgresql-plain colored" },
      { label: "Redis", icon: "devicon-redis-plain colored" },
      { label: "Docker", icon: "devicon-docker-plain colored" },
      { label: "Github Actions", icon: "devicon-github-original colored" },
    ],
    featured: true,
    image: "/projects/surveillance.png",
    link: "https://oneberry.com/anomaly-detection-ai/",
  },
  {
    name: "Digital Advisor Platform",
    description:
      "Enterprise financial advisory platform enabling insurers to digitise onboarding, compliance, and customer engagement workflows, replacing manual processes with fully digital journeys.",
    achievements: [
      "Digitised onboarding for 6,000+ AIA Singapore agents",
      "Replaced manual onboarding with end-to-end digital workflows",
      "Implemented KYC and compliance verification processes",
      "Enabled structured, real-time customer data collection",
    ],
    technologies: [
      { label: "React", icon: "devicon-react-original colored" },
      { label: "TypeScript", icon: "devicon-typescript-plain colored" },
      { label: "Zustand", icon: "devicon-zustand-plain colored" },
      { label: "GraphQL", icon: "devicon-graphql-plain colored" },
      {
        label: "AWS Amplify",
        icon: "devicon-amazonwebservices-plain-wordmark colored",
      },
      { label: "Bootstrap", icon: "devicon-bootstrap-plain colored" },
    ],
    featured: false,
    image: "/projects/digital-advisor.png",
    link: "https://www.hitachi.asia/fibu/product/digital-advisor-platform/",
  },
  {
    name: "CollegeDAO Web Platform",
    description:
      "Web3 platform connecting global university blockchain communities for collaboration and ecosystem growth.",
    achievements: [
      "Connected 100+ universities and 80+ blockchain communities",
      "Reached 14.6K+ users through campaigns and ecosystem growth",
      "Built scalable frontend with Zustand and GraphQL",
      "Delivered smooth UX with performance optimizations",
    ],
    technologies: [
      { label: "Next.js", icon: "devicon-nextjs-plain colored" },
      { label: "Zustand", icon: "devicon-zustand-plain colored" },
      { label: "GraphQL", icon: "devicon-graphql-plain colored" },
      { label: "Framer Motion", icon: "devicon-framermotion-original" },
      { label: "Tailwind CSS", icon: "devicon-tailwindcss-plain colored" },
      { label: "Docker", icon: "devicon-docker-plain colored" },
      { label: "Github Actions", icon: "devicon-github-original colored" },
    ],
    featured: false,
    image: "/projects/collegedao.png",
    link: "https://collegedao.io/",
  },
  {
    name: "ONenergy Monitoring Platform",
    description:
      "Real-time energy monitoring platform delivering per-appliance insights using continuous smart meter data.",
    achievements: [
      "Processed real-time data every 2 seconds across 119 appliances",
      "Deployed across 600 households with stable data pipelines",
      "Built automated dashboards for energy insights and reporting",
      "Eliminated manual tracking through continuous data ingestion",
    ],
    technologies: [
      { label: "React Native", icon: "devicon-react-original colored" },
      { label: "Expo", icon: "devicon-expo-original" },
      { label: "Zustand", icon: "devicon-zustand-plain colored" },
      { label: "Strapi", type: "image", image: "/tools/strapi.png" },
      { label: "GraphQL", icon: "devicon-graphql-plain colored" },
      { label: "Docker", icon: "devicon-docker-plain colored" },
      { label: "Github Actions", icon: "devicon-github-original colored" },
    ],
    featured: false,
    image: "/projects/onenergy.png",
    link: "https://play.google.com/store/apps/details?id=com.singaporetestlab.on_energy.twa&hl=en",
  },
  {
    name: "B2B Supplier Portal",
    description:
      "Enterprise supplier management system modernizing procurement, inventory, and data workflows.",
    achievements: [
      "Reduced data integration time by ~30% with redesigned APIs",
      "Migrated legacy system to scalable Next.js architecture",
      "Rebuilt procurement and inventory workflows end-to-end",
      "Improved system reliability and maintainability",
    ],
    technologies: [
      { label: "Next.js", icon: "devicon-nextjs-plain colored" },
      { label: "TypeScript", icon: "devicon-typescript-plain colored" },
      { label: "GraphQL", icon: "devicon-graphql-plain colored" },
      { label: "Redux", icon: "devicon-redux-plain colored" },
      { label: "Express", icon: "devicon-express-original" },
      { label: "MySQL", icon: "devicon-mysql-plain colored" },
      { label: "Strapi", type: "image", image: "/tools/strapi.png" },
      {
        label: "AWS EC2",
        icon: "devicon-amazonwebservices-plain-wordmark colored",
      },
      {
        label: "AWS S3",
        icon: "devicon-amazonwebservices-plain-wordmark colored",
      },
    ],
    featured: false,
    image: "/projects/b2b.png",
    link: "https://shengsiong.com.sg/",
  },
  {
    name: "SMU Research Portal",
    description:
      "Academic platform managing large-scale publications and citations through automated data pipelines.",
    achievements: [
      "Managed 14,798 publications and 363,613 citation records",
      "Built automated pipeline with zero manual intervention",
      "Implemented data integrity checks and missing record detection",
      "Enabled automated reporting and export workflows",
    ],
    technologies: [
      { label: "Next.js", icon: "devicon-nextjs-plain colored" },
      { label: "GraphQL", icon: "devicon-graphql-plain colored" },
      { label: "Zustand", icon: "devicon-zustand-plain colored" },
      { label: "Strapi", type: "image", image: "/tools/strapi.png" },
      { label: "Docker", icon: "devicon-docker-plain colored" },
      {
        label: "AWS S3",
        icon: "devicon-amazonwebservices-plain-wordmark colored",
      },
      { label: "Github Actions", icon: "devicon-github-original colored" },
    ],
    featured: false,
    image: "/projects/smu.png",
    link: "https://smu.oneberryhub.com",
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
          "Architected AI-powered web and mobile platform serving 800+ SMEs, generating $37K+ revenue",
          "Reduced API calls by ~40% using React Query caching and optimized state management",
          "Built reusable cross-platform UI components and integrated scalable REST APIs",
          "Owned mobile release pipeline with EAS and automated testing (Jest, Detox)",
          "Designed real-time notification system using Firebase for time-sensitive workflows",
        ],
        skills: [
          "React",
          "Next.js",
          "React Native",
          "TypeScript",
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
          "Built real-time surveillance platform supporting 4,000+ cameras across 3 government agencies",
          "Reduced query latency by ~60% using Redis indexing for geospatial data",
          "Improved deployment speed by ~20% with Docker and GitHub Actions CI/CD",
          "Reduced production defects by ~60% by introducing Jest and Cypress testing",
          "Led 3 teams across 4 projects, driving code quality and mentoring",
        ],
        skills: [
          "Next.js",
          "TypeScript",
          "Node.js",
          "NestJS",
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
          "Migrated legacy supplier platform to Next.js and TypeScript, reducing integration time by 30%",
          "Built onboarding platform for 6,000+ AIA agents with KYC and compliance workflows",
          "Designed scalable APIs and data pipelines for complex business systems",
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
          "AWS",
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
          "Built Web3 community platform supporting 100+ active communities",
          "Developed REST APIs with Node.js and MongoDB for scalable backend services",
          "Implemented wallet-based and social authentication with secure access control",
          "Delivered responsive frontend with React, Redux, and Tailwind CSS",
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
          "Integrated APIs and collaborated with design to deliver user-friendly features",
        ],
        skills: ["React", "Tailwind CSS", "JavaScript", "REST API"],
      },
    ],
    isCurrentEmployer: false,
  },
]
