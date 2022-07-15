const { mergeConfig } = require('vite');

module.exports = {
  "stories": [
    "../stories/**/*.stories.@(js|jsx|ts|tsx|mdx)",
    "../lib/**/*.stories.@(js|jsx|ts|tsx|mdx)"
  ],
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions"
  ],
  "staticDirs": [{ from: '../../../media', to: '/media' }],
  "framework": "@storybook/react",
  "core": {
    "builder": "@storybook/builder-vite"
  },
  "features": {
    "storyStoreV7": false,
    "previewMdx2": false
  },
  async viteFinal(config, { configType }) {
    let options = {}
    if (configType === 'DEVELOPMENT') {
      // Your development configuration goes here
      // Object.assign(options, {
      //   build: {
      //     rollupOptions: {
      //       external: ['@mdx-js/react']
      //     },
      //   }
      // })
    }
    if (configType === 'PRODUCTION') {
      // Your production configuration goes here.
      Object.assign(options, {
        // Use the same "resolve" configuration as your app
        resolve: (await import('../vite.web.config.js')).default.resolve,
        // Use the base needed for our URL pattern in production
        // base: (await import('../vite.web.config.js')).default.base,
        base: '/prism/prism2/',
        // Add dependencies to pre-optimization
        optimizeDeps: {
          include: ['storybook-dark-mode'],
        },
      })
    }
    return mergeConfig(config, {
      // Your environment configuration here
      ...options
    });
  }
}
