# Project Roadmap — Business Dollar

> Guía paso a paso para la construcción del sitio `business-dollar.pe`.
> Cada fase referencia los archivos de `docs/` como fuente de verdad.

---

## Fase 0 — Setup del Proyecto

**Objetivo:** Tener el entorno de desarrollo funcional con el stack correcto.

### 0.1 Inicializar Astro

```bash
pnpm create astro@latest ./ --template minimal --typescript strict --no-install
pnpm install
```

### 0.2 Instalar dependencias

```bash
# Tailwind v4 (ver docs/context/tech-stack.md → Styling)
pnpm add tailwindcss @tailwindcss/vite
pnpm add -D @tailwindcss/typography

# Integraciones Astro
pnpm add @astrojs/sitemap @astrojs/mdx
```

### 0.3 Configurar Astro

Editar `astro.config.mjs` siguiendo exactamente el snippet en:
→ `docs/patterns/architecture.md` → sección "Astro Config"

> ⚠️ Tailwind v4 va en `vite.plugins`, NO en `integrations`.

### 0.4 Configurar Tailwind y estilos base

Crear `src/styles/global.css` con la estructura completa de tokens:
→ `docs/patterns/design-system.md` → sección "Tailwind CSS v4 — Configuración"

Incluir: `@import "tailwindcss"`, `@theme {}` con todos los tokens de color y fuentes, `@keyframes`, `@layer base`.

### 0.5 Configurar Content Collections

Crear `src/content/config.ts` con los schemas de todas las colecciones:
→ `docs/patterns/architecture.md` → sección "Content Collections Schema"

Crear las carpetas vacías:

```
src/content/blog/
src/content/faq/
src/content/landings/
src/content/localidades/
src/content/authors/
```

### 0.6 Archivos estáticos base

```
public/robots.txt    → ver docs/patterns/seo-rules.md → sección "Robots.txt"
public/favicon.svg   → logo del proyecto
```

**✅ Verificación:** `pnpm run dev` levanta sin errores en `localhost:4321`

---

## Fase 1 — Fundación SEO y Layouts

**Objetivo:** Tener los componentes SEO y layouts base antes de crear cualquier página.

> Skill recomendada: `frontend-design`

### 1.1 Componentes SEO (`src/components/seo/`)

Crear en orden:

**`HeadMeta.astro`**

- Props: `title`, `description`, `ogImage?`, `canonicalUrl?`, `noindex?`
- Incluye: title tag, meta description, canonical, og:_, twitter:_, sitemap link
- Referencia: `docs/patterns/seo-rules.md` → "Checklist por Página"

**`SchemaOrg.astro`**

- Props: `schema` (objeto JSON-LD)
- Inyecta `<script type="application/ld+json">` en el `<head>`
- Schemas globales: `Organization` + `WebSite` con `SearchAction`
- Referencia: `docs/patterns/seo-rules.md` → "Schema.org — Implementación Obligatoria"

**`Breadcrumbs.astro`**

- Props: `items` (array de `{label, href}`)
- Renderiza HTML semántico + `BreadcrumbList` Schema
- Referencia: `docs/patterns/architecture.md` → "Componentes SEO"

### 1.2 Layouts (`src/layouts/`)

**`BaseLayout.astro`**

- Imports: `HeadMeta`, `SchemaOrg` (Organization + WebSite global), Google Tag Manager
- `<slot />` para contenido de página

**`PageLayout.astro`** (extiende BaseLayout)

- Imports: `Navbar`, `Breadcrumbs`, `Footer`
- Estructura: header → breadcrumbs → main → footer

**`BlogLayout.astro`** (extiende BaseLayout)

- Imports: `Navbar`, `Breadcrumbs`, author bio, related posts, `CTABanner`
- Schema: `Article` / `BlogPosting` inyectado dinámicamente desde frontmatter

**`LandingLayout.astro`** (extiende BaseLayout)

- Navbar simplificado (sin breadcrumbs)
- CTA prominente al final

### 1.3 Componentes Atoms (`src/components/atoms/`)

- `Button.astro` — variantes: primary, secondary, outline, ghost
- `Badge.astro` — variantes: success, warning, error, info
- `Tag.astro` — para tags de blog

> Revisar con: `web-design-guidelines` después de implementar.

### 1.4 Componentes Organisms globales (`src/components/organisms/`)

- `Navbar.astro` — navegación principal con links a secciones clave
- `Footer.astro` — links legales, contacto, RUC, registro SBS, redes sociales

**✅ Verificación:** Cada componente renderiza correctamente. Navbar y Footer aparecen en todas las páginas de prueba.

---

