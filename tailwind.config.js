module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      sans: ["Helvetica", "sans-serif"]
    },
    container: {
      center: true
    },
    minHeight: {
      '1/2': '50%'
    },
    borderWidth: {
      '3': '3px'
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
