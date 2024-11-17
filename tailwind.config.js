/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],

  theme: {
    extend: {
      fontFamily:{
        pthin:["Poppins-Thin","sans serif"], 
        pextralight:["Poppins-Extralight","san serif"],
<<<<<<< HEAD
        plight:["Poppins-light","sans-serif"],
        pregular:["Poppins-Regular","sans-serif"],
        pmedium:["Poppins-Medium","sans-serif"],
        pblack:["Poppins-Black",""],
=======
        plight:["Poppins-Light","sans-serif"],
        pregular:["Poppins-Regular","sans-serif"],
        pmedium:["Poppins-Medium","sans-serif"],
        pblack:["Poppins-Black","sans-serif"],
        lobster:["Lobster-Regular","sans-serif"]
>>>>>>> 5602f6a (First Commit)
      }
    },
  },
  plugins: [],
}