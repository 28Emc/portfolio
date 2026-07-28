import type { Experience } from '../../types';

export const experiences: Experience[] = [
    {
        company: "Freelance",
        role: "Sviluppatore Full Stack",
        period: "Novembre 2021 - Dicembre 2025",
        description: [
            "Sviluppo end-to-end di sistemi web per società di factoring, logistica, e-commerce e contact center.",
            "Implementazione di architetture a microservizi e API REST scalabili con Java (Spring Boot), Node.js (NestJS/Express) e PHP (Laravel).",
            "Frontend modulari con Angular (Standalone Components), React e Astro, con priorità a performance e SEO.",
            "Configurazione di pipeline CI/CD e deployment su Google Cloud Platform (Cloud Run, VM, Bucket)."
        ],
        technologies: ["Angular", "TypeScript", "Java", "Spring Boot", "NestJS", "Express", "Laravel", "React", "Astro", "GCP", "Docker"]
    },
    {
        company: "Digital Factoring",
        role: "Programmatore Junior",
        period: "Agosto 2020 - Agosto 2021",
        description: [
            "Riprogettazione di moduli chiave per intranet/extranet finanziaria, contribuendo a un miglioramento del 30% dell'usabilità secondo feedback interno.",
            "Integrazione di Angular e Spring Boot per stabilizzare i processi di factoring elettronico.",
            "Documentazione dei flussi funzionali e collaborazione ai deployment su GCP in cicli Dev-Test-Prod."
        ],
        technologies: ["Angular", "TypeScript", "Spring Boot", "Laravel", "GCP"]
    },
    {
        company: "ITBCP",
        role: "Tirocinante Programmatore",
        period: "Settembre 2019 - Dicembre 2019",
        description: [
            "Supporto nella raccolta requisiti e prototipazione per l'automazione di processi interni.",
            "Implementazione, documentazione e tracciabilità di soluzioni tecnologiche."
        ],
        technologies: ["HTML/CSS", "JavaScript", "SQL Server", "ASP.NET"]
    }
];
