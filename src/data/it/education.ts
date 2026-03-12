import type { Education, Language, Certification } from '../../types';

export const educationItems: Education[] = [
  {
    degree: 'Sviluppatore di Sistemi Informativi (Titolo Professionale Tecnico)',
    institution: 'Istituto SISE, Lima, Perù',
    period: 'Agosto 2016 - Agosto 2019'
  }
];

export const languageItems: Language[] = [
  { name: 'Spagnolo', level: 'Madrelingua' },
  { name: 'Italiano', level: 'Avanzato' },
  { name: 'Inglese', level: 'Intermedio (Lettura e scrittura tecnica)' }
];

export const certificationItems: Certification[] = [
  {
    name: 'Scrum Fundamentals Certified',
    issuer: 'SCRUMstudy',
    id: '736468',
    date: 'Ottobre 2019'
  }
];
