const globalData = require('@csstools/postcss-global-data')
const customMedia = require('postcss-custom-media')

module.exports = {
  plugins: [
    globalData({
      files: [require.resolve('@slate-ui/core/src/theme.css'), './src/theme.css'],
    }),
    customMedia,
  ],
}
