# Architecture — Business Dollar (Astro)

> Última actualización: 2026-03-12

## Principios

1. **Content-first**: La estructura gira alrededor del contenido
2. **SEO-first**: Cada ruta y componente se diseña pensando en SEO
3. **Escalabilidad**: Soporta crecer de 30 a 500+ páginas sin refactoring
4. **Separación de concerns**: Layouts, componentes, datos y contenido separados
5. **Mínimo JS**: Solo islands interactivos cargan JavaScript

---

## Estructura de Carpetas

```
web-business-dollar/
├── public/
│   ├── robots.txt
│   ├── favicon.svg
│   └── images/              # Logos, OG images base
│
├── src/
│   ├── assets/              # Imágenes procesadas por Astro
│   │   ├── icons/
│   │   ├── illustrations/
│   │   └── photos/
│   │
│   ├── components/          # Atomic Design
│   │   ├── atoms/           # Elementos base: Button, Badge, Input, Tag
│   │   ├── molecules/       # Combinaciones: Card, SearchBar, TestimonialCard
│   │   ├── organisms/       # Reutilizables globales: Navbar, Footer, FAQAccordion
│   │   ├── sections/        # Secciones específicas de página: HeroHome, HowItWorksSection, StatsSection, CTABanner
│   │   └── seo/             # HeadMeta, SchemaOrg, Breadcrumbs
│   │
│   ├── content/             # Content Collections (Markdown/MDX)
│   │   ├── blog/
│   │   │   ├── tipo-de-cambio/
│   │   │   ├── guias/
│   │   │   ├── seguridad/
│   │   │   └── finanzas/
│   │   ├── faq/
│   │   ├── landings/
│   │   ├── localidades/
│   │   └── authors/
│   │
│   ├── data/                # Datos estáticos (TS)
│   │   ├── navigation.ts
│   │   ├── social.ts
│   │   ├── company.ts       # RUC, SBS, contacto
│   │   └── seo-defaults.ts
│   │
│   ├── layouts/
│   │   ├── BaseLayout.astro
│   │   ├── PageLayout.astro
│   │   ├── BlogLayout.astro
│   │   └── LandingLayout.astro
│   │
│   ├── pages/
│   │   ├── index.astro
│   │   ├── sobre-nosotros.astro
│   │   ├── servicios.astro
│   │   ├── seguridad.astro
│   │   ├── contacto.astro
│   │   ├── preguntas-frecuentes.astro
│   │   ├── blog/
│   │   │   ├── index.astro
│   │   │   └── [...slug].astro
│   │   ├── [ciudad]/
│   │   │   └── cambio-de-dolares.astro
│   │   ├── terminos-y-condiciones.astro
│   │   ├── politica-de-privacidad.astro
│   │   ├── politica-de-cookies.astro
│   │   └── libro-de-reclamaciones.astro
│   │
│   ├── styles/
│   │   ├── global.css
│   │   └── prose.css
│   │
│   └── utils/
│       ├── schema.ts
│       ├── seo.ts
│       ├── date.ts
│       └── reading-time.ts
│
├── docs/
├── astro.config.mjs
├── tailwind.config.mjs
├── tsconfig.json
└── package.json
```

---

## Astro Config

```javascript
// astro.config.mjs
// Tailwind v4: se usa @tailwindcss/vite en vite.plugins — NO @astrojs/tailwind
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import sitemap from "@astrojs/sitemap";
import mdx from "@astrojs/mdx";

export default defineConfig({
  site: "https://business-dollar.pe",
  vite: {
    plugins: [tailwindcss()], // Tailwind v4: va en vite.plugins
  },
  integrations: [
    sitemap({
      filter: (page) => !page.includes("/admin") && !page.includes("/api"),
    }),
    mdx(),
  ],
  image: {
    domains: ["business-dollar.pe"],
  },
});
```

---

## Layouts

### Jerarquía

```
BaseLayout.astro
├── HeadMeta (title, description, OG, Twitter Cards)
├── SchemaOrg global (Organization, WebSite)
├── GTM
├── <slot />
└── Analytics

PageLayout.astro (extends Base)
├── Navbar
├── Breadcrumbs
├── <slot />
└── Footer

BlogLayout.astro (extends Base)
├── Navbar · Breadcrumbs
├── Article header (title, author, date, reading time)
├── <slot /> (contenido)
├── Author bio · Related posts · CTA
└── Footer

LandingLayout.astro (extends Base)
├── Navbar (simplificado)
├── <slot /> · CTA prominente
└── Footer (simplificado)
```

### Props comunes

