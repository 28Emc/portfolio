import type { ProfileInfo, SocialLink } from '../../types';

export const profileInfo: ProfileInfo = {
  name: "Edinson Medina Chinga",
  title: "Sviluppatore Full Stack",
  bio: "Oltre 4 anni dedicati alla creazione di soluzioni scalabili nei settori finanziario, logistico e del recupero crediti. Specializzato in architetture moderne con **Angular, NestJS, Spring Boot e GCP**, ottimizzando i flussi operativi e le prestazioni web.",
  availability: "Disponibile per nuovi progetti",
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
    label: "Telefono"
  }
];

export const navItems = [
  { label: 'Inizio', href: '#hero' },
  { label: 'Impatto', href: '#impacto' },
  { label: 'Esperienza', href: '#experiencia' },
  { label: 'Progetti', href: '#proyectos' },
  { label: 'Stack', href: '#stack' },
  { label: 'Formazione', href: '#educacion' },
  { label: 'Contatti', href: '#contacto' },
];
