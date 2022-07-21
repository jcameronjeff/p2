/// <reference types="vitest" />
import { name } from './package.json';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import dts from 'vite-plugin-dts';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), dts()],
  assetsInclude: ['**/*.mdx'],
  test: {
    environment: 'jsdom', // or 'jsdom', 'node'
    globals: true,
    setupFiles: 'lib/setup.ts',
  },
  build: {
    /**
     * Create a single bundle consisting of all imports to the `entry` file.
     * Use the `name` and `version` from package.json to generate a unique name.
     * @see https://vitejs.dev/config/#build-bundler
     */
    lib: {
      entry: path.resolve(__dirname, 'lib/index.ts'),
      name: 'Prism2',
      fileName: 'index',
      // formats: ['cjs', 'umd'],
      // we can build a super complex filename
      // fileName: (format) => `${name}.${version}.${format}.js`,
      // or we can just...
      // fileName: (format) => `index.${format}.js`,
    },
    /**
     * Externalize our peer dependencies from the bundle explicitly.
     * @remark Dependencies will be included in bundle if not listed below!
     */
    rollupOptions: {
      external: ['react', 'react-dom', '@headlessui/react'],
      output: {
        // compact: true,
        // Provide global variables to use in the UMD build
        // for externalized deps
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM',
          '@headlessui/react': 'HeadlessUI',
        },
        // Rename default stylesheet to follow JS filename convention.
        // Uncomment this for a semver filename instead of 'style.css'
        // assetFileNames: (assetInfo) => {
        // const isStylesheet = assetInfo.name === 'style.css';
        // return isStylesheet ? `${name}-${version}.min.css` : assetInfo.name
        // },
      },
    },
  },
});
