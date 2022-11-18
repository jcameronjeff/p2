const plugin = require('tailwindcss/plugin');

module.exports = function ({ addComponents, theme }) {
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
      boxShadow: 'inset 0 0 0 .15rem #fff',
      '&:hover': {
        borderWidth: '2px',
        borderColor: theme('colors.blue.700'),
        cursor: 'pointer',
      },
      '&:checked': {
        borderWidth: '3px',
        borderColor: theme('colors.blue.700'),
        backgroundColor: theme('colors.blue.700'),
        backgroundImage: 'none',
      },
      '&:focus': {
        '--tw-ring-offset-width': '0',
        borderWidth: '2px',
        borderColor: theme('colors.blue.700'),
        backgroundColor: 'transparent',
        boxShadow: 'inset 0 0 0 0.15rem #fff',
      },
      '&:disabled': {
        boxShadow: 'none',
        borderWidth: '1px',
        opacity: theme('opacity.25'),
        cursor: 'not-allowed',
        filter: 'grayscale(100%)',
        color: theme('colors.gray.500'),
        backgroundColor: theme('colors.gray.500'),
      },
    },
    '[type="radio"]': {
      '&:focus': {
        '--tw-ring-offset-width': '0',
        '&:checked': {
          backgroundColor: theme('colors.blue.700'),
          borderWidth: '3px',
          borderColor: theme('colors.blue.700'),
          boxShadow: 'inset 0 0 0 0.15rem #fff',
        },
      },
    }
  });

};
