<template>
  <h1>viewToDoPage</h1>
  <div class="card-container">
    <ul>
      <li><span>userId: </span> {{ viewTodo?.userId }}</li>
      <li><span>Id</span> {{ viewTodo?.id }}</li>
      <li><span>Title</span> {{ viewTodo?.title }}</li>
      <li><span>Completed</span> {{ viewTodo?.completed }}</li>
    </ul>
  </div>
</template>
<script>
import { mapActions, mapGetters } from "vuex";
import { getSelectedToDoList } from "@/services/fetchapi.service";
export default {
  name: "viewToDoPage",
  data() {
    return {
      listId: this.$route.params.listId,
    };
  },
  computed: {
    ...mapGetters("todoList", ["viewTodo"]),
  },
  methods: {
    ...mapActions("todoList", ["getviewTodoList"]),
  },
  //   created() {
  //     console.log("list id", this.listId);
  //     console.log("viewTodo", this.viewTodo);
  //     this.getviewTodoList(this.listId);

  //   },
  async created() {
    try {
      const response = await getSelectedToDoList(this.listId);
      this.getviewTodoList(response.data);
    } catch (error) {
      console.log(error);
      if (error.status === 500) {
        console.log("internal server error");
      }
    }
    localStorage.setItem("token", "token");
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
