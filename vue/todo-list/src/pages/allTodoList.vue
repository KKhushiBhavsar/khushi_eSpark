<template>
  <h1>To-Do list</h1>
  <div class="parent-container">
    <ul v-for="list in todoList" :key="list.userId">
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
import { FetchTodoList } from "@/services/fetchapi.service";
export default {
  name: "allTodoList",
  data() {
    return {};
  },
  async created() {
    try {
      const response = await FetchTodoList();
      this.getTodoList(response.data);
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
    ...mapGetters("todoList", ["todoList"]),
    // allTodoList() {
    //   return this.todoList;
    // },
  },
  methods: {
    ...mapActions("todoList", ["getTodoList", "removeFromList"]),

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
    deleteFromList(listId) {
      this.removeFromList(listId);
    },
  },
};
</script>
<style scoped>
ul {
  list-style: none;
}
.card-container {
  border: 1px solid midnightblue;
  padding: 10px;
  width: 50%;
  margin: 10px;
  border-radius: 10px;
  font-size: 20px;
  color: midnightblue;
  background-color: whitesmoke;
}
button {
  margin: 10px;
  padding: 10px;
  border-radius: 10px;
  border: 1px soloid black;
  color: white;
  background-color: midnightblue;
}
span {
  margin: 10px;
}
</style>
