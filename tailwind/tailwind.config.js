/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors')

module.exports = {
  mode: 'jit',
  content: ['../hugo/layouts/**/*.html', '../hugo/content/*.html'],
  theme: {
    extend: {
      colors: {
        sprottyDarkBlue: '#115E8E',
        sprottyMidBlue: '#9CBFE2',
        sprottyLightBlue: '#CDDFF1',
        sprottyTeal: '#00788E'
      },
      backgroundImage: {
        'waves': "url('/assets/waves.svg')"
      },
      fontFamily: {
        redHat: ['RedHatDisplay','sans-serif'],
        montserrat: ['Montserrat','sans-serif'],
      },
    },
  },
  plugins: [],
}
