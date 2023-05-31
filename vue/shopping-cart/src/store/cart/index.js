import cartMutation from "@/store/cart/mutations.js";
import cartActions from "@/store/cart/actions.js";
import cartGetters from "@/store/cart/getters.js";
export default {
  state: {
    cartProduct: JSON.parse(localStorage.getItem("productCart")) ?? [],
  },
  mutations: cartMutation,
  actions: cartActions,
  getters: cartGetters,
};
