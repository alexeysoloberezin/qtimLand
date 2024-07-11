// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: false,
  devtools: {enabled: true},
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  modules: [
  ],
  plugins: [
    '~/plugins/theme.js',
    '~/plugins/pinia.js',
    '~/plugins/vue-3-mask.js',
    { src: '~/plugins/socket.client.js', mode: 'client' }
  ],
  css: ['~/assets/styles/main.scss'],
  nitro: {
    experimental: {
      websocket: true
    },
  },
  runtimeConfig: {
    public: {
      socketUrl: process.env.SOCKET_URL || 'http://localhost:3003',
    },
  },
})
