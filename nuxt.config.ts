// https://nuxt.com/docs/api/configuration/nuxt-config
// header scripts can be added as an array
export default defineNuxtConfig({
  app: {
    head: {
      script: [
        {
          src: "https://whatsform.com/launcher.js",
          id: "wf-widget",
          async: true,
          defer: true,
          "data-id": "J4wsW1",
          "data-message": "Message on WhatsApp",
        },
      ],
    },
  },
  devtools: { enabled: true },
  css: ["~/assets/css/main.css"],
  modules: ["nuxt-gtag"],
  gtag: {
    id: "UA-165321862-1",
  },
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
});
