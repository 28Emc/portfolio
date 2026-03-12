import type { Experience } from '../../types';

export const experiences: Experience[] = [
    {
        company: "Freelance",
        role: "Sviluppatore Full Stack",
        period: "Novembre 2021 - Ottobre 2025",
        description: [
            "Sviluppo frontend e full stack per diversi settori (Fintech, Logistica, E-commerce).",
            "Implementazione di architetture a microservizi e API REST scalabili.",
            "Ottimizzazione dei flussi operativi e automazione dei deployment su GCP.",
            "Leadership tecnica nel consolidamento di sistemi legacy verso piattaforme moderne."
        ],
        technologies: ["Angular", "TypeScript", "Astro", "Spring Boot", "NestJS", "GCP", "Docker"]
    },
    {
        company: "Digital Factoring",
        role: "Programmatore Junior",
        period: "Agosto 2020 - Agosto 2021",
        description: [
            "Riprogettazione di moduli chiave per intranet/extranet finanziaria, migliorando l'usabilità del 30%.",
            "Integrazione di Angular con Laravel e/o Spring Boot per stabilizzare i processi di factoring elettronico.",
            "Documentazione dei flussi funzionali e collaborazione ai deployment in cicli Dev-Test-Prod."
        ],
        technologies: ["Angular", "TypeScript", "Laravel", "Spring Boot", "GCP"]
    },
    {
        company: "ITBCP",
        role: "Tirocinante Programmatore",
        period: "Settembre 2019 - Dicembre 2019",
        description: [
            "Supporto nella raccolta e analisi dei requisiti.",
            "Implementazione e documentazione di soluzioni tecnologiche interne."
        ],
        technologies: ["HTML/CSS", "JavaScript", "SQL Server", "ASP.NET"]
    }
];
