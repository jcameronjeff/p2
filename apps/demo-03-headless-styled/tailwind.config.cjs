/** @type {import('tailwindcss').Config} */
module.exports = {
  important: true,
  darkMode: 'class',
  content: [
    './index.html',
    './src/*.{vue,js,ts,jsx,tsx}',
    './src/**/*.{vue,js,ts,jsx,tsx}',
    './src/components/*.{vue,js,ts,jsx,tsx}',
    './src/layout/*.{vue,js,ts,jsx,tsx}',
    './src/Menu.tsx',
    '../../packages/react-components/src/**/*.{vue,js,ts,jsx,tsx}',
    '../../packages/ui-shared/*.tsx'
  ],
  presets: [
    require('@prism2/tailwind-preset')
  ],
  plugins: [
    require('@headlessui/tailwindcss')({ prefix: 'ui' }),
    function ({ addBase, theme, addVariant }) {
      addBase({
        'strong, b': { fontWeight: theme('fontWeight.semibold') },
      });
      addVariant('optional', '&:optional');
      addVariant('completed', '&[aria-complete="true"]');
      addVariant('selected', '&[aria-selected="true"]');
      addVariant('icons', '&>svg');
      addVariant('track', ['&::-webkit-slider-runnable-track', '&::-moz-range-track', '&::-mstrack']);
      addVariant('thumb', ['&::-webkit-slider-thumb', '&::-moz-range-thumb', '&::-ms-thumb']);
    },

  ],
  theme: {
    extend: {
      screens: {
        'xs': {'max': '639px'},
        'sm': {'min': '640px', 'max': '767px'},
        // => @media (min-width: 640px and max-width: 767px) { ... }

        'md': {'min': '768px', 'max': '1023px'},
        // => @media (min-width: 768px and max-width: 1023px) { ... }

        'lg': {'min': '1024px', 'max': '1279px'},
        // => @media (min-width: 1024px and max-width: 1279px) { ... }

        'xl': {'min': '1280px', 'max': '1535px'},
        // => @media (min-width: 1280px and max-width: 1535px) { ... }

        '2xl': {'min': '1536px'},
      }
    }
  }
}
