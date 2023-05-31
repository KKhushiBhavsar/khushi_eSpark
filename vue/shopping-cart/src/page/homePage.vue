<template>
  <ul v-for="categories in category" :key="categories.id">
    <li class="img-item">
      <router-link
        :to="{
          name: 'displayCategories',
          params: { category: categories.name },
        }"
      >
        <div>
          <img :src="categories.img" :alt="categories.alt" />
        </div>
        <div class="text-item">
          {{ categories.text }}
        </div>
      </router-link>
    </li>
  </ul>
</template>

<script>
export default {
  name: "SideBar",
  created() {
    this.category = JSON.parse(localStorage.getItem("categories"));
  },
  data() {
    return {
      category: [],
    };
  },
};
</script>

<style scoped>
ul {
  list-style: none;
}

li {
  margin: 10px;
  padding: 12px;
  /* border: 1px solid rgb(168, 168, 168); */
  width: 30%;
  background: rgb(237 236 236);
  color: rgb(59, 59, 59);
  border-radius: 10px;
}
li.img-item {
  display: flex;
  color: rgb(44, 43, 43);
}

li.img-item:hover {
  background-color: darkgray;
  color: green;
  cursor: pointer;
}

.text-item {
  font-size: 20px;
  margin: 22px;
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
