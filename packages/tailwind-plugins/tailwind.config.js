/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./**/*.html'],
  theme: {
    extend: require('@prism2/tailwind-theme-manheim'),
  },
  plugins: [
    ...(require('./index').plugins)
  ]
};
