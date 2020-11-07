module.exports = {
  presets: [
    '@vue/cli-plugin-babel/preset',
  ],

  plugins: [
    ['component', {
      libraryName: 'element-ui',
      styleLibraryName: 'theme-chalk',
    }],
  ],

  env: {
    development: {
      plugins: [
        'dynamic-import-node',
      ],
    },
  },
}
