const ImageminPlugin = require('imagemin-webpack-plugin').default
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin

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
    if (process.env.NODE_ENV === 'production') {
      config.plugins.push(
        new ImageminPlugin({
          pngquant: { quality: '80' }
        })
        // new webpack.IgnorePlugin(/^\.\/locale$/, /moment$/)
      )
      if (!process.env.VUE_APP_TRAVIS) {
        config.plugins.push(new BundleAnalyzerPlugin())
      }
    } else {
      // doSomething
    }
  },

  chainWebpack: config => {
    config.resolve.extensions.store.add('.scss')
  }
}
