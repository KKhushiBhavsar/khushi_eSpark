<template>
  <div class="parent-container">
    <li class="img-item">
      <div class="card-container">
        <div class="img-container">
          <slot name="displayImage"></slot>
        </div>
        <div class="text-item">
          <slot name="displayDetails"></slot>
        </div>
      </div>
    </li>
  </div>
</template>

<script>
export default {
  name: "commonCart",
  props: {
    category: {
      type: Object,
    },
  },
};
</script>

<style scoped>
.img {
  width: 180px;
}
li {
  list-style: none;
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
