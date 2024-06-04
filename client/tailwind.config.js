/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./App.{js,jsx,ts,tsx}", "./src/**/*.{js,jsx,ts,tsx}", "./Views/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      sizes: {
        w: {
          80: "80px",
        }
      }
    },
  },
  plugins: [],
}

