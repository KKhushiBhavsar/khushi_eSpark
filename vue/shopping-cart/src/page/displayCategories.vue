<template>
  <div class="parent-container">
    <commonCart v-for="category in subcategory" :key="category.sid">
      <template v-slot:displayImage>
        <img
          :src="category.img"
          class="img"
          @click="setSubCategory(category.name)"
        />
      </template>
      <template v-slot:displayDetails>
        {{ category.name }}
      </template>
    </commonCart>
  </div>
</template>
<script>
import commonCart from "@/components/commonCart.vue";
export default {
  name: "displayCategories",
  components: {
    commonCart,
  },
  props: {
    category: {
      type: String,
    },
  },
  data() {
    return {
      categories: JSON.parse(localStorage.getItem("categories")),
      subCategories: JSON.parse(localStorage.getItem("subCategories")),
      subcategory: null,
    };
  },
  methods: {
    setSubCategory(categoryName) {
      this.$router.push({
        name: "subCategoryPage",
        params: { category: this.category, subcategory: categoryName },
      });
    },
  },
  created() {
    console.log("category", this.category);
    const displayData = this.categories.find(
      (category) => category.name === this.category
    );
    console.log("displayData", displayData);
    this.subcategory = this.subCategories.filter(
      (subcategory) => subcategory.categoryId === displayData.id
    );
  },
};
</script>
<style scoped>
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
