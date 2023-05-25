import { createStore } from "vuex";

const store = createStore({
  state: {
    cartProduct: JSON.parse(localStorage.getItem("productCart")),
  },
  mutations: {
    addToCart(state, product) {
      //   console.log("stateData", state.cartProduct);
      if (!state.cartProduct) {
        state.cartProduct = [
          {
            userId: null,
            productId: product.sid,
            productName: product.img,
            price: product.price,
            quantity: 1,
            total: product.price,
          },
        ];
      } else {
        // console.log("after if", state.cartProduct[1]["0"].productId);
        const indexForProduct = state.cartProduct.findIndex(
          (cartProduct) => cartProduct.productId === product.sid
        );

        console.log(indexForProduct);
        console.log(state.cartProduct);
        if (indexForProduct === -1) {
          state.cartProduct.push({
            userId: null,
            productId: product.sid,
            productName: product.img,
            price: product.price,
            quantity: 1,
            total: state.cartProduct[0].total + product.price,
          });
        } else {
          state.cartProduct[indexForProduct].quantity++;
          state.cartProduct[indexForProduct].total += product.price;
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
