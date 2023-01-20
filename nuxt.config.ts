const url = require("url");
const fileURLToPath = url.fileURLToPath;

// https://nuxt.com/docs/api/configuration/nuxt-config
// eslint-disable-next-line no-undef
export default defineNuxtConfig({
  alias: {
    components: fileURLToPath(new URL("./src/components", import.meta.url)),
    views: fileURLToPath(new URL("./src/views", import.meta.url)),
  },
  css: ["vuetify/styles"],
  build: {
    transpile: ["vuetify"],
  },
  vite: {
    define: {
      "process.env.DEBUG": true,
    },
    ssr: {
      noExternal: ["vuetify"],
    },
  },
  srcDir: "src/",
  nitro: {
    plugins: ["~/server/index.ts"],
  },
  imports: {
    dirs: ["store", "composables"],
  },
  runtimeConfig: {
    mongoUrl: process.env.MONBODB_URI,
  },
  //   webpack: {
  //     plugins: [
  //       new MonacoWebpackPlugin({
  //         languages: ["javascript", "css", "html", "typescript", "json"],
  //         features: ["!gotoSymbol"],
  //       }),
  //     ],
  //   },
  modules: [
    [
      "@pinia/nuxt",
      {
        autoImports: ["defineStore", "acceptHMRUpdate"],
      },
    ],
    "@nuxtjs/device",
    "@sidebase/nuxt-auth",
  ],
  auth: {
    isEnabled: true,
    basePath: "/api/auth",
    enableSessionRefreshPeriodically: 1000,
    enableSessionRefreshOnWindowFocus: true,
    enableGlobalAppMiddleware: true,
    globalMiddlewareOptions: {
      allow404WithoutAuth: true,
    },
  },
});
