import config from './config'
import { fileURLToPath } from 'node:url';
import API from './api'


// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },

  runtimeConfig: {
    public: {
      baseUrl: config.baseURL,
      locale: config.locales[0],
      API,
    },
    proxy: {
      options: {
        target: config.mediaURL,
        pathRewrite: { '^/media': '' },
        pathFilter: ['/media'],
      },
    },
  },

  nitro: {
    devProxy: {
      '/media': {
        target: config.mediaURL,
        changeOrigin: true,
      },
    },
  },

  ssr: true,

  typescript: {
    shim: false,
  },

  alias: {
    '@': fileURLToPath(new URL('./', import.meta.url)),
  },

  css: ['@/styles/main.scss'],

  app: {
    head: {
      title: 'Qtim',
      meta: [
        { charset: 'utf-8' },
        {
          name: 'theme-color',
          content: '#e2beff',
        },
        {
          name: 'viewport',
          content: 'width=device-width, initial-scale=1',
        },
        {
          property: 'og:type',
          content: 'website',
        },
        {
          property: 'og:site_name',
          content: 'test.com',
        },
        {
          property: 'og:image',
          content: '/images/cover.jpg',
        },
      ],
      link: [
        {
          rel: 'icon',
          type: 'image/x-icon',
          href: '/favicon.ico',
        },
        {
          rel: 'icon',
          type: 'image/png',
          sizes: '32x32',
          href: '/favicon-32x32.png',
        },
        {
          rel: 'icon',
          type: 'image/png',
          sizes: '16x16',
          href: '/favicon-16x16.png',
        },
        {
          rel: 'manifest',
          href: '/site.webmanifest',
        },
        {
          rel: 'preload',
          type: 'font/woff2',
          href: '/fonts/TTCommons-Regular.woff2',
          as: 'font',
          crossorigin: true,
        },
      ],
    },
  },

  components: {
    dirs: [
      {
        path: '~/components/global',
        global: true,
      },
      {
        path: '~/components/controls',
        global: true,
      },
      '~/components',
    ],
  },

  modules: [
    'nuxt-svgo',
    'nuxt-swiper',
    '@nuxtjs/sitemap',
    [
      '@pinia/nuxt',
      {
        autoImports: ['defineStore', 'acceptHMRUpdate'],
      },
    ],
  ],

  swiper: {
    modules: ['navigation', 'pagination', 'autoplay'], // all modules are imported by default
  },

  // googleAnalytics: {
  // 	id: "UA-179814976-1"
  // },

  plugins: ['~/plugins/click-outside.ts', '~/plugins/simplebar.ts'],

  sitemap: {
    xsl: false,
    path: '/sitemap.xml',
    hostname: `${config.protocol}${config.mainHost}`,
    cacheTime: process.env.NODE_ENV === 'production' ? 1000 * 60 * 10 : 100,
    gzip: false,
    generate: false,
    exclude: ['/appndx', '/errors/**'],
    defaults: {
      changefreq: 'daily',
      priority: 1,
      lastmod: new Date(),
    },
    sources: ['/api/__sitemap__/urls'],
  },

  imports: {
    dirs: ['store'],
  },

  compatibilityDate: '2025-03-27',
})