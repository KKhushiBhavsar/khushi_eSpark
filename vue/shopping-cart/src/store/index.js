import { createStore } from "vuex";
import cartModule from "@/store/cart/index.js";
import userModule from "@/store/user/index.js";
import saleModule from "@/store/sale/index.js";
const store = createStore({
  modules: {
    cartModule: cartModule,
    userModule: userModule,
    sellModule: saleModule,
  },
});

export default store;
