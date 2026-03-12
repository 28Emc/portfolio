export interface Experience {
  company: string;
  role: string;
  period: string;
  description: string[];
  technologies: string[];
}

export interface Metric {
  value: string;
  label: string;
}

export interface Project {
  title: string;
  description: string;
  problem: string;
  solution: string;
  result: string;
  technologies: string[];
  picImg?: string;
  isFeatured?: boolean;
}

export interface StackCategory {
  category: string;
  skills: string[];
}

export interface Education {
  degree: string;
  institution: string;
  period: string;
}

export interface Language {
  name: string;
  level: string;
}

export interface Certification {
  name: string;
  issuer: string;
  id: string;
  date: string;
}

export interface ProfileInfo {
  name: string;
  title: string;
  bio: string;
  availability: string;
  cvFile: string;
}

export interface SocialLink {
  href: string;
  platform: 'linkedin' | 'github' | 'phone' | 'email';
  label: string;
}
