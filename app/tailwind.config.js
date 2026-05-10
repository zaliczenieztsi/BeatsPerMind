/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'teal-soft': '#089999',
        'teal-accent': '#0d9488',
        'maroon-muted': '#991b1b',
        'gray-light': '#f0f8ff',
      },
      keyframes: {
        breathe: {
          '0%, 100%': { transform: 'scale(1)', opacity: '0.6' },
          '50%': { transform: 'scale(1.15)', opacity: '0.9' },
        },
      },
      animation: {
        breathe: 'breathe 8s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}