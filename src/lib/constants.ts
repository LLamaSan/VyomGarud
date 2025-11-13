import { CompanyInfo, Capability, Highlight, SocialLinks } from "@/types";

export const COMPANY_INFO: CompanyInfo = {
  name: "VyomGarud",
  tagline: "Precision Engineering. Advanced Autonomy. Unmatched Reliability.",
  description: "Leading the future of unmanned aerial systems with military-grade precision and cutting-edge autonomous technology designed for critical defense operations.",
  email: "contact@vyomgarud.com",
  phone: "+91 8881444693",
};

export const CAPABILITIES: Capability[] = [
  {
    id: 1,
    title: "Autonomous Flight Systems",
    description: "AI-powered navigation with real-time obstacle avoidance and mission planning capabilities for complex operational environments.",
    icon: "🛸",
  },
  {
    id: 2,
    title: "Surveillance & Reconnaissance",
    description: "High-resolution imaging and thermal detection systems for critical intelligence gathering and tactical operations.",
    icon: "📡",
  },
  {
    id: 3,
    title: "Tactical Defense Solutions",
    description: "Military-grade UAV systems engineered for strategic defense, border security, and rapid response scenarios.",
    icon: "🎯",
  },
  {
    id: 4,
    title: "Long-Range Operations",
    description: "Extended flight duration with advanced power management and secure communication systems for remote missions.",
    icon: "🚀",
  },
];

export const HIGHLIGHTS: Highlight[] = [
  {
    id: 1,
    title: "Military-Grade Reliability",
    description: "Tested under extreme conditions for mission-critical operations",
  },
  {
    id: 2,
    title: "Advanced Autonomy",
    description: "AI-driven systems with minimal human intervention required",
  },
  {
    id: 3,
    title: "Precision Engineering",
    description: "Micron-level accuracy in every component and system",
  },
];

export const SOCIAL_LINKS: SocialLinks = {
  linkedin: "https://linkedin.com/company/vyomgarud",
  twitter: "https://twitter.com/vyomgarud",
  github: "https://github.com/vyomgarud",
};

export const NAV_LINKS = [
  { name: "Home", href: "#hero" },
  { name: "About", href: "#about" },
  { name: "Capabilities", href: "#capabilities" },
  { name: "Highlights", href: "#highlights" },
  { name: "Contact", href: "#contact" },
];