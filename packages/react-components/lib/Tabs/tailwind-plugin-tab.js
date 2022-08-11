const plugin = require('tailwindcss/plugin');

/**
 * @type {typeof import("tailwindcss/plugin") }
 */
module.exports = plugin(function ({ addComponents, theme }) {
  addComponents({
    '.prism-tab': {
      '--tw-padding': theme('spacing.2'),
      '--tw-padding-y': theme('spacing.1'),
      '--tw-border-color': 'transparent',
      '--tw-border-hover-color': theme('colors.gold.500'),
      '--tw-text-color': theme('colors.blue.800'),
      display: 'flex',
      alignItems: 'center',
      textTransform: 'uppercase',
      gap: theme('spacing.1'),
      fontWeight: theme('fontWeight.semibold'),
      padding: 'var(--tw-padding-y) var(--tw-padding)',
      color: 'var(--tw-text-color) !important',
      borderBottomWidth: theme('spacing.1'),
      borderBottomStyle: 'solid',
      alignSelf: 'stretch',
      borderColor: 'var(--tw-border-color) !important',
      letterSpacing: theme('letterSpacing.tight'),
      '&:disabled': {
        '--tw-text-color': theme('colors.gray.500'),
      },
      '&:not(:disabled)': {
        '&:hover': {
          borderBottomColor: 'var(--tw-border-hover-color) !important',
          borderRightColor: 'var(--tw-border-hover-color) !important',
        },
      },
      '&:focus, .active': {
        '--tw-border-color': theme('colors.blue.800'),
        '--tw-text-color': theme('colors.black'),
        outline: 'none',
      },
      '&.selected': {
        '--tw-text-color': theme('colors.black'),
        '--tw-border-color': theme('colors.blue.900'),
        '--tw-border-hover-color': theme('colors.blue.900'),
        fontWeight: theme('fontWeight.bold'),
      },
      '&.vertical': {
        borderBottomColor: 'transparent',
        borderBottom: 'none !important',
        display: 'block',
        width: '100%',
        textAlign: 'left',
        borderRightWidth: theme('spacing.1'),
      },
      '&:not(.vertical)': {
        borderTop: '4px solid transparent !important',
      },
    },
  });
});
