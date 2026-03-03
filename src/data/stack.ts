export interface StackCategory {
    category: string;
    skills: string[];
}

export const stack: StackCategory[] = [
    {
        category: "Frontend",
        skills: ["Angular", "Astro", "JavaScript", "TypeScript", "HTML5", "CSS3/SCSS"]
    },
    {
        category: "Backend",
        skills: ["Java (Spring Boot, Security, Data, Cloud)", "JavaScript/TypeScript (NestJS, Express)", "PHP (Laravel, Lumen)"]
    },
    {
        category: "Bases de Datos",
        skills: ["MySQL", "PostgreSQL", "SQL Server", "MongoDB"]
    },
    {
        category: "Cloud & DevOps",
        skills: ["GCP (App Engine, Cloud Run, Compute Engine, Cloud Storage, Cloud SQL, Scheduler)", "Docker", "CPanel"]
    },
    {
        category: "Arquitectura & Herramientas",
        skills: ["Microservicios", "APIs REST", "WebSockets", "Testing (Jasmine, Jest, Karma)", "Git/GitHub", "Postman"]
    }
];
