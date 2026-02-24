import { configDefaults, defineConfig, mergeConfig } from 'vitest/config'
import viteConfig from './vite.config'

export default mergeConfig(
  viteConfig,
  defineConfig({
    test: {
      watch: false,
      environment: 'jsdom',
      exclude: [...configDefaults.exclude, 'e2e/**'],
      root: import.meta.dirname,
    },
  }),
)
