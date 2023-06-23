import { createApp } from "vue";
import App from "./App.vue";

// Vuetify
import "vuetify/styles";
import { createVuetify } from "vuetify";
import * as components from "vuetify/components";
import * as directives from "vuetify/directives";

import { fa } from "vuetify/iconsets/fa";
import { aliases, mdi } from "vuetify/lib/iconsets/mdi";
import "@mdi/font/css/materialdesignicons.css";
import "font-awesome/css/font-awesome.min.css";

const myCustomLightTheme = {
  dark: false,
  colors: {
    background: "#15202b",
    surface: "#15202b",
    primary: "#3f51b5",
    secondary: "#03dac6",
    error: "#f44336",
    info: "#2196F3",
    success: "#4caf50",
    warning: "#fb8c00",
  },
};
const vuetify = createVuetify({
  // theme: {
  //   defaultTheme: "dark",
  // },
  theme: {
    defaultTheme: "myCustomLightTheme",
    themes: {
      myCustomLightTheme,
    },
  },
  // theme: {
  // light: {
  //   primary: "#1976D2",
  //   secondary: "#424242",
  //   accent: "#82B1FF",
  //   error: "#FF5252",
  //   info: "#2196F3",
  //   success: "#4CAF50",
  //   warning: "#FB8C00",
  // },
  // light: {
  //   primary: "#3f51b5",
  //   secondary: "#b0bec5",
  //   accent: "#8c9eff",
  //   error: "#b71c1c",
  // },
  // },

  icons: {
    defaultSet: "mdi",
    aliases,
    sets: {
      mdi,
      fa,
    },
  },
  components,
  directives,
});
createApp(App).use(vuetify).mount("#app");
