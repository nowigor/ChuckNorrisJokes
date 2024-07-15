/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: { 
        'mustard': '#F7CE5B',
        'vanila': '#DFD6A7',
        'earth-yellow': '#F7B05B',
        'satin-sheen-gold': '#AF9B46',
        'licorice': '#1F1300'
      },
  },
},
  plugins: [],
}