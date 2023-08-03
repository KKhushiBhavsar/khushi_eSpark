import { createApp } from "vue";
import App from "./App.vue";
import vue3GoogleLogin from "vue3-google-login";

createApp(App)
  .use(vue3GoogleLogin, {
    clientId:
      "764175917661-17eoaeeh8582plcve1hnrla01btaf1md.apps.googleusercontent.com",
  })
  .mount("#app");
