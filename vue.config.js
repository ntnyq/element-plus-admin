/**
 * @file vue-cli config
 */

const { defineConfig } = require('@vue/cli-service')
const Components = require('unplugin-vue-components/webpack')
const AutoImport = require('unplugin-auto-import/webpack')
const Icons = require('unplugin-icons/webpack')
const IconsResolver = require('unplugin-icons/resolver')
const { ElementPlusResolver } = require('unplugin-vue-components/resolvers')

const isProduction = process.env.NODE_ENV === `production`

module.exports = defineConfig({
  publicPath: process.env.BASE_URL || `./`,

  assetsDir: `static`,

  productionSourceMap: false,

  transpileDependencies: [],

  css: {
    loaderOptions: {
      sass: {
        additionalData: `@import "@/styles/core/style";`,
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
    plugins: [
      Components({
        dts: true,
        dirs: [`src/components`],
        resolvers: [
          ElementPlusResolver(),
          IconsResolver({
            prefix: `icon`,
            enabledCollections: [`mdi`],
          }),
        ],
      }),
      AutoImport({
        resolvers: [
          ElementPlusResolver(),
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
    // Disable prefetch
    config.plugins.delete(`prefetch`)

    // https://webpack.js.org/configuration/devtool/#development
    config.when(!isProduction, config => config.devtool(`cheap-source-map`))
  },
})
