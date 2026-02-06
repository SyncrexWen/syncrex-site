// tailwind.config.mjs
import typography from '@tailwindcss/typography';

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      fontFamily: {
        // Font for the title/heading
        serif: ['Cormorant Garamond', 'Noto Serif SC', 'serif'],
        // Font for the body text
        sans: ['Inter', 'Noto Sans SC', 'sans-serif'],
        // Font for code blocks and inline code
        mono: ['JetBrains Mono', 'Fira Code', 'monospace'],
      },
      // Define colors using CSS variables for better theming support
      colors: {
        // Tailwind color class that references the CSS variable with alpha support
        primary: 'rgb(var(--theme-color-primary))',
        // Semantic colors that directly use the CSS variables
        main: 'var(--c-main)',
        bg: 'var(--c-bg)',
        muted: 'var(--c-muted)',
      },
      typography: (theme) => ({
        DEFAULT: {
          css: {
            // Optimize the base styles for better readability and aesthetics
            maxWidth: '100%',
            fontFamily: theme('fontFamily.serif'),

            // === Global color optimize ===
            // Use slate-700 as the default text color
            // for better readability and a more modern look,
            // instead of the default slate-800 which can be a bit too dark on light backgrounds.
            color: theme('colors.slate.700'),

            // === Optimize paragraph element ===
            p: {
              // Using a larger line height and more generous vertical spacing
              // significantly enhance readability, especially for longer texts.
              // The default Tailwind typography plugin uses a line height of around 1.75, which is good,
              // but we can push it slightly higher to 1.8 for an even more comfortable reading experience.
              // Additionally, increasing the margin above and below paragraphs to 1.5em
              // creates a clearer separation between blocks of text,
              // making it easier for readers to follow along without feeling visually cramped.
              marginTop: '1.5em',
              marginBottom: '1.5em',
              lineHeight: '1.8',
            },

            // === Optimize the heading elements ===
            'h1, h2, h3, h4, h5, h6': {
              fontFamily: theme('fontFamily.sans'),
              color: theme('colors.slate.900'),
              fontWeight: '700',
              letterSpacing: '-0.025em',
            },
            h2: {
              marginTop: '2.5em',
              marginBottom: '1em',
              paddingBottom: '0.3em',
              borderBottom: '1px solid',
              borderColor: theme('colors.slate.200'),
            },
            h3: {
              marginTop: '2em',
              marginBottom: '0.75em',
            },

            // === Optimize the quote block element ===
            blockquote: {
              fontWeight: '400',
              fontStyle: 'normal',
              color: theme('colors.slate.600'),
              borderLeftWidth: '4px',
              borderLeftColor: theme('colors.indigo.500'),
              backgroundColor: theme('colors.slate.50'),
              padding: '0.75rem 1.25rem',
              borderRadius: '0.375rem',
              marginTop: '1.5em',
              marginBottom: '1.5em',
              quotes: 'none',
            },
            'blockquote p:first-of-type::before': { content: 'none' },
            'blockquote p:last-of-type::after': { content: 'none' },

            // === Optimize inline code element ===
            code: {
              // Use two color schemes for inline code:
              // a vibrant theme
              color: theme('colors.rose.700'),
              backgroundColor: theme('colors.rose.50'),
              // monochrome
              // color: theme('colors.slate.700'),
              // backgroundColor: theme('colors.slate.100'),

              padding: '0.2em 0.4em',
              borderRadius: '0.25rem',
              fontWeight: '600',
              fontSize: '0.875em',
              fontFamily: theme('fontFamily.mono'),
              border: '1px solid rgba(0,0,0,0.05)',
            },
            'code::before': { content: 'none' },
            'code::after': { content: 'none' },

            // === Optimize the pre element ===
            pre: {
              backgroundColor: '#2d3748',
              color: '#e2e8f0',
              borderRadius: '0.5rem',
              marginTop: '1.5em',
              marginBottom: '1.5em',
              boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
              border: '1px solid rgba(255,255,255,0.05)',
            },
            // Config the font styles of pre element
            'pre code': {
              backgroundColor: 'transparent',
              color: 'inherit',
              fontSize: '0.9em',
              fontWeight: '400',
              border: 'none',
              padding: '0',
            },

            // === Optimize list element ===
            'ul > li': {
              paddingLeft: '0.375em',
            },
            'ul > li::marker': {
              color: theme('colors.indigo.400'),
            },
            li: {
              marginTop: '0.5em',
              marginBottom: '0.5em',
            },

            // === Optimize the link element ===
            a: {
              color: theme('colors.indigo.600'),
              textDecoration: 'none',
              fontWeight: '500',
              transition: 'all 0.2s',
              borderBottom: '1px solid transparent',
              // adding a block when hovering
              '&:hover': {
                color: theme('colors.indigo.800'),
                backgroundColor: theme('colors.indigo.50'),
                borderRadius: '0.25rem',
              },
            },

            // === Optimize the image element ===
            img: {
              borderRadius: '0.75rem',
              boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)', // 更高级的阴影
              marginTop: '2.5em',
              marginBottom: '2.5em',
            },

            // === Optimize the hr element ===
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
