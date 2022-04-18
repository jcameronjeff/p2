const defaultTheme = require('tailwindcss/defaultTheme')
module.exports = {
  important: true,
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx,css}",
    // "./src/views/*.tsx",
    // "./src/App.tsx",
    "./lib/**/*.{vue,js,ts,jsx,tsx}",
    "./lib/*.{vue,js,ts,jsx,tsx}",
  ],
  presets: [
    require('@prism2/tailwind-preset')
  ]
}
