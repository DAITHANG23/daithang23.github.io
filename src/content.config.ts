import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";
import { SITE } from "./constants";

const blog = defineCollection({
  // Load Markdown and MDX files in the `src/content/blog/` directory.
  loader: glob({ base: "./src/content/blog", pattern: "**/*.{md,mdx}" }),
  // Type-check frontmatter using a schema
  schema: ({ image }) =>
    z.object({
      author: z.string().default(SITE.author),
      title: z.string(),
      description: z.string(),
      // Transform string to Date object
      pubDate: z.coerce.date(),
      updatedDate: z.coerce.date().optional(),
      draft: z.boolean().default(false),
      tags: z.array(z.string()).default(["others"]),
      heroImage: image().or(z.string()).optional(),
    }),
});

export const collections = { blog };
