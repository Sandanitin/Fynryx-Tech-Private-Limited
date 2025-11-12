/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'brand': '#16786E',
        'brand-light': '#1a9d8f',
        'brand-dark': '#125a52',
        'brand-50': '#e6f5f3',
        'brand-100': '#b3e0d9',
        'brand-200': '#80cbbf',
      },
    },
  },
  plugins: [],
}
