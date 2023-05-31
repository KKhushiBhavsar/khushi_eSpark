<template>
  <div class="parent-container">
    <commonCart
      v-for="subcategory in subCategoryItemList"
      :key="subcategory.sid"
    >
      <template v-slot:displayImage>
        <img
          :src="subcategory.img"
          class="img"
          @click="showProductDetails(subcategory.sitem)"
        />
      </template>
      <template v-slot:displayDetails>
        <div class="text-item">
          <span>{{ this.subcategory }}</span>
        </div>
        <div class="text-item">
          <span>Description</span>
          {{ subcategory.description }}
        </div>
        <div class="text-item">
          <span> Price </span>
          {{ subcategory.price }}
        </div>
        <div class="text-item">
          <span> Ratings </span>
          {{ subcategory.rating }}
        </div>
        <div v-if="subcategory.isSale" class="sale-product">On Sale</div>
        <button @click="addToCart(subcategory)">Add To Cart</button>
      </template>
    </commonCart>
  </div>
</template>

<script>
import commonCart from "@/components/commonCart.vue";
export default {
  name: "subCategoryPage",
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
  },
  data() {
    return {
      subcategories: JSON.parse(localStorage.getItem("subCategories")),
      subCategoryItem: JSON.parse(localStorage.getItem("subCategoriesItems")),
      subCategoryItemList: null,
    };
  },
  methods: {
    addToCart(product) {
      console.log(product);
      this.$store.dispatch("addProductToCart", product);
    },
    showProductDetails(sid) {
      this.$router.push({
        name: "productDetails",
        params: {
          category: this.category,
          subcategory: this.subcategory,
          subcategoryItem: sid,
        },
      });
    },
  },
  created() {
    const subcategoryList = this.subcategories.find(
      (subCategories) => subCategories.name === this.subcategory
    );
    this.subCategoryItemList = this.subCategoryItem.filter(
      (categoryItem) => categoryItem.sid === subcategoryList.sid
    );
    console.log(this.subCategoryItemList);
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
.sale-product {
  color: green;
  font-size: large;
}
</style>
