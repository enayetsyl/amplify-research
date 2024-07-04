/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary-orange': '#FF6600',
        'blue': '#389DFF',
        'deep-blue': '#2976A5',
        'dark-blue': '#1E656D',
        'blackish-blue': '#031F3A',
        'red': '#F35757',
        'ash': '#A8A8A8',
        'gray': '#404040',
      },
    },
  },
  plugins: [],
}
