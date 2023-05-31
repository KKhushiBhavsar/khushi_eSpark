export default {
  addToCart(state, product) {
    if (state.cartProduct.length === 0) {
      state.cartProduct = {
        total: 0,
        userId: null,
        cartDetails: [],
      };
    } else {
      console.log("!!!", state.cartProduct);
      const indexForProduct = state.cartProduct.cartDetails.findIndex(
        (cartProduct) => cartProduct.productId === product.sid
      );
      if (indexForProduct === -1) {
        state.cartProduct.cartDetails.push({
          productId: product.sid,
          productName: product.img,
          price: +product.price,
          quantity: 1,
        });
        state.cartProduct.total += +product.price;
      } else {
        if (state.cartProduct.cartDetails[indexForProduct].quantity < 5) {
          state.cartProduct.cartDetails[indexForProduct].quantity++;
          state.cartProduct.total += +product.price;
        }
      }
    }
    localStorage.setItem("productCart", JSON.stringify(state.cartProduct));
  },
  manageProductQunatity(state, payload) {
    const action = payload.action;
    const product = payload.product;
    const indexProduct = state.cartProduct.cartDetails.findIndex(
      (productItem) => productItem.productId === product.productId
    );
    if (action === "decreaseQty") {
      if (state.cartProduct.cartDetails[indexProduct].quantity > 1) {
        state.cartProduct.cartDetails[indexProduct].quantity--;
        state.cartProduct.total -= +product.price;
        localStorage.setItem("productCart", JSON.stringify(state.cartProduct));
      }
    }
    if (action === "increaseQty") {
      const indexProduct = state.cartProduct.cartDetails.findIndex(
        (productItem) => productItem.productId === product.productId
      );
      if (state.cartProduct.cartDetails[indexProduct].quantity < 5) {
        state.cartProduct.cartDetails[indexProduct].quantity++;
        state.cartProduct.total += +product.price;

        localStorage.setItem("productCart", JSON.stringify(state.cartProduct));
      }
    }
  },
  removeProductFromCart(state, product) {
    const productIndex = state.cartProduct.cartDetails.findIndex(
      (productItem) => productItem.productId === product.productId
    );
    state.cartProduct.total -= product.price * product.quantity;

    state.cartProduct.cartDetails.splice(productIndex, 1);

    localStorage.setItem("productCart", JSON.stringify(state.cartProduct));
  },
};
