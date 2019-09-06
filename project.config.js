const path = require('path')
const webpack = require('webpack')
const ImageminPlugin = require('imagemin-webpack-plugin').default
const imageminMozjpeg = require('imagemin-mozjpeg')
const StylelintWebpackPlugin = require('stylelint-webpack-plugin')

const resolve = (...args) => path.resolve(__dirname, ...args)

const aliasesConfig = {
  '@': 'src',
  '@assets': 'src/assets',
  '@components': 'src/components',
  '@config': 'src/config',
  '@constants': 'src/constants',
  '@directives': 'src/directives',
  '@filters': 'src/filters',
  '@fonts': 'src/assets/fonts',
  '@icons': 'src/icons',
  '@i18n': 'src/i18n',
  '@images': 'src/assets/images',
  '@plugins': 'src/plugins',
  '@router': 'src/router',
  '@services': 'src/services',
  '@styles': 'src/styles',
  '@store': 'src/store',
  '@utils': 'src/utils',
  '@views': 'src/views'
}

const plugins = [
  ...(process.env.NODE_ENV === 'production'
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
    ])
]

exports.aliases = {}

for (const alias in aliasesConfig) {
  exports.aliases[alias] = resolve(aliasesConfig[alias])
}

exports.plugins = plugins
