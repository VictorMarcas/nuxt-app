/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')
const containerScreens = Object.assign({}, defaultTheme.screens)
delete containerScreens['2xl']
module.exports = {
  content: [
    './components/**/*.{js,vue,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './nuxt.config.{js,ts}',
  ],
  theme: {
    extend: {
      fontFamily: {
        manrope: ['Manrope', 'sans-serif'],
        'montserrat-alt': ['Montserrat Alternates', 'sans-serif'],
      },
    },
    container: {
      screens: containerScreens,
    },
  },
  plugins: [],
}
