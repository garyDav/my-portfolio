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

export const itemSchema = z.object({
  title: z.string(),
  backLink: z.string(),
  author: z.string(),
  readtime: z.number(),
});

// 4. Define a `loader` and `schema` for each collection
const blogs = defineCollection({
  loader: glob({ base: './src/content/blogs', pattern: '**/*.{md,mdx}' }),
  schema: blogSchema,
});

// Definir a loader y schema para cada colección
const reactNative = defineCollection({
  loader: glob({ base: './src/content/react-native', pattern: '**/*.{md,mdx}' }),
  schema: itemSchema,
});

// 5. Export a single `collections` object to register your collection(s)
export const collections = { blogs, reactNative };
