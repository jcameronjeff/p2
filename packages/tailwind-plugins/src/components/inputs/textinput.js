const plugin = require('tailwindcss/plugin');
const name = 'text-input';

const inputPlugin = function ({ addBase, theme }) {
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
    },
    '.form-group': {
      display: 'inline-flex',
    },
    'input[type="text"]': {
      outline: '0',
      borderTopLeftRadius:
        'var(--input-border-start-start-radius, var(--input-border-radius))',
      borderTopRightRadius:
        'var(--input-border-start-end-radius, var(--input-border-radius))',
      borderBottomRightRadius:
        'var(--input-border-end-end-radius, var(--input-border-radius))',
      borderBottomLeftRadius:
        'var(--input-border-end-start-radius, var(--input-border-radius))',
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
    },

    // Applies to the prefix
    '.input-prefix:has(~ &)': {
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

    // Applies to the input
    '&:has(~ .input-sufix)': {
      borderInlineEndWidth: '0',
      paddingInlineEnd: '0',
      borderBottomRightRadius: '0',
      borderTopRightRadius: '0',
    },

    '.input-prefix + &': {
      borderInlineStartWidth: '0',
      borderTopLeftRadius: '0',
      borderBottomLeftRadius: '0',
    },

    // Applies to the suffix
    '~ .input-sufix': {
      borderInlineEndWidth:
        'var(--input-prefix-border-inline-end-width, var(--border-width))',
      borderInlineEndColor:
        'var(--input-prefix-border-inline-end-color, var(--border-color))',
      borderInlineStartWidth: '0',
      borderBottomRightRadius: 'var(--input-border-radius)',
      borderTopRightRadius: 'var(--input-border-radius)',
    },

    '&:focus:has(~ :not(.input-sufix))': {
      boxShadow: 'var(--input-box-shadow)',
    },

    '&:active:not([disabled]):not([readonly])': {
      '--input-border-inline-color': 'var(--input-border-color-active)',
      '.input-prefix:has(~ &), &,& ~ .input-sufix': {
        '--input-border-block-color': 'var(--input-border-color-active)',
        '--input-prefix-border-inline-start-color':
          'var(--input-border-color-active)',
        '--input-prefix-border-inline-end-color':
          'var(--input-border-color-active)',
      },
    },

    '&:not([readonly]):focus': {
      '--input-border-inline-color': 'var(--input-border-color-focus)',
      '.input-prefix:has(~ &), &,& ~ .input-sufix': {
        '--input-border-block-color': 'var(--input-border-color-focus)',
        '--input-prefix-border-inline-start-color':
          'var(--input-border-color-focus)',
        '--input-prefix-border-inline-end-color':
          'var(--input-border-color-focus)',
      },
    },

    '&[disabled]': {
      '.input-prefix:has(~ &), &,& ~ .input-sufix': {
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

    '::placeholder': {
      color: 'var(--input-placeholder-color)',
    },

    '.form-group:has(&:focus:not([readonly]))': {
      boxShadow: 'var(--input-box-shadow)',
      borderRadius: 'var(--input-border-radius)',
    },
  });
};

module.exports = {
  name,
  fn: inputPlugin,
  plugin: plugin(inputPlugin),
};
