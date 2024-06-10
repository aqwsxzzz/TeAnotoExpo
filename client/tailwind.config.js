/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./App.{js,jsx,ts,tsx}", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        'carne-picada': "url('@/Images/carne-picada.jpg')",
      },
      sizes: {
        w: {
          80: "80px",
        }
      },
    },
  },
  plugins: [],
}

