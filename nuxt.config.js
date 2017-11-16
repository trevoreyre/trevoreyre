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
      {hid: 'description', name: 'description', content: 'Web Developer'},
      {name: 'apple-mobile-web-app-title', content: 'Trevor Eyre'},
      {name: 'application-name', content: 'Trevor Eyre'},
      {name: 'theme-color', content: '#1c5b72'}
    ],
    link: [{
      rel: 'apple-touch-icon',
      sizes: '180x180',
      href: '/apple-touch-icon.png?v=BGAoBqWlzN'
    }, {
      rel: 'icon',
      type: 'image/png',
      sizes: '32x32',
      href: '/favicon-32x32.png?v=BGAoBqWlzN'
    }, {
      rel: 'icon',
      type: 'image/png',
      sizes: '16x16',
      href: '/favicon-16x16.png?v=BGAoBqWlzN'
    }, {
      rel: 'manifest',
      href: '/manifest.json?v=BGAoBqWlzN'
    }, {
      rel: 'mask-icon',
      href: '/safari-pinned-tab.svg?v=BGAoBqWlzN'
    }, {
      rel: 'shortcut icon',
      href: '/favicon.ico?v=BGAoBqWlzN'
    }, {
      rel: 'stylesheet',
      href: 'https://fonts.googleapis.com/css?family=Open+Sans:300,400'
    }]
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
