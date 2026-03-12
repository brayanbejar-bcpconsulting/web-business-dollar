# SEO Rules — Business Dollar

> Última actualización: 2026-03-12  
> Basado en: Google December 2025 Core Update, directrices EEAT/YMYL 2026, Schema.org best practices

---

## Checklist por Página (Obligatorio)

Antes de publicar **cualquier página**, verificar:

### Meta Tags

- [ ] `<title>` único, 50-60 caracteres, keyword al inicio
- [ ] `<meta description>` único, 150-160 caracteres, con CTA
- [ ] `<link rel="canonical">` apuntando a sí misma
- [ ] Solo UN `<h1>` por página con keyword principal
- [ ] Jerarquía correcta: H1 → H2 → H3 (no saltar niveles)
- [ ] Keyword en las primeras 100-200 palabras del contenido

### Open Graph y Social

- [ ] `og:title`, `og:description`, `og:image` (1200x630px), `og:url`, `og:type`
- [ ] `twitter:card`, `twitter:title`, `twitter:description`, `twitter:image`
- [ ] OG image no es genérica — contiene título y branding

### Schema.org

- [ ] Schema.org JSON-LD presente y válido
- [ ] Schema coincide con contenido visible en la página
- [ ] Validado en Google Rich Results Test

### Técnico

- [ ] URL en español, lowercase, con guiones
- [ ] Imágenes con `alt` descriptivo
- [ ] Imágenes optimizadas (WebP/AVIF, lazy loading)
- [ ] Links internos a 3+ páginas relevantes
- [ ] Breadcrumbs visibles + BreadcrumbList Schema
- [ ] Página carga en < 2.5s (LCP)

---

## Checklist para Blog Posts

Además del checklist general, cada artículo debe cumplir:

### Frontmatter Obligatorio

```yaml
---
title: "Título del artículo" # Max 60 chars
description: "Descripción SEO" # Max 160 chars
author: "nombre-del-autor" # Referencia a authors collection
publishDate: 2026-03-12
updatedDate: # Actualizar cuando se edite
category: "tipo-de-cambio" # Una de las categorías definidas
tags: ["dólar", "tipo de cambio"] # 3-5 tags relevantes
featured: false
draft: false
faq: # 3-5 preguntas FAQ
  - question: "¿Pregunta?"
    answer: "Respuesta completa."
pillar: "slug-del-hub" # Si es spoke, referenciar su hub
isHub: false # true si es página pilar
---
```

### Estructura del Contenido

```
[H1] Título (con keyword principal)

[Párrafo introductorio — 100-200 palabras]
→ Responde la pregunta principal del artículo
→ Incluye keyword principal de forma natural
→ Menciona qué encontrará el lector

[H2] Primera sección
→ Contenido sustancial, no relleno
→ Datos, ejemplos, fuentes citadas

[H2] Segunda sección
→ Links internos a artículos relacionados

[H2] [Subtema con keyword secundaria]
→ Profundizar en subtemas

[H2] Preguntas frecuentes
→ Formato pregunta-respuesta (FAQPage Schema)
→ 3-5 preguntas relevantes

[CTA] Llamada a la acción
→ Link a servicio / calculadora / registro
```

### Reglas de Contenido para Blog

1. **Mínimo 1000 palabras** para artículos estándar, 2000+ para hub/pillar pages
2. **Responder en las primeras 200 palabras** — los motores de búsqueda y AI priorizan esto
3. **Formato pregunta-respuesta** — usar H2/H3 formulados como preguntas cuando sea natural
4. **Citar fuentes** — enlazar BCRP, SBS, Bloomberg, fuentes oficiales
5. **Internal links**: mínimo 3 links a otros artículos/páginas del sitio
6. **External links**: 1-2 links a fuentes de autoridad (no competidores)
7. **Imágenes**: mínimo 1 imagen relevante con alt text descriptivo
8. **Actualización**: fecha de actualización visible cuando se edite
9. **Autor visible**: nombre, avatar y bio del autor en cada artículo
10. **Sin contenido AI puro**: el contenido generado por IA debe ser revisado, editado y enriquecido por humanos con experiencia real

---

## Directrices EEAT

### Experience (Experiencia)

