const path = require('path')
const glob = require('glob')

const paths = {
  src: path.resolve(__dirname, 'src'),
  common: path.resolve(__dirname, 'src', 'common'),
  content: path.resolve(__dirname, 'src', 'content')
}

const notesRoutes = glob
  .sync('notes/*.md', { cwd: 'src/content' })
  .map(filepath => `/notes/${path.basename(filepath, '.md')}`)

module.exports = {
  srcDir: paths.src,

  head: {
    title: 'Trevor Eyre',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Web Developer' },
      { name: 'apple-mobile-web-app-title', content: 'Trevor Eyre' },
      { name: 'application-name', content: 'Trevor Eyre' },
      { name: 'theme-color', content: '#1c5b72' }
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
    ['@nuxtjs/google-analytics', { ua: 'UA-72430951-1' }]
  ],

  // Customize the progress-bar color (color-secondary)
  loading: { color: '#e03616' },

  // Build configuration. Run eslint on save
  build: {
    extend (config, ctx) {
      config.resolve.alias.common = paths.common

      config.module.rules.push({
        test: /\.md$/,
        include: paths.content,
        loader: 'frontmatter-markdown-loader'
      })

      if (ctx.dev && ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  },

  // Extend vue-router so URL params are available to components as props
  router: {
    extendRoutes (routes) {
      routes.forEach(route => {
        route.props = true
      })
    }
  },

  generate: {
    routes: notesRoutes
  }
}
