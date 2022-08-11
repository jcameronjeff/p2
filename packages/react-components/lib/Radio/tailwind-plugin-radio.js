const plugin = require('tailwindcss/plugin');

module.exports = plugin(function ({ addComponents, theme }) {
  addComponents({
    'input.prism-radio': {
      '--tw-accent-color': theme('colors.blue.700'),
      appearance: 'none !important',
      width: theme('width.5'),
      height: theme('height.5'),
      accentColor: theme('colors.blue.700'),
      borderRadius: 9999,
      backgroundColor: theme('colors.white'),
      borderWidth: '1px',
      borderStyle: 'solid',
      borderColor: theme('colors.gray.500'),
      position: 'relative',
      boxShadow: 'inset 0 0 0 3px #fff',
      '&:hover': {
        borderWidth: '2px',
        borderColor: theme('colors.blue.700'),
        cursor: 'pointer',
      },
      '&:checked': {
        borderWidth: '3px',
        borderColor: theme('colors.blue.700'),
        backgroundColor: 'var(--tw-accent-color)',
      },
    },
  });

});
