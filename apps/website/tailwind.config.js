/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{html,js,jsx,md,mdx,ts,tsx}',
    './docs/**/*.{html,js,jsx,md,mdx,ts,tsx}',
  ],
  theme: {
    extend: {},
  },
  presets: [require('@prism2/tailwind-preset')],
};
