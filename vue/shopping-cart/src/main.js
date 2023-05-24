import { createApp } from "vue";
import App from "./App.vue";
import router from "./routes";
import { createStore } from "vuex";

const store = createStore({
  state() {
    return {
      categories: JSON.parse(localStorage.getItem("categories")),
      subCategories: JSON.parse(localStorage.getItem("subCategories")),
    };
  },
});
createApp(App).use(store).use(router).mount("#app");
