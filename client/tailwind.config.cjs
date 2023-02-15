/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.tsx', './index.html'],
  theme: {
    extend: {
      colors: {
        'green-800': '#015f43',
        'green-500': '#00875f',
        'green-300': '#00b37e',

        'red-800': '#aa2834',
        'red-300': '#f75a68',

        'gray-900': '#121214',
        'gray-800': '#202024',
        'gray-700': '#29292e',
        'gray-600': '#323238',
        'gray-500': '#7c7c8a',
        'gray-300': '#c4c4cc',
        'gray-200': '#e1e1e6',

        white: '#ffffff',
      },
      fontFamily: {
        sans: ['Roboto', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
