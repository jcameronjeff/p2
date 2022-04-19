const prismElements = require('./tw/prismElements')
const prismTheme = require('./tw/prismTheme');

module.exports = {
  important: true,
  content: [
    "./index.html",
    "./lib/**/*.{vue,js,ts,jsx,tsx}",
    "./site/**/*.{vue,js,ts,jsx,tsx}",
    "./stories/**/*.{tsx,css,mdx,jsx}",
    "./stories/*.{tsx,css,mdx,jsx}",
    "./tw/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: prismTheme
  },
  plugins: [
    require('@tailwindcss/typography'),
    prismElements({
      prefix: 'prism-'
    })
  ],
}