## Fase 2 — Páginas Core

**Objetivo:** Las páginas principales del sitio, optimizadas para SEO y EEAT/YMYL.

> Skills: `copywriting` + `marketing-psychology` para el copy, `frontend-design` para la implementación

### 2.1 Home (`src/pages/index.astro`)

Secciones (usar `src/components/sections/`):

1. **HeroSection** — H1 con keyword principal, CTA primario hacia `app.business-dollar.pe`
2. **ExchangeRateSection** — Widget/embed del tipo de cambio actual (conectar con API cuando esté disponible)
3. **HowItWorksSection** — 3-4 pasos del proceso de cambio
4. **TrustSection** — Logo SBS, bancos aliados, años operando, número de operaciones
5. **TestimonialsSection** — Testimonios verificables con ReviewSchema
6. **CTASection** — CTA de conversión final

Schema: `FinancialService` + `Organization` + `WebSite`
Referencia copy: `docs/context/business-logic.md` → "Propuesta de Valor" y "Mensaje principal"

### 2.2 Sobre Nosotros (`src/pages/sobre-nosotros.astro`)

Secciones:

1. Historia de Business Dollar
2. Equipo (con `Person` Schema para EEAT)
3. Misión, visión, valores
4. Datos de la empresa: RUC, registro SBS, bancos aliados

> Crítico para EEAT: fotos reales del equipo, credenciales visibles.
> Referencia: `docs/context/business-logic.md` → "EEAT Implementation"

### 2.3 Servicios (`src/pages/servicios.astro`)

- Descripción detallada del servicio de cambio de divisas
- Tabla comparativa: Business Dollar vs bancos vs casas físicas
- `FinancialService` Schema con `serviceType`, `areaServed`, horarios
- Disclaimer YMYL visible

### 2.4 Seguridad (`src/pages/seguridad.astro`)

- Regulación SBS explicada
- Medidas de seguridad técnicas
- Cómo proteger tu cuenta
- Referencia a `docs/context/business-logic.md` → YMYL

### 2.5 FAQ (`src/pages/preguntas-frecuentes.astro`)

- Mínimo 20 preguntas en categorías definidas
- `FAQPage` Schema con todas las preguntas
- Internal links a artículos de blog relacionados
- Referencia: `docs/patterns/seo-rules.md` → "Pilares de Contenido" para las preguntas

### 2.6 Contacto (`src/pages/contacto.astro`)

- Formulario de contacto (conectar con backend/Google Sheets según `FormGeneral.astro` existente)
- `ContactPoint` Schema
- Información completa: teléfono, email, WhatsApp, horarios, dirección

### 2.7 Páginas Legales

- `src/pages/terminos-y-condiciones.astro`
- `src/pages/politica-de-privacidad.astro`
- `src/pages/politica-de-cookies.astro`
- `src/pages/libro-de-reclamaciones.astro`

**✅ Verificación:**

- [ ] Cada página tiene title único, meta description, canonical y H1
- [ ] Schema.org válido (revisar con Google Rich Results Test)
- [ ] Disclaimers YMYL presentes en home, servicios y seguridad
- [ ] Core Web Vitals en verde (Lighthouse)

---

## Fase 3 — Blog y Sistema de Contenido

**Objetivo:** Blog operativo con las primeras 10 publicaciones en los clusters definidos.

> Skills: `content-strategy` (planificación) → `copywriting` (redacción) → `seo-audit` (revisión)

### 3.1 Blog Index (`src/pages/blog/index.astro`)

- Grid de artículos con filtros por categoría
- Paginación (6-9 artículos por página)
- Featured posts destacados
- SearchAction Schema

### 3.2 Template de Post (`src/pages/blog/[...slug].astro`)

- Layout: `BlogLayout.astro`
- Renderiza: título, autor, fecha, reading time, content, FAQ, author bio, related posts, CTA
- Schema: `BlogPosting` / `Article` dinámico desde frontmatter
- `FAQPage` Schema si el artículo tiene `faq:` en frontmatter

### 3.3 Páginas de Categoría (`src/pages/blog/categoria/[categoria].astro`)

- Una por cada categoría: tipo-de-cambio, guias, seguridad, finanzas, noticias

### 3.4 Perfil de Autor (`src/pages/autor/[autor].astro`)

- Bio completa, foto, credenciales
- Lista de artículos del autor
- `Person` Schema para EEAT

### 3.5 Primeros 10 Artículos

Publicar mínimo 2 artículos por pilar (ver `docs/patterns/seo-rules.md` → "Pilares"):

