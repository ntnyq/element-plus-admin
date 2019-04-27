const webpack = require('webpack')
const ImageminPlugin = require('imagemin-webpack-plugin').default
const imageminMozjpeg = require('imagemin-mozjpeg')
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin
const StylelintWebpackPlugin = require('stylelint-webpack-plugin')

const {
  NODE_ENV,
  VUE_APP_ANALYZER
} = process.env

const aliasesConfig = {
  '@': 'src',
  '@assets': 'src/assets',
  '@components': 'src/components',
  '@config': 'src/config',
  '@filters': 'src/filters',
  '@icons': 'src/icons',
  '@i18n': 'src/i18n',
  '@plugins': 'src/plugins',
  '@images': 'src/assets/images',
  '@fonts': 'src/assets/fonts',
  '@router': 'src/router',
  '@services': 'src/services',
  '@styles': 'src/styles',
  '@store': 'src/store',
  '@utils': 'src/utils',
  '@views': 'src/views'
}

const plugins = [
  ...(
    NODE_ENV === 'production'
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
  ...(
    VUE_APP_ANALYZER ? [
      new BundleAnalyzerPlugin()
    ]
      : [])
]

exports.aliases = {}

for (const alias in aliasesConfig) {
  exports.aliases[alias] = `${__dirname}/${aliasesConfig[alias]}`
}

exports.plugins = plugins