| Señal             | Implementación                                                     |
| ----------------- | ------------------------------------------------------------------ |
| Datos propios     | Compartir estadísticas propias del servicio (volumen, operaciones) |
| Casos reales      | Testimonios verificables con nombre y contexto real                |
| Screenshots       | Mostrar el proceso real de la plataforma                           |
| Lenguaje práctico | Escribir desde la experiencia, no solo teoría                      |

### Expertise (Expertise)

| Señal         | Implementación                                      |
| ------------- | --------------------------------------------------- |
| Autoría       | Cada artículo tiene autor con credenciales visibles |
| Credenciales  | Formación en finanzas, economía, contabilidad       |
| Revisión      | Artículos YMYL revisados por experto del equipo     |
| Fuentes       | Citar BCRP, SBS, SUNAT, Bloomberg, estudios         |
| Person Schema | JSON-LD `Person` para cada autor                    |

### Authoritativeness (Autoridad)

| Señal          | Implementación                                            |
| -------------- | --------------------------------------------------------- |
| Registro SBS   | Visible en home, footer, y página de seguridad            |
| Topic clusters | Cubrir temas en profundidad con hub + spokes              |
| Backlinks      | Estrategia de PR y menciones en medios                    |
| Consistencia   | Publicación regular (mínimo 2 artículos/semana al inicio) |
| Brand mentions | Buscar menciones en medios financieros peruanos           |

### Trustworthiness (Confianza)

| Señal               | Implementación                                        |
| ------------------- | ----------------------------------------------------- |
| HTTPS               | Todo el sitio bajo HTTPS                              |
| Contacto completo   | Dirección, teléfono, email, RUC, SBS                  |
| Legal               | Términos, privacidad, cookies, libro de reclamaciones |
| Disclaimers         | En páginas de servicios y contenido financiero        |
| Fechas              | Fecha de publicación y actualización visibles         |
| Organization Schema | Con todos los datos de la empresa                     |

---

## Directrices YMYL (Finanzas)

Business Dollar es un sitio **YMYL** (Your Money Your Life). Google aplica estándares más altos:

### Obligatorio

1. **Información verificable**: todo claim financiero debe poderse verificar con fuente
2. **Disclaimers financieros visibles**: "Business Dollar es una casa de cambio digital regulada por la SBS bajo registro N° XXXXX-XXXX. Las operaciones de cambio de divisas están sujetas a las regulaciones vigentes."
3. **Actualización periódica**: revisar todo contenido financiero cada 3 meses
4. **No dar consejos de inversión**: informar, no recomendar acciones financieras específicas
5. **Transparencia total**: comisiones, spreads, costos — todo visible

### Prohibido

1. ❌ Prometer rentabilidad o ganancia garantizada
2. ❌ Recomendar comprar/vender dólares como inversión
3. ❌ Publicar tipos de cambio sin fuente ni timestamp
4. ❌ Usar testimonios falsos o no verificables
5. ❌ Ocultar costos o comisiones
6. ❌ Contenido sin revisión humana experta

---

## Schema.org — Implementación Obligatoria

### Global (todas las páginas)

```json
// Organization
{
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Business Dollar",
  "url": "https://business-dollar.pe",
  "logo": "https://business-dollar.pe/images/logo.svg",
  "description": "Casa de cambio digital...",
  "foundingDate": "XXXX",
  "address": { "@type": "PostalAddress", ... },
  "contactPoint": { "@type": "ContactPoint", ... },
  "sameAs": ["https://linkedin.com/...", "https://instagram.com/..."]
}

// WebSite + SearchAction
{
  "@context": "https://schema.org",
  "@type": "WebSite",
  "name": "Business Dollar",
  "url": "https://business-dollar.pe",
  "potentialAction": {
    "@type": "SearchAction",
    "target": "https://business-dollar.pe/blog?q={search_term}",
    "query-input": "required name=search_term"
  }
}
```

### Por tipo de página

| Página          | Schema                                              |
| --------------- | --------------------------------------------------- |
| Home            | `FinancialService` + `Organization` + `WebSite`     |
| Servicios       | `FinancialService` con serviceType, areaServed      |
| Blog post       | `Article` o `BlogPosting` con author, datePublished |
| FAQ             | `FAQPage` con mainEntity array                      |
| Localidad       | `LocalBusiness` con address, geo                    |
| Sobre nosotros  | `Organization` detallado + `Person` del equipo      |
| Página de autor | `Person` con credentials                            |

---

