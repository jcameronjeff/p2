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
    require('@prism2/tailwind-preset'),
  ],
};
