const ImageminPlugin = require('imagemin-webpack-plugin').default

module.exports = {
  baseUrl: './',

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
    if (process.env.NODE_ENV === 'production') {
      config.plugins.push(
        new ImageminPlugin({
          pngquant: { quality: '80' }
        })
        // new webpack.IgnorePlugin(/^\.\/locale$/, /moment$/)
      )
    } else {
      // doSomething
    }
  },

  chainWebpack: config => {
    config.resolve.extensions.store.add('.scss')
  }
}
