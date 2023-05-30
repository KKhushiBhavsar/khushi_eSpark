<template>
  <h1>sellProductList</h1>
  <div class="parent-container">
    <div class="sell-container">Sell Will End IN {{ sellTimer }}</div>
    <ul v-for="saleProducts in saleProductList" :key="saleProducts.sid">
      <li class="img-item">
        <div class="card-container">
          <div @click="showProductDetails(saleProducts.sid)">
            <div class="img-container">
              <img :src="saleProducts.img" class="img" />
            </div>
            <div class="text-item">
              <span> Price </span>
              {{ saleProducts.price }}
            </div>
            <div class="text-item">
              <span> Ratings </span>
              {{ saleProducts.rating }}
            </div>
          </div>
          <button @click="addToCart(saleProducts)">Add To Cart</button>
        </div>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  name: "sellProductList",
  data() {
    return {
      saleProductList: [],
    };
  },
  props: {
    sellTimer: {
      type: String,
    },
  },
  methods: {
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
    const allProduct = JSON.parse(localStorage.getItem("subCategoriesItems"));
    console.log("subCategoriesItems", allProduct);
    for (let index = 0; index < 5; index++) {
      const randomProduct = Math.floor(Math.random() * allProduct.length);
      console.log("randomProduct", randomProduct);
      this.saleProductList.push(allProduct[randomProduct]);
    }
    console.log("saleProductList", this.saleProductList);
  },
};
</script>
<style scoped>
span {
  font-weight: bold;
}
.sell-container {
  width: 100%;
  padding: 10px;
  color: #f2f2f2;
  /* font-family: ui-monospace; */
  font-size: larger;
  background-color: green;
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
