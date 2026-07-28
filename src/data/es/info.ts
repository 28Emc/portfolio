import type { ProfileInfo, SocialLink } from '../../types';

export const profileInfo: ProfileInfo = {
  name: "Edinson Medina Chinga",
  title: "Backend Developer (Java & Spring Boot) | Full Stack Engineer",
  bio: "Más de 5 años diseñando APIs REST y sistemas escalables con **Java, Spring Boot** y arquitecturas modernas (Clean Architecture, DDD, SOLID) en los sectores financiero, logístico y cobranzas. Experiencia Full Stack con Angular y React, desplegando en GCP con prácticas de CI/CD.",
  availability: "Disponible para nuevos proyectos",
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
    label: "Teléfono"
  }
];

export const navItems = [
  { label: 'Inicio', href: '#hero' },
  { label: 'Impacto', href: '#impacto' },
  { label: 'Experiencia', href: '#experiencia' },
  { label: 'Proyectos', href: '#proyectos' },
  { label: 'Personales', href: '#personal-proyectos' },
  { label: 'Stack', href: '#stack' },
  { label: 'Educación', href: '#educacion' },
  { label: 'Contacto', href: '#contacto' },
];
