/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        'Amiri': ["Amiri" , "serif"],
        'Cairo': ["Cairo" , "sans-serif"],
      }
    },
    colors: {
      chocolate: "#7B3F00",
      yellow: "#fcee21",
      white: "#ffffff",
      black: "#000000",
      gray: "#70757a",
      lightGray: "#fafafa",
      bgColor: "#eee",
    },
  },
  plugins: [],
}

