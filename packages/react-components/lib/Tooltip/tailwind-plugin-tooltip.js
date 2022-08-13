const plugin = require('tailwindcss/plugin');

/**
 * @type {typeof import("tailwindcss/plugin") }
 */
module.exports = plugin(function ({ addBase, theme }) {
  addBase({
    '.tt': {
      position: 'relative',
      display: 'inline-flex',
      cursor: 'help',
      justifyContent: 'center',
      borderStyle: 'dotted',
      borderBottomWidth: '1px',
      borderColor: theme('colors.gray.500'),
      '--tw-top-offset': 'auto',
      '--tw-bottom-offset': '100%',
      '&::after': {
        color: theme('colors.white'),
        content: 'attr(aria-label)',
        position: 'absolute',
        top: 'var(--tw-top-offset)',
        bottom: 'var(--tw-bottom-offset)',
        visibility: 'hidden',
        opacity: 0,
        transform: 'scale(0)',
        padding: theme('spacing.0.5'),
        paddingLeft: theme('spacing.2'),
        paddingRight: theme('spacing.2'),
        borderRadius: theme('borderRadius.sm'),
        backgroundColor: theme('colors.slate.800'),
        backgroundOpacity: 0.7,
        transition: 'all 100ms ease-in-out',
        transitionDelay: '100ms',
        fontSize: theme('fontSize.xs'),
        whiteSpace: 'nowrap',
      },
      '&:hover': {
        '&::after': {
          visibility: 'visible',
          opacity: 100,
          transform: 'scale(1)',
        },
      },
      '&.below': {
        '&::after': {
          '--tw-top-offset': '100%',
          '--tw-bottom-offset': 'auto',
        },
      },
    },
  });
});
