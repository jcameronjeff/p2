const plugin = require('tailwindcss/plugin');

/**
 * @type {typeof import("tailwindcss/plugin") }
 */
module.exports = plugin(function ({ addComponents, theme }) {
  addComponents({
    '.prism-chip': {
      '--tw-padding': theme('spacing.1'),
      '--tw-padding-x': theme('spacing.2'),
      '--tw-ring-color': theme('colors.gray.200'),
      padding: 'var(--tw-padding) var(--tw-padding-x)',
      display: 'flex',
      gap: theme('spacing.1'),
      whiteSpace: 'nowrap',
      alignItems: 'center',
      borderRadius: theme('borderRadius.full'),
      backgroundColor: theme('colors.gray.100'),
      boxShadow: '0 0 0 1px var(--tw-ring-color)',
      color: theme('colors.gray.700'),
      textTransform: 'uppercase',
      fontSize: theme('fontSize.xs'),
      lineHeight: theme('lineHeight.4'),
      fontWeight: theme('fontWeight.semibold'),

      '&:focus': {
        '--tw-ring-color': theme('colors.gray.300'),
        '--tw-shadow': theme('boxShadow.md'),
        boxShadow: '2px 2px 0 1px var(--tw-ring-color), var(--tw-shadow)',
      },
      '&:focus-within': {
        '--tw-ring-color': theme('colors.gray.300'),
      },
    },
  });
});
