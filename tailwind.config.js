/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        'custom': ["Varela Round", 'sans-serif'], 
        'second': ["Aclonica", 'sans-serif'], 
        'head': ["Lilita One", 'sans-serif'], 
      },
      borderWidth: {
      '3': '3px',
      },
      animation: {
        scale : 'someScale 1s ease-in-out',
        spinSlow: 'spin 8s infinite linear'

      },
      keyframes: {
        someScale: {
          '0%, 100%': { transform: 'scale(1)' },
          '50%': { transform: 'scale(1.2)' },
        }},
    },
  },
  plugins: [],
}

