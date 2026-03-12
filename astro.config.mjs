// @ts-check

import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import { defineConfig, fontProviders } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import remarkGfm from 'remark-gfm'
import remarkToc from 'remark-toc';
import rehypeStringify from 'rehype-stringify';
import remarkHint from 'remark-hint';
import remarkCollapse from 'remark-collapse';
import {
  transformerNotationDiff,
  transformerNotationHighlight,
  transformerNotationWordHighlight,
} from "@shikijs/transformers";

// https://astro.build/config
export default defineConfig({
  output: 'static',
  site: 'https://daithang23.github.io',
  integrations: [mdx(), sitemap()],
  markdown:{
    remarkPlugins:[
       remarkHint,
       remarkGfm,
       remarkToc,
       rehypeStringify,
       [
        remarkCollapse,
        {
          test: "Table of contents",
        },
      ],
    ],
    shikiConfig: {
      // For more themes, visit https://shiki.style/themes
      theme: 'dracula',
      themes: { light: 'min-light', dark: 'night-owl'},
      defaultColor: false,
      wrap: false,
      transformers: [
        // transformerFileName({ style: "v2", hideDot: false }),
        transformerNotationHighlight(),
        transformerNotationWordHighlight(),
        transformerNotationDiff({ matchAlgorithm: "v3" }),
      ],
    },
  },
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
    weights: ["400", "500", "600", "700", "800"]
  }],
  },
  
});