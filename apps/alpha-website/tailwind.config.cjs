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
      colors: ({ theme }) => ({
        ...theme.colors,
        // Experimenting with middle-layer token methods for applying
        // a design system or pre-defined theming convention.
        // This also maps to default values on the related utilites.
        // e.g. the `.border` utility will be colored as defined here. No need
        // for a second `.border-slate-400`.
        prism: {
          body: theme.colors.gray[600],
          headings: theme.colors.blue[800],
          highlightBg: theme.colors.blue[100],
          border: theme.colors.slate[400],
          ring: theme.colors.purple[400],
        },
      }),
      borderColor: ({ theme }) => ({
        ...theme.borderColor,
        DEFAULT: theme('colors.prism.border'),
      }),
      borderWidth: ({ theme }) => ({
        ...theme.borderWidth,
        DEFAULT: '2px',
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
    plugin(function ({ addBase, theme, addVariant }) {

      // shorthand to style all child heading elements
      addVariant('headings', ['& :is(h1,h2,h3,h4,h5,h6)']);
      addBase({
        [':root']: {
          // this is a good place to *surface*  CSS named variables
          ['--prism-ring-color']: theme('colors.prism.ring'),
          ['--prism-border-color']: theme('colors.prism.border'),
          ['--prism-body-color']: theme('colors.prism.body'),
        },
        ['* , :after, :before']: {
          // this is a good place to *apply* globally
          ['--prism-ring-color']: theme('colors.prism.ring'),
          ['--prism-border-color']: theme('colors.prism.border'),
          ['--prism-body-color']: theme('colors.prism.body'),
        },
        ['body,html']: {
          color: theme('colors.prism.body'),
        },
        ['h1,h2,h3,h4,h5,h6']: {
          color: theme('colors.prism.headings'),
        },
      });
    }),
    /**
     * Trying a plugin for applying color schemes from a base
     */
    plugin(function ({ matchComponents, theme }) {
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
            '--tw-shadow-color': '#f00!important',
            '--tw-shadow': 'var(--tw-shadow-colored)!important',

            ['--tw-ring-offset-shadow-color']: value[900],
            ['--tw-ring-offset-color']: value[200],
            ['--tw-ring-shadow-color']: value[800],
            ['--tw-ring-color']: value[100],
            ['--tw-border-radius']: 0,
            ['--tw-ring-offset-width']: '3px',
            ['--tw-ring-width']: '1px',
            ['--tw-border-width-base']: '0.5px',
            borderRadius: theme('borderRadius.md'),
            // borderTopLeftRadius: theme('borderRadius.lg'),
            // borderBottomLeftRadius: theme('borderRadius.lg'),
            borderTopWidth: 'var(--tw-border-width-base)',
            borderBottomWidth: 'var(--tw-border-width-base)',
            borderRightWidth: 'var(--tw-border-width-base)',
            borderStyle: 'solid',
            borderLeftWidth: theme('borderWidth.8'),

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
