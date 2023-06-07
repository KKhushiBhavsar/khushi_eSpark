import { createStore } from "vuex";
import { transactions } from "@/store/transactions";
const store = createStore({
  modules: {
    transactions: transactions,
  },
});
export default store;
