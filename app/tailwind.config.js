/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'teal-soft': 'hsl(180, 50%, 90%)',
        'teal-accent': 'hsl(180, 30%, 70%)',
        'maroon-muted': 'hsl(340, 30%, 50%)',
        'gray-light': 'hsl(210, 15%, 95%)',
      },
    },
  },
  plugins: [],
}

