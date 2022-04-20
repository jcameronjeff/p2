
const defaultTheme = require('tailwindcss/defaultTheme')
const plugin = require('tailwindcss/plugin')
const prismElements = require('./prismElements')
const prismTheme = require('./prismTheme');
/**
 * @name @prism2/tailwind-preset
 * @abstract Tailwind3 theme preset for fonts, colors, sizing and more based on PRISM design system.
 * @see https://www.figma.com/file/s6JUhCoI4VK6RGNyDFWc2z/%F0%9F%A7%B0-PRISM-Component-Library
 */
module.exports = {
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


