# Skills Guide — Business Dollar

> Referencia rápida de skills globales disponibles y cuándo utilizarlas en este proyecto.
> Objetivo: evitar que el agente tenga que inferir qué skill usar — la respuesta está aquí.

## Skills disponibles

```
audit-website       → Auditoría técnica con squirrelscan CLI
content-strategy    → Planificación y estructura de contenido
copywriting         → Redacción de contenido
marketing-psychology → Psicología y persuasión aplicada al marketing
programmatic-seo    → SEO a escala / páginas dinámicas
seo-audit           → Diagnóstico técnico de SEO
ui-ux-pro-max       → Diseño de interfaces y experiencia de usuario
frontend-design     → Implementación de componentes UI
web-design-guidelines → Revisión de UI contra estándares de Vercel/web
find-skills         → Descubrir qué skill usar cuando no está claro
```

---

## Mapa de Skills por Tarea

### `audit-website` — Auditoría con squirrelscan

**Cuándo usar:**

- Antes de publicar el sitio (auditoría inicial)
- Después de cada release o actualización grande
- Para comparar business-dollar.pe contra mercadocambiario.pe
- Cuando el tráfico orgánico baja sin razón aparente
- Para validar que el sitio cumple con las 230+ reglas de SEO

**Comandos clave para este proyecto:**

```bash
squirrel audit https://business-dollar.pe --format llm
squirrel audit https://www.mercadocambiario.pe --format llm  # comparar competencia
squirrel report --diff <audit-id> --format llm              # comparar con anterior
```

**Output esperado:** Guardar reporte en `docs/competence/audit-report.csv` con los hallazgos.

---

### `seo-audit` — Diagnóstico técnico de SEO

**Cuándo usar:**

- Para diagnosticar por qué una página no está posicionando
- Revisar meta tags, H1, canonical, Schema.org de una página específica
- Detectar keyword cannibalization entre páginas
- Antes de escribir nueva página (verificar que no hay duplicate intent)
- Cuando Google Search Console muestra caída de impresiones

**Diferencia con `audit-website`:**

- `seo-audit` → análisis manual de una o pocas páginas, diagnóstico específico
- `audit-website` → crawl automatizado de todo el sitio con 230+ reglas

**Referencia:** Siempre consultar `docs/patterns/seo-rules.md` junto con esta skill.

---

### `content-strategy` — Planificación de contenido

**Cuándo usar:**

- Para decidir qué artículos del blog escribir a continuación
- Mapear nuevos topic clusters o expandir los existentes (ver `docs/context/business-logic.md`)
- Crear el calendario editorial mensual/trimestral
- Analizar gaps de contenido frente a competidores (Rextie, Tucambista, Kambista)
- Priorizar entre landing pages, artículos de blog o páginas de FAQ
- Cuando hay dudas sobre si un tema encaja en un cluster existente o necesita uno nuevo

**Contexto a proporcionar a la skill:**

- Los 5 pilares definidos en `docs/context/business-logic.md` → sección "Strategy de Contenido"
- Los clusters existentes en `docs/patterns/seo-rules.md` → sección "Pilares de Contenido"
- Competidores: Rextie, Tucambista, Kambista, Instakash, Mercado Cambiario

---

### `copywriting` — Redacción de contenido

**Cuándo usar:**

- Escribir el contenido de cada artículo del blog
- Redactar copy de landing pages (home, servicios, sobre nosotros)
- Crear descripciones SEO para páginas de localidades
- Escribir meta descriptions y títulos SEO
- Redactar FAQs para la página de preguntas frecuentes
- Actualizar y mejorar contenido existente

**Siempre combinar con:**

- `docs/patterns/seo-rules.md` → checklist de blog posts y reglas YMYL/EEAT
- `docs/context/business-logic.md` → tono, propuesta de valor, disclaimers YMYL
- El frontmatter schema definido en `docs/patterns/architecture.md`

**Restricciones YMYL a recordar:**

- No prometer rentabilidad ni rendimientos
- No recomendar comprar/vender divisas como inversión
- Incluir disclaimer de regulación SBS en contenido financiero
- Citar siempre fuentes oficiales (BCRP, SBS)

---

### `marketing-psychology` — Psicología de marketing

**Cuándo usar:**

