import React from 'react'; 

export interface Capability {
  id: number | string; 
  title: string;
  description: string;
  icon: React.ReactNode; 
}

export interface Highlight {
  id: number | string; 
  title: string;
  description: string;
  icon: React.ReactNode; 
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