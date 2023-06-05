<template>
  <h1>To-Do list</h1>
  <div class="parent-container">
    <ul v-for="list in getTodoList" :key="list.userId">
      <div class="card-container">
        <li><span>userId: </span>{{ list.userId }}</li>
        <li><span>Id</span>{{ list.id }}</li>
        <li><span>Title</span>{{ list.title }}</li>
        <li><span>Completed</span>{{ list.completed }}</li>
        <button @click="editList(list.id)">Edit</button>
        <button @click="deleteFromList(list.id)">Delete</button>
        <button @click="viewList(list.id)">View</button>
      </div>
    </ul>
  </div>
</template>
<script>
import { mapActions, mapGetters } from "vuex";
import { FetchTodoList, deleteTodoFromList } from "@/services/fetchapi.service";
export default {
  name: "allTodoList",
  data() {
    return {};
  },
  async created() {
    try {
      const response = await FetchTodoList();
      this.fetchTodoList(response.data);
    } catch (error) {
      console.log(error);
      if (error.status === 500) {
        console.log("internal server error");
      }
    }
    localStorage.setItem("token", "token");

    // this.getTodoList();
    // this.$store.dispatch(
    //   "getTodoList",
    //   "https://jsonplaceholder.typicode.com/todos"
    // );
  },
  computed: {
    ...mapGetters("todoList", ["getTodoList"]),
    // allTodoList() {
    //   return this.todoList;
    // },
  },
  methods: {
    ...mapActions("todoList", ["fetchTodoList", "removeFromList"]),

    editList(listId) {
      this.$router.push({
        name: "editTodoPage",
        params: {
          listId: listId,
        },
      });
    },
    viewList(listId) {
      this.$router.push({
        name: "viewToDoPage",
        params: {
          listId: listId,
        },
      });
    },
    async deleteFromList(listId) {
      try {
        const response = await deleteTodoFromList(listId);
        console.log(response);
        if (response.status === 200) {
          this.removeFromList(listId);
        }
      } catch (error) {
        console.log(error);
        if (error.status === 500) {
          console.log("internal server error");
        }
      }
    },
  },
};
</script>
