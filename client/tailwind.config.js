/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./App.{js,jsx,ts,tsx}", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      sizes: {
        w: {
          80: "80px",
        }
      },
      textShadow: {
        'default': '2px 2px 4px rgba(255, 255, 255, 0.5)',
        'md': '3px 3px 6px rgba(0, 0, 0, 0.5)',
        'lg': '20px 20px 40px rgba(255, 255, 255, 0.5)',
        'black': '3px 3px 6px rgba(0, 0, 0, 0.5)',
      },
      stroke: {
        'blacki': '3px black',
      },
      outline: {
        'transp': '10px solid transparent'
      },
      animation: {
        'slide': 'slide 5s linear infinite'
      },
      backgroundSize: {
        '50%': '50%',
      },
      keyframes: {
        slide: {
          '0%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(-100%)' },
        }
      }
    },
  },
  variants: {
    textShadow: ['responsive', 'hover', 'focus'],
  },
  plugins: [
    function({ addUtilities }) {
      const newUtilities = {
        '.text-shadow': {
          textShadow: '2px 2px 4px rgba(255, 255, 255, 0.5)',
        },
        '.text-shadow-md': {
          textShadow: '3px 3px 6px rgba(0, 0, 0, 0.5)',
        },
        '.text-shadow-lg': {
          textShadow: '8px 8px 16px rgba(255, 255, 255, 0.5)',
        },
        '.text-shadow-black': {
          textShadow: '3px 3px 6px rgba(0, 0, 0, 0.5)',
        },
        '.stroke-blacki': {
          stroke: '3px black'
        },
        '.outline-transp': {
          outline: '10px solid transparent'
        },
      }

      addUtilities(newUtilities, ['responsive', 'hover'])
    }
  ],
}

