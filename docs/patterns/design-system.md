# Design System — Business Dollar

> Última actualización: 2026-03-12

## Filosofía de Diseño

- **Profesional y confiable**: Transmitir seguridad financiera (YMYL)
- **Modern y premium**: Gradientes sutiles, glassmorphism, micro-animaciones
- **Accesible**: WCAG AA mínimo, contraste, focus visible
- **Consistente**: Tokens compartidos, componentes reutilizables
- **Mobile-first**: Responsive design con breakpoints progresivos

---

## Paleta de Colores

### Colores Primarios

| Token                 | Valor     | Uso                        |
| --------------------- | --------- | -------------------------- |
| `--color-primary-50`  | `#f0fdf4` | Backgrounds sutiles        |
| `--color-primary-100` | `#dcfce7` | Hover estados              |
| `--color-primary-200` | `#bbf7d0` | Borders                    |
| `--color-primary-500` | `#22c55e` | Éxito, confirmaciones      |
| `--color-primary-600` | `#16a34a` | Botones primarios, CTAs    |
| `--color-primary-700` | `#15803d` | Hover de botones           |
| `--color-primary-900` | `#14532d` | Textos sobre fondos claros |

> El verde transmite **seguridad, crecimiento y confianza financiera**.

### Colores Secundarios (Accent)

| Token                | Valor     | Uso                           |
| -------------------- | --------- | ----------------------------- |
| `--color-accent-50`  | `#eff6ff` | Backgrounds info              |
| `--color-accent-500` | `#3b82f6` | Links, elementos interactivos |
| `--color-accent-600` | `#2563eb` | Hover de links                |
| `--color-accent-700` | `#1d4ed8` | Active states                 |

### Colores Neutros

| Token                 | Valor     | Uso                    |
| --------------------- | --------- | ---------------------- |
| `--color-neutral-50`  | `#fafafa` | Background principal   |
| `--color-neutral-100` | `#f5f5f5` | Background secundario  |
| `--color-neutral-200` | `#e5e5e5` | Borders                |
| `--color-neutral-300` | `#d4d4d4` | Borders hover          |
| `--color-neutral-400` | `#a3a3a3` | Placeholder text       |
| `--color-neutral-500` | `#737373` | Texto secundario       |
| `--color-neutral-600` | `#525252` | Texto body             |
| `--color-neutral-700` | `#404040` | Texto fuerte           |
| `--color-neutral-800` | `#262626` | Headings               |
| `--color-neutral-900` | `#171717` | Texto máximo contraste |
| `--color-neutral-950` | `#0a0a0a` | Dark backgrounds       |

### Colores Semánticos

| Token             | Valor     | Uso                       |
| ----------------- | --------- | ------------------------- |
| `--color-success` | `#22c55e` | Operación exitosa         |
| `--color-warning` | `#f59e0b` | Alertas                   |
| `--color-error`   | `#ef4444` | Errores, venta de dólares |
| `--color-info`    | `#3b82f6` | Información               |

### Colores de Cambio (Dominio)

| Token          | Valor     | Uso                       |
| -------------- | --------- | ------------------------- |
| `--color-buy`  | `#16a34a` | Compra de dólares (verde) |
| `--color-sell` | `#dc2626` | Venta de dólares (rojo)   |

---

## Tipografía

### Font Families

```css
--font-sans: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
--font-display: "Outfit", "Inter", sans-serif; /* Para headings grandes */
--font-mono:
  "JetBrains Mono", "Fira Code", monospace; /* Para cifras/tipo de cambio */
```

### Escala Tipográfica

| Token         | Size            | Line Height | Weight  | Uso              |
| ------------- | --------------- | ----------- | ------- | ---------------- |
| `--text-xs`   | 0.75rem (12px)  | 1rem        | 400     | Labels, captions |
| `--text-sm`   | 0.875rem (14px) | 1.25rem     | 400     | Texto secundario |
| `--text-base` | 1rem (16px)     | 1.5rem      | 400     | Body text        |
| `--text-lg`   | 1.125rem (18px) | 1.75rem     | 400-500 | Lead paragraphs  |
| `--text-xl`   | 1.25rem (20px)  | 1.75rem     | 600     | H4               |
| `--text-2xl`  | 1.5rem (24px)   | 2rem        | 600     | H3               |
| `--text-3xl`  | 1.875rem (30px) | 2.25rem     | 700     | H2               |
| `--text-4xl`  | 2.25rem (36px)  | 2.5rem      | 700     | H1               |
| `--text-5xl`  | 3rem (48px)     | 1           | 800     | Hero headings    |
| `--text-6xl`  | 3.75rem (60px)  | 1           | 800     | Landing hero     |

### Google Fonts Import

```html
<link rel="preconnect" href="https://fonts.googleapis.com" />
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
<link
  href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Outfit:wght@600;700;800&display=swap"
  rel="stylesheet"
/>
```

