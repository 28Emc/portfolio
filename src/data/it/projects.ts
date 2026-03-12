import type { Project } from '../../types';

export const projects: Project[] = [
    {
        title: "Pymera AIO",
        description: "Piattaforma di gestione chiamate e campagne SMS basata su microservizi.",
        problem: "Sistemi legacy decentralizzati (dialer e SMS) con elevato carico operativo.",
        solution: "Consolidamento in una piattaforma moderna con architettura a microservizi e distribuzione modulare.",
        result: "Riduzione del 60% del carico operativo e tecnico, garantendo scalabilità totale.",
        technologies: ["Angular", "TypeScript", "Express", "NestJS", "NodeJS", "Laravel", "GCP", "Docker"],
        picImg: "Pymera_AIO.png",
        isFeatured: true
    },
    {
        title: "Kapital Factoring",
        description: "Sistema web per la gestione di operazioni di factoring finanziario.",
        problem: "Necessità di un MVP robusto per automatizzare autenticazione e validazione dei documenti.",
        solution: "Sviluppo frontend in Angular con integrazione sicura ad API REST in Spring Boot e workflow CI/CD.",
        result: "Riduzione del 40% dei tempi operativi e flusso stabile di test funzionali (Staging/Prod).",
        technologies: ["Angular", "TypeScript", "Spring Boot", "GCP"],
        picImg: "Kapital_Factoring.png",
        isFeatured: true
    },
    {
        title: "Vesper",
        description: "Sistema web per la gestione di investitori e contratti finanziari.",
        problem: "Necessità di gestire portafogli investitori con simulazioni finanziarie complesse.",
        solution: "Frontend in Angular integrato con .NET, inclusi moduli di addendum e flussi legali.",
        result: "Elevata copertura funzionale e supporto per investitori privati e istituzionali in produzione.",
        technologies: ["Angular", "TypeScript", ".NET", "SQL Server"],
        picImg: "Vesper.png",
        isFeatured: true
    },
    {
        title: "Crokete",
        description: "E-commerce di alimenti per animali domestici con tre moduli indipendenti.",
        problem: "Sistema esistente con flussi di acquisto inefficienti e gestione manuale degli ordini.",
        solution: "Integrazione di Stripe, CMS in React.js e negozio in Next.js con distribuzione su GCP Cloud Run.",
        result: "Ottimizzazione totale del flusso di acquisto e riduzione degli errori funzionali tramite unit test.",
        technologies: ["NextJS", "React", "Express", "NodeJS", "MongoDB", "Stripe", "CPanel"],
        isFeatured: false
    },
    {
        title: "Igo Courier",
        description: "Sistema logistico web e pagina istituzionale ottimizzata.",
        problem: "Bassa velocità di caricamento e tracciamento spedizioni inefficiente.",
        solution: "Web istituzionale con Astro (SEO/Speed) e pannello amministrativo in Angular/Laravel.",
        result: "Caricamento inferiore a 1.5s e ottimizzazione della gestione di spedizioni, tariffe e utenti.",
        technologies: ["Astro", "Angular", "TypeScript", "CodeIgniter", "CPanel"],
        isFeatured: false
    },
    {
        title: "Digital Process - SMS",
        description: "Sistema di campagne SMS individuali e massive.",
        problem: "Dipendenza da piattaforme esterne per la gestione delle campagne SMS.",
        solution: "Sviluppo in-house con Angular e NodeJS (Express) con distribuzione critica su GCP.",
        result: "Indipendenza tecnologica totale e ottimizzazione dei tempi di consegna in ambienti critici.",
        technologies: ["Angular", "TypeScript", "Express", "NodeJS", "GCP"],
        isFeatured: false
    },
    {
        title: "Digital Process - Contact Center",
        description: "Sistema di contact center con dialer predittivo per il recupero crediti.",
        problem: "Necessità di gestione multicanale e coordinamento sicuro per oltre 30 utenti simultanei.",
        solution: "Sistema multicanale (SMS + chiamate) con Angular e API in Laravel/Express.js.",
        result: "Gestione efficiente del recupero crediti e accesso sicuro scalabile per grandi team.",
        technologies: ["Angular", "TypeScript", "Laravel", "Express", "NodeJS", "GCP"],
        isFeatured: false
    }
];
