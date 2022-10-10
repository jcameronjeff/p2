module.exports = {
  important: false,
  content: [
    './index.html',
    './lib/*.{vue,js,ts,jsx,tsx}',
    './lib/**/*.{vue,js,ts,jsx,tsx}',
    './site/*.{vue,js,ts,jsx,tsx}',
    './site/**/*.{vue,js,ts,jsx,tsx}',
    './stories/**/*.{tsx,css,mdx,jsx}',
    './stories/*.{tsx,css,mdx,jsx}',
    './tw/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: require('@prism2/tailwind-theme'),
    container: {
      center: true,
    },
  },
  plugins: [
    require('@headlessui/tailwindcss')({ prefix: 'ui' }),
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
    require('@prism2/tailwind-elements')({
      parent: '',
      strategy: 'class',
    }),
    function ({ addBase, theme, addVariant }) {
      addBase({
        'strong, b': { fontWeight: theme('fontWeight.semibold') },
      });
      addVariant('optional', '&:optional');
      addVariant('completed', '&[aria-complete="true"]');
      addVariant('selected', '&[aria-selected="true"]');
      addVariant('icons', '&>svg');
    },
  ],
};



