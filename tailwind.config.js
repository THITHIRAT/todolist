/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#585292",
        secondary: "#EBB9B8",
        background: "#D1D0D9",
        lightGrey: "#F5F5F5",
        darkGrey: "#2E2E2E",
      }
    },
  },
  plugins: [],
}
