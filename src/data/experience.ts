export interface Experience {
    company: string;
    role: string;
    period: string;
    description: string[];
    technologies: string[];
}

export const experiences: Experience[] = [
    {
        company: "Freelance",
        role: "Desarrollador Full Stack",
        period: "Noviembre 2021 - Octubre 2025",
        description: [
            "Desarrollo frontend y full stack para diversos sectores (Fintech, Logística, E-commerce).",
            "Implementación de arquitecturas de microservicios y APIs REST escalables.",
            "Optimización de flujos operativos y automatización de despliegues en GCP.",
            "Liderazgo técnico en la consolidación de sistemas legacy a plataformas modernas."
        ],
        technologies: ["Angular", "TypeScript", "Astro", "Spring Boot", "NestJS", "GCP", "Docker"]
    },
    {
        company: "Digital Factoring",
        role: "Programador Junior",
        period: "Agosto 2020 - Agosto 2021",
        description: [
            "Rediseño de módulos clave de intranet/extranet financiera, mejorando un 30% la usabilidad.",
            "Integración de Angular y Spring Boot para estabilizar procesos de factoring electrónico.",
            "Documentación de flujos funcionales y colaboración en despliegues bajo ciclos Dev-Test-Prod."
        ],
        technologies: ["Angular", "TypeScript", "Spring Boot", "GCP"]
    },
    {
        company: "ITBCP",
        role: "Practicante Programador",
        period: "Septiembre 2019 - Diciembre 2019",
        description: [
            "Apoyo en el levantamiento de requerimientos y prototipos para automatización de procesos.",
            "Implementación y documentación de soluciones tecnológicas internas.",
            "Mejora de la trazabilidad y soporte técnico mediante herramientas de gestión."
        ],
        technologies: ["HTML/CSS", "JavaScript"]
    }
];