| Pilar               | Artículos iniciales                                                                    |
| ------------------- | -------------------------------------------------------------------------------------- |
| Tipo de Cambio      | "¿Cuál es el tipo de cambio hoy?", "Histórico tipo de cambio dólar Perú"               |
| Guías de Cambio     | "Cómo cambiar dólares online paso a paso", "Casa de cambio vs banco"                   |
| Seguridad           | "Qué es la SBS y por qué importa", "Cómo identificar una casa de cambio segura"        |
| Finanzas Personales | "¿Conviene ahorrar en dólares o soles?", "Cuándo es buen momento para comprar dólares" |
| Business Dollar     | "Sobre Business Dollar" (hub de marca)                                                 |

> Cada artículo sigue el frontmatter schema de `docs/patterns/architecture.md`
> Cada artículo sigue el checklist de `docs/patterns/seo-rules.md` → "Checklist para Blog Posts"

**✅ Verificación:**

- [ ] Sitemap incluye todos los artículos publicados
- [ ] Cada artículo tiene autor, fecha, categoría y tags
- [ ] FAQPage Schema en mínimo 5 artículos
- [ ] Internal linking entre hub y spokes funcionando

---

## Fase 4 — SEO Local y Programático

**Objetivo:** Escalar el contenido con páginas de localidades.

> Skill: `programmatic-seo`

### 4.1 Template de Localidad (`src/pages/[ciudad]/cambio-de-dolares.astro`)

- Layout con contenido específico por ciudad/distrito
- `LocalBusiness` Schema con dirección y geo
- Internal links a home y servicios

### 4.2 Data de Localidades

Crear `src/content/localidades/` con JSON por ciudad:

- Lima (distritos de Lima y Callao)
- Arequipa (10 distritos principales)
- Trujillo, Cusco, Piura, etc.

Referencia: `docs/context/business-logic.md` → "Público Objetivo"

**✅ Verificación:**

- [ ] 20+ páginas de localidades generadas
- [ ] `LocalBusiness` Schema válido en cada una
- [ ] URLs siguen patrón `/[ciudad]/cambio-de-dolares`

---

## Fase 5 — Optimización y Auditoría

**Objetivo:** Alcanzar Lighthouse 95+ y score de squirrelscan > 85.

> Skills: `audit-website` + `seo-audit`

### 5.1 Auditoría inicial con squirrelscan

```bash
squirrel audit https://business-dollar.pe --format llm -C full
```

Guardar reporte y priorizar fixes.

### 5.2 Core Web Vitals

- LCP < 1.5s: optimizar imágenes hero, fuentes con `font-display: swap`
- CLS < 0.05: dimensiones explícitas en todas las imágenes
- INP < 100ms: minimizar JS islands

### 5.3 Verificaciones finales

- [ ] Google Search Console: Submit sitemap
- [ ] Google Rich Results Test: Validar schemas de Home, Blog, FAQ
- [ ] No hay rutas de admin/login en el sitemap
- [ ] robots.txt referencia el sitemap
- [ ] Todas las imágenes tienen `alt` descriptivo
- [ ] No hay meta descriptions duplicadas
- [ ] Canonical tags en todas las páginas

---

## Fase 6 — Monitoreo continuo

**Objetivo:** Mantener el sitio en buen estado SEO semana a semana.

> Skill: `audit-website` (mensual), `seo-audit` (cuando hay problemas puntuales)

### Rutinas

| Frecuencia  | Tarea                                                 | Skill                              |
| ----------- | ----------------------------------------------------- | ---------------------------------- |
| Semanal     | Publicar 2 artículos del blog                         | `copywriting` + `content-strategy` |
| Mensual     | Auditoría completa con squirrelscan                   | `audit-website`                    |
| Mensual     | Revisar GSC: impresiones, CTR, posiciones             | `seo-audit`                        |
| Trimestral  | Actualizar artículos publicados (YMYL exige frescura) | `copywriting`                      |
| Por release | Auditar cambios antes de publicar                     | `audit-website`                    |

---

## Referencias rápidas

| Necesidad                           | Archivo                            |
| ----------------------------------- | ---------------------------------- |
| Stack tecnológico                   | `docs/context/tech-stack.md`       |
| Pilares de contenido y competencia  | `docs/context/business-logic.md`   |
| Estructura de carpetas y routing    | `docs/patterns/architecture.md`    |
| Tokens, componentes, animaciones    | `docs/patterns/design-system.md`   |
| Checklist SEO por página y por post | `docs/patterns/seo-rules.md`       |
| Qué skill usar para cada tarea      | `docs/context/skills-guide.md`     |
| Hallazgos de mercadocambiario.pe    | `docs/competence/audit-report.csv` |
