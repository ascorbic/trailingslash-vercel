// @ts-check
import { defineConfig } from 'astro/config';
import vercel from '@astrojs/vercel';
import { i18n, filterSitemapByDefaultLocale } from "astro-i18n-aut/integration";
import sitemap from "@astrojs/sitemap";

const locales = { th: "th-TH", en: "en-US" }
const defaultLocale = "th"

// https://astro.build/config
export default defineConfig({
  trailingSlash: "always",
  build: {
    format: "directory",
  },
  output: 'server',
  adapter: vercel(),
  integrations: [
    i18n({
      locales,
      defaultLocale,
      exclude: [
        "pages/api/**/*",
        "pages/**/[[]*[]].astro",
      ],
    }),
    sitemap({
      i18n: {
        locales,
        defaultLocale,
      },
      filter: filterSitemapByDefaultLocale({ defaultLocale }),
    }),
  ],
});
