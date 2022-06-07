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
  theme: {
    extend: require('./tw/theme'),
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('./tw/plugin')({
      parent: '',
      strategy: 'class',
    }),
    require('./tw/plugin')({
      parent: '',
      strategy: 'base',
    }),
  ],
};
