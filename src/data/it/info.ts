import type { ProfileInfo, SocialLink } from '../../types';

export const profileInfo: ProfileInfo = {
  name: "Edinson Medina Chinga",
  title: "Backend Developer (Java & Spring Boot) | Full Stack Engineer",
  bio: "Oltre 5 anni dedicati alla progettazione di API REST e sistemi scalabili con **Java, Spring Boot** e architetture moderne (Clean Architecture, DDD, SOLID) nei settori finanziario, logistico e del recupero crediti. Esperienza Full Stack con Angular, React e **Astro**; sviluppo backend con **NestJS** ed Express; con deployment su GCP e pratiche CI/CD.",
  availability: "Disponibile per nuovi progetti",
  cvFile: "CV_Edinson_Medina_Chinga_ATS.pdf"
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
  { label: 'Personali', href: '#personal-proyectos' },
  { label: 'Stack', href: '#stack' },
  { label: 'Formazione', href: '#educacion' },
  { label: 'Contatti', href: '#contacto' },
];
