// Styles
import "@mdi/font/css/materialdesignicons.css";
import "vuetify/styles";

// Vuetify

import "vuetify/styles";
import { createVuetify } from "vuetify";
import * as components from "vuetify/components";
import * as directives from "vuetify/directives";
import { VDataTable } from "vuetify/labs/VDataTable";

// import { fa } from "vuetify/iconsets/fa";
// import { aliases, mdi } from "vuetify/lib/iconsets/mdi";
// import "@mdi/font/css/materialdesignicons.css";
import "font-awesome/css/font-awesome.min.css";

const customDarkTheme = {
  dark: true,
  colors: {
    background: "#15202b",
    surface: "#15202b",
    primary: "#3f51b5",
    secondary: "#03dac6",
    error: "#ff5722",
  },
};

const customLightTheme = {
  dark: true,
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
export default createVuetify({
  theme: {
    defaultTheme: "light",
    themes: {
      customDarkTheme,
    },
  },
  // https://vuetifyjs.com/en/introduction/why-vuetify/#feature-guides
  icons: {
    defaultSet: "mdi",
    // aliases,
    sets: {
      // mdi,
      // fa,
    },
  },
  components: { VDataTable },
  directives,
});
