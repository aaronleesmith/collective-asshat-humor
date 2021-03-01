module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    container: {
      center: true
    },
    minHeight: {
      '1/2': '50%'
    },
    extend: {
      
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('tailwind-filter-utilities')
  ]
}
