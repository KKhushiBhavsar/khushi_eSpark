<template>
  <div class="parent-container">
    <div class="sell-container">Sale Will End IN {{ timerCount }}</div>
    <ul v-for="saleProducts in saleProductList" :key="saleProducts">
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
            <div v-if="saleProducts.isSale" class="sale-product">On Sale</div>
          </div>
          <button @click="addToCart(saleProducts)">Add To Cart</button>
        </div>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  name: "saleProductList",
  data() {
    return {
      isSaleOn: true,
      timerCount: 3,
      timeOutId: null,
    };
  },
  props: {
    sellTimer: {
      type: Number,
    },
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
    countDownTimer() {
      if (this.timerCount > 0) {
        this.timeOutId = setTimeout(() => {
          this.timerCount -= 1;
          this.countDownTimer();
        }, 1000);
      } else {
        this.isSaleOn = false;
        clearTimeout(this.timeOutId);
        this.$store.dispatch("endSale");
      }
      this.$emit("isSaleOn", this.isSaleOn);
    },
  },
  computed: {
    saleProductList() {
      return this.$store.getters.saleProducts;
    },
  },
  created() {
    this.countDownTimer();
    this.$store.dispatch("startSale");
  },
};
</script>
<style scoped>
span {
  font-weight: bold;
}
.sell-container {
  text-align: center;
  width: 100%;
  padding: 10px;
  color: #f2f2f2;
  /* font-family: ui-monospace; */
  font-size: 30px;
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
.sale-product {
  color: green;
  font-size: large;
}
</style>
