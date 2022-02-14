/**
 * @file VueCli config
 */

const path = require('path')
const { defineConfig } = require('@vue/cli-service')
const UnpluginComponents = require('unplugin-vue-components/webpack')
const UnpluginAutoImport = require('unplugin-auto-import/webpack')
const { ElementPlusResolver } = require('unplugin-vue-components/resolvers')

const resolve = (...args) => path.resolve(__dirname, ...args)

const isProduction = process.env.NODE_ENV === 'production'

module.exports = defineConfig({
  publicPath: process.env.BASE_URL || './',

  assetsDir: 'static',

  productionSourceMap: false,

  transpileDependencies: true,

  css: {
    loaderOptions: {
      sass: {
        additionalData: '@import "@/styles/core/style";',
      },
    },
  },

  devServer: {
    host: `localhost`,
    open: true,
  },

  configureWebpack: {
    plugins: [
      UnpluginComponents({
        dts: true,
        resolvers: [
          ElementPlusResolver(),
        ],
      }),
      UnpluginAutoImport({
        resolvers: [
          ElementPlusResolver(),
        ],
      }),
    ],
  },

  chainWebpack: config => {
    // Disable prefetch
    config.plugins.delete('prefetch')

    // https://webpack.js.org/configuration/devtool/#development
    config.when(!isProduction, config => config.devtool('cheap-source-map'))

    // Config svg-sprite-loader
    config.module.rule('svg').exclude.add(resolve('src/icons')).end()

    config.module
      .rule('icons')
      .test(/\.svg$/)
      .include.add(resolve('src/icons'))
      .end()
      .use('svg-sprite-loader')
      .loader('svg-sprite-loader')
      .options({
        symbolId: 'icon-[name]',
      })
      .end()
  },
})
