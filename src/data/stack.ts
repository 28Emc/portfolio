export interface StackCategory {
    category: string;
    skills: string[];
}

export const stack: StackCategory[] = [
    {
        category: "Frontend",
        skills: ["Angular 12+", "Astro", "TypeScript", "JavaScript", "HTML5", "CSS3/SCSS"]
    },
    {
        category: "Backend",
        skills: ["Java 17+ (Spring Boot)", "NodeJS (NestJS, Express)", "PHP (Laravel, Lumen)"]
    },
    {
        category: "Bases de Datos",
        skills: ["MySQL", "PostgreSQL", "SQL Server", "MongoDB"]
    },
    {
        category: "Cloud & DevOps",
        skills: ["GCP (Cloud Run, VMs, Buckets)", "Docker", "CI/CD", "CPanel"]
    },
    {
        category: "Arquitectura & Herramientas",
        skills: ["Microservicios", "APIs REST", "WebSockets", "Testing (Jasmine, Jest, Karma)", "Git/GitHub"]
    }
];
