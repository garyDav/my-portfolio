// 1. Import utilities from `astro:content`
import { defineCollection } from 'astro:content';

// 2. Import loader(s)
import { glob, file } from 'astro/loaders';

// 3. Import Zod
import { z } from 'astro/zod';

export const blogSchema = z.object({
  title: z.string(),
  author: z.string(),
  img: z.string(),
  readtime: z.number(),
  description: z.string(),
});

// 4. Define a `loader` and `schema` for each collection
const blogs = defineCollection({
  loader: glob({ base: './src/content/blogs', pattern: '**/*.{md,mdx}' }),
  schema: blogSchema,
});

// 5. Export a single `collections` object to register your collection(s)
export const collections = { blogs };
