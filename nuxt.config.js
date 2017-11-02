const path = require('path')
const appSrc = path.join(__dirname, 'src')

module.exports = {
  srcDir: appSrc,
  // Headers of the page
  head: {
    title: 'Trevor Eyre',
    meta: [
      {charset: 'utf-8'},
      {name: 'viewport', content: 'width=device-width, initial-scale=1'},
      {hid: 'description', name: 'description', content: 'Web Developer'}
    ],
    link: [
      {rel: 'icon', type: 'image/x-icon', href: '/favicon.ico'},
      {rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Open+Sans:300,400'}
    ]
  },
  modules: [
    ['@nuxtjs/google-analytics', {ua: 'UA-72430951-1'}]
  ],
  // Customize the progress-bar color (color-secondary)
  loading: {color: '#e03616'},
  // Build configuration. Run eslint on save
  build: {
    extend (config, ctx) {
      config.resolve.alias['common'] = path.join(appSrc, 'common')
      if (ctx.dev && ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  }
}
