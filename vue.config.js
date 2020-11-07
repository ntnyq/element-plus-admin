const path = require('path')
const resolve = (...args) => path.resolve(__dirname, ...args)

module.exports = {
  publicPath: process.env.BASE_URL || './',

  assetsDir: 'static',

  productionSourceMap: process.env.NODE_ENV === 'production',

  css: {
    loaderOptions: {
      sass: {
        additionalData: '@import "@/styles/core/style";',
      },
    },
  },

  devServer: {
    open: true,
  },

  chainWebpack: config => {
    // set svg-sprite-loader
    config.module
      .rule('svg')
      .exclude.add(resolve('src/icons'))
      .end()

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
