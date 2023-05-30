<template>
  <h1>Trending Product List</h1>
  <div class="parent-container">
    <ul
      v-for="trendingProducts in trendingProducts"
      :key="trendingProducts.productId"
    >
      <li class="img-item">
        <div class="card-container">
          <div @click="showProductDetails(trendingProducts.productId)">
            <div class="img-container">
              <img :src="trendingProducts.productName" class="img" />
            </div>
            <div class="text-item">
              <span> Price </span>
              {{ trendingProducts.price }}
            </div>
            <div class="text-item">
              <span> quantity </span>
              {{ trendingProducts.quantity }}
            </div>
          </div>
          <button @click="addToCart(trendingProducts)">Add To Cart</button>
        </div>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  name: "trendingProducts",
  data() {
    return {
      trendingProducts: [],
    };
  },
  methods: {
    addToCart(product) {
      console.log(product);
      this.$store.dispatch("addProductToCart", product);
    },
    showProductDetails(sid) {
      console.log(sid);
      // this.$router.push({
      //   name: "productDetails",
      //   params: {
      //     category: JSON.parse(localStorage.getItem("categories")),
      //     subcategory: JSON.parse(localStorage.getItem("subCategories")),
      //     subcategoryItem: sid,
      //   },
      // });
    },
  },
  created() {
    // const trendingProductList = {};
    const allCheckoutProducts =
      JSON.parse(localStorage.getItem("checkOutDetails")) || [];
    console.log("allCheckoutProducts", allCheckoutProducts);
    // allCheckoutProducts.forEach((trendingProduct) => {
    //   trendingProduct.checkedOutItems.cartDetails.forEach((product) => {
    //     const isProductInList = this.trendingProducts.filter(
    //       (productList) => productList.productId === product.productId
    //     );
    //     console.log(isProductInList);
    //     if (isProductInList.length === 0) {
    //       this.trendingProducts.push({
    //         productId: product.productId,
    //         quantity: product.quantity,
    //       });
    //     } else {
    //       console.log("!!!!!!!", this.trendingProducts);
    //     }
    //   });
    // });

    const allCheckoutProduct = {};
    allCheckoutProducts.forEach((product) => {
      product.checkedOutItems.cartDetails.forEach((productCheckout) => {
        if (!allCheckoutProduct["Product" + productCheckout.productId]) {
          allCheckoutProduct["Product" + productCheckout.productId] =
            productCheckout;
        } else {
          allCheckoutProduct["Product" + productCheckout.productId].quantity +=
            productCheckout.quantity;
        }
      });
    });
    for (let x of Object.entries(allCheckoutProduct)) {
      console.log(x);
      this.trendingProducts.push(x[1]);
    }

    console.log("!!!!!!!!!!!!!!!!!!", allCheckoutProduct);
    console.log("trendingProducts", this.trendingProducts);
  },
};
</script>
<style scoped>
span {
  font-weight: bold;
}

.img {
  width: 180px;
}

.img-container {
  width: 40%;
}

ul {
  list-style: none;
}

.parent-container {
  display: flex;
  flex-wrap: wrap;
}

.card-container {
  box-shadow: 3px 0px 22px -4px rgb(0 0 0 / 63%);
  width: fit-content;
  border-radius: 10px;
  padding: 70px;
  margin: 10px;
}

.card-container:hover {
  box-shadow: 17px -1px 22px -4px rgb(0 0 0 / 63%);
}

.card-container-subcategory {
  margin: 10px;
  border: 1px solid green;
  padding: 20px;
}

.text-item {
  font-size: 20px;
  margin: 10px;
  justify-content: center;
}

a {
  display: flex;
  color: darkslategrey;
  text-decoration: none;
}

a:hover {
  color: green;
}
</style>
