/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],

  theme: {
    extend: {
      fontFamily:{
        pthin:["Poppins-Thin","sans serif"], 
        pextralight:["Poppins-Extralight","san serif"],
        plight:["Poppins-light","sans-serif"],
        pregular:["Poppins-Regular","sans-serif"],
        pmedium:["Poppins-Medium","sans-serif"],
        pblack:["Poppins-Black",""],
      }
    },
  },
  plugins: [],
}