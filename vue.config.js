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
    config.plugins.push(
      ...require('./plugins.config')
    )

    // custom aliases
    config.resolve.alias = require('./aliases.config').webpack
  },

  chainWebpack: config => {
    config.resolve.extensions.store.add('.scss')

    // svg loader
    const svgRule = config.module.rule('svg')

    svgRule.uses.clear()
    svgRule.exclude.add(/node_modules/)
    svgRule.include.add(`${__dirname}/src/icons`)
    svgRule
      .test(/\.svg$/)
      .use('svg-sprite-loader')
      .loader('svg-sprite-loader')
      .options({
        symbolId: 'icon-[name]'
      })

    // images
    const imagesRule = config.module.rule('images')

    imagesRule.exclude.add(`${__dirname}/src/icons`)
    config.module
      .rule('images')
      .test(/\.(png|jpe?g|gif|svg)(\?.*)?$/)
  }
}
