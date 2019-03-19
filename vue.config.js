const webpack = require('webpack')
const ImageminPlugin = require('imagemin-webpack-plugin').default
const imageminMozjpeg = require('imagemin-mozjpeg')
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin
const StylelintWebpackPlugin = require('stylelint-webpack-plugin')

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
          pngquant: { quality: '65-80' },
          plugins: [
            imageminMozjpeg({
              quality: 70,
              progressive: true
            })
          ]
        }),
        new webpack.IgnorePlugin(/^\.\/locale$/, /moment$/) // no i18n
        // new webpack.ContextReplacementPugin(/moment[\/\\]locales$/, /zh-cn|en-use/) with i18n
      )
      if (!process.env.VUE_APP_TRAVIS) {
        config.plugins.push(new BundleAnalyzerPlugin())
      }
    } else {
      config.plugins.push(
        new StylelintWebpackPlugin({
          files: [ '**/*.{vue,scss}' ],
          // cache: true,
          emitErrors: true,
          failOnError: false
        })
      )
    }
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
    config.module.rule('images').test(/\.(png|jpe?g|gif|svg)(\?.*)?$/)
  }
}
