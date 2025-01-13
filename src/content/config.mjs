import { defineCollection, z } from 'astro:content'

const posts = defineCollection({
  type: 'content',
  schema: z.object({
    type: z
      .union([z.literal('note'), z.literal('post'), z.literal('page')])
      .nullish(),
    tags: z.array(z.string()),
    excerpt: z.string().nullish(),
    createdAt: z.date().nullish(),
    updatedAt: z.date().nullish(),
    name: z.string().nullish(),
    cover: z.string().nullish(),
    icon: z.string().nullish(),
    title: z.string(),
  }),
})

const collections = {
  posts,
}

export { collections }
