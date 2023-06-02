<template>
  <h1>editTodoPage</h1>
  <div class="parent-container">
    <div class="card-container" v-if="getEditTodo">
      <table>
        <tr>
          <td>userId</td>
          <td><input type="text" v-model="getEditTodo.userId" /></td>
        </tr>
        <tr>
          <td>ID</td>
          <td><input type="text" v-model="getEditTodo.id" /></td>
        </tr>
        <tr>
          <td>Title</td>
          <td><input type="text" v-model="getEditTodo.title" /></td>
        </tr>
        <tr>
          <td>Completed</td>
          <td><input type="text" v-model="getEditTodo.completed" /></td>
        </tr>
      </table>
      <button @click="updateToDoList(getEditTodo)">Edit</button>
    </div>
  </div>
</template>
<script>
import { mapActions, mapGetters } from "vuex";
import { updateTodo, getSelectedToDoList } from "@/services/fetchapi.service";
export default {
  name: "editTodoPage",
  data() {
    return {
      listId: this.$route.params.listId,
    };
  },
  computed: {
    ...mapGetters("todoList", ["todoList", "getEditTodo"]),

    allTodoList() {
      return this.todoList;
    },
  },
  methods: {
    ...mapActions("todoList", ["fetchEditTodoList"]),
    async updateToDoList(editTodo) {
      try {
        const response = await updateTodo(editTodo.id, editTodo);
        console.log("jfgdhfd", response);
        this.$router.push({
          name: "allTodoList",
        });
      } catch (error) {
        console.log(error);
        if (error.status === 500) {
          console.log("internal server error");
        }
      }
    },
  },
  async created() {
    try {
      const response = await getSelectedToDoList(this.listId);
      this.fetchEditTodoList(response.data);
    } catch (error) {
      console.log(error);
      if (error.status === 500) {
        console.log("internal server error");
      }
    }

    console.log("editTodo", this.editTodo);
  },
};
</script>
<style scoped>
ul {
  list-style-type: none;
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
td {
  margin: 10px;
}
input {
  margin: 10px;
  padding: 10px;
}
</style>
