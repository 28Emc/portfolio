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

export interface PersonalProject {
  title: string;
  description: string;
  status: 'mvp' | 'development' | 'idea';
  architectureHighlights: string[];
  technologies: string[];
  picImg?: string;
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

export interface UIStrings {
  hero: {
    expBtn: string;
    projBtn: string;
    cvBtn: string;
    statusLabel: string;
    cvAria: string;
    expAria: string;
    projAria: string;
  };
  sections: {
    impact: { tag: string; title: string };
    exp: { tag: string; title: string; desc: string };
    proj: { tag: string; title: string };
    personalProj: { tag: string; title: string };
    stack: { tag: string; title: string };
    edu: { 
      tag: string; 
      title: string; 
      eduHeader: string; 
      langHeader: string; 
      certHeader: string; 
    };
    contact: { tag: string; title: string; desc: string };
  };
  common: {
    problem: string;
    solution: string;
    result: string;
    techs: string;
    viewPreview: string;
    close: string;
    otherProjects: string;
    madeWith: string;
    and: string;
    skipLink: string;
  }
}
