/**
 * @file vue-cli config
 */

const path = require(`path`)
const { defineConfig } = require(`@vue/cli-service`)
const Components = require(`unplugin-vue-components/webpack`)
const AutoImport = require(`unplugin-auto-import/webpack`)
const Icons = require(`unplugin-icons/webpack`)
const IconsResolver = require(`unplugin-icons/resolver`)
const { ElementPlusResolver } = require(`unplugin-vue-components/resolvers`)

const isProduction = process.env.NODE_ENV === `production`
const resolve = (...args) => path.resolve(__dirname, ...args)

module.exports = defineConfig({
  publicPath: process.env.BASE_URL || `./`,

  assetsDir: `static`,

  productionSourceMap: false,

  transpileDependencies: [],

  css: {
    loaderOptions: {
      scss: {
        additionalData: `@use "@/styles/core/style" as *;`,
      },
    },
  },

  devServer: {
    host: `localhost`,
    open: true,
  },

  configureWebpack: {
    experiments: {
      topLevelAwait: true,
    },

    optimization: {
      splitChunks: {
        cacheGroups: {
          vue: {
            name: `chunk-vue`,
            test: /[\\/]node_modules[\\/](vue|vue-router|pinia|vue-i18n)[\\/]/,
            chunks: `all`,
            // vendor is -10
            priority: -5,
          },
        },
      },
    },

    plugins: [
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
        imports: [`vue`, { 'element-plus': [`ElMessage`] }],
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
  },

  chainWebpack: config => {
    // https://webpack.js.org/configuration/devtool/#development
    config.when(!isProduction, config => config.devtool(`cheap-source-map`))

    config.module
      .rule(`vue`)
      .use(`vue-loader`)
      .tap(options => ({
        ...options,
        reactivityTransform: true,
      }))
  },
})
