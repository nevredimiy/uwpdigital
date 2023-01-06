/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    screens: {
      '2xl': '1650px',
      'xl': '1280px',
      'lg': '1024px',
      'md': '820px',

    },
    container: {
      padding: {
        DEFAULT: '1.25rem',
        md: '30px',
      }
    },
    extend: {
      gridTemplateColumns: {
        '2col': '25% 75%',
        '3col': '20% 40% 40%',
      },
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