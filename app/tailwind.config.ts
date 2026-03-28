import type { Config } from 'tailwindcss'

export default {
  content: ['./index.html', './src/**/*.{vue,ts}'],
  theme: {
    extend: {
      colors: {
        primary: '#7C3AED',
        accent: '#06B6D4',
        dark: {
          DEFAULT: '#111827',
          card: '#1F2937',
        },
        muted: '#6B7280',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-primary': 'linear-gradient(135deg, var(--color-primary), var(--color-accent))',
      },
    },
  },
  plugins: [],
} satisfies Config
