
/**
 * @name @prism2/tailwind-preset
 * @abstract Tailwind3 theme preset for fonts, colors, sizing and more based on PRISM design system.
 * @see https://www.figma.com/file/s6JUhCoI4VK6RGNyDFWc2z/%F0%9F%A7%B0-PRISM-Component-Library
 */
module.exports = {
  theme: {
    extend: require('@prism2/tailwind-theme')
  },
  plugins: [
    require('@tailwindcss/typography'),
    // allows ex: .prism-base h2
    require('@prism2/tailwind-elements')({
      parent: '.prism-base',
      strategy: 'base',
    }),
    // allows ex: .prism-heading-2
    require('@prism2/tailwind-elements')({
      prefix: 'prism-',
      strategy: 'class',
    }),
    // allows ex: .prism-enabled .prism-heading-2
    require('@prism2/tailwind-elements')({
      parent: '.prism-enabled',
      prefix: 'my-component-',
      strategy: 'class'
    })
  ],
}


