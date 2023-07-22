/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ], 
  theme: {
    extend: {},
    screens: {
      'full': {max: '1100px'},
      'tablet': {max: '800px'},
      'mobile': {max: '600px'}
    },
  },
  plugins: [],
}

