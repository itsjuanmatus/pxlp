const colors = require('tailwindcss/colors')

module.exports = {
  JIT: true,
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        truegray: colors.trueGray,
      }
    }
  },
  variants: {
    extend: {}
  },
  plugins: []
}
