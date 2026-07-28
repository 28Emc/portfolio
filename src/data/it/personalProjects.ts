import type { PersonalProject } from '../../types';

export const personalProjects: PersonalProject[] = [
    {
        title: "SGCC",
        description: "Piattaforma di gestione di incassi e consumi condivisi. MVP in sviluppo focalizzato sull'automazione della fatturazione e del riparto delle utenze (acqua, luce, gas) tra inquilini.",
        status: "mvp",
        architectureHighlights: [
            "Backend in Java e Spring Boot con Clean Architecture (livelli Domain/Application/Infrastructure/Presentation)",
            "Autenticazione tramite API Key e JWT con documentazione OpenAPI/Swagger",
            "Audit completo delle operazioni finanziarie",
            "Frontend in Angular con Standalone Components, Angular Material e Tailwind CSS"
        ],
        technologies: ["Java 21", "Spring Boot", "Angular", "TypeScript", "Tailwind CSS", "PostgreSQL", "Docker"],
        picImg: "SGCC.png"
    },
    {
        title: "TransitOne Perú",
        description: "Piattaforma nazionale unificata per il trasporto pubblico. MVP in sviluppo con architettura a microservizi per identità, portafoglio digitale e gestione dei viaggi.",
        status: "mvp",
        architectureHighlights: [
            "Architettura a microservizi modulari con NestJS, PostgreSQL e TypeScript",
            "Domain-Driven Design e Clean Architecture per i domini di identità, portafoglio digitale e viaggi",
            "Forte consistenza transazionale per operazioni finanziarie su scala nazionale",
            "Comunicazione orientata agli eventi tra servizi"
        ],
        technologies: ["NestJS", "TypeScript", "PostgreSQL", "Docker", "Event-Driven Architecture"],
        picImg: "TransitOne.png"
    },
    {
        title: "MealMind",
        description: "Piattaforma intelligente per la pianificazione dei pasti. MVP in sviluppo con motore di generazione automatica di menu settimanali e liste della spesa consolidate.",
        status: "mvp",
        architectureHighlights: [
            "Backend modulare in NestJS e PostgreSQL con principi di Clean Architecture",
            "Motore di generazione automatica di menu settimanali personalizzati",
            "Generazione di liste della spesa consolidate basate sui menu",
            "API documentata con Swagger, priorità a estensibilità e separazione delle responsabilità"
        ],
        technologies: ["NestJS", "TypeScript", "PostgreSQL", "Swagger", "Docker"],
        picImg: "MealMind.png"
    }
];
