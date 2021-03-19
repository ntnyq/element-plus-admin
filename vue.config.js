/**
 * @file VueCli config
 */

// eslint-disable-next-line @typescript-eslint/no-var-requires
const path = require('path')

const resolve = (...args) => path.resolve(__dirname, ...args)

const isProduction = process.env.NODE_ENV === 'production'

/**
 * @type { import('@vue/cli-service').ProjectOptions }
 */
module.exports = {
  publicPath: process.env.BASE_URL || './',

  assetsDir: 'static',

  productionSourceMap: false,

  transpileDependencies: [],

  css: {
    loaderOptions: {
      sass: {
        additionalData: '@import "@/styles/core/style";',
        ...(isProduction ? { implementation: require('node-sass') } : {}),
      },
    },
  },

  devServer: {
    open: true,
  },

  chainWebpack: config => {
    // Disable Prefetch
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
}
