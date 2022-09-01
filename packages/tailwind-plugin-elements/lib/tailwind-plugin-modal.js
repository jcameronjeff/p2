const plugin = require('tailwindcss/plugin');

module.exports = function ({ addComponents, theme }) {
  addComponents({
    '.prism-dialog-frame': {
      width: theme('width.screen'),
      height: theme('height.screen'),
      position: 'fixed',
      top: 0, left:0, right: 0, bottom: 0,
      zIndex: 100,
    },
    '.prism-dialog-backdrop': {
      '--tw-backdrop-blur': theme('blur.sm'),
      '--tw-backdrop-opacity': theme('opacity.95'),
      '--tw-backdrop-grayscale': theme('grayscale.DEFAULT'),
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      minHeight: theme('minHeight.screen'),
      backdropFilter: 'var(--tw-backdrop-blur) var(--tw-backdrop-brightness) var(--tw-backdrop-contrast) var(--tw-backdrop-grayscale) var(--tw-backdrop-hue-rotate) var(--tw-backdrop-invert) var(--tw-backdrop-opacity) var(--tw-backdrop-saturate) var(--tw-backdrop-sepia)',
    },
    '.prism-dialog-overlay': {
      '--bg-opacity': '0.25',
      opacity: 0.25,
      position: 'fixed',
      width: theme('width.screen'),
      height: theme('height.screen'),
      left: 0, right: 0, top: 0, bottom: 0,
      backgroundColor: theme('colors.black'),
    },
    '.prism-dialog-box': {
      position: 'relative',
      marginLeft: 'auto',
      marginRight: 'auto',
      padding: theme('spacing.8'),
      width: theme('spacing.96'),
      maxWidth: '90%',
      borderRadius: theme('rounded.DEFAULT'),
      boxShadow: theme('boxShadow.DEFAULT'),
      backgroundColor: theme('colors.white'),
      borderWidth: theme('borderWidth.DEFAULT'),
    },
  });
};
