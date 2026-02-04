// 1. 从 astro:content 导入工具
import { defineCollection, z } from 'astro:content';

// 2. 定义你的博客集合模式 (Schema)
const blogCollection = defineCollection({
    type: 'content', // 'content' 表示这是 Markdown/MDX 文件（包含正文）
    // schema 使用 Zod (z) 来校验数据格式
    schema: ({ image }) => z.object({
        title: z.string(), // 标题必须是字符串
        description: z.string(),
        // 允许日期是字符串或 Date 对象，最终都会转为 Date
        pubDate: z.coerce.date(),
        updatedDate: z.coerce.date().optional(), // 可选字段
        // 封面图（使用 image() 辅助函数以支持本地图片校验）
        heroImage: image().optional(),
        // 这是一个布尔值，用于标记草稿，发布时过滤掉
        isDraft: z.boolean().default(false),
    }),
});
const tracesCollection = defineCollection({
    type: 'content',
    schema: ({ image }) => z.object({
        date: z.date(), // 发布时间
        // 允许没有图片，或者有多张图片
        images: z.array(image()).optional(),
    }),
});

// 3. 导出集合对象
// 这里的键名 'blogs' 必须和你 src/content/ 下的文件夹名完全一致！
export const collections = {
    'blogs': blogCollection,
    'traces': tracesCollection,
};
