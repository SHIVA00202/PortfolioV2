/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: "#0f0f0f",
        fg: "#ffffff",
        card1: "#b2b2b2",
        card2: "#ce2017",
        card3: "#2f2f2f",
      },
    },
  },
  plugins: [],
}