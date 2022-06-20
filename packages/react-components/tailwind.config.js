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
  presets: [
    require('../tailwind-preset/index'),
  ],
  theme: {
    extend: require('../tailwind-theme-prism'),
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('../tailwind-plugin-elements')({
      parent: '',
      strategy: 'class',
    }),
    require('../tailwind-plugin-elements')({
      parent: '',
      strategy: 'base',
    }),
  ],
};