## Optimización para AI/Respuestas Generativas

En 2026, los motores de búsqueda y IA (Gemini, ChatGPT, Perplexity) toman información de sitios web para respuestas generativas. Para aparecer:

1. **Estructura pregunta-respuesta**: Los H2/H3 formulados como preguntas aumentan probabilidad de ser citados
2. **Respuesta concisa al inicio**: La respuesta directa en las primeras 2-3 líneas tras el heading
3. **Datos estructurados ricos**: Schema.org bien implementado ayuda a IA a entender contexto
4. **Entidades claras**: Mencionar entidades reconocibles (SBS, BCRP, bancos) que la IA pueda verificar
5. **Brand consistency**: Mismo nombre, misma descripción en todas las plataformas (web, redes, directorios)
6. **Contenido actualizado**: La IA favorece fuentes con fechas recientes y contenido actual

---

## Pilares de Contenido — Clusters SEO

### Pilar 1: Tipo de Cambio

```
Hub: /blog/tipo-de-cambio-dolar-peru
├── /blog/tipo-de-cambio-hoy
├── /blog/historico-tipo-de-cambio-peru
├── /blog/proyeccion-dolar-2026
├── /blog/que-afecta-tipo-de-cambio
└── /blog/diferencia-tc-compra-venta
```

### Pilar 2: Guías de Cambio

```
Hub: /blog/como-cambiar-dolares-online
├── /blog/pasos-cambiar-dolares-online
├── /blog/documentos-necesarios-cambio
├── /blog/errores-comunes-cambiar-divisas
└── /blog/casa-de-cambio-vs-banco
```

### Pilar 3: Seguridad Financiera

```
Hub: /blog/seguridad-cambio-dolares-online
├── /blog/como-identificar-casa-cambio-legal
├── /blog/que-es-sbs-peru
├── /blog/prevenir-fraudes-cambio-divisas
└── /blog/proteger-dinero-operaciones-online
```

### Pilar 4: Finanzas Personales

```
Hub: /blog/ahorrar-dolares-peru
├── /blog/conviene-ahorrar-dolares-o-soles
├── /blog/cuando-comprar-dolares
├── /blog/dolarizacion-ahorro-peru
└── /blog/tipo-cambio-compras-internacionales
```

---

## Reglas Técnicas SEO

### Canonical

- Cada página tiene `<link rel="canonical">` self-referencing
- Sin variaciones (`?utm_`, trailing slashes, etc.)
- HTTP redirige a HTTPS, www redirige a no-www (o viceversa)

### Sitemap

- Generado automáticamente por `@astrojs/sitemap`
- Solo URLs indexables y canónicas
- Excluir: admin, API, login, drafts
- Referenciado en `robots.txt`

### Robots.txt

```
User-agent: *
Allow: /
Disallow: /admin/
Disallow: /api/

Sitemap: https://business-dollar.pe/sitemap-index.xml
```

### Core Web Vitals Targets

| Métrica | Target  | Bueno   | Necesita mejora |
| ------- | ------- | ------- | --------------- |
| LCP     | < 1.5s  | < 2.5s  | < 4.0s          |
| INP     | < 100ms | < 200ms | < 500ms         |
| CLS     | < 0.05  | < 0.1   | < 0.25          |

### Internal Linking Rules

1. Mínimo 3 internal links por página
2. Anchor text descriptivo con keyword (no "clic aquí")
3. Links bidireccionales entre hub y spokes
4. Máximo 3 clics desde home a cualquier página
5. No más de 100 links por página

---

## Contenido Prohibido

1. ❌ **Keyword stuffing**: repetir keywords de forma no natural
2. ❌ **Contenido thin**: páginas con < 300 palabras sin valor
3. ❌ **AI sin editar**: contenido generado por IA sin revisión humana
4. ❌ **Claims sin evidencia**: afirmaciones sin fuente verificable
5. ❌ **Doorway pages**: páginas creadas solo para posicionar sin valor
6. ❌ **Texto oculto**: texto invisible para usuarios pero visible para crawlers
7. ❌ **Link schemes**: compra de links o esquemas de intercambio
8. ❌ **Cloaking**: mostrar contenido diferente a Google y usuarios
9. ❌ **Duplicado**: copiar contenido de otros sitios
10. ❌ **Clickbait**: títulos engañosos que no coinciden con el contenido
