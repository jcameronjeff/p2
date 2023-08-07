/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./**/*.html', './**/*.js', './**/**/*.js'], // update this line
  theme: {
    extend: require('@prism2/tailwind-theme-manheim'),
  },
  plugins: [...require('./index').plugins],
};
