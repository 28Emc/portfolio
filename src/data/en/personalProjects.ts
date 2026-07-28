import type { PersonalProject } from '../../types';

export const personalProjects: PersonalProject[] = [
    {
        title: "SGCC",
        description: "Shared collection and consumption management platform. MVP in development focused on automating billing and prorating utilities (water, electricity, gas) among tenants.",
        status: "mvp",
        architectureHighlights: [
            "Java and Spring Boot backend applying Clean Architecture (Domain/Application/Infrastructure/Presentation layers)",
            "Authentication via API Key and JWT with OpenAPI/Swagger documentation",
            "Complete financial operations auditing",
            "Angular frontend with Standalone Components, Angular Material and Tailwind CSS"
        ],
        technologies: ["Java 21", "Spring Boot", "Angular", "TypeScript", "Tailwind CSS", "PostgreSQL", "Docker"],
        picImg: "SGCC.png"
    },
    {
        title: "TransitOne Perú",
        description: "Unified national public transportation platform. MVP in development with microservices architecture for identity, digital wallet, and trip management.",
        status: "mvp",
        architectureHighlights: [
            "Modular microservices architecture with NestJS, PostgreSQL and TypeScript",
            "Domain-Driven Design and Clean Architecture for identity, digital wallet, and trip domains",
            "Strong transactional consistency for nationwide financial operations",
            "Event-driven communication between services"
        ],
        technologies: ["NestJS", "TypeScript", "PostgreSQL", "Docker", "Event-Driven Architecture"],
        picImg: "TransitOne.png"
    },
    {
        title: "MealMind",
        description: "Intelligent meal planning platform. MVP in development with an automatic weekly menu generation engine and consolidated shopping lists.",
        status: "mvp",
        architectureHighlights: [
            "Modular NestJS and PostgreSQL backend with Clean Architecture principles",
            "Automatic personalized weekly menu generation engine",
            "Consolidated shopping list generation based on menus",
            "API documented with Swagger prioritizing extensibility and separation of concerns"
        ],
        technologies: ["NestJS", "TypeScript", "PostgreSQL", "Swagger", "Docker"],
        picImg: "MealMind.png"
    }
];
