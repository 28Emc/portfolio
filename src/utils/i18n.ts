import * as esInfo from '../data/es/info';
import * as enInfo from '../data/en/info';
import * as itInfo from '../data/it/info';
import * as esExp from '../data/es/experience';
import * as enExp from '../data/en/experience';
import * as itExp from '../data/it/experience';
import * as esEdu from '../data/es/education';
import * as enEdu from '../data/en/education';
import * as itEdu from '../data/it/education';
import * as esProj from '../data/es/projects';
import * as enProj from '../data/en/projects';
import * as itProj from '../data/it/projects';
import * as esMetrics from '../data/es/metrics';
import * as enMetrics from '../data/en/metrics';
import * as itMetrics from '../data/it/metrics';
import * as esStack from '../data/es/stack';
import * as enStack from '../data/en/stack';
import * as itStack from '../data/it/stack';
import { ui as esUI } from '../data/es/ui';
import { ui as enUI } from '../data/en/ui';
import { ui as itUI } from '../data/it/ui';
import type { Experience, Metric, Project, StackCategory, Education, Language, Certification, ProfileInfo, SocialLink, UIStrings } from '../types';

interface I18NData {
  info: { profileInfo: ProfileInfo; socialLinks: SocialLink[]; navItems: { label: string; href: string }[] };
  experience: { experiences: Experience[] };
  education: { educationItems: Education[]; languageItems: Language[]; certificationItems: Certification[] };
  projects: { projects: Project[] };
  metrics: { metrics: Metric[] };
  stack: { stack: StackCategory[] };
  ui: UIStrings;
}

const DATA_MAP: Record<string, I18NData> = {
  es: {
    info: esInfo,
    experience: esExp,
    education: esEdu,
    projects: esProj,
    metrics: esMetrics,
    stack: esStack,
    ui: esUI,
  },
  en: {
    info: enInfo,
    experience: enExp,
    education: enEdu,
    projects: enProj,
    metrics: enMetrics,
    stack: enStack,
    ui: enUI,
  },
  it: {
    info: itInfo,
    experience: itExp,
    education: itEdu,
    projects: itProj,
    metrics: itMetrics,
    stack: itStack,
    ui: itUI,
  }
};

export function getI18NData(lang: string = 'es'): I18NData {
  return DATA_MAP[lang] || DATA_MAP.es;
}

export function getAvailableLocales() {
  return Object.keys(DATA_MAP);
}
