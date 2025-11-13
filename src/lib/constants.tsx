import React from 'react';
// Use relative path to fix alias issues
import { CompanyInfo, Capability, Highlight, SocialLinks } from '../types'; 
// Import the icons we'll be using
import { 
  BrainCircuit, 
  Signal, 
  Crosshair, 
  Package, 
  Award, 
  Zap, 
  Shield 
} from 'lucide-react';

export const COMPANY_INFO: CompanyInfo = {
  name: "VyomGarud",
  tagline: "Precision Engineering. Advanced Autonomy. Unmatched Reliability.",
  description: "Leading the future of unmanned aerial systems with military-grade precision and cutting-edge autonomous technology designed for critical defense operations.",
  email: "contact@vyomgarud.com",
  phone: "+91 8881444693",
};

// --- Updated CAPABILITIES with Lucide icons ---
export const CAPABILITIES: Capability[] = [
  {
    id: "ai",
    title: "Autonomous Flight Systems",
    description: "AI-powered navigation with real-time obstacle avoidance and mission planning capabilities for complex operational environments.",
    icon: <BrainCircuit className="w-16 h-16" />, 
  },
  {
    id: "surveillance",
    title: "Surveillance & Reconnaissance",
    description: "High-resolution imaging and thermal detection systems for critical intelligence gathering and tactical operations.",
    icon: <Signal className="w-16 h-16" />, 
  },
  {
    id: "defense",
    title: "Tactical Defense Solutions",
    description: "Military-grade UAV systems engineered for strategic defense, border security, and rapid response scenarios.",
    icon: <Crosshair className="w-16 h-16" />, 
  },
  {
    id: "long-range",
    title: "Long-Range Operations",
    description: "Extended flight duration with advanced power management and secure communication systems for remote missions.",
    icon: <Package className="w-16 h-16" />, 
  },
];

// --- Updated HIGHLIGHTS with Lucide icons ---
export const HIGHLIGHTS: Highlight[] = [
  {
    id: "reliability",
    title: "Military-Grade Reliability",
    description: "Tested under extreme conditions for mission-critical operations",
    icon: <Award className="w-8 h-8 text-orange" />, 
  },
  {
    id: "autonomy",
    title: "Advanced Autonomy",
    description: "AI-driven systems with minimal human intervention required",
    icon: <Zap className="w-8 h-8 text-orange" />,
  },
  {
    id: "precision",
    title: "Precision Engineering",
    description: "Micron-level accuracy in every component and system",
    icon: <Shield className="w-8 h-8 text-orange" />, 
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