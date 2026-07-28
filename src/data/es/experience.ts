import type { Experience } from '../../types';

export const experiences: Experience[] = [
    {
        company: "Freelance",
        role: "Desarrollador Full Stack",
        period: "Noviembre 2021 - Diciembre 2025",
        description: [
            "Desarrollo end-to-end de sistemas web para empresas de factoring, logística, e-commerce y contact center.",
            "Implementación de arquitecturas de microservicios y APIs REST escalables con Java (Spring Boot), Node.js (NestJS/Express) y PHP (Laravel).",
            "Construcción de frontends modulares con Angular (Standalone Components), React y Astro, priorizando rendimiento y SEO.",
            "Configuración de pipelines CI/CD y despliegues en Google Cloud Platform (Cloud Run, VMs, Buckets)."
        ],
        technologies: ["Angular", "TypeScript", "Java", "Spring Boot", "NestJS", "Express", "Laravel", "React", "Astro", "GCP", "Docker"]
    },
    {
        company: "Digital Factoring",
        role: "Programador Junior",
        period: "Agosto 2020 - Agosto 2021",
        description: [
            "Rediseño de módulos clave de intranet/extranet financiera, contribuyendo a una mejora del 30% en usabilidad según feedback interno.",
            "Integración de Angular y Spring Boot para estabilizar procesos de factoring electrónico.",
            "Documentación de flujos funcionales y colaboración en despliegues en GCP bajo ciclos Dev-Test-Prod."
        ],
        technologies: ["Angular", "TypeScript", "Spring Boot", "Laravel", "GCP"]
    },
    {
        company: "ITBCP",
        role: "Practicante Programador",
        period: "Septiembre 2019 - Diciembre 2019",
        description: [
            "Apoyo en el levantamiento de requerimientos y prototipos para la automatización de procesos internos.",
            "Implementación, documentación y trazabilidad de soluciones tecnológicas."
        ],
        technologies: ["HTML/CSS", "JavaScript", "SQL Server", "ASP.NET"]
    }
];
