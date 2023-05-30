import { createStore } from "vuex";

const store = createStore({
  state: {
    cartProduct: JSON.parse(localStorage.getItem("productCart")),
  },
  mutations: {
    addToCart(state, product) {
      // console.log("cartProduct", state.cartProduct.cartDetails[0].productId);
      if (!state.cartProduct) {
        state.cartProduct = {
          total: 0,
          userId: null,
          cartDetails: [],
        };
      } else {
        // console.log("after if", state.cartProduct[1]["0"].productId);
        const indexForProduct = state.cartProduct.cartDetails.findIndex(
          (cartProduct) => cartProduct.productId === product.sid
        );
        // console.log(state.cartProduct.cartDetails);
        if (indexForProduct === -1) {
          state.cartProduct.cartDetails.push({
            productId: product.sid,
            productName: product.img,
            price: product.price,
            quantity: 1,
          });
          state.cartProduct.total = +product.price;
        } else {
          state.cartProduct.cartDetails[indexForProduct].quantity++;
          state.cartProduct.total += +product.price;
        }
      }
      localStorage.setItem("productCart", JSON.stringify(state.cartProduct));
    },
  },
  actions: {
    addProductToCart(context, product) {
      context.commit("addToCart", product);
    },
  },
  getters: {
    cart(state) {
      return state.cartProduct;
    },
  },
});
export default store;
