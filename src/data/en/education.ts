import type { Education, Language, Certification } from '../../types';

export const educationItems: Education[] = [
  {
    degree: 'Technical Professional in Information Systems Development',
    institution: 'SISE Institute, Lima, Peru',
    period: 'August 2016 - August 2019'
  }
];

export const languageItems: Language[] = [
  { name: 'Spanish', level: 'Native' },
  { name: 'Italian', level: 'Advanced' },
  { name: 'English', level: 'Intermediate (Technical reading and writing)' }
];

export const certificationItems: Certification[] = [
  {
    name: 'Scrum Fundamentals Certified',
    issuer: 'SCRUMstudy',
    id: '736468',
    date: 'October 2019'
  }
];
