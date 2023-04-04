/** @type {import('tailwindcss').Config} */
module.exports = {
  important: true,
  content: [
    './pages/*.{vue,js,ts,jsx,tsx}',
    '../../packages/react-components/src/**/*.{vue,js,ts,jsx,tsx}',
    '../../packages/ui-shared/*.tsx'
  ],
  presets: [
    require('@prism2/tailwind-preset')
  ],
}
