import type { ProfileInfo, SocialLink } from '../../types';

export const profileInfo: ProfileInfo = {
  name: "Edinson Medina Chinga",
  title: "Full Stack Developer",
  bio: "Over 4 years creating scalable solutions in the financial, logistics, and debt collection sectors. Specialized in modern architectures with **Angular, NestJS, Spring Boot, and GCP**, optimizing operational flows and web performance.",
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
  { label: 'Stack', href: '#stack' },
  { label: 'Education', href: '#educacion' },
  { label: 'Contact', href: '#contacto' },
];
