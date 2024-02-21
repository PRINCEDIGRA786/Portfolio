/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'phone': { 'min': '200px', 'max': '360px' }
      }
    },
  },
  plugins: [],
}