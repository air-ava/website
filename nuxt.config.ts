// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      script: [
        {
          src: "https://whatsform.com/launcher.js",
          id: "wf-widget",
          async: true,
          defer: true,
          "data-id": "_EXmQL",
          "data-message": "Message on WhatsApp",
        },
      ],
    },
  },
  devtools: { enabled: true },
  css: ["~/assets/css/main.css"],
  modules: ["nuxt-gtag", "@nuxtseo/module"],
  gtag: {
    id: "UA-165321862-1",
  },
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  site: {
    url: "https://airava.org",
    name: "Fly private in comfort speed and style",
    description:
      "Welcome to Ava, where you are winged for your comfort! We are thrilled to offer exclusive rentals on private jets worldwide tailored for those who value comfort...",
    defaultLocale: "en",
    identity: {
      type: "Organization",
    },
  },
});
