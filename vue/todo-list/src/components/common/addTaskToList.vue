<template>
  <h1>addTaskToList</h1>
</template>
<script>
import { mapGetters } from "vuex";
export default {
  name: "addTaskToList",
  computed: {
    ...mapGetters({ todoList: "todoList" }),
    allTodoList() {
      return this.todoList;
    },
  },
};
</script>
