module.exports = {
  important: true,
  content: [
    './index.html',
    './src/**/*.{vue,js,ts,jsx,tsx}',
  ],
  theme: {
    extend: require('@prism2/tailwind-theme')
  },
  plugins: [
    require('@prism2/tailwind-elements')({
      parent: '',
      strategy: 'class',
    }),
  ]
}