---

## Espaciado

Escala de **4px base**:

| Token        | Valor          |
| ------------ | -------------- |
| `--space-1`  | 0.25rem (4px)  |
| `--space-2`  | 0.5rem (8px)   |
| `--space-3`  | 0.75rem (12px) |
| `--space-4`  | 1rem (16px)    |
| `--space-5`  | 1.25rem (20px) |
| `--space-6`  | 1.5rem (24px)  |
| `--space-8`  | 2rem (32px)    |
| `--space-10` | 2.5rem (40px)  |
| `--space-12` | 3rem (48px)    |
| `--space-16` | 4rem (64px)    |
| `--space-20` | 5rem (80px)    |
| `--space-24` | 6rem (96px)    |

---

## Border Radius

| Token           | Valor   | Uso               |
| --------------- | ------- | ----------------- |
| `--radius-sm`   | 0.25rem | Inputs, badges    |
| `--radius-md`   | 0.5rem  | Cards, containers |
| `--radius-lg`   | 0.75rem | Modals            |
| `--radius-xl`   | 1rem    | Cards grandes     |
| `--radius-2xl`  | 1.5rem  | Hero elements     |
| `--radius-full` | 9999px  | Avatares, pills   |

---

## Sombras

| Token            | Valor                              | Uso                 |
| ---------------- | ---------------------------------- | ------------------- |
| `--shadow-sm`    | `0 1px 2px rgba(0,0,0,0.05)`       | Inputs              |
| `--shadow-md`    | `0 4px 6px -1px rgba(0,0,0,0.1)`   | Cards               |
| `--shadow-lg`    | `0 10px 15px -3px rgba(0,0,0,0.1)` | Modals, dropdowns   |
| `--shadow-xl`    | `0 20px 25px -5px rgba(0,0,0,0.1)` | Floating elements   |
| `--shadow-glass` | `0 8px 32px rgba(0,0,0,0.08)`      | Glassmorphism cards |

---

## Responsive Breakpoints

Mobile-first approach:

| Breakpoint | Valor  | Uso               |
| ---------- | ------ | ----------------- |
| `sm`       | 640px  | Teléfonos grandes |
| `md`       | 768px  | Tablets           |
| `lg`       | 1024px | Laptops           |
| `xl`       | 1280px | Desktops          |
| `2xl`      | 1536px | Pantallas grandes |

---

## Componentes Atómicos

### Button

```
Variantes: primary, secondary, outline, ghost, link
Tamaños: sm, md, lg
Estados: default, hover, active, focus, disabled, loading
```

- Primary: fondo `--color-primary-600`, texto blanco
- Hover: transición suave (200ms), scale `1.02`
- Focus: ring de 2px `--color-primary-500` con offset
- Disabled: opacity 0.5, cursor not-allowed

### Card

```
Variantes: default, elevated, outlined, glass
```

- Default: bg blanco, `--shadow-md`, `--radius-lg`
- Glass: `backdrop-filter: blur(16px)`, bg semi-transparente
- Hover: `translateY(-2px)` + sombra más intensa (300ms ease)

### Badge / Tag

```
Variantes: default, success, warning, error, info
Tamaños: sm, md
```

### Input

```
Variantes: default, search, currency
Estados: default, focus, error, disabled
```

- Focus: border `--color-primary-500`, shadow ring
- Error: border `--color-error`, mensaje de error debajo

### Alert

```
Variantes: info, success, warning, error
```

- Icon + texto + optional close button
- Colores semánticos con backgrounds sutiles

---

## Animaciones y Transiciones

### Micro-animaciones

```css
/* Transiciones base */
--transition-fast: 150ms ease;
--transition-base: 200ms ease;
--transition-slow: 300ms ease;
--transition-spring: 300ms cubic-bezier(0.34, 1.56, 0.64, 1);

/* Entrada de elementos */
@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(16px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

@keyframes slideInLeft {
  from {
    opacity: 0;
    transform: translateX(-24px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

/* Animaciones de número (tipo de cambio) */
@keyframes countUp {
  from {
    opacity: 0;
    transform: translateY(8px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
```

### Scroll animations

- Usar `IntersectionObserver` para animar elementos al entrar en viewport
- Clase `.animate-on-scroll` con `fadeInUp` por defecto
- Stagger de 100ms entre elementos hermanos

### Hover effects

- Botones: `scale(1.02)` + sombra
- Cards: `translateY(-2px)` + sombra
- Links: underline slide-in desde la izquierda
- Imágenes: `scale(1.05)` con overflow hidden

---

## Tailwind CSS v4 — Configuración

> **En Tailwind v4 no existe `tailwind.config.mjs`**. La configuración completa se define en CSS.

### Instalación

```bash
pnpm add tailwindcss @tailwindcss/vite
pnpm add -D @tailwindcss/typography
```

