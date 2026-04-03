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
      "Mobile fintech platform enabling SMEs to track financial activity, process structured data, and build credit profiles at scale.",
    achievements: [
      "Onboarded 800+ SMEs, generating $37K+ in revenue",
      "Owned end-to-end delivery from architecture through production release",
      "Reduced API calls by ~40% using caching and request deduplication",
      "Enabled real-time financial alerts via Firebase notifications",
      "Improved data accuracy through OCR-based input processing",
    ],
    technologies: [
      { label: "React Native", icon: "devicon-react-original colored" },
      { label: "TypeScript", icon: "devicon-typescript-plain colored" },
      { label: "Zustand", icon: "devicon-zustand-plain colored" },
      { label: "React Query", type: "image", image: "/tools/tanstack.png" },
      { label: "NativeWind", icon: "devicon-tailwindcss-original colored" },
      { label: "Expo", icon: "devicon-expo-original" },
      { label: "Firebase", icon: "devicon-firebase-plain colored" },
      { label: "EAS", icon: "devicon-expo-original" },
    ],
    featured: true,
    image: "/projects/daytwo.png",
    link: "https://play.google.com/store/search?q=daytwo&c=apps&hl=en",
  },
  {
    name: "JAVIS Mobile Ordering App",
    description:
      "Mobile ordering system for automated beverage machines, supporting real-time ordering, payments, and high-concurrency usage.",
    achievements: [
      "Handled 300+ daily orders per machine in production",
      "Reduced ordering time by ~50% through optimized pre-order UX",
      "Supported 100+ concurrent users during peak usage",
      "Integrated secure payment flows using Stripe",
    ],
    technologies: [
      { label: "React Native", icon: "devicon-react-original colored" },
      { label: "Javascript", icon: "devicon-javascript-plain colored" },
      { label: "Expo", icon: "devicon-expo-original colored" },
      { label: "Zustand", icon: "devicon-zustand-plain colored" },
      { label: "GraphQL", icon: "devicon-graphql-plain colored" },
      { label: "Firebase", icon: "devicon-firebase-plain colored" },
      { label: "Stripe", type: "image", image: "/tools/stripe.jpeg" },
      { label: "EAS", icon: "devicon-expo-original" },
    ],
    featured: true,
    image: "/projects/javis-mobile.png",
    link: "https://www.javisholdings.com/copy-of-emerging-digital-ecosystem-ne",
  },
  {
    name: "Surveillance Platform",
    description:
      "Real-time surveillance system designed for large-scale camera monitoring with anomaly detection and high-availability requirements.",
    achievements: [
      "Scaled to 4,000+ cameras across 3 government agencies",
      "Led architecture and delivery of a real-time monitoring system with strict uptime SLAs",
      "Improved map rendering performance by ~50% using Redis indexing",
      "Reduced production defects by ~60% through automated testing (Jest, Cypress)",
      "Accelerated deployments by ~20% via CI/CD pipelines with Docker and GitHub Actions",
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
      { label: "GitHub Actions", icon: "devicon-github-original colored" },
    ],
    featured: true,
    image: "/projects/surveillance.png",
    link: "https://oneberry.com/anomaly-detection-ai/",
  },
  {
    name: "Digital Advisor Platform",
    description:
      "Enterprise financial advisory platform enabling personalised planning, onboarding, and compliance through interactive, data-driven workflows.",
    achievements: [
      "Digitised onboarding for 6,000+ AIA Singapore agents",
      "Replaced manual workflows with end-to-end digital onboarding",
      "Implemented KYC and compliance verification systems",
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
    name: "CollegeDAO Platform",
    description:
      "Web3 platform connecting university blockchain communities, enabling collaboration, growth, and decentralized engagement.",
    achievements: [
      "Connected 100+ universities and 80+ blockchain communities",
      "Reached 14.6K+ users through ecosystem growth initiatives",
      "Built scalable frontend architecture using Zustand and GraphQL",
      "Improved performance through optimized rendering and state management",
    ],
    technologies: [
      { label: "Next.js", icon: "devicon-nextjs-plain colored" },
      { label: "TypeScript", icon: "devicon-typescript-plain colored" },
      { label: "Zustand", icon: "devicon-zustand-plain colored" },
      { label: "GraphQL", icon: "devicon-graphql-plain colored" },
      { label: "Framer Motion", icon: "devicon-framermotion-original" },
      { label: "Tailwind CSS", icon: "devicon-tailwindcss-plain colored" },
      { label: "Docker", icon: "devicon-docker-plain colored" },
      { label: "GitHub Actions", icon: "devicon-github-original colored" },
    ],
    featured: false,
    image: "/projects/collegedao.png",
    link: "https://collegedao.io/",
  },
  {
    name: "ONenergy Monitoring Platform",
    description:
      "Real-time energy monitoring platform processing high-frequency smart meter data to deliver per-appliance insights and reporting.",
    achievements: [
      "Processed real-time data every 2 seconds across 119 appliances",
      "Deployed across 600 households with stable data pipelines",
      "Built automated dashboards for energy insights and reporting",
      "Eliminated manual tracking through continuous data ingestion",
    ],
    technologies: [
      { label: "Next.js", icon: "devicon-nextjs-plain colored" },
      { label: "Javascript", icon: "devicon-javascript-plain colored" },
      { label: "Zustand", icon: "devicon-zustand-plain colored" },
      { label: "Strapi", type: "image", image: "/tools/strapi.png" },
      { label: "GraphQL", icon: "devicon-graphql-plain colored" },
      { label: "Docker", icon: "devicon-docker-plain colored" },
      { label: "GitHub Actions", icon: "devicon-github-original colored" },
    ],
    featured: false,
    image: "/projects/onenergy.png",
    link: "https://play.google.com/store/apps/details?id=com.singaporetestlab.on_energy.twa&hl=en",
  },
  {
    name: "B2B Supplier Portal",
    description:
      "Enterprise supplier management platform modernizing procurement, inventory, and data workflows through scalable architecture.",
    achievements: [
      "Reduced data integration time by ~30% through redesigned API architecture",
      "Migrated legacy system to a scalable Next.js and TypeScript stack",
      "Rebuilt procurement and inventory workflows end-to-end",
      "Improved system reliability through standardized API design",
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
      "Academic data platform managing large-scale publications and citations through automated ingestion pipelines and integrity checks.",
    achievements: [
      "Managed 14,798 publications and 363,613 citation records",
      "Built automated data pipelines with zero manual intervention",
      "Implemented integrity checks and missing record detection",
      "Enabled automated reporting and export workflows",
    ],
    technologies: [
      { label: "Next.js", icon: "devicon-nextjs-plain colored" },
      { label: "Javascript", icon: "devicon-javascript-plain colored" },
      { label: "GraphQL", icon: "devicon-graphql-plain colored" },
      { label: "Zustand", icon: "devicon-zustand-plain colored" },
      { label: "Strapi", type: "image", image: "/tools/strapi.png" },
      { label: "Docker", icon: "devicon-docker-plain colored" },
      {
        label: "AWS S3",
        icon: "devicon-amazonwebservices-plain-wordmark colored",
      },
      { label: "GitHub Actions", icon: "devicon-github-original colored" },
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
