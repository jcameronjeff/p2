
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
    // provides ui-active ui-selected etc classes
    require('@headlessui/tailwindcss')({ prefix: 'ui' }),
    // provides basic form resets
    require('@tailwindcss/forms'),
    // provides .prose and children
    require('@tailwindcss/typography'),
    // provides tw components
    require('@prism2/tailwind-elements')({
      parent: '',
      strategy: 'class',
    }),
    function ({ addBase, theme, addVariant }) {
      addBase({
        'strong, b': { fontWeight: theme('fontWeight.semibold') },
      });
      addVariant('optional', '&:optional');
      addVariant('completed', '&[aria-complete="true"]');
      addVariant('selected', '&[aria-selected="true"]');
      addVariant('icons', '&>svg');
      addVariant('track', ['&::-webkit-slider-runnable-track', '&::-moz-range-track', '&::-mstrack']);
      addVariant('thumb', ['&::-webkit-slider-thumb', '&::-moz-range-thumb', '&::-ms-thumb']);
      addVariant('value', ['&::-webkit-progress-value', '&::-moz-progress-bar']);
      addVariant('bar', ['&::-webkit-progress-bar']);
    },
  ]
}


