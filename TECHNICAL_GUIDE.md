# 🛠️ Guía Técnica de Arquitectura e Implementación

Este documento está diseñado para proporcionar a un desarrollador una visión profunda y técnica de cómo se ha construido y estructurado este portfolio.

---

## 🏛️ 1. Arquitectura General
El proyecto utiliza **Astro 6** como framework principal, configurado en modo **SSG (Static Site Generation)**.

*   **Estilos:** Tailwind CSS 4, aprovechando las nuevas capacidades de configuración basada en CSS y variables de tema nativas.
*   **Interactividad:** Vanilla JavaScript/TypeScript para mantener un bundle ligero, evitando frameworks pesados de cliente donde no son necesarios.
*   **Transiciones:** Astro View Transitions (`ClientRouter`) para una experiencia tipo SPA (Single Page Application).

---

## 🌐 2. Sistema de Internacionalización (i18n) Escalable
A diferencia de implementaciones con librerías externas pesadas, este proyecto utiliza una **Arquitectura de Datos Localizada** personalizada.

### Estructura de Datos
Los datos están desacoplados de la UI en `src/data/[lang]/*.ts`. Cada idioma exporta objetos que siguen interfaces estrictas definidas en `src/types/index.ts`.

### El `DATA_MAP` (`src/utils/i18n.ts`)
Centraliza el acceso a las traducciones:
```typescript
const DATA_MAP: Record<string, I18NData> = {
  es: { info: esInfo, ... },
  en: { info: enInfo, ... },
  it: { info: itInfo, ... }
};
```
*   **Escalabilidad:** Añadir un idioma nuevo requiere 0 cambios en la lógica de los componentes.
*   **Rutas Dinámicas:** `src/pages/[...lang].astro` usa `getStaticPaths` alimentado por `Object.keys(DATA_MAP)`, generando rutas automáticamente.

---

## 🔄 3. Gestión del Ciclo de Vida (Astro Transitions)
Debido al uso de `ClientRouter`, los scripts estándar solo se ejecutan en la carga inicial. Para solucionar esto, se utiliza un patrón de **Inicialización Re-ejecutable**:

```javascript
const initComponent = () => { /* Lógica de inicialización */ };
initComponent();
document.addEventListener('astro:after-swap', initComponent);
```
Este patrón se aplica en:
*   **Navbar:** Gestión del tema, menú móvil y barra de progreso.
*   **Animaciones:** Reinicialización de `IntersectionObserver` para el Scroll Reveal.
*   **Efectos:** Re-vinculación de eventos de ratón para el efecto Tilt 3D.

---

## ✨ 4. Sistema de Animaciones y Efectos

### Scroll Reveal Manager
Usa `IntersectionObserver` con un sistema de atributos `data-animation` y `data-delay`.
*   **Clase Clave:** `.reveal-on-scroll`. Al entrar en el viewport, se añade la clase `.is-visible`.
*   **CSS:** Los estados iniciales (opacity 0, translate...) están definidos en `global.css`.

### 3D Tilt Effect
Lógica matemática en `ProjectCard.astro` que calcula la posición del cursor relativa al centro de la tarjeta:
*   `tiltX = (y - 0.5) * 10`
*   `tiltY = (x - 0.5) * -10`
Aplica transformaciones 3D con `perspective(1000px)`.

---

## 🎨 5. Sistema de Diseño (Tailwind 4)
Se utiliza el nuevo motor de Tailwind 4 que permite definir el tema directamente en el CSS (`src/styles/global.css`):
```css
@theme {
  --color-accent: #3b82f6;
  --color-bg-dark: #020617;
}
```
*   **Glassmorphism:** Clase utilitaria `.glass-card` definida con `backdrop-blur` y bordes semitransparentes que se adaptan automáticamente al modo oscuro.

---

## 🔒 6. Tipado y Seguridad
Se ha implementado una interfaz central `UIStrings` en `src/types/`. Esto garantiza que:
1.  Si añades un nuevo string en español, TypeScript marcará error en inglés e italiano hasta que lo añadas.
2.  Evita errores de "undefined" al intentar acceder a rutas de objetos de traducción que no existen.

---

## 🛠️ 7. Comandos de Mantenimiento
*   `npm install`: Instala las dependencias necesarias.
*   `npm run dev`: Modo desarrollo con HMR.
*   `npm run build`: Genera el sitio estático optimizado en `/dist`.
*   `npm run preview`: Levanta un servidor local para testear la versión de producción.

---

**Nota para el desarrollador:** Para mantener la limpieza del proyecto, evita poner lógica de cliente directamente en los componentes si esta puede ser centralizada en un controlador que maneje los eventos de `astro:after-swap`.
