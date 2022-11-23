/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './app/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        'inter': ['Inter', 'sans-serif'],
        'quicksand': ['Quicksand', 'sans-serif'],
      },
      boxShadow: {
        'frame': 'rgb(204, 219, 232) 3px 3px 6px 0px inset, rgba(255, 255, 255, 0.5) -3px -3px 6px 1px inset',
        'model': 'rgba(49, 78, 151, 0.4) 0px 2px 4px, rgba(0, 242, 254, 0.3) 0px 7px 13px -3px, rgba(69, 169, 221, 0.2) 0px -3px 0px inset'
      }
    },

  },
  plugins: [],
  darkMode: 'class',
}
