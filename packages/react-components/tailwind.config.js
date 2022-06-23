module.exports = {
  important: true,
  content: [
    './index.html',
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
    require('@tailwindcss/forms'),
    require('@prism2/tailwind-elements')({
      parent: '',
      strategy: 'class',
    }),
    // require('../tailwind-plugin-elements')({
    //   parent: '.prism-base',
    //   strategy: 'base',
    // }),
  ],
};
