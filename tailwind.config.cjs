/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}",
  "node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        noto: "'Noto Sans', sans-serif",
        clarikaBold: "'Clarika bold', bold",
        drukTextWide:"'Druk Text Wide', bold",
        syne:"'Syne', sans-serif"
      }
    },
  },
  plugins: [
    require('flowbite/plugin')
  ],
}
