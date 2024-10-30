/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      textStrokeWidth: {
        '1.4': '1.4px #000000'
      },
      boxShadow: {
        custom:'0px 6px 8px -6px rgba(24, 39, 75, 0.12), 0px 8px 16px -6px rgba(24, 39, 75, 0.08)',
      },
      
    },
  },
  plugins: [
    function ({ addUtilities }) {
      addUtilities({
        '.text-stroke-1-4': {
          '-webkit-text-stroke': '1.4px #000000',
        }
      })
    }
  ],
}

