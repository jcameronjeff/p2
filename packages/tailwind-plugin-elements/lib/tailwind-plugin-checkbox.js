const plugin = require('tailwindcss/plugin');

module.exports = function ({ addComponents, theme }) {
  addComponents({

    'input.prism-checkbox': {
      '--tw-accent-color': theme('colors.blue.800'),
      color: 'var(--tw-accent-color) !important',
      accentColor: 'var(--tw-accent-color) !important',
      width: theme('width.4'),
      height: theme('height.4'),
      borderRadius: theme('borderRadius.sm'),
      borderColor: theme('colors.gray.300'),
      '&:checked': {
        borderColor: 'var(--tw-accent-color)',
        accentColor: 'var(--tw-accent-color)',
      },
      '&:active': {
        accentColor: 'var(--tw-accent-color)',
      },
    },

  });
};
