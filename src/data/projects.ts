export interface Project {
    title: string;
    description: string;
    problem: string;
    solution: string;
    result: string;
    technologies: string[];
    isFeatured?: boolean;
}

export const projects: Project[] = [
    {
        title: "Pymera AIO",
        description: "Plataforma de gestión de llamadas y campañas SMS bajo microservicios.",
        problem: "Sistemas heredados descentralizados (marcador y SMS) con alta carga operativa.",
        solution: "Consolidación en una plataforma moderna con arquitectura de microservicios y despliegue modular.",
        result: "Reducción del 60% en la carga operativa y técnica, garantizando escalabilidad total.",
        technologies: ["Angular", "TypeScript", "Express", "NestJS", "NodeJS", "Laravel", "GCP", "Docker"],
        isFeatured: true
    },
    {
        title: "Kapital Factoring",
        description: "Sistema web para gestión de operaciones de factoring financiero.",
        problem: "Necesidad de un MVP robusto para automatizar la autenticación y validación de documentos.",
        solution: "Desarrollo de frontend en Angular con integración segura a API REST en Spring Boot y flujo CI/CD.",
        result: "Reducción del 40% en tiempos operativos y flujo estable de pruebas funcionales (Staging/Prod).",
        technologies: ["Angular", "TypeScript", "Spring Boot", "GCP"],
        isFeatured: true
    },
    {
        title: "Vesper",
        description: "Sistema web para gestión de inversionistas y contratos financieros.",
        problem: "Necesidad de gestionar portafolios de inversionistas con simulaciones financieras complejas.",
        solution: "Frontend en Angular integrado con .NET, incluyendo módulos de adendas y flujos jurídicos.",
        result: "Elevada cobertura funcional y soporte para inversionistas naturales y jurídicos en producción.",
        technologies: ["Angular", "TypeScript", ".NET", "SQL Server"],
        isFeatured: true
    },
    {
        title: "Crokete",
        description: "E-commerce de alimentos para mascotas con tres módulos independientes.",
        problem: "Sistema existente con flujos de compra ineficientes y gestión de pedidos manual.",
        solution: "Integración de Stripe, CMS en React.js y tienda en Next.js con despliegue en GCP Cloud Run.",
        result: "Optimización total del flujo de compra y reducción de errores funcionales mediante pruebas unitarias.",
        technologies: ["NextJS", "React", "Express", "NodeJS", "MongoDB", "Stripe", "CPanel"],
        isFeatured: false
    },
    {
        title: "Igo Courier",
        description: "Sistema logístico web y página institucional optimizada.",
        problem: "Baja velocidad de carga y seguimiento de envíos ineficiente.",
        solution: "Web institucional con Astro (SEO/Speed) y panel administrativo en Angular/Laravel.",
        result: "Carga menor a 1.5s y optimización de gestión de envíos, tarifas y usuarios.",
        technologies: ["Astro", "Angular", "TypeScript", "CodeIgniter", "CPanel"],
        isFeatured: false
    },
    {
        title: "Digital Process - SMS",
        description: "Sistema de campañas SMS individuales y masivas.",
        problem: "Dependencia de plataformas externas para la gestión de campañas SMS.",
        solution: "Desarrollo in-house con Angular y NodeJS (Express) con despliegue crítico en GCP.",
        result: "Independencia tecnológica total y optimización de tiempos de entrega en entornos críticos.",
        technologies: ["Angular", "TypeScript", "Express", "NodeJS", "GCP"],
        isFeatured: false
    },
    {
        title: "Digital Process - Contact Center",
        description: "Sistema de contact center con marcador predictivo para cobranzas.",
        problem: "Necesidad de gestión multicanal y coordinación segura para más de 30 usuarios concurrentes.",
        solution: "Sistema multicanal (SMS + llamadas) con Angular y APIs en Laravel/Express.js.",
        result: "Gestión eficiente de cobranzas y acceso seguro escalable para equipos grandes.",
        technologies: ["Angular", "TypeScript", "Laravel", "Express", "NodeJS", "GCP"],
        isFeatured: false
    }
];
