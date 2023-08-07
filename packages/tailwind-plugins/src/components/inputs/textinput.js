const plugin = require('tailwindcss/plugin');
const name = 'text-input';

// input icons
// input decorators
// input controls (filter input)
// input-group


// padding, fontSize, gap
const inputPlugin = function ({ addBase, addComponents, theme }) {
  addBase({
    ':root': {
      '--border-color': 'black',
      '--border-width': '1px',
      '--base-padding': '0.5rem',
      '--base-font-size': '0.8rem',
      '--input-background-color': 'white',
      '--input-border-color': 'var(--border-color)',
      '--input-border-color-focus': '#005BA8',
      '--input-border-radius': '0.25rem',
      '--input-box-shadow-color-focus': '#005BA8',
      '--input-border-color-active': 'pink',
      '--input-disabled-border-color': 'hsl(0, 1%, 70%)',
      '--input-disabled-color': 'hsl(0, 1%, 70%)',
      '--input-disabled-background-color': 'hsl(0, 1%, 93%)',
      '--input-placeholder-color': 'hsl(0, 1%, 46%)',
      '--input-box-shadow': '0px 0px 0px 2px #CCE8FF, 0px 0px 0px 1px #005BA8',
      '--input-icon-width': theme('fontSize.xl'),
    },

    'input[type="text"]': {
      outline: '0',
 
 

      // Applies to the suffix
      '~ .text-input-icon': {
        borderInlineEndWidth:
          'var(--input-prefix-border-inline-end-width, var(--border-width))',
        borderInlineEndColor:
          'var(--input-prefix-border-inline-end-color, var(--border-color))',
        borderInlineStartWidth: '0',
        borderBottomRightRadius: 'var(--input-border-radius)',
        borderTopRightRadius: 'var(--input-border-radius)',
      },
      '&:active:not([disabled]):not([readonly])': {
        '--input-border-inline-color': 'var(--input-border-color-active)',
        '.input-prefix:has(~ &), &,& ~ .input-suffix': {
          '--input-border-block-color': 'var(--input-border-color-active)',
          '--input-prefix-border-inline-start-color':
            'var(--input-border-color-active)',
          '--input-prefix-border-inline-end-color':
            'var(--input-border-color-active)',
        },
      },

      '&:not([readonly]):focus': {
        '--input-border-inline-color': 'var(--input-border-color-focus)',
        '.input-prefix:has(~ &), &,& ~ .input-suffix': {
          '--input-border-block-color': 'var(--input-border-color-focus)',
          '--input-prefix-border-inline-start-color':
            'var(--input-border-color-focus)',
          '--input-prefix-border-inline-end-color':
            'var(--input-border-color-focus)',
        },
      },

      '&:disabled': {
        borderColor: 'var(--input-disabled-border-color)',
        backgroundColor: 'var(--input-disabled-background-color)',
        '.input-prefix:has(~ &), ~ .input-suffix': {
          color: 'var(--input-disabled-color)',
          borderColor: 'var(--input-disabled-border-color)',
          backgroundColor: 'var(--input-disabled-background-color)',
          borderInlineStartColor: 'var(--input-disabled-border-color)',
          borderInlineEndColor: 'var(--input-disabled-border-color)',
        },

        '::placeholder': {
          color: 'var(--input-disabled-color)',
        },
      },

      '.form-group:has(&:focus:not([readonly]))': {
        boxShadow: 'var(--input-box-shadow)',
        borderRadius: 'var(--input-border-radius)',
      },
    },

    '::placeholder': {
      color: 'var(--input-placeholder-color)',
    },
  });
  addComponents({
    '.form-group': {
      display: 'inline-flex',
    },

    '.input-prefix:has(~ &)': {
      padding: 'var(--base-padding)',
      fontFamily: 'sans-serif',
      fontSize: 'var(--base-font-size)',
      color: 'var(--input-color)',
      backgroundColor: 'var(--input-background-color)',
      borderTopWidth: 'var(--input-border-block-width, var(--border-width))',
      borderTopStyle: 'solid',
      borderTopColor:
        'var(--input-border-block-color, var(--input-border-color))',
      borderRightWidth: 'var(--input-border-inline-width, var(--border-width))',
      borderRightStyle: 'solid',
      borderRightColor:
        'var(--input-border-inline-color, var(--input-border-color))',
      borderInlineStartColor:
        'var(--input-prefix-border-inline-start-color, var(--border-color))',
      borderInlineStartWidth:
        'var(--input-prefix-border-inline-start-width, var(--border-width))',
      borderInlineEndWidth: '0',
      paddingInlineEnd: '0',
      borderTopLeftRadius: 'var(--input-border-radius)',
      borderBottomLeftRadius: 'var(--input-border-radius)',
      display: 'inline-flex',
      gap: '0.4rem',
    },

    // Applies to the prefix
    '.input-prefix > svg': {
      width: 'var(--input-icon-width)',
    },
  });
};

module.exports = {
  name,
  fn: inputPlugin,
  plugin: plugin(inputPlugin),
};
