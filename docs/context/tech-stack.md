# Tech Stack — business-dollar.pe

> Última actualización: 2026-03-12

## Alcance

Este documento define el stack técnico para **business-dollar.pe** (sitio público / SEO).  
El subdominio **app.business-dollar.pe** (aplicación web) es responsabilidad del equipo de desarrollo y no se cubre aquí.

---

## Framework Principal

| Tecnología  | Versión | Propósito                                                      |
| ----------- | ------- | -------------------------------------------------------------- |
| **Astro**   | 5.x     | Framework principal — SSG (Static Site Generation) por defecto |
| **Node.js** | 20 LTS  | Runtime para builds y dev server                               |
| **pnpm**    | 10.32.1 | Gestor de paquetes                                             |

### ¿Por qué Astro?

- **SSG por defecto**: HTML estático generado en build time → máximo rendimiento SEO
- **Zero JS por defecto**: No envía JavaScript al cliente salvo islands interactivos
- **Content Collections**: Sistema nativo para gestionar blog, FAQs, landings en Markdown/MDX
- **Islands Architecture**: Solo los componentes interactivos cargan JS (calculadora, formularios)
- **Integración SEO nativa**: `@astrojs/sitemap`, meta tags dinámicos, RSS feeds
- **Core Web Vitals óptimos**: LCP < 1.5s, CLS ≈ 0, INP mínimo

---

## Styling

| Tecnología       | Versión | Propósito                   |
| ---------------- | ------- | --------------------------- |
| **Tailwind CSS** | 4.x     | Framework de utilidades CSS |

### Configuración Tailwind

- Tokens personalizados definidos en `styles/global.css`
- CSS custom properties para theming (preparado para dark mode)
- Plugin `@tailwindcss/typography` para contenido de blog (prose)
- Plugin `@tailwindcss/forms` para elementos de formulario
- Sin componentes de terceros (diseño propio con Atomic Design)

---

## Contenido

| Tecnología                    | Propósito                                                                            |
| ----------------------------- | ------------------------------------------------------------------------------------ |
| **Astro Content Collections** | Gestión de blog, FAQs, landings, localidades                                         |
| **Markdown (.md)**            | Formato principal de contenido                                                       |
| **MDX (.mdx)**                | Para contenido con componentes interactivos embebidos                                |
| **Frontmatter YAML**          | Metadata de cada pieza de contenido (title, description, author, date, schema, etc.) |

### Colecciones definidas

```
src/content/
├── blog/          # Artículos del blog (Markdown/MDX)
├── faq/           # Preguntas frecuentes agrupadas por categoría
├── landings/      # Landing pages informativas
├── localidades/   # Páginas por ciudad/distrito (SEO local)
└── authors/       # Perfiles de autores (EEAT)
```

---

## SEO y Datos Estructurados

| Tecnología               | Propósito                                                                              |
| ------------------------ | -------------------------------------------------------------------------------------- |
| **@astrojs/sitemap**     | Generación automática de sitemap.xml                                                   |
| **JSON-LD manual**       | Schema.org (Organization, WebSite, FinancialService, Article, FAQPage, BreadcrumbList) |
| **Componente HeadMeta**  | Meta tags dinámicos (title, description, OG, Twitter Cards)                            |
| **Componente SchemaOrg** | Inyección de JSON-LD según tipo de página                                              |
| **robots.txt**           | Estático en `public/robots.txt`                                                        |

### Schema.org — Tipos implementados

| Schema                       | Dónde se usa                   |
| ---------------------------- | ------------------------------ |
| `Organization`               | Global (todas las páginas)     |
| `WebSite` + `SearchAction`   | Global (todas las páginas)     |
| `FinancialService`           | Home, Servicios                |
| `BreadcrumbList`             | Todas las páginas internas     |
| `Article` / `BlogPosting`    | Blog posts                     |
| `FAQPage`                    | Página de preguntas frecuentes |
| `LocalBusiness`              | Páginas de localidades         |
| `Person`                     | Páginas de autor               |
| `Review` / `AggregateRating` | Testimonios                    |

---

## Imágenes y Media

| Tecnología                            | Propósito                                   |
| ------------------------------------- | ------------------------------------------- |
| **@astrojs/image** (o `astro:assets`) | Optimización automática de imágenes         |
| **Formatos**: WebP, AVIF              | Formatos modernos con fallback a JPEG/PNG   |
| **Lazy loading nativo**               | `loading="lazy"` en imágenes below the fold |
| **Responsive images**                 | `srcset` y `sizes` automáticos              |

---

## Deployment

Aún no definido. Se está evaluando opciones.

| Servicio                               | Propósito                                  |
| -------------------------------------- | ------------------------------------------ |
| **Vercel** o **Cloudflare Pages**      | Hosting y CDN global (por definir)         |
| **GitHub**                             | Repositorio y CI/CD                        |
| **DNS**: business-dollar.pe            | Dominio principal                          |
| **Subdominio**: app.business-dollar.pe | Apunta al sistema del equipo de desarrollo |

### Build & Preview

```bash
# Desarrollo local
pnpm run dev          # Astro dev server en localhost:4321

# Build de producción
pnpm run build        # Genera sitio estático en dist/

# Preview del build
pnpm run preview      # Sirve dist/ localmente
```

---

## Analytics y Tracking

| Herramienta                   | Propósito                              |
| ----------------------------- | -------------------------------------- |
| **Google Analytics 4**        | Tracking de tráfico y comportamiento   |
| **Google Search Console**     | Monitoreo SEO, indexación, rendimiento |
| **Google Tag Manager**        | Gestión centralizada de tags y eventos |
| **Google PageSpeed Insights** | Monitoreo de Core Web Vitals           |

### Eventos clave a trackear

- Clics en CTA principal (conversión)
- Uso de la calculadora de tipo de cambio
- Lectura de artículos del blog (scroll depth)
- Tiempo en página
- Clics en links internos de interés

Integrar propiedades de dataLayer para Google Tag Manager.

---

## Integraciones futuras

| Integración                     | Estado      | Propósito                             |
| ------------------------------- | ----------- | ------------------------------------- |
| API de tipo de cambio           | Por definir | Mostrar tipo de cambio en tiempo real |
| Newsletter (Resend / Mailchimp) | Futuro      | Captura de leads por email            |
| RSS Feed                        | Build 1     | Feed para distribución de contenido   |
| Open Graph images dinámicas     | Build 1     | OG images con Satori/canvas           |

---

## Restricciones y Reglas

1. **No instalar dependencias sin justificación** — el bundle debe mantenerse mínimo
2. **No usar frameworks JS pesados** (React, Vue) salvo en islands específicos que lo requieran
3. **Todo contenido nuevo pasa por Content Collections** — no hardcodear contenido en componentes
4. **Imágenes siempre optimizadas** — usar `astro:assets` o `@astrojs/image`, nunca `<img>` directo
5. **Cada página debe tener su Schema.org** — sin excepciones
6. **Meta tags únicos por página** — title y description nunca duplicados
7. **URLs en español, lowercase, separadas por guiones** — `/blog/como-cambiar-dolares-online`
8. **Evitar duplicidad de contenido que abarquen la misma intención de búsqueda** — si existe una página para una intención de búsqueda, no crear otra página para la misma intención de búsqueda.
