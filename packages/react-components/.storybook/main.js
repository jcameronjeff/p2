const { mergeConfig } = require('vite');
const myConfig = require('../vite.config.js');
const remarkGfm = require('remark-gfm');
module.exports = {
  "stories": [
    "../stories/**/*.@(mdx|stories.@(js|jsx|ts|tsx))",
    "../lib/**/*.@(mdx|stories.@(js|jsx|ts|tsx))",
  ],
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
    // "@storybook/addon-mdx-gfm",
    {
      name: '@storybook/addon-docs',
      options: {
        mdxPluginOptions: {
          mdxCompileOptions: {
            remarkPlugins: [remarkGfm],
          },
        },
      },
    },
  ],
  "staticDirs": [{
    from: '../../../media',
    to: '/media'
  }],
  "framework": {
    name: "@storybook/react-vite",
    options: {}
  },
  "features": {
    "storyStoreV7": true
  },
  async viteFinal(config, {
    configType
  }) {
    let options = {};
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
      console.log('building with PRODUCTION environment');
      Object.assign(options, {
        // Use the same "resolve" configuration as your app
        // resolve: (await import('../vite.web.config.js')).default.resolve,
        // Use the base needed for our URL pattern in production
        // base: (await import('../vite.web.config.js')).default.base,
        // base: process.env.BASE || '/prism/prism2/',
        // Add dependencies to pre-optimization
        // optimizeDeps: {
        //   include: ['storybook-dark-mode'],
        // },
        build: {
          rollupOptions: {
            output: {
              assetFileNames: `assets/[name][extname]`,
              entryFileNames: `[name].js`,
              chunkFileNames: `assets/[name].js`,
              dynamicImportInCjs: false,
              // inlineDynamicImports: true
            }
          }
        }
      })
    }
    return mergeConfig(config, {
      // Your environment configuration here
      ...options
    });
  },
  docs: {
    autodocs: true
  }
};
