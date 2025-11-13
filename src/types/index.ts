export interface Capability {
  id: number;
  title: string;
  description: string;
  icon: string;
}

export interface Highlight {
  id: number;
  title: string;
  description: string;
}

export interface CompanyInfo {
  name: string;
  tagline: string;
  description: string;
  email: string;
  phone: string;
}

export interface SocialLinks {
  linkedin: string;
  twitter: string;
  github: string;
}

export interface ContactFormData {
  name: string;
  email: string;
  company: string;
  message: string;
}