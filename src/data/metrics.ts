export interface Metric {
    value: string;
    label: string;
}

export const metrics: Metric[] = [
    { value: "60%", label: "Reducción de carga operativa" },
    { value: "40%", label: "Reducción de tiempos operativos" },
    { value: "<2s", label: "Carga optimizada con Astro" },
    { value: "+10", label: "Usuarios concurrentes gestionados" },
    { value: "30%", label: "Mejora en usabilidad digital" }
];
