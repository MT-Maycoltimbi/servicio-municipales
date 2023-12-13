
// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  ssr: true,
  imports:{
    dirs: ['stores']
  },
  css: [
    'vuetify/lib/styles/main.sass',
    '@mdi/font/css/materialdesignicons.min.css'
  ],
  build: {
    transpile: ['vuetify']
  },
  modules:[
    '@pinia/nuxt',
    '@sidebase/nuxt-auth',
  ],
  runtimeConfig:{
    MONGO_URI: process.env.MONGO_URI,
    SECRET: 'Servicio municipales',
    EMAIL_USER: process.env.EMAIL_USER, 
    EMAIL_PASSWORD: process.env.EMAIL_PASSWORD
  },
  auth:{
    origin: process.env.DOMAIN,
  },
  devServer:{
    port: +process.env.PORT!,
  }
})
