// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      script: [
        {
          src: "https://whatsform.com/launcher.js",
          id: "wf-widget",
          body: true,
          async: true,
          defer: true,
          "data-id": "_ExmQL",
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
