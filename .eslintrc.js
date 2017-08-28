module.exports = {
  root: true,
  parser: 'babel-eslint',
  env: {
    browser: true,
    node: true
  },
  extends: 'standard',
  // Required to lint *.vue files
  plugins: [
    'html'
  ],
  // Add your custom rules here
  rules: {},
  globals: {}
}
