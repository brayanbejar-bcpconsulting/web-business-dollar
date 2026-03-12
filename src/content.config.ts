import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

// ——— Blog ———
const blog = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/content/blog" }),
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

// ——— Authors ———
const authors = defineCollection({
  loader: glob({ pattern: "**/*.json", base: "./src/content/authors" }),
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

// ——— FAQ ———
const faq = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/content/faq" }),
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

// ——— Localidades ———
const localidades = defineCollection({
  loader: glob({ pattern: "**/*.json", base: "./src/content/localidades" }),
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

// ——— Landings ———
const landings = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/content/landings" }),
  schema: z.object({
    title: z.string(),
    description: z.string().max(160),
    seoTitle: z.string().optional(),
    seoDescription: z.string().optional(),
    ogImage: z.string().optional(),
    draft: z.boolean().default(false),
  }),
});

export const collections = {
  blog,
  authors,
  faq,
  localidades,
  landings,
};
