/* eslint-disable import/no-extraneous-dependencies */
/** @type {import('tailwindcss').Config} */

const plugin = require('tailwindcss/plugin');
module.exports = {
  important: true,
  content: [
    './index.html',
    './src/*.{vue,js,ts,jsx,tsx}',
    './src/**/*.{vue,js,ts,jsx,tsx}',
    '../../packages/react-components/src/**/*.{vue,js,ts,jsx,tsx}',
    '../../packages/ui-shared/*.tsx',
  ],
  presets: [
    require('@prism2/tailwind-preset'),
  ],
  theme: {
    extend: {
      keyframes: {
        load: {
          '0%': { transform: 'rotate(0deg)', opacity: 1 },
          '25%': { transform: 'rotate(90deg)', opacity: 0.5 },
          '50%': { transform: 'rotatate(180deg)', opacity: 1 },
          '75%': { transform: 'rotate(270deg)', opacity: 0.5 },
          '100%': { transform: 'rotate(360deg)', opacity: 1 },
        },
      },
      animation: {
        'loading': 'load 2s linear infinite',
      },
      borderColor: ({ theme }) => ({
        ...theme.borderColor,
        DEFAULT: theme('colors.prism.border'),
      }),
      borderWidth: ({ theme }) => ({
        ...theme.borderWidth,
        DEFAULT: '0.5px',
      }),
      borderRadius: ({ theme }) => ({
        ...theme.width,
        DEFAULT: '6px',
      }),
      ringColor: ({ theme }) => ({
        ...theme.ringColor,
        DEFAULT: theme('colors.prism.ring'),
      }),
    },
  },
  plugins: [
    plugin(function ({ matchComponents, theme, addVariant }) {
      // Experiment #1 -- create avariant to style heading children
      addVariant('headings', ['& :is(h1,h2,h3,h4,h5,h6)']);

      /**
       * Provides fixed scaling of X and Y padding with as single input.
       * The left and right padding will always be double the initial padding.
       * Example: `bx-2`
       * Output: { padding: 2rem 4rem }
       */
      matchComponents(
        {
          bx: (value) => ({
            '--tw-padding-base': value,
            '--tw-padding-x': 'calc(var(--tw-padding-base) / 2)',
            padding: 'var(--tw-padding-base)',
            paddingTop: 'var(--tw-padding-x)',
            paddingBottom: 'var(--tw-padding-x)',
          }),
          array: (value) => ({
            gap: value,
            alignItems: 'center',
            display: 'flex',
          }),
        },
        { values: theme('padding') },
      );

      matchComponents(
        {
          paper: (value) => ({
            ['--tw-bg-color']: theme('colors.white'),
            ['--tw-tint-bg-color']: value[50],
            ['--tw-heading-color']: value[600],
            ['--tw-body-color']: value[800],
            ['--tw-shadow-color']: value[500],
            ['--tw-caption-color']: value[500],
            ['--tw-border-color']: value[400],
            ['--tw-outline-color']: value[400],
            ['--tw-ring-offset-shadow-color']: value[900],
            ['--tw-ring-offset-color']: value[200],
            ['--tw-ring-shadow-color']: value[800],
            ['--tw-ring-color']: value[100],
            ['--tw-border-radius']: 0,
            ['--tw-ring-offset-width']: '3px',
            ['--tw-ring-width']: '1px',
            ['--tw-border-width-base']: '0.5px',
            borderRadius: theme('borderRadius.md'),
            borderWidth: 'var(--tw-border-width-base)',
            borderStyle: 'solid',
            backgroundColor: 'var(--tw-bg-color)',
            borderColor: 'var(--tw-border-color)',
            outlineColor: 'var(--tw-outline-color)',
            color: 'var(--tw-body-color)',
            ['&.dark']: {
              ['--tw-heading-color']: value[200],
              ['--tw-body-color']: value[50],
              ['--tw-caption-color']: value[200],
              ['--tw-border-color']: value[400],
              ['--tw-outline-color']: value[600],
              ['--tw-bg-color']: theme('colors.slate.800'),
              ['--tw-tint-bg-color']: value[900],
              ['--tw-ring-offset-shadow-color']: value[100],
              ['--tw-ring-offset-color']: value[200],
              ['--tw-ring-shadow-color']: value[100],
              ['--tw-ring-color']: value[300],
              backgroundColor: 'var(--tw-bg-color)',
              borderColor: 'var(--tw-border-color)',
              outlineColor: 'var(--tw-outline-color)',
            },
            ['&.tinted']: {
              backgroundColor: 'var(--tw-tint-bg-color)',
              outlineColor: 'var(--tw-caption-color)',
              outlineWidth: '0.5px',
            },
            ['svg']: {
              fill: 'var(--tw-bg-color)',
              color: 'var(--tw-body-color)',
              stroke: 'var(--tw-border-color)',
            },
            ['h1,h2,h3,h4,h5,h6']: {
              color: 'var(--tw-heading-color)',
              fontWeight: theme('fontWeight.semibold'),
              fontFamily: theme('fontFamily.alt'),
              // mixBlendMode: 'multiply',
            },
            ['small, caption, aside, figcaption, .muted']: {
              color: 'var(--tw-caption-color)',
              // mixBlendMode: 'multiply',
            },
          }),
        },
        { values: theme('colors') },
      );
    }),
  ],
};
