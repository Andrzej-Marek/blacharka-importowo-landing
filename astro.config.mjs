import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import vercelStatic from "@astrojs/vercel/static";
import sitemap from "@astrojs/sitemap";
import compressor from "astro-compressor";
import starlight from "@astrojs/starlight";
import netlify from "@astrojs/netlify";
import vercel from "@astrojs/vercel/serverless";

import partytown from "@astrojs/partytown";

// https://astro.build/config
export default defineConfig({
  // https://docs.astro.build/en/guides/images/#authorizing-remote-images
  site: "https://serwis.importowo.pl",
  image: {
    domains: ["images.unsplash.com"],
  },
  i18n: {
    defaultLocale: "pl",
    locales: ["pl", "en"],
    fallback: {
      en: "en",
    },
    routing: {
      prefixDefaultLocale: false,
    },
  },
  prefetch: true,
  integrations: [
    tailwind(),
    sitemap({
      i18n: {
        defaultLocale: "pl",
        locales: {
          pl: "pl",
        },
      },
    }),
    partytown({
      config: {
        forward: ["dataLayer.push"]
      },
    }),
    starlight({
      title: "Serwis Blacharski Importowo",
      defaultLocale: "root",
      locales: {
        root: {
          label: "Polish",
          lang: "pl",
        },
        de: {
          label: "Deutsch",
          lang: "de",
        },
        es: {
          label: "Español",
          lang: "es",
        },
        fa: {
          label: "Persian",
          lang: "fa",
          dir: "rtl",
        },
        fr: {
          label: "Français",
          lang: "fr",
        },
        ja: {
          label: "日本語",
          lang: "ja",
        },
        "zh-cn": {
          label: "简体中文",
          lang: "zh-CN",
        },
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
          autogenerate: {
            directory: "guides",
          },
        },
        {
          label: "Tools & Equipment",
          items: [
            {
              label: "Tool Guides",
              link: "tools/tool-guides/",
            },
            {
              label: "Equipment Care",
              link: "tools/equipment-care/",
            },
          ],
        },
        {
          label: "Construction Services",
          autogenerate: {
            directory: "construction",
          },
        },
        {
          label: "Advanced Topics",
          autogenerate: {
            directory: "advanced",
          },
        },
      ],
      social: {
        github: "https://github.com/mearashadowfax/ScrewFast",
      },
      disable404Route: true,
      customCss: ["./src/styles/starlight.css"],
      favicon: "/favicon.ico",
      components: {
        SiteTitle: "./src/components/ui/starlight/SiteTitle.astro",
        Head: "./src/components/ui/starlight/Head.astro",
      },
      head: [
        {
          tag: "meta",
          attrs: {
            property: "og:image",
            content:
              "https://f003.backblazeb2.com/file/importowo-prod/static/og-image.webp",
          },
        },
        {
          tag: "meta",
          attrs: {
            property: "twitter:image",
            content:
              "https://f003.backblazeb2.com/file/importowo-prod/static/og-image.webp",
          },
        },
      ],
    }),
    compressor({
      gzip: false,
      brotli: true,
    }),
  ],
  output: "hybrid",
  experimental: {
    clientPrerender: true,
    directRenderScript: true,
  },
  adapter: vercel(),
});
