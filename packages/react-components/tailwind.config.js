module.exports = {
  important: true,
  content: [
    './index.html',
    './lib/**/*.{vue,js,ts,jsx,tsx}',
    './site/**/*.{vue,js,ts,jsx,tsx}',
    './stories/**/*.{tsx,css,mdx,jsx}',
    './stories/*.{tsx,css,mdx,jsx}',
    './tw/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: require('@prism2/tailwind-theme'),
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@prism2/tailwind-elements')({
      parent: '.prism-base',
      strategy: 'base',
    }),
    require('@prism2/tailwind-elements')({
      parent: '.prism-enabled',
      prefix: 'my-component-',
      strategy: 'class',
    }),
  ],
};

