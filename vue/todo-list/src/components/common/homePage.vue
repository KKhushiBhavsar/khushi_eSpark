<template>
  <!-- <router-link :to="{ name: 'addTodoList' }">Add ToDo</router-link> -->
  <button @click="addTodo()">Add TODO</button>
  <router-view></router-view>
</template>
<script>
// import router from "@/router";
export default {
  name: "homePage",
  methods: {
    addTodo() {
      this.$router.push({
        name: "addTodoList",
      });
    },
  },
};
</script>
