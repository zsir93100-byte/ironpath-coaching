import type { Config } from 'tailwindcss';

export default {
  content: ['./app/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: ['selector', '[data-theme="dark"]'],
  theme: {
    extend: {
      colors: {
        iron: {
          50: '#f6f7f9',
          100: '#eceef2',
          200: '#d5d9e2',
          300: '#b0b8c9',
          400: '#8592ab',
          500: '#667491',
          600: '#515d78',
          700: '#424c62',
          800: '#3a4153',
          900: '#2d3340',
          950: '#1a1e28'
        },
        forge: {
          50: '#fff7ed',
          100: '#ffeed4',
          200: '#ffd9a8',
          300: '#ffbe71',
          400: '#ff9a38',
          500: '#ff7b11',
          600: '#f06007',
          700: '#c74808',
          800: '#9e390f',
          900: '#7f3210',
          950: '#451606'
        }
      },
      boxShadow: {
        soft: '0 20px 60px rgba(10, 14, 23, 0.12)',
        iron: '0 8px 30px rgba(249, 115, 22, 0.15)',
        card: '0 4px 20px rgba(0, 0, 0, 0.08), 0 1px 3px rgba(0, 0, 0, 0.05)'
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        display: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif']
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-out',
        'slide-up': 'slideUp 0.6s ease-out'
      },
      keyframes: {
        fadeIn: { '0%': { opacity: '0' }, '100%': { opacity: '1' } },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' }
        }
      }
    }
  },
  plugins: [require('tailwindcss-animate')]
} satisfies Config;
