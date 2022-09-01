
/**
 * @name @prism2/tailwind-preset
 * @abstract Tailwind3 theme preset for fonts, colors, sizing and more based on PRISM design system.
 * @see https://www.figma.com/file/s6JUhCoI4VK6RGNyDFWc2z/%F0%9F%A7%B0-PRISM-Component-Library
 */
module.exports = {
  theme: {
    extend: require('@prism2/tailwind-theme'),
    container: {
      center: true
    }
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@prism2/tailwind-elements')({
      parent: '',
      strategy: 'class',
    }),
    function ({ addBase, theme, addVariant }) {
      addBase({
        'strong, b': { fontWeight: theme('fontWeight.semibold') },
      });
      addVariant('optional', '&:optional');
      addVariant('selected', '&[aria-selected="true"]');
    },
  ]
}


