import path from 'node:path'
import { URL, fileURLToPath } from 'node:url'
import { defineConfig, splitVendorChunkPlugin } from 'vite'
import Vue from '@vitejs/plugin-vue'
import Components from 'unplugin-vue-components/vite'
import AutoImport from 'unplugin-auto-import/vite'
import Icons from 'unplugin-icons/vite'
import DefineOptions from 'unplugin-vue-define-options/vite'
import IconsResolver from 'unplugin-icons/resolver'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'

const resolve = (...args: string[]) => path.resolve(__dirname, ...args)

export default defineConfig({
  resolve: {
    alias: {
      '@': fileURLToPath(new URL(`./src`, import.meta.url)),
    },
  },

  define: {
    __VUE_I18N_FULL_INSTALL__: false,
    __VUE_I18N_LEGACY_API__: true,
    __INTLIFY_PROD_DEVTOOLS__: false,
  },

  optimizeDeps: {
    include: [
      `vue`,
      `vue-router`,
      `@vueuse/core`,
      `element-plus`,
    ],
  },

  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@use "@/styles/core/style" as *;`,
      },
    },
  },

  server: {
    open: true,
    host: true,
  },

  build: {
    cssCodeSplit: false,
    manifest: true,
  },

  plugins: [
    Vue({
      reactivityTransform: true,
    }),

    DefineOptions(),

    splitVendorChunkPlugin(),

    Components({
      dts: resolve(`src/components.d.ts`),
      dirs: [`src/components`],
      resolvers: [
        ElementPlusResolver({ importStyle: `sass` }),
        IconsResolver({
          prefix: `icon`,
          enabledCollections: [`mdi`],
        }),
      ],
    }),

    AutoImport({
      dts: resolve(`src/auto-imports.d.ts`),
      imports: [
        `vue`,
        'pinia',
        'vue-i18n',
        `vue-router`,
        `@vueuse/core`,
        { 'element-plus': [`ElMessage`] },
      ],
      eslintrc: {
        enabled: true,
      },
      resolvers: [
        ElementPlusResolver({ importStyle: `sass` }),
        IconsResolver(),
      ],
    }),

    Icons({
      compiler: `vue3`,
      defaultClass: ``,
      defaultStyle: `vertical-align: sub;`,
    }),
  ],
})
