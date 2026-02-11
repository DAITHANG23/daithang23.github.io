// @ts-check

import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import { defineConfig, fontProviders } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  output: 'static',
  site: 'https://domcoding.it.com',
   base: "/REPO/",
  integrations: [mdx(), sitemap()],

  vite: {
    plugins: [tailwindcss()],
  },
  experimental: {
    fonts: [{
      provider: fontProviders.google(),
      name: "Inter",
      cssVariable: "--font-inter",
      subsets: ["latin"],
    },
  {
    provider: fontProviders.google(),
    name: "Red Hat Display",
    cssVariable: "--font-red-hat-display",
    subsets: ["latin"],
  }]
  },
  
});