/**
 * @file Vite Configuration
 *
 * @see {@link https://vitejs.dev/config/}
 */

import Vue from '@vitejs/plugin-vue'
import VueJSX from '@vitejs/plugin-vue-jsx'
import UnoCSS from 'unocss/vite'
import AutoImport from 'unplugin-auto-import/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
import VueComponents from 'unplugin-vue-components/vite'
import { defineConfig } from 'vite'
import VueDevTools from 'vite-plugin-vue-devtools'
import { version } from './package.json'
import { resolve } from './scripts/utils'

export default defineConfig({
  build: {
    chunkSizeWarningLimit: 2 ** 10, // 1MB
    cssCodeSplit: true,
    manifest: false,
    reportCompressedSize: false,
    sourcemap: false,
    target: 'es2015',
    rollupOptions: {
      output: {
        assetFileNames: 'assets/[ext]/[name]-[hash].[ext]',
        chunkFileNames: 'assets/js/[name]-[hash].js',
        entryFileNames: 'assets/js/[name]-[hash].js',
        manualChunks(id) {
          if (id.includes('node_modules')) {
            const groupVue = [
              'vue',
              'vue-router',
              'pinia',
              'vue-i18n',
              '@vueuse/core',
            ]
            if (groupVue.some(mod => id.includes(`node_modules/${mod}`))) {
              return 'vendor'
            } else {
              return 'deps'
            }
          }
        },
      },
    },
  },

  css: {
    preprocessorOptions: {
      scss: {
        additionalData: '@use "@/styles/core/styles" as *;',
      },
    },
  },

  define: {
    __INTLIFY_PROD_DEVTOOLS__: false,
    __VERSION__: JSON.stringify(version),
    __VUE_I18N_FULL_INSTALL__: false,
    __VUE_I18N_LEGACY_API__: false,
  },

  optimizeDeps: {
    // @keep-sorted
    include: [
      '@vueuse/core',
      'axios',
      'dayjs',
      'echarts',
      'pinyin-pro',
      'vue-i18n',
      'vue-router',
      'vue',
      'xgplayer',
    ],
  },

  plugins: [
    Vue(),

    VueJSX(),

    VueDevTools(),

    UnoCSS(),

    AutoImport({
      dts: resolve('src/auto-imports.d.ts'),
      imports: ['vue', 'vue-router', 'vue-i18n', 'pinia', '@vueuse/core'],
      resolvers: [
        ElementPlusResolver({
          importStyle: false,
        }),
      ],
    }),

    VueComponents({
      dirs: ['src/components'],
      dts: resolve('src/components.d.ts'),
      resolvers: [
        ElementPlusResolver({
          importStyle: false,
        }),
      ],
    }),
  ],

  resolve: {
    alias: {
      '@': resolve('./src'),
    },
  },

  server: {
    open: true,
    proxy: {},
    warmup: {
      clientFiles: ['./index.html', './src/{views,components}/*'],
    },
  },
})
