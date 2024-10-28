/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      textStrokeWidth: {
        '1.4': '1.4px'
      }
    },
  },
  plugins: [
    function ({ addUtilities }) {
      addUtilities({
        '.text-stroke-1-4': {
          '-webkit-text-stroke-width': '1.4px'
        }
      })
    }
  ],
}

