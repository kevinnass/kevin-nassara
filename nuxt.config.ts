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
          { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
          { rel: 'apple-touch-icon', href: '/icon.png' },
          { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
          { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
          { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Khand:wght@400;500;600;700&family=Inter:wght@300;400;500;600;700&family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;0,700;1,400;1,600&family=Geist+Mono:wght@300;400;500;600&display=swap' }
        ]
      },
    pageTransition: { name: 'page', mode: 'out-in' }
  },
  build: {
    transpile: ['@lottiefiles/dotlottie-vue']
  }
})
