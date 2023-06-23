<template>
  <div v-if="IsSubCategory">
    <div class="parent-container" v-if="IsCategory">
      <CategoryComponent v-for="category in subCategory" :key="category.sid">
        <template v-slot:displayImage>
          <img
            :src="category.img"
            class="img"
            @click="setSubCategory(category.sid)"
          />
        </template>
        <template v-slot:displayDetails>
          {{ category.name }}
        </template>
      </CategoryComponent>
    </div>
    <div class="parent-container" v-else>
      <button @click="IsCategory = !IsCategory">Back</button>
      <CategoryComponent v-for="category in subCat" :key="category.sitem">
        <template v-slot:displayImage>
          <img :src="category.img" class="img" @click="showDetails(category)" />
        </template>
        <template v-slot:displayDetails>
          <p>Price {{ category.price }}</p>
          <p>ratings {{ category.rating }}</p>
          <p>description {{ category.description }}</p>
        </template>
      </CategoryComponent>
    </div>
  </div>
  <div v-if="!IsSubCategory">
    <button @click="IsSubCategory = !IsSubCategory">Back</button>
    <CategoryComponent>
      <template v-slot:displayImage>
        <img :src="detailItem.img" class="img" />
      </template>
      <template v-slot:displayDetails>
        <p>Price {{ detailItem.price }}</p>
        <p>ratings {{ detailItem.rating }}</p>
        <p>description {{ detailItem.description }}</p>
      </template>
    </CategoryComponent>
  </div>
</template>

<script>
import CategoryComponent from "./CategoryComponent.vue";

export default {
  name: "imageAndSound",
  components: {
    CategoryComponent,
  },
  props: {
    subCategory: {
      type: Object,
    },
    subcategoriesItems: {
      type: Object,
    },
  },
  data() {
    return {
      IsCategory: true,
      subCat: null,
      IsSubCategory: true,
      detailItem: [],
    };
  },
  methods: {
    setSubCategory(id) {
      console.log("id", id);
      this.IsCategory = false;
      Object.entries(this.subcategoriesItems).forEach((item) => {
        console.log(" item[1]sid]", item[1]["sid"]);
        if (item[1]["sid"] === id) {
          this.subCat = item[1]["subItems"];
        }
      });

      console.log("subCat", this.subCat);
    },
    showDetails(item) {
      this.IsSubCategory = false;
      this.detailItem = item;
      console.log("item", this.detailItem);
    },
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
  /* width: 30%; */
  margin: 10px;
}

.card-container-subcategory {
  margin: 10px;
  width: 80%;
  /* border: 1px solid green; */
  padding: 20px;
  box-shadow: rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px;
}

.parent-details-container {
  font-size: 16px;
  width: 46%;
  margin: 47px;
  text-align: center;
  padding: 25px;
  color: forestgreen;
  box-shadow: rgb(0 0 0 / 19%) 0px 10px 20px, rgb(0 0 0 / 23%) 0px 6px 6px;
}

button {
  width: 100px;
  height: 50px;
  background-color: darkseagreen;
  margin-top: 10px;
}
</style>
