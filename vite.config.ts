import path from 'node:path'
import { URL, fileURLToPath } from 'node:url'
import { defineConfig, splitVendorChunkPlugin } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueComponents from 'unplugin-vue-components/vite'
import autoImport from 'unplugin-auto-import/vite'
import icons from 'unplugin-icons/vite'
import vueDevTools from 'vite-plugin-vue-devtools'
import IconsResolver from 'unplugin-icons/resolver'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'

const resolve = (...args: string[]) => path.resolve(__dirname, ...args)

export default defineConfig({
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },

  define: {
    __VUE_I18N_FULL_INSTALL__: false,
    __VUE_I18N_LEGACY_API__: true,
    __INTLIFY_PROD_DEVTOOLS__: false,
  },

  optimizeDeps: {
    include: ['vue', 'vue-router', '@vueuse/core', 'element-plus'],
  },

  css: {
    preprocessorOptions: {
      scss: {
        additionalData: '@use "@/styles/core/style" as *;',
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
    vue(),

    vueDevTools(),

    splitVendorChunkPlugin(),

    icons({
      compiler: 'vue3',
      defaultClass: '',
      defaultStyle: 'vertical-align: sub;',
    }),

    vueComponents({
      dts: resolve('src/components.d.ts'),
      dirs: ['src/components'],
      resolvers: [
        ElementPlusResolver({ importStyle: 'sass' }),
        IconsResolver({
          prefix: 'icon',
          enabledCollections: ['mdi'],
        }),
      ],
    }),

    autoImport({
      dts: resolve('src/auto-imports.d.ts'),
      imports: [
        'vue',
        'pinia',
        'vue-i18n',
        'vue-router',
        '@vueuse/core',
        { 'element-plus': ['ElMessage'] },
      ],
      eslintrc: {
        enabled: true,
      },
      resolvers: [ElementPlusResolver({ importStyle: 'sass' }), IconsResolver()],
    }),
  ],
})
