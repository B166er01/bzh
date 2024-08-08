/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        creamCake: ["CreamCake", "sans-serif"],
        poppins: ["Poppins", "sans-serif"],
      },
      colors: {
        myRed: "#450a0a",
        myWhite: "#fef2f2",
      },
    },
  },
  plugins: [require("@designbycode/tailwindcss-text-stroke")],
};
