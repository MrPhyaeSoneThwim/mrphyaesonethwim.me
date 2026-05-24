// Server-safe project metadata — no React components, safe to import in Server Components.
export const PROJECT_META = [
  {
    id: "daytwo-mobile",
    name: "DayTwo Mobile App",
    summary:
      "Mobile app for SMEs that transforms daily transactions into structured financial records, delivering real-time cash visibility, actionable insights, and a business support chat assistant for informed decision-making.",
  },
  {
    id: "javis-ordering",
    name: "JAVIS Mobile Ordering App",
    summary:
      "Mobile ordering app for beverage machines that enables users to discover nearby locations, customize drinks, and place instant pre-orders through a fast, real-time, location-aware ordering experience.",
  },
  {
    id: "surveillance-platform",
    name: "Surveillance Platform",
    summary:
      "Real-time monitoring platform that unifies thousands of live camera feeds into a single operational system for continuous surveillance and incident tracking across multiple government agencies.",
  },
  {
    id: "digital-advisor",
    name: "Digital Advisor Platform",
    summary:
      "Digital platform connecting financial advisors and customers for collaborative financial planning through interactive life simulations, improving understanding of financial decisions and outcomes.",
  },
  {
    id: "b2b-portal",
    name: "B2B Supplier Portal",
    summary:
      "Enterprise procurement platform that replaces legacy workflows with a unified data-driven system, eliminating data inconsistencies and improving operational efficiency across large-scale supply chain processes.",
  },
  {
    id: "onenergy-mobile",
    name: "ONenergy Mobile",
    summary:
      "Mobile app that delivers real-time visibility of household electricity usage at appliance level, enabling continuous monitoring of energy consumption through live IoT updates.",
  },
  {
    id: "onenergy-web",
    name: "ONenergy Web Platform",
    summary:
      "Web platform that processes real-time IoT energy data and visualizes household electricity usage across appliances through a unified monitoring dashboard with continuous live updates.",
  },
  {
    id: "smu-portal",
    name: "SMU Research Portal",
    summary:
      "Academic data platform that automates ingestion, validation, and synchronization of research publications and citations, keeping institutional records accurate and consistently up to date.",
  },
  {
    id: "collegedao",
    name: "CollegeDAO Platform",
    summary:
      "Web3 platform enabling discovery, collaboration, and engagement across global university blockchain communities through a decentralized networking ecosystem.",
  },
] as const

export type ProjectId = (typeof PROJECT_META)[number]["id"]
