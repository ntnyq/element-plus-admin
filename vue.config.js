const path = require('path')
const { aliases, plugins } = require('./project.config')
const resolve = (...args) => path.resolve(__dirname, ...args)

module.exports = {
  publicPath: process.env.BASE_URL || './',

  css: {
    loaderOptions: {
      sass: {
        prependData: '@import "@styles/core/style";'
      }
    }
  },

  devServer: {
    port: 9527,
    open: true
  },

  configureWebpack: config => {
    config.plugins.push(...plugins)
    config.resolve.alias = { ...config.resolve.alias, ...aliases }
  },

  chainWebpack: config => {
    config.resolve.extensions.store.add('.scss')

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
        symbolId: 'icon-[name]'
      })
      .end()
  }
}
