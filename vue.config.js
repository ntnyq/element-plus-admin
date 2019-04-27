const { aliases, plugins } = require('./project.config')

module.exports = {
  publicPath: './',

  css: {
    loaderOptions: {
      sass: {
        data: '@import "@/styles/core/style";'
      }
    }
  },

  devServer: {
    port: 9527,
    open: true
  },

  configureWebpack: config => {
    config.plugins.push(...plugins)
    config.resolve.alias = aliases
  },

  chainWebpack: config => {
    config.resolve.extensions.store.add('.scss')

    // set svg-sprite-loader
    config.module
      .rule('svg')
      .exclude.add(`${__dirname}/src/icons`)
      .end()
    config.module
      .rule('icons')
      .test(/\.svg$/)
      .include.add(`${__dirname}/src/icons`)
      .end()
      .use('svg-sprite-loader')
      .loader('svg-sprite-loader')
      .options({
        symbolId: 'icon-[name]'
      })
      .end()
  }
}
