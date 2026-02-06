import { defineCollection, z } from 'astro:content';

const blogCollection = defineCollection({
    type: 'content',
    schema: ({ image }) =>
        z.object({
            title: z.string(),
            description: z.string(),
            pubDate: z.coerce.date(),
            updatedDate: z.coerce.date().optional(),
            heroImage: image().optional(),
            isDraft: z.boolean().default(false),
            updates: z
                .array(
                    z.object({
                        date: z.coerce.date(),
                        content: z.string(),
                        type: z.enum(['correction', 'update', 'note']).optional().default('update'), // 类型
                    })
                )
                .optional(),
        }),
});
const tracesCollection = defineCollection({
    type: 'content',
    schema: ({ image }) =>
        z.object({
            date: z.date(),
            images: z.array(image()).optional(),
        }),
});

const thoughtCollection = defineCollection({
    type: 'content',
    schema: ({ image }) =>
        z.object({
            title: z.string(),
            description: z.string(),
            pubDate: z.coerce.date(),
            updatedDate: z.coerce.date().optional(),
            heroImage: image().optional(),
            isDraft: z.boolean().default(false),
            updates: z
                .array(
                    z.object({
                        date: z.coerce.date(),
                        content: z.string(),
                        type: z.enum(['correction', 'update', 'note']).optional().default('update'), // 类型
                    })
                )
                .optional(),
        }),
});

const lab = defineCollection({
    type: 'content',
    schema: z.object({
        title: z.string(),
        description: z.string(),
        pubDate: z.coerce.date(),
        updatedDate: z.coerce.date().optional(),
        tags: z.array(z.string()).optional(),
        version: z.string().optional().default('1.0'),
    }),
});

export const collections = {
    blogs: blogCollection,
    traces: tracesCollection,
    thoughts: thoughtCollection,
    lab: lab,
};
