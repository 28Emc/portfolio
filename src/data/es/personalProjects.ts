import type { PersonalProject } from '../../types';

export const personalProjects: PersonalProject[] = [
    {
        title: "SGCC",
        description: "Plataforma de gestión de cobros y consumos compartidos. MVP en desarrollo con enfoque en automatización de facturación y prorrateo de servicios (agua, luz, gas) entre inquilinos.",
        status: "mvp",
        architectureHighlights: [
            "Backend en Java y Spring Boot aplicando Clean Architecture (capas Domain/Application/Infrastructure/Presentation)",
            "Autenticación mediante API Key y JWT con documentación OpenAPI/Swagger",
            "Auditoría completa de operaciones financieras",
            "Frontend en Angular con Standalone Components, Angular Material y Tailwind CSS"
        ],
        technologies: ["Java 21", "Spring Boot", "Angular", "TypeScript", "Tailwind CSS", "PostgreSQL", "Docker"],
        picImg: "SGCC.png"
    },
    {
        title: "TransitOne Perú",
        description: "Plataforma nacional unificada de transporte público. MVP en desarrollo con arquitectura de microservicios para identidad, billetera digital y gestión de viajes.",
        status: "mvp",
        architectureHighlights: [
            "Arquitectura de microservicios modulares con NestJS, PostgreSQL y TypeScript",
            "Domain-Driven Design y Clean Architecture para los dominios de identidad, billetera digital y viajes",
            "Consistencia transaccional fuerte para operaciones financieras a escala nacional",
            "Comunicación orientada a eventos entre servicios"
        ],
        technologies: ["NestJS", "TypeScript", "PostgreSQL", "Docker", "Event-Driven Architecture"],
        picImg: "TransitOne.png"
    },
    {
        title: "MealMind",
        description: "Plataforma inteligente de planificación de comidas. MVP en desarrollo con motor de generación automática de menús semanales y listas de compra consolidadas.",
        status: "mvp",
        architectureHighlights: [
            "Backend modular en NestJS y PostgreSQL con principios de Clean Architecture",
            "Motor de generación automática de menús semanales personalizados",
            "Generación de listas de compra consolidadas basadas en los menús",
            "API documentada mediante Swagger priorizando extensibilidad y separación de responsabilidades"
        ],
        technologies: ["NestJS", "TypeScript", "PostgreSQL", "Swagger", "Docker"],
        picImg: "MealMind.png"
    }
];
