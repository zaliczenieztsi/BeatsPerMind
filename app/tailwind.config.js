/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'teal-soft': '#99f6e4',
        'teal-accent': '#5eead4',
        'maroon-muted': '#800020',
        'gray-light': '#f0f8ff',
      },
      keyframes: {
        breathe: {
          '0%, 100%': { transform: 'scale(1)', opacity: '0.4' },
          '50%': { transform: 'scale(1.1)', opacity: '0.7' },
        },
      },
      animation: {
        breathe: 'breathe 8s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}