import { defineConfig } from 'vitest/config'

export default defineConfig({
  test: {
    environment: 'jsdom', // or 'jsdom', 'node'
    globals: true,
    setupFiles: 'src/setup.ts',
  },
})
