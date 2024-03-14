import { defineConfig } from 'vitest/config'

export default defineConfig({
  test: {
    setupFiles: ["./spec/setup.ts"],
    includeSource: ["./src/**/*.ts"],
  },
  define: {
    "import.meta.vitest": "undefined",
  },
});
