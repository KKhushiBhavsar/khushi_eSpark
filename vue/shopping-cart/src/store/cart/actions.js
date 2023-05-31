export default {
  addProductToCart(context, product) {
    context.commit("addToCart", product);
  },
  decreaseQuantity(context, product) {
    context.commit("manageProductQunatity", {
      action: "decreaseQty",
      product: product,
    });
  },
  increaseQuantity(context, product) {
    context.commit("manageProductQunatity", {
      action: "increaseQty",
      product: product,
    });
  },
  removeProduct(context, product) {
    context.commit("removeProductFromCart", product);
  },
};
