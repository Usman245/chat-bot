/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        mobile: {
          max: "640px"
        }
      }, fontFamily: {
        primary: "Afacad",
        secondary: "Shadows Into Light"

      }
    },
  },
  plugins: [],
}
