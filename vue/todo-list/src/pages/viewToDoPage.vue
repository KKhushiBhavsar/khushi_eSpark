<template>
  <h1>viewToDoPage</h1>
  <div class="card-container">
    <ul>
      <li><span>userId: </span> {{ getViewTodo?.userId }}</li>
      <li><span>Id</span> {{ getViewTodo?.id }}</li>
      <li><span>Title</span> {{ getViewTodo?.title }}</li>
      <li><span>Completed</span> {{ getViewTodo?.completed }}</li>
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
    ...mapGetters("todoList", ["getViewTodo"]),
  },
  methods: {
    ...mapActions("todoList", ["fetchviewTodoList"]),
  },
  async created() {
    try {
      const response = await getSelectedToDoList(this.listId);
      this.fetchviewTodoList(response.data);
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
