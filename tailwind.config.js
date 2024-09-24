/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: "#F6FBFD",
        post_green: "#CEFFA3",
        post_red: "#FF888D",
        post_yellow: "#FEF493",
      }
    },
  },
  plugins: [],
}