- Optimizar el copy del hero o CTAs de la landing principal
- Diseñar la estructura de precios o comparativas de tipo de cambio
- Mejorar la sección de testimonios (social proof, reciprocity)
- Decidir el orden y jerarquía de secciones en una landing page
- Analizar por qué una página no convierte bien
- Crear urgencia ética en páginas de servicio

**Principios particularmente relevantes para Business Dollar:**

- **Authority Bias** → Destacar registro SBS, bancos aliados, certificaciones
- **Social Proof** → Testimonios reales, cantidad de operaciones, clientes activos
- **Loss Aversion** → "No pierdas dinero con el tipo de cambio del banco"
- **Mere Exposure Effect** → Presencia consistente en múltiples canales y búsquedas
- **Framing Effect** → Comparar siempre contra el tipo de cambio bancario (no otros fintechs)

---

### `programmatic-seo` — SEO a escala

**Cuándo usar:**

- Crear páginas de localidades (`/lima/cambio-de-dolares`, `/arequipa/...`)
- Generar variaciones de landing pages por tipo de usuario (persona natural vs empresa)
- Escalar artículos similares que siguen un patrón (e.g., "Tipo de cambio [mes] [año]")
- Crear páginas de comparativa con cada competidor a escala

**Referencia de estructura:**

- Las colecciones `localidades` en `docs/patterns/architecture.md` → Content Collections
- El patrón de URL `/[ciudad]/cambio-de-dolares` definido en routing

---

### `frontend-design` — Implementación de componentes

**Cuándo usar:**

- Implementar un componente nuevo (Button, Card, Hero, FAQ Accordion, etc.)
- Construir secciones de página (Hero, HowItWorks, Stats, CTA sections)
- Codificar un layout (BlogLayout, LandingLayout)
- Integrar animaciones o micro-interacciones

**Siempre consultar antes:**

- `docs/patterns/design-system.md` → tokens, variantes, reglas de uso
- `docs/patterns/architecture.md` → dónde va cada componente (atoms/molecules/organisms/sections)

---

### `ui-ux-pro-max` — Diseño UX/UI avanzado

**Cuándo usar:**

- Diseñar una nueva página desde cero antes de implementarla
- Evaluar si el flujo de conversión de una página es óptimo
- Rediseñar una sección existente que no funciona bien
- Antes de implementar la calculadora de tipo de cambio interactiva
- Cuando hay dudas sobre la jerarquía visual de una página

---

### `web-design-guidelines` — Revisión de UI

**Cuándo usar:**

- Revisar un componente `.astro` ya implementado contra las directrices de Vercel
- Verificar accesibilidad de formularios, focus states, contraste
- Hacer code review de UI antes de un PR/merge
- Validar que el dark mode (futuro) está bien implementado

**Cómo usar:**

```
Skill: web-design-guidelines
Archivo a revisar: src/components/atoms/Button.astro
```

---

### `find-skills` — Cuando hay dudas

**Cuándo usar:**

- Si la tarea no encaja claramente en ninguna skill de este documento
- Para descubrir si hay una skill nueva disponible que aplica mejor

---

## Matriz de decisión rápida

| Tarea                                     | Skill principal         | Skill secundaria        |
| ----------------------------------------- | ----------------------- | ----------------------- |
| Auditar el sitio completo en producción   | `audit-website`         | `seo-audit`             |
| Planificar próximos 10 artículos del blog | `content-strategy`      | —                       |
| Escribir un artículo del blog             | `copywriting`           | `seo-audit`             |
| Crear páginas de 20 localidades           | `programmatic-seo`      | `copywriting`           |
| Optimizar copy del hero principal         | `marketing-psychology`  | `copywriting`           |
| Implementar un componente nuevo           | `frontend-design`       | `web-design-guidelines` |
| Diseñar una nueva sección de página       | `ui-ux-pro-max`         | `frontend-design`       |
| Revisar accesibilidad de componentes      | `web-design-guidelines` | —                       |
| Una página no posiciona                   | `seo-audit`             | `content-strategy`      |
| Mejorar tasa de conversión de landing     | `marketing-psychology`  | `ui-ux-pro-max`         |
| Monitoreo mensual de salud del sitio      | `audit-website`         | —                       |
