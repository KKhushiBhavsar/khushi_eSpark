<template>
  <div class="parent-container">
    <ul v-for="category in subcategory" :key="category.id">
      <!-- <router-link
        :to="`/${category.name}/${category.sid}`" , params: {subcategoryProp: category.name}
      > -->
      <li class="img-item">
        <div class="card-container">
          <div class="img-container">
            <img :src="category.img" class="img" />
          </div>
          <div class="text-item">
            {{ category.name }}
          </div>
        </div>
      </li>
      <!-- </router-link> -->
    </ul>
  </div>
</template>
<script>
export default {
  name: "displayCategories",
  data() {
    return {
      categories: this.$store.state.categories,
      subCategories: this.$store.state.subCategories,
      subcategory: null,
    };
  },
  props: {
    category: {
      type: String,
    },
  },
  created() {
    console.log(this.$store.state.categories);
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
