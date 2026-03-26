import { defineCollection, z } from 'astro:content';

const blogCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    heroImage: z.string().optional(),
    author: z.string().default('Yuzinchi'),
    tags: z.array(z.string()).default([]),
    draft: z.boolean().default(false),
  }),
});

const articlesCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    heroImage: z.string().optional(),
    author: z.string().default('Yuzinchi'),
    tags: z.array(z.string()).default([]),
    category: z.string(),
    readingTime: z.number().optional(),
    draft: z.boolean().default(false),
    faq: z.array(z.object({
      question: z.string(),
      answer: z.string(),
    })).optional(),
  }),
});

export const collections = {
  blog: blogCollection,
  articles: articlesCollection,
};
