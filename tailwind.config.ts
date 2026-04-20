import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        forest: {
          50:  '#f2f6f1',
          100: '#dde7d9',
          200: '#b9cdb1',
          300: '#8eaf82',
          400: '#5f8d55',
          500: '#3f6f37',
          600: '#2f5a29',
          700: '#264720',
          800: '#1f3a1b',
          900: '#172d14',
          950: '#0d1b0b',
        },
        cream: {
          50:  '#fbf9f2',
          100: '#f6f1e1',
          200: '#eee4c9',
          300: '#e3d4a7',
          400: '#d7c085',
          500: '#c9a95d',
        },
      },
      fontFamily: {
        display: ['var(--font-display)', 'Georgia', 'serif'],
        sans: ['var(--font-sans)', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        'soft': '0 10px 40px -12px rgba(22, 40, 16, 0.18)',
        'deep': '0 25px 60px -20px rgba(22, 40, 16, 0.35)',
      },
      backgroundImage: {
        'grain': "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/%3E%3CfeColorMatrix values='0 0 0 0 0.12 0 0 0 0 0.24 0 0 0 0 0.12 0 0 0 0.18 0'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
      },
      animation: {
        'marquee': 'marquee 40s linear infinite',
        'fade-up': 'fadeUp 0.6s ease-out',
      },
      keyframes: {
        marquee: {
          '0%':   { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        fadeUp: {
          '0%':   { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
};

export default config;
