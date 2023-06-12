// Styles
import "@mdi/font/css/materialdesignicons.css";
import "vuetify/styles";

// Vuetify

import "vuetify/styles";
import { createVuetify } from "vuetify";
import * as components from "vuetify/components";
import * as directives from "vuetify/directives";
import { VDataTable } from "vuetify/labs/VDataTable";


import "font-awesome/css/font-awesome.min.css";

export default createVuetify({
  theme: {
    defaultTheme: "light",
    themes: {},
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
