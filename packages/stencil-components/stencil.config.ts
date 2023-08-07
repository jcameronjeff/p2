import { Config } from '@stencil/core';
import { postcss } from '@stencil-community/postcss';
import autoprefixer from 'autoprefixer';
import tailwindcss from 'tailwindcss';

export const config: Config = {
  globalStyle: 'src/index.css',
  namespace: 'stencil-components',
  outputTargets: [
    {
      type: 'dist',
      esmLoaderPath: '../loader',
    },
    {
      type: 'dist-custom-elements',
    },
    {
      type: 'docs-readme',
      footer: 'Created with ♥ for the Interstate Design System.'
    },
    {
      type: 'www',
      serviceWorker: null, // disable service workers
    },
  ],
  plugins: [
    postcss({
      plugins: [
        tailwindcss("./tailwind.config.js"),
        autoprefixer(),
      ]
    }),
  ],
  testing: {
    browserArgs: ['--no-sandbox', '--disable-setuid-sandbox'],
    browserHeadless: "new",
  },
};
