/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        'base-black': '#171717',
        'base-white': '#F8F8F8',
        'base-red': '#FF304D',
        'base-gray': '#919191',
      },
      keyframes: {
        wiggle: {
          '0%, 100%': { transform: 'rotate(-3deg)' },
          '50%': { transform: 'rotate(3deg)' },
        },
        moveTo: {
          '50%': { left: '0' },
          '100%': { left: '100%' },
        }
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(#FF304D,#171717)',
      }
    },
  },
  plugins: [],
}