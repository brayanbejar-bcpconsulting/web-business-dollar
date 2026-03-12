// @ts-check
// Tailwind v4: se usa @tailwindcss/vite en vite.plugins — NO @astrojs/tailwind
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import sitemap from "@astrojs/sitemap";
import mdx from "@astrojs/mdx";

// https://astro.build/config
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
