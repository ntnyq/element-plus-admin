const webpack = require('webpack')
const ImageminPlugin = require('imagemin-webpack-plugin').default
const imageminMozjpeg = require('imagemin-mozjpeg')
const StylelintWebpackPlugin = require('stylelint-webpack-plugin')

const plugins = [
  ...(process.env.NODE_ENV === 'production'
    ? [
      new ImageminPlugin({
        pngquant: { quality: '65-80' },
        plugins: [
          imageminMozjpeg({
            quality: 70,
            progressive: true,
          }),
        ],
      }),
      new webpack.IgnorePlugin(/^\.\/locale$/, /moment$/), // no i18n
      // new webpack.ContextReplacementPugin(/moment[\/\\]locales$/, /zh-cn|en-use/) with i18n
    ]
    : [
      new StylelintWebpackPlugin({
        files: ['**/*.{vue,scss}'],
        // cache: true,
        emitErrors: true,
        failOnError: false,
      }),
    ]),
]

exports.aliases = {
  '@assets': '@/assets',
  '@components': '@/components',
  '@config': '@/config',
  '@constants': '@/constants',
  '@directives': '@/directives',
  '@filters': '@/filters',
  '@fonts': '@/assets/fonts',
  '@icons': '@/icons',
  '@i18n': '@/i18n',
  '@images': '@/assets/images',
  '@plugins': '@/plugins',
  '@router': '@/router',
  '@services': '@/services',
  '@styles': '@/styles',
  '@store': '@/store',
  '@utils': '@/utils',
  '@views': '@/views',
}

exports.plugins = plugins
