/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors')

module.exports = {
  mode: 'jit',
  content: ['../hugo/layouts/**/*.html', '../hugo/content/*.html'],
  theme: {
    extend: {
      colors: {
        sprottyBlue: '#00788E'
      }
    },
  },
  plugins: [],
}
