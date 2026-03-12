import type { Education, Language, Certification } from '../types';

export const educationItems: Education[] = [
  {
    degree: 'Profesional Técnico en Desarrollo de Sistemas de la Información',
    institution: 'Instituto SISE, Lima, Perú',
    period: 'Agosto 2016 - Agosto 2019'
  }
];

export const languageItems: Language[] = [
  { name: 'Español', level: 'Nativo' },
  { name: 'Italiano', level: 'Avanzado' },
  { name: 'Inglés', level: 'Intermedio (Lectura y escritura técnica)' }
];

export const certificationItems: Certification[] = [
  {
    name: 'Scrum Fundamentals Certified',
    issuer: 'SCRUMstudy',
    id: '736468',
    date: 'Octubre 2019'
  }
];