```typescript
interface BaseLayoutProps {
  title: string;
  description: string;
  ogImage?: string;
  canonicalUrl?: string;
  noindex?: boolean;
  schema?: object;
}
```

---

## Content Collections Schema

```typescript
// src/content/config.ts
const blog = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    description: z.string().max(160),
    author: z.string(),
    publishDate: z.date(),
    updatedDate: z.date().optional(),
    category: z.enum([
      "tipo-de-cambio",
      "guias",
      "seguridad",
      "finanzas",
      "noticias",
    ]),
    tags: z.array(z.string()),
    featured: z.boolean().default(false),
    draft: z.boolean().default(false),
    ogImage: z.string().optional(),
    seoTitle: z.string().optional(),
    seoDescription: z.string().optional(),
    faq: z
      .array(
        z.object({
          question: z.string(),
          answer: z.string(),
        }),
      )
      .optional(),
    pillar: z.string().optional(),
    isHub: z.boolean().default(false),
  }),
});

const authors = defineCollection({
  type: "data",
  schema: z.object({
    name: z.string(),
    role: z.string(),
    bio: z.string(),
    avatar: z.string(),
    credentials: z.array(z.string()),
    social: z
      .object({
        linkedin: z.string().optional(),
        twitter: z.string().optional(),
      })
      .optional(),
  }),
});

const faq = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    category: z.string(),
    order: z.number(),
    questions: z.array(
      z.object({
        question: z.string(),
        answer: z.string(),
      }),
    ),
  }),
});

const localidades = defineCollection({
  type: "data",
  schema: z.object({
    ciudad: z.string(),
    slug: z.string(),
    departamento: z.string(),
    description: z.string(),
    seoTitle: z.string(),
    seoDescription: z.string(),
    distritos: z.array(z.string()),
    referencia: z.string(),
  }),
});
```

---

## Routing

| Tipo            | Patrón                        | Ejemplo                             |
| --------------- | ----------------------------- | ----------------------------------- |
| Home            | `/`                           | `business-dollar.pe/`               |
| Página estática | `/[nombre]`                   | `/sobre-nosotros`                   |
| Blog index      | `/blog`                       | `/blog`                             |
| Blog post       | `/blog/[slug]`                | `/blog/como-cambiar-dolares-online` |
| Blog categoría  | `/blog/categoria/[cat]`       | `/blog/categoria/tipo-de-cambio`    |
| Localidad       | `/[ciudad]/cambio-de-dolares` | `/lima/cambio-de-dolares`           |
| Legal           | `/[nombre]`                   | `/terminos-y-condiciones`           |
| FAQ             | `/preguntas-frecuentes`       | `/preguntas-frecuentes`             |

### Reglas de URLs

- Siempre en español, lowercase, guiones (no underscores)
- Sin trailing slash (consistente)
- Max 3-5 palabras por segmento
- Keyword principal en el slug

---

## Internal Linking — Hub & Spoke

```
Home (/)
├── /servicios → blog posts de servicios
├── /blog
│   ├── Hub: /blog/tipo-de-cambio-dolar-peru (Pilar 1)
│   │   ├── /blog/tipo-de-cambio-hoy
│   │   ├── /blog/historico-tipo-de-cambio-peru
│   │   └── /blog/proyeccion-dolar-2026
│   ├── Hub: /blog/como-cambiar-dolares-online (Pilar 2)
│   │   ├── /blog/documentos-para-cambiar-dolares
│   │   └── /blog/casa-de-cambio-vs-banco
│   └── ...
├── /preguntas-frecuentes → blog relevantes
└── /[ciudad]/cambio-de-dolares → servicios + blog
```

### Reglas

1. Cada artículo: mínimo **3 internal links**
2. Spokes siempre linkan al hub
3. Hub siempre linka a todos sus spokes
4. Anchor text descriptivo (no "clic aquí")
5. Max **3 clics** desde home a cualquier página

---

## Componentes SEO

| Componente          | Responsabilidad                                                     |
| ------------------- | ------------------------------------------------------------------- |
| `HeadMeta.astro`    | Title, description, canonical, OG, Twitter Cards, sitemap link      |
| `SchemaOrg.astro`   | JSON-LD: Organization + WebSite global, + schema por tipo de página |
| `Breadcrumbs.astro` | Breadcrumbs HTML + BreadcrumbList Schema                            |

---

## Targets de Rendimiento

| Métrica                | Target  |
| ---------------------- | ------- |
| LCP                    | < 1.5s  |
| CLS                    | < 0.05  |
| INP                    | < 100ms |
| TTFB                   | < 200ms |
| Total JS               | < 50KB  |
| Lighthouse SEO         | 100     |
| Lighthouse Performance | 95+     |
