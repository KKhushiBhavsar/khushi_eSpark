<template>
  <h1>productDetails</h1>
  <commonCart>
    <template v-slot:displayImage>
      <img :src="productDetail.img" class="img" />
    </template>
    <template v-slot:displayDetails>
      <div class="text-item">
        <span>Description</span>
        {{ productDetail.description }}
      </div>
      <div class="text-item">
        <span> Price </span>
        {{ productDetail.price }}
      </div>
      <div class="text-item">
        <span> Ratings </span>
        {{ productDetail.rating }}
      </div>
      <div v-if="productDetail.isSale" class="sale-product">On sale</div>
      <button @click="addToCart(productDetail)">Add To Cart</button>
    </template>
  </commonCart>
</template>
<script>
import commonCart from "@/components/commonCart.vue";

export default {
  name: "productDetails",
  components: {
    commonCart,
  },
  props: {
    category: {
      type: String,
      require: true,
    },
    subcategory: {
      type: String,
      require: true,
    },
    subcategoryItem: {
      type: String,
      require: true,
    },
  },
  data() {
    return {
      subcategoryItems: JSON.parse(localStorage.getItem("subCategoriesItems")),
      productDetail: null,
    };
  },
  methods: {
    addToCart(product) {
      console.log(product);
      this.$store.dispatch("addProductToCart", product);
    },
  },
  created() {
    this.productDetail = this.subcategoryItems.find(
      (subcategory) => subcategory.sitem === +this.subcategoryItem
    );
    console.log(this.productDetail);
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
  display: block;
  margin-left: auto;
  margin-right: auto;
  /* width: 40%; */
}

ul {
  list-style: none;
}

.parent-container {
  display: flex;
  flex-wrap: wrap;
}
.card-container {
  margin: 30px auto;
  width: 50%;
  border: 3px solid green;
  padding: 10px;
  box-shadow: 3px 0px 22px -4px rgb(0 0 0 / 63%);
  text-align: center;
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
