/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,ts,jsx,tsx,mdx}',
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx}',
    '../../packages/ui/**/*.{js,ts,jsx,tsx,json}',
    '../../packages/utils/*.{js,ts,jsx,tsx,json}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter Var'],
      },
    },
  },
  plugins: [],
};
