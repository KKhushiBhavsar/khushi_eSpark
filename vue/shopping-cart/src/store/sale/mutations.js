export default {
  startSaleProducts(state) {
    console.log("sale start");
    if (state.allProducts.length === 0) {
      console.log("no data found");
    } else {
      for (let index = 0; index < 5; index++) {
        const randomProduct = Math.floor(
          Math.random() * state.allProducts.length
        );
        state.allProducts[randomProduct].isSale = true;
        state.saleProducts.push(state.allProducts[randomProduct]);
      }
      localStorage.setItem(
        "subCategoriesItems",
        JSON.stringify(state.allProducts)
      );
    }
    console.log(state);
  },
  removeFromSaleProducts(state) {
    console.log("sale End", state);
    state.allProducts.forEach((product) => {
      product.isSale = false;
    });
    localStorage.setItem(
      "subCategoriesItems",
      JSON.stringify(state.allProducts)
    );
  },
};
