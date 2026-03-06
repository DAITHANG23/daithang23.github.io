import { getCollection } from "astro:content";
import rss from "@astrojs/rss";
import { SITE } from "../constants";

export async function GET() {
  const posts = await getCollection("blog");
  return rss({
    title: SITE.title,
    description: SITE.description,
    site: SITE.website,
    items: posts.map(post => ({
      ...post.data,
      link: `/blog/${post.id}/`,
    })),
  });
}
