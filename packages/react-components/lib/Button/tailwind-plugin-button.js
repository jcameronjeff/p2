const plugin = require('tailwindcss/plugin');

/**
 * @type {typeof import("tailwindcss/plugin") }
 */
module.exports = plugin(function ({ addComponents, theme }) {
  addComponents({
    '.prism-btn': {
      '--tw-padding-x': theme('spacing.4'),
      '--tw-padding-y': theme('spacing.2'),
      '--tw-ring-color': theme('colors.blue.300'),
      '--tw-text-color': theme('colors.blue.700'),
      '--tw-bg-color': theme('colors.white'),
      '--tw-outline-color': theme('colors.blue.700'),
      '--tw-text-hover-color': theme('colors.blue.900'),
      '--tw-bg-hover-color': theme('colors.blue.100'),
      '--tw-outline-hover-color': theme('colors.blue.800'),
      fontWeight: theme('fontWeight.semibold'),
      color: 'var(--tw-text-color) !important',
      textTransform: 'uppercase',
      backgroundColor: 'var(--tw-bg-color) !important',
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: 'var(--tw-padding-y) var(--tw-padding-x)',
      gap: theme('spacing.2'),
      borderRadius: theme('borderRadius.xs'),
      cursor: 'pointer',
      outlineColor: 'var(--tw-outline-color) !important',
      outlineOffset: '0px !important',
      outlineStyle: 'solid',
      outlineWidth: theme('outlineWidth.1'),
      transition: 'all 150 ease-in-out',
      whiteSpace: 'nowrap',
      overflow: 'hidden',
      textOverflow: 'ellipses',
      'svg': {
        flexShrink: 0,
        width: theme('spacing.4'),
      },
      '*': {
        'white-space': 'nowrap !important',
        'overflow': 'hidden !important',
        'display': 'block !important',
        'text-overflow': 'ellipsis !important',
      },
      '&:focus': {
        boxShadow: '0 0 0 4px var(--tw-ring-color) !important',
      },
      '&:disabled': {
        opacity: theme('opacity.25'),
        cursor: 'not-allowed',
        filter: 'grayscale(100%)',
        color: theme('colors.gray.500'),
      },
      '&:not(:disabled)': {
        '&:hover': {
          backgroundColor: 'var(--tw-bg-hover-color) !important',
          color: 'var(--tw-text-hover-color) !important',
          outlineColor: 'var(--tw-outline-hover-color) !important',
        },
        '&:active': {
          transform: 'scale(0.95)',
        },
      },
      '&.text': {
        '--tw-bg-color': 'transparent',
        '--tw-outline-color': 'transparent',
        '--tw-text-hover-color': theme('colors.blue.1000'),
        '--tw-bg-hover-color': theme('colors.blue.50'),
        '--tw-outline-hover-color': theme('colors.blue.100'),
      },
      '&.simulcast': {
        '--tw-ring-color': theme('colors.green.200'),
        '--tw-bg-color': theme('colors.green.500'),
        '--tw-bg-hover-color': theme('colors.green.600'),
        '--tw-text-color': theme('colors.white'),
        '--tw-text-hover-color': theme('colors.green.50'),
        '--tw-outline-color': theme('colors.green.600'),
        '--tw-outline-hover-color': theme('colors.green.700'),
      },
      '&.fill': {
        '--tw-ring-color': theme('colors.gold.400'),
        '--tw-text-color': theme('colors.gold.900'),
        '--tw-bg-color': theme('colors.gold.400'),
        '--tw-outline-color': theme('colors.gold.500'),
        '--tw-text-hover-color': theme('colors.black'),
        '--tw-bg-hover-color': theme('colors.gold.500'),
        '--tw-outline-hover-color': theme('colors.gold.600'),
      },
    },
  });

});
