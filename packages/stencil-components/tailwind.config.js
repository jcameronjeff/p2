

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{ts,tsx,html}',
  ],
  theme: {
    extend: {},
  },
  plugins: [],
  presets: [
    require('@prism2/tailwind-preset')
  ],
}
