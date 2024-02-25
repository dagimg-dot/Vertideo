/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: 'class',
  theme: {
    extend: {
    fill : theme => ({
      'black' : theme('colors.black'),
      'white' : theme('colors.white'),
    }),
    stroke : theme => ({
      'black' : theme('colors.black'),
      'white' : theme('colors.white'),
    }),
  },
  },
  plugins: [],
};
