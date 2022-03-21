const defaultTheme = require('tailwindcss/defaultTheme')
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
    "./lib/**/*.{vue,js,ts,jsx,tsx}",
  ],
  presets: [
    require('@prism2/tailwind-preset')
  ]
}
