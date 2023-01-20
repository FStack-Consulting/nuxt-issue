import { createVuetify } from "vuetify";
import * as components from "vuetify/components";
import * as directives from "vuetify/directives";

import { mdi } from "vuetify/lib/iconsets/mdi";
import "@mdi/font/css/materialdesignicons.min.css";

export default defineNuxtPlugin((nuxtApp) => {
  const flyteTheme = {
    dark: true,
    colors: {
      primary: "#121212",
      secondary: "#555",
      accent: "#FAFE29",
      error: "#FF5252",
      info: "#2196F3",
      success: "#4CAF50",
      warning: "#FFC107",
      background: "#333",
      surface: "#212121",
      border: "#EEE",
    },
  };

  const vuetify = createVuetify({
    components,
    directives,
    theme: {
      defaultTheme: "flyteTheme",
      themes: {
        flyteTheme,
      },
    },
    icons: {
      defaultSet: "mdi",
      sets: {
        mdi,
      },
    },
  });
  nuxtApp.vueApp.use(vuetify);
});
