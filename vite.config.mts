import { defineConfig } from 'vitest/config'

export default defineConfig({
  test: {
    setupFiles: ['./src/spec/setup.ts'],
    includeSource: ['./src/**/*.ts'],
  },
  define: {
    'import.meta.vitest': 'undefined',
  },
})
