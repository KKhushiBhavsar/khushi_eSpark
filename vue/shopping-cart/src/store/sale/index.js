import saleMutations from "@/store/sale/mutations.js";
import saleActions from "@/store/sale/actions.js";
import saleGetters from "@/store/sale/getters.js";
export default {
  state: {
    saleProducts: [],
    allProducts: JSON.parse(localStorage.getItem("subCategoriesItems")) ?? [],
  },
  mutations: saleMutations,
  actions: saleActions,
  getters: saleGetters,
  modules: {},
};
