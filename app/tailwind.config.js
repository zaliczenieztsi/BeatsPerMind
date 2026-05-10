/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'teal-soft': '#0d9488',
        'teal-accent': '#0f766e',
        'maroon-muted': '#881337',
        'gray-light': '#f0f8ff',
      },
      keyframes: {
        breathe: {
          '0%, 100%': { transform: 'scale(1)', opacity: '0.5' },
          '50%': { transform: 'scale(1.1)', opacity: '0.8' },
        },
      },
      animation: {
        breathe: 'breathe 8s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}