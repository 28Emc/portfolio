# 🚀 Mi Portfolio Personal | Edinson Medina Chinga

![Astro](https://img.shields.io/badge/Astro-BC52EE?style=for-the-badge&logo=astro&logoColor=white)
![TailwindCSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)
![i18n](https://img.shields.io/badge/i18n-ES/EN/IT-brightgreen?style=for-the-badge)

Bienvenido a mi espacio digital. Este proyecto no es solo una hoja de vida, es una muestra de cómo entiendo el desarrollo de software: **eficiente, elegante y orientado a resultados que impulsan el negocio.**

🔗 **Ver en vivo:** [https://28emc.github.io/portfolio/](https://28emc.github.io/portfolio/)

---

## 👋 Sobre este proyecto

He construido este portafolio utilizando las herramientas más modernas del ecosistema web para asegurar que, más allá de la información, la experiencia de navegación sea impecable. Mi objetivo es reflejar mi trayectoria de más de 4 años en sectores críticos como finanzas y logística, donde el rendimiento y la robustez son innegociables.

---

## ✨ Lo que hace especial a este sitio

* **🌐 Arquitectura Trilingüe (i18n)**: Contenido disponible en **Español, Inglés e Italiano**, gestionado mediante una infraestructura escalable que permite añadir nuevos idiomas en minutos.
* **🎥 Animaciones Cinematográficas**: Implementación de *Scroll Reveal*, efectos de *Glassmorphism* y micro-interacciones para una experiencia dinámica y pulida.
* **🖱️ Micro-interacciones Premium**: Selector de idiomas circular, efectos *Tilt* 3D en proyectos, barra de progreso de lectura y transiciones de estado elegantes.
* **🌓 Modo Oscuro Inteligente**: Persistencia de tema optimizada para Astro View Transitions, garantizando una transición fluida entre páginas y lenguajes.
* **Diseño para Todos**: Implementado con altos estándares de accesibilidad, asegurando que el contenido sea legible y navegable para cualquier persona.
* **Velocidad Extrema**: Construido con **Astro 6** y **Tailwind CSS 4**, optimizado para cargar instantáneamente y con un rendimiento visual de primer nivel.

---

## ✅ Buenas Prácticas e Ingeniería

Para asegurar la escalabilidad y mantenibilidad, el código sigue principios de desarrollo profesional:

* **Arquitectura de Datos Localizada**: Toda la información profesional está desacoplada de la UI en archivos `.ts` organizados por lenguaje (`src/data/[es|en|it]`).
* **Tipado Estricto de Traducciones**: Uso de interfaces globales para asegurar que todos los idiomas tengan la misma estructura de datos, evitando errores de contenido faltante.
* **Scripts Modulares & Optimización**: Lógica de cliente centralizada en controladores específicos para manejar el ciclo de vida de Astro (Astro Transitions).
* **SEO & Accesibilidad (A11y)**: Uso de HTML semántico, etiquetas ARIA y estrategias de SEO dinámico según el idioma actual.
* **Optimización de Assets**: Procesamiento dinámico de imágenes mediante la API de Astro para reducir el peso de carga mediante formatos WebP.

---

## 🛠️ Herramientas utilizadas

| Área | Mi elección |
| :--- | :--- |
| **Estructura** | Astro 6 (Latest) |
| **Estilos** | Tailwind CSS 4 |
| **Lógica** | TypeScript |
| **Animaciones** | Intersection Observer API & CSS Keyframes |
| **Internalización** | Arquitectura personalizada basada en `DATA_MAP` |
| **Iconografía** | Lucide |

---

## 📂 Organización del Proyecto

* `src/data/`: Fuente de verdad para toda la información, organizada por idioma (`es`, `en`, `it`).
* `src/utils/i18n.ts`: Helper centralizado con `DATA_MAP` para carga dinámica y escalable de idiomas.
* `src/pages/[...lang].astro`: Ruta dinámica para la generación estática (SSG) de todas las versiones idiomáticas.
* `src/components/ui/`: Sistema de diseño base (GlassCards, Badges, Botones).
* `src/components/projects/`: Lógica de portafolio, modales de detalle y efectos Tilt.
* `src/layouts/`: Estructura técnica, control de temas y optimización SEO.

---

## 🚀 Cómo ponerlo en marcha localmente

Si deseas explorar el código o probarlo en tu máquina:

1. **Instala las dependencias:** `npm install`
2. **Inicia el modo desarrollo:** `npm run dev`
3. **Genera la versión final:** `npm run build`
4. **Previsualiza la producción:** `npm run preview`

---

## 🙋‍♂️ Conectemos

Siempre estoy abierto a charlar sobre nuevas oportunidades o retos tecnológicos.

* **LinkedIn:** [/in/edinson-medina-chinga](https://linkedin.com/in/edinson-medina-chinga)
* **GitHub:** [@28Emc](https://github.com/28Emc)
* **Correo:** [edmech25@gmail.com](mailto:edmech25@gmail.com)

Hecho con dedicación por **Edinson Medina Chinga**
