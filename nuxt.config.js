import env from './config/environment.js'
import plugins from './config/plugins.js'

export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',
  server: false,
  // server: {
  //   port: 8000, // default: 3000
  //   host: '0.0.0.0' // default: localhost
  // },
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'verslag-uncommon',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: '/fonts/fonts.css' }
    ]
  },

  router: {
    middleware: 'default'
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '~/assets/scss/main.scss',
    'swiper/swiper.min.css'
  ],
  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins,
  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    // https://go.nuxtjs.dev/stylelint
    '@nuxtjs/stylelint-module',

    // style resources
    '@nuxtjs/style-resources'
  ],

  env,

  styleResources: {
    scss: [
      '~assets/scss/functions/*.scss',
      '~assets/scss/mixins/*.scss',
      '~assets/scss/_config.scss',
      '~assets/scss/placeholders/*.scss',
      '~assets/scss/bootstrap/_variables.scss'
    ]
  },

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    //
    '@nuxtjs/markdownit'
  ],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
}
