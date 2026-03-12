import type { Experience } from '../../types';

export const experiences: Experience[] = [
    {
        company: "Freelance",
        role: "Full Stack Developer",
        period: "November 2021 - October 2025",
        description: [
            "Frontend and full stack development for various sectors (Fintech, Logistics, E-commerce).",
            "Implementation of microservices architectures and scalable REST APIs.",
            "Optimization of operational workflows and automation of deployments on GCP.",
            "Technical leadership in consolidating legacy systems into modern platforms."
        ],
        technologies: ["Angular", "TypeScript", "Astro", "Spring Boot", "NestJS", "GCP", "Docker"]
    },
    {
        company: "Digital Factoring",
        role: "Junior Developer",
        period: "August 2020 - August 2021",
        description: [
            "Redesign of key financial intranet/extranet modules, improving usability by 30%.",
            "Integration of Angular with Laravel and/or Spring Boot to stabilize electronic factoring processes.",
            "Documentation of functional flows and collaboration on deployments within Dev-Test-Prod cycles."
        ],
        technologies: ["Angular", "TypeScript", "Laravel", "Spring Boot", "GCP"]
    },
    {
        company: "ITBCP",
        role: "Programming Intern",
        period: "September 2019 - December 2019",
        description: [
            "Support in gathering and analyzing requirements.",
            "Implementation and documentation of internal technological solutions."
        ],
        technologies: ["HTML/CSS", "JavaScript", "SQL Server", "ASP.NET"]
    }
];
