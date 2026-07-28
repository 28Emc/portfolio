import type { Experience } from '../../types';

export const experiences: Experience[] = [
    {
        company: "Freelance",
        role: "Full Stack Developer",
        period: "November 2021 - December 2025",
        description: [
            "End-to-end web systems development for factoring, logistics, e-commerce, and contact center companies.",
            "Implementation of microservices architectures and scalable REST APIs with Java (Spring Boot), Node.js (NestJS/Express) and PHP (Laravel).",
            "Modular frontends built with Angular (Standalone Components), React and Astro, prioritizing performance and SEO.",
            "CI/CD pipeline configuration and deployments on Google Cloud Platform (Cloud Run, VMs, Buckets)."
        ],
        technologies: ["Angular", "TypeScript", "Java", "Spring Boot", "NestJS", "Express", "Laravel", "React", "Astro", "GCP", "Docker"]
    },
    {
        company: "Digital Factoring",
        role: "Junior Developer",
        period: "August 2020 - August 2021",
        description: [
            "Redesign of key financial intranet/extranet modules, contributing to a 30% usability improvement per internal feedback.",
            "Integration of Angular and Spring Boot to stabilize electronic factoring processes.",
            "Documentation of functional flows and collaboration on GCP deployments within Dev-Test-Prod cycles."
        ],
        technologies: ["Angular", "TypeScript", "Spring Boot", "Laravel", "GCP"]
    },
    {
        company: "ITBCP",
        role: "Programming Intern",
        period: "September 2019 - December 2019",
        description: [
            "Support in gathering requirements and prototyping for internal process automation.",
            "Implementation, documentation, and traceability of technological solutions."
        ],
        technologies: ["HTML/CSS", "JavaScript", "SQL Server", "ASP.NET"]
    }
];
