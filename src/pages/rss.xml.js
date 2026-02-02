import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';
import { SITE_TITLE, SITE_DESCRIPTION } from '../consts';

export async function GET(context) {
  // 1. 获取你的博客内容集合
  const posts = await getCollection('blogs');

  // 2. 返回 RSS 对象
  return rss({
    // 订阅源的标题和描述
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,

    // 从全局上下文获取你的网站地址 (astro.config.mjs 里的 site)
    site: context.site,

    // 3. 构建列表：把你的文章数据映射成 RSS 需要的格式
    items: posts.map((post) => ({
      // 文章标题
      title: post.data.title,
      // 发布日期 (RSS 阅读器主要靠这个排序)
      pubDate: post.data.pubDate,
      // 文章描述
      description: post.data.description,
      // 文章链接：注意这里要拼出正确的路径
      // 假设你的文章页路由是 /blog/slug-name/
      link: `/blog/${post.slug}/`,
    })),

    // 可选：自定义 XML 样式，让直接在浏览器打开 RSS 的人看也没那么丑
    // stylesheet: '/rss/styles.xsl',
  });
}
