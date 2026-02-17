// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  modules: [
    '@nuxtjs/tailwindcss',
    '@pinia/nuxt',
  ],
  css: ['~/assets/css/main.css'],
  app: {
      head: {
        title: 'Kevin Nassara',
        link: [
          { rel: 'icon', type: 'image/x-icon', href: '/public/favicon.ico' },
          { rel: 'apple-touch-icon', href: '/public/icon.png' },
          { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
          { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
          { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&family=Geist+Mono:wght@100..900&display=swap' }
        ]
      },
    pageTransition: { name: 'page', mode: 'out-in' }
  },
  build: {
    transpile: ['@lottiefiles/dotlottie-vue']
  }
})
