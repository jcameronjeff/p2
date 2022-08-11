module.exports = {
  important: true,
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
  // presets: [
  //   require('../tailwind-preset/index'),
  // ],
  theme: {
    extend: require('@prism2/tailwind-theme'),
  },
  plugins: [
    // require('@tailwindcss/forms'),
    require('@prism2/tailwind-elements')({
      parent: '',
      strategy: 'class',
    }),
    // modal styles
    require('./lib/Modal/tailwind-plugin-modal'),
    require('./lib/Button/tailwind-plugin-button'),
    require('./lib/Tabs/tailwind-plugin-tab'),
    require('./lib/Tooltip/tailwind-plugin-tooltip'),
    require('./lib/Radio/tailwind-plugin-radio'),
    require('./lib/Checkbox/tailwind-plugin-checkbox'),
    require('./lib/Chip/tailwind-plugin-chip'),
    //
    function ({ addBase, theme }) {
      addBase({
        'strong, b': { fontWeight: theme('fontWeight.semibold') },
      });
    },
  ],
};
