// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  ssr: true,
  routeRules: {
    // Homepage pre-rendered at build time
    '/': { prerender: true },
  },
  modules: [
    ['@nuxtjs/google-fonts', {
        families: {
          Montserrat: [400, 700],
          Lato: [100, 300],
        }
    }],
  ],
  app: {
    head: {
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '_nuxt/public/favicon.ico' },
        { rel: 'stylesheet', href: '_nuxt/public/styles.css' },
        {
          rel: 'preload',
          href: '_nuxt/public/ProximaNova.e802340f.eot',
          crossorigin: '',
          as: 'font',
          type: 'font/woff2',
        },
        {
          rel: 'preload',
          href: '_nuxt/public/ProximaNova.31015419.svg',
          crossorigin: '',
          as: 'font',
          type: 'font/woff2',
        },
        {
          rel: 'preload',
          href: '_nuxt/public/ProximaNova.12ccd551.woff',
          crossorigin: '',
          as: 'font',
          type: 'font/woff2',
        }
      ],
      script: [
        { src: '_nuxt/public/script.js' },
        { src: '_nuxt/public/analytics.js' }
      ],
    },
  },

})
