import typography from '@tailwindcss/typography';

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      fontFamily: {
        serif: ['Noto Serif SC', 'serif'],
        sans: ['Noto Sans SC', 'sans-serif'],
        mono: ['JetBrains Mono', 'Fira Code', 'monospace'],
      },
      // 定义一组自定义颜色，方便统一管理（可选）
      colors: {
        // 你原本的深色背景，这里显式命名，方便引用
        brand: {
          dark: '#2d3748',
          primary: '#3182ce', // 你原来的蓝，或者改为 '#4f46e5' (Indigo) 更优雅
        }
      },
      typography: (theme) => ({
        DEFAULT: {
          css: {
            maxWidth: '100%',
            fontFamily: theme('fontFamily.serif'),

            // === 1. 全局色调优化 ===
            // 使用 slate-700 代替 gray-700。Slate 带有微蓝倾向，
            // 完美呼应你的 #2d3748 背景，比纯中性灰更有质感。
            color: theme('colors.slate.700'),

            // === 2. 段落优化 ===
            p: {
              marginTop: '1.5em', // 稍微再加大一点段间距，增强呼吸感
              marginBottom: '1.5em',
              lineHeight: '1.8', // 1.8 也是中文衬线体阅读的黄金行高
            },

            // === 3. 标题优化 ===
            'h1, h2, h3, h4, h5, h6': {
              fontFamily: theme('fontFamily.sans'),
              color: theme('colors.slate.900'), // 更深邃的黑
              fontWeight: '700',
              letterSpacing: '-0.025em',
            },
            h2: {
              marginTop: '2.5em', // 增加层级区分
              marginBottom: '1em',
              paddingBottom: '0.3em',
              borderBottom: '1px solid',
              borderColor: theme('colors.slate.200'), // 更轻盈的分割线
            },
            h3: {
              marginTop: '2em',
              marginBottom: '0.75em',
            },

            // === 4. 引用块 (Blockquote) 优化 - 杂志风格 ===
            blockquote: {
              fontWeight: '400',
              fontStyle: 'normal',
              color: theme('colors.slate.600'),
              borderLeftWidth: '4px',
              // 使用你的品牌色作为边框，或者用 Indigo-500 提亮
              borderLeftColor: theme('colors.indigo.500'),
              backgroundColor: theme('colors.slate.50'), // 极淡的岩灰背景
              padding: '0.75rem 1.25rem',
              borderRadius: '0.375rem',
              marginTop: '1.5em',
              marginBottom: '1.5em',
              quotes: 'none',
            },
            'blockquote p:first-of-type::before': { content: 'none' },
            'blockquote p:last-of-type::after': { content: 'none' },

            // === 5. 行内代码 (Inline Code) 优化 - 优雅风格 ===
            // 之前的粉色+灰背景对比度太高。
            // 方案A：复古红（Notion风）
            // 方案B：深紫色（极客风）
            // 这里采用方案A，更适合阅读。
            code: {
              color: theme('colors.rose.700'), // 优雅的深玫瑰红
              backgroundColor: theme('colors.rose.50'), // 极淡的红底，与文字呼应
              // 或者是单色风格：
              // color: theme('colors.slate.700'),
              // backgroundColor: theme('colors.slate.100'),

              padding: '0.2em 0.4em',
              borderRadius: '0.25rem',
              fontWeight: '600', // 稍微加粗一点点
              fontSize: '0.875em',
              fontFamily: theme('fontFamily.mono'),
              border: '1px solid rgba(0,0,0,0.05)', // 微弱的边框增加精致感
            },
            'code::before': { content: 'none' },
            'code::after': { content: 'none' },

            // === 6. 代码块 (Pre) 优化 ===
            pre: {
              backgroundColor: '#2d3748', // 你的核心色
              color: '#e2e8f0', // Slate-200，比纯白更柔和，保护视力
              borderRadius: '0.5rem',
              marginTop: '1.5em',
              marginBottom: '1.5em',
              boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)', // 增加立体感
              border: '1px solid rgba(255,255,255,0.05)', // 在深色背景上增加微妙的高光边框
            },
            // 确保代码块内的代码字体正确
            'pre code': {
              backgroundColor: 'transparent',
              color: 'inherit',
              fontSize: '0.9em',
              fontWeight: '400',
              border: 'none', // 去除行内代码的边框样式
              padding: '0',
            },

            // === 7. 列表优化 ===
            'ul > li': {
              paddingLeft: '0.375em',
            },
            'ul > li::marker': {
              color: theme('colors.indigo.400'), // 用淡靛青色做圆点，比灰色更灵动
            },
            li: {
              marginTop: '0.5em',
              marginBottom: '0.5em',
            },

            // === 8. 链接优化 ===
            a: {
              color: theme('colors.indigo.600'), // Indigo 比纯蓝更具高级感
              textDecoration: 'none',
              fontWeight: '500',
              transition: 'all 0.2s',
              borderBottom: '1px solid transparent',
              // 加上这个，让链接在 hover 时有一个很浅的背景，类似 Medium
              '&:hover': {
                color: theme('colors.indigo.800'),
                backgroundColor: theme('colors.indigo.50'),
                borderRadius: '0.25rem',
              },
            },

            // === 9. 图片优化 ===
            img: {
              borderRadius: '0.75rem', // 更圆润一点
              boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)', // 更高级的阴影
              marginTop: '2.5em',
              marginBottom: '2.5em',
            },

            // === 10. 分割线优化 ===
            hr: {
              borderColor: theme('colors.slate.200'),
              marginTop: '3em',
              marginBottom: '3em',
            },
          },
        },
      }),
    },
  },
  plugins: [typography],
};
