// import router from "./routes";
// import { createApp } from "vue";
// import App from "./App.vue";
// import vuetify from "./plugins/vuetify/vuetify";
// // import { loadFonts } from "./plugins/vuetify/webfontloader";

// // loadFonts();
// createApp(App).use(router).use(vuetify).mount("#app");

import { createApp } from "vue";
import App from "./App.vue";
import router from "./routes";
// Vuetify
import "@mdi/font/css/materialdesignicons.css";
import "vuetify/styles";
import { createVuetify } from "vuetify";
import * as components from "vuetify/components";
import * as directives from "vuetify/directives";

const vuetify = createVuetify({
  components,
  directives,
});

createApp(App).use(router).use(vuetify).mount("#app");