### `astro.config.mjs` — Plugin de Vite

```javascript
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite"; // ← paquete nuevo en v4

export default defineConfig({
  vite: {
    plugins: [tailwindcss()], // ← va en vite.plugins, NO en integrations
  },
  // ... resto de config
});
```

### `src/styles/global.css` — Toda la configuración aquí

```css
@import "tailwindcss"; /* Importa utilitarios, base y componentes */

@theme {
  /* ——— Fuentes ——— */
  --font-sans: "Inter", -apple-system, BlinkMacSystemFont, sans-serif;
  --font-display: "Outfit", "Inter", sans-serif;
  --font-mono: "JetBrains Mono", "Fira Code", monospace;

  /* ——— Colores primarios (verde — confianza financiera) ——— */
  --color-primary-50: #f0fdf4;
  --color-primary-100: #dcfce7;
  --color-primary-200: #bbf7d0;
  --color-primary-500: #22c55e;
  --color-primary-600: #16a34a;
  --color-primary-700: #15803d;
  --color-primary-900: #14532d;

  /* ——— Colores accent (azul) ——— */
  --color-accent-50: #eff6ff;
  --color-accent-500: #3b82f6;
  --color-accent-600: #2563eb;
  --color-accent-700: #1d4ed8;

  /* ——— Dominio: Compra / Venta ——— */
  --color-buy: #16a34a;
  --color-sell: #dc2626;

  /* ——— Animaciones ——— */
  --animate-fade-in-up: fadeInUp 0.5s ease forwards;
  --animate-fade-in: fadeIn 0.3s ease forwards;
  --animate-slide-in-left: slideInLeft 0.4s ease forwards;
}

/* Keyframes para animaciones custom */
@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(16px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
@keyframes slideInLeft {
  from {
    opacity: 0;
    transform: translateX(-24px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

/* Estilos base globales */
@layer base {
  h1,
  h2 {
    font-family: var(--font-display);
  }
  :focus-visible {
    outline: 2px solid var(--color-primary-500);
    outline-offset: 2px;
  }
  @media (prefers-reduced-motion: reduce) {
    * {
      animation-duration: 0.01ms !important;
    }
  }
}

/* Componentes reutilizables (opcional, solo si no se puede manejar con utilidades) */
@layer components {
  .prose-bd {
    /* Override de @tailwindcss/typography para el blog */
    --tw-prose-links: var(--color-accent-600);
    --tw-prose-headings: #171717;
  }
}
```

### Plugins (instalación como paquetes, no en config JS)

| Plugin                    | Instalación                           | Uso                                         |
| ------------------------- | ------------------------------------- | ------------------------------------------- |
| `@tailwindcss/typography` | `pnpm add -D @tailwindcss/typography` | `@plugin "@tailwindcss/typography";` en CSS |
| `@tailwindcss/forms`      | `pnpm add -D @tailwindcss/forms`      | `@plugin "@tailwindcss/forms";` en CSS      |

Los plugins v4 se importan en el CSS asi:

```css
@import "tailwindcss";
@plugin "@tailwindcss/typography";
@plugin "@tailwindcss/forms";

@theme {
  /* tokens... */
}
```

---

## Dark Mode (Preparación)

- Tokens definidos como CSS custom properties
- `prefers-color-scheme: dark` media query preparada
- Clase `.dark` en `<html>` para toggle manual
- **No implementar en v1** — solo preparar la estructura de tokens

---

## Accesibilidad

| Regla              | Requisito                                                       |
| ------------------ | --------------------------------------------------------------- |
| Contraste de color | WCAG AA mínimo (4.5:1 para texto normal, 3:1 para texto grande) |
| Focus visible      | Outline visible en todos los elementos interactivos             |
| Alt text           | Todas las imágenes con alt descriptivo                          |
| Roles ARIA         | `nav`, `main`, `footer`, `article`, `aside` semánticos          |
| Keyboard nav       | Tab order lógico, Enter/Space para acciones                     |
| Skip link          | "Saltar al contenido principal" oculto hasta focus              |
| Tap targets        | Mínimo 44x44px en mobile                                        |
| Reduced motion     | Respetar `prefers-reduced-motion`                               |

---

## Reglas de Uso

1. **No hardcodear colores** — usar siempre tokens: `text-primary-600`, `bg-neutral-50`
2. **No usar `px` directo** — usar escala de spacing: `p-4`, `mt-8`
3. **Font display siempre para headings** — `font-display` para H1-H2
4. **Imágenes siempre con dimensiones** — evitar CLS
5. **Animaciones con `prefers-reduced-motion`** — accesibilidad
6. **Mobile-first** — escribir estilos base para mobile, extender con breakpoints
7. **Max-width en contenido** — `max-w-7xl mx-auto` para containers principales
8. **Prose para contenido de blog** — usar `prose` de Typography plugin
