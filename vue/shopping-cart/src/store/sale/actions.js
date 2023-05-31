export default {
  startSale(context) {
    context.commit("startSaleProducts");
  },
  endSale(context) {
    context.commit("removeFromSaleProducts");
  },
};
