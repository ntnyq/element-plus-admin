/**
 * @file vue-cli config
 */

const { defineConfig } = require('@vue/cli-service')
const UnpluginComponents = require('unplugin-vue-components/webpack')
const UnpluginAutoImport = require('unplugin-auto-import/webpack')
const UnpluginIcons = require('unplugin-icons/webpack')
const UnpluginIconsResolver = require('unplugin-icons/resolver')
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
      UnpluginComponents({
        dts: true,
        dirs: [`src/components`],
        resolvers: [
          ElementPlusResolver(),
          UnpluginIconsResolver({
            prefix: `icon`,
            enabledCollections: [`mdi`],
          }),
        ],
      }),
      UnpluginAutoImport({
        resolvers: [
          ElementPlusResolver(),
          UnpluginIconsResolver(),
        ],
      }),
      UnpluginIcons({
        compiler: `vue3`,
        defaultClass: `icon-mdi`,
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
