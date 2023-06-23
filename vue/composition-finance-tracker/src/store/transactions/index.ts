export const transactions = {
  namespaced: true,
  state: {
    allTransactions: [],
  },
  mutations: {
    GET_ALL_TRANSACTIONS(state: any, data: any) {
      console.log(data, state);
    },
  },
  actions: {
    getAllTransactions(context: any, data: any) {
      context.commit("GET_ALL_TRANSACTIONS", data);
    },
  },
  getters: {
    getAllTransaction(state: any) {
      return state.allTransactions;
    },
  },
};
