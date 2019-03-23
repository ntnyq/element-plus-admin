const webpack = require('webpack')
const ImageminPlugin = require('imagemin-webpack-plugin').default
const imageminMozjpeg = require('imagemin-mozjpeg')
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin
const StylelintWebpackPlugin = require('stylelint-webpack-plugin')

const {
  NODE_ENV,
  VUE_APP_ANALYZER
} = process.env

const plugins = [
  ...(NODE_ENV === 'production'
    ? [
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
    ]
    : [
      new StylelintWebpackPlugin({
        files: ['**/*.{vue,scss}'],
        // cache: true,
        emitErrors: true,
        failOnError: false
      })
    ]),
  ...(VUE_APP_ANALYZER ? [
    new BundleAnalyzerPlugin()
  ] : [])
]

module.exports = plugins
