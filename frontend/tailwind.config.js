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
    boxShadow : {
      // 'custom': '19px 5px 103px 2px rgba(0, 0, 0, 0.75)',
      'custom': '2px 2px 6px 0px rgba(0, 0, 0, 0.5)',

    }
  },
  },
  plugins: [],
};
