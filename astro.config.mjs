import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import sitemap from "@astrojs/sitemap";
import compressor from "astro-compressor";
import starlight from "@astrojs/starlight";
import partytown from "@astrojs/partytown";

import mdx from "@astrojs/mdx";

// https://astro.build/config
export default defineConfig({
  // https://docs.astro.build/en/guides/images/#authorizing-remote-images
  site: "https://micrafil.com",
  trailingSlash: 'always',
  build: {
    format: 'directory',
  },
  image: {
    domains: ["images.unsplash.com"],
  },
//   i18n: {
//    defaultLocale: "es",
//     locales: ["es", "en"],
//    fallback: {
//       en: "es",
//     },
//     routing: {
//       prefixDefaultLocale: false,
//     },
//   },
  prefetch: true,
  integrations: [
    partytown({
      config: {
        forward: ["gtag", "dataLayer.push"],
      },
    }), // <--- ESTA COMA es la que separa a Partytown de Sitemap
    sitemap({
      i18n: {
        defaultLocale: "es", // All urls that don't contain language prefix will be treated as default locale
        locales: {
          es: "es", // The `defaultLocale` value must present in `locales` keys
          en: "en",
        },
      },
    }),
    starlight({
      title: "ScrewFast Docs",
      // https://github.com/withastro/starlight/blob/main/packages/starlight/CHANGELOG.md
      // If no Astro and Starlight i18n configurations are provided, the built-in default locale is used in Starlight and a matching Astro i18n configuration is generated/used.
      // If only a Starlight i18n configuration is provided, an equivalent Astro i18n configuration is generated/used.
      // If only an Astro i18n configuration is provided, the Starlight i18n configuration is updated to match it.
      // If both an Astro and Starlight i18n configurations are provided, an error is thrown.
      locales: {
        // 1. La raíz ahora es Español (Micrafil.com cargará en español)
        root: {
          label: "Español",
          lang: "es",
        // 2. Definimos el secundario (Micrafil.com/en cargará en inglés)
        },
        en: { label: "English", lang: "en" },
      },
      // https://starlight.astro.build/guides/sidebar/
      sidebar: [
        {
          label: "Quick Start Guides",
          translations: {
            de: "Schnellstartanleitungen",
            es: "Guías de Inicio Rápido",
            fa: "راهنمای شروع سریع",
            fr: "Guides de Démarrage Rapide",
            ja: "クイックスタートガイド",
            "zh-cn": "快速入门指南",
          },
          autogenerate: { directory: "guides" },
        },
        {
          label: "Tools & Equipment",
          items: [
            { label: "Tool Guides", link: "tools/tool-guides/" },
            { label: "Equipment Care", link: "tools/equipment-care/" },
          ],
        },
        {
          label: "Construction Services",
          autogenerate: { directory: "construction" },
        },
        {
          label: "Advanced Topics",
          autogenerate: { directory: "advanced" },
        },
      ],
      social: [
        {
          icon: "github",
          label: "GitHub",
          href: "https://github.com/mearashadowfax/ScrewFast",
        },
      ],
      disable404Route: true,
      customCss: ["./src/assets/styles/starlight.css"],
      favicon: "/favicon.ico",
      components: {
        SiteTitle: "./src/components/ui/starlight/SiteTitle.astro",
        Head: "./src/components/ui/starlight/Head.astro",
        MobileMenuFooter:
          "./src/components/ui/starlight/MobileMenuFooter.astro",
        ThemeSelect: "./src/components/ui/starlight/ThemeSelect.astro",
      },
      head: [
        {
          tag: "meta",
          attrs: {
            property: "og:image",
            content: "https://www.micrafil.com" + "/social.webp",
          },
        },
        {
          tag: "meta",
          attrs: {
            property: "twitter:image",
            content: "https://www.micrafil.com" + "/social.webp",
          },
        },
      ],
    }),
    compressor({
      gzip: false,
      brotli: true,
      zstd: false,
    }),
    mdx(),
  ],
  experimental: {
    clientPrerender: true,
  },
  vite: {
    plugins: [tailwindcss()],
  },
});
