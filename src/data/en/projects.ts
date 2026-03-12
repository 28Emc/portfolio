import type { Project } from '../../types';

export const projects: Project[] = [
    {
        title: "Pymera AIO",
        description: "Call and SMS campaign management platform powered by microservices.",
        problem: "Decentralized legacy systems (dialer and SMS) with high operational overhead.",
        solution: "Consolidation into a modern platform with microservices architecture and modular deployment.",
        result: "60% reduction in operational and technical load, ensuring full scalability.",
        technologies: ["Angular", "TypeScript", "Express", "NestJS", "NodeJS", "Laravel", "GCP", "Docker"],
        picImg: "Pymera_AIO.png",
        isFeatured: true
    },
    {
        title: "Kapital Factoring",
        description: "Web system for managing financial factoring operations.",
        problem: "Need for a robust MVP to automate authentication and document validation.",
        solution: "Angular frontend development with secure Spring Boot REST API integration and CI/CD workflow.",
        result: "40% reduction in operational lead times and stable functional testing flow (Staging/Prod).",
        technologies: ["Angular", "TypeScript", "Spring Boot", "GCP"],
        picImg: "Kapital_Factoring.png",
        isFeatured: true
    },
    {
        title: "Vesper",
        description: "Investment and financial contract management system.",
        problem: "Requirement to manage investor portfolios with complex financial simulations.",
        solution: "Angular-based frontend integrated with .NET, featuring addendum modules and legal workflows.",
        result: "High functional coverage and production support for individual and institutional investors.",
        technologies: ["Angular", "TypeScript", ".NET", "SQL Server"],
        picImg: "Vesper.png",
        isFeatured: true
    },
    {
        title: "Crokete",
        description: "Pet food e-commerce featuring three independent modules.",
        problem: "Existing system with inefficient purchasing flows and manual order management.",
        solution: "Stripe integration, React.js CMS, and Next.js storefront deployed on GCP Cloud Run.",
        result: "Full optimization of the purchasing flow and reduction of functional bugs through unit testing.",
        technologies: ["NextJS", "React", "Express", "NodeJS", "MongoDB", "Stripe", "CPanel"],
        isFeatured: false
    },
    {
        title: "Igo Courier",
        description: "Logistics web system and optimized institutional site.",
        problem: "Low page load speeds and inefficient shipment tracking.",
        solution: "Institutional web built with Astro (SEO/Speed) and administrative panel in Angular/Laravel.",
        result: "Load times under 1.5s with optimized shipment, rate, and user management.",
        technologies: ["Astro", "Angular", "TypeScript", "CodeIgniter", "CPanel"],
        isFeatured: false
    },
    {
        title: "Digital Process - SMS",
        description: "Individual and bulk SMS campaign management system.",
        problem: "Dependency on third-party platforms for SMS campaign handling.",
        solution: "In-house development using Angular and NodeJS (Express) with critical deployment on GCP.",
        result: "Full technological independence and delivery time optimization in critical environments.",
        technologies: ["Angular", "TypeScript", "Express", "NodeJS", "GCP"],
        isFeatured: false
    },
    {
        title: "Digital Process - Contact Center",
        description: "Contact center system featuring predictive dialer for debt collection.",
        problem: "Need for omnichannel management and secure coordination for 30+ concurrent users.",
        solution: "Omnichannel system (SMS + calls) built with Angular and Laravel/Express.js APIs.",
        result: "Efficient collection management and secure, scalable access for large teams.",
        technologies: ["Angular", "TypeScript", "Laravel", "Express", "NodeJS", "GCP"],
        isFeatured: false
    }
];
