import type { ProfileInfo, SocialLink } from '../../types';

export const profileInfo: ProfileInfo = {
  name: "Edinson Medina Chinga",
  title: "Backend Developer (Java & Spring Boot) | Full Stack Engineer",
  bio: "Over 5 years designing scalable REST APIs and systems with **Java, Spring Boot** and modern architectures (Clean Architecture, DDD, SOLID) in the financial, logistics, and debt collection sectors. Full Stack experience with Angular, React and **Astro**; backend development with **NestJS** and Express; deploying on GCP with CI/CD practices.",
  availability: "Available for new projects",
  cvFile: "CV_EdinsonMedinaChinga_2026.pdf"
};

export const socialLinks: SocialLink[] = [
  {
    href: "mailto:edmech25@gmail.com",
    platform: "email",
    label: "Email"
  },
  {
    href: "https://linkedin.com/in/edinson-medina-chinga",
    platform: "linkedin",
    label: "LinkedIn"
  },
  {
    href: "https://github.com/28Emc",
    platform: "github",
    label: "GitHub"
  },
  {
    href: "tel:+51902564211",
    platform: "phone",
    label: "Phone"
  }
];

export const navItems = [
  { label: 'Home', href: '#hero' },
  { label: 'Impact', href: '#impacto' },
  { label: 'Experience', href: '#experiencia' },
  { label: 'Projects', href: '#proyectos' },
  { label: 'Personal', href: '#personal-proyectos' },
  { label: 'Stack', href: '#stack' },
  { label: 'Education', href: '#educacion' },
  { label: 'Contact', href: '#contacto' },
];
