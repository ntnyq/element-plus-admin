const aliases = {
  '@': 'src',
  '@components': 'src/components',
  '@plugins': 'src/plugins',
  '@images': 'src/assets/images',
  '@fonts': 'src/assets/fonts',
  '@router': 'src/router',
  '@services': 'src/services',
  '@store': 'src/store',
  '@utils': 'src/utils',
  '@views': 'src/views'
}

module.exports = {
  webpack: {}
}

for (const alias in aliases) {
  module.exports.webpack[alias] = `${__dirname}/${aliases[alias]}`
}
