<template>
  <h1>Add</h1>
  <div class="parent-container">
    <div class="card-container">
      <table>
        <tr>
          <td>userId</td>
          <td><input type="text" v-model="addListItems.userId" /></td>
        </tr>
        <tr>
          <td>ID</td>
          <td><input type="text" v-model="addListItems.id" /></td>
        </tr>
        <tr>
          <td>Title</td>
          <td><input type="text" v-model="addListItems.title" /></td>
        </tr>
        <tr>
          <td>Completed</td>
          <td><input type="text" v-model="addListItems.completed" /></td>
        </tr>
      </table>
      <button @click="addTodo()">Add</button>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import { addTodoList } from "@/services/fetchapi.service";
export default {
  name: "addTodoList",
  data() {
    return {
      addListItems: {
        userId: null,
        id: null,
        title: null,
        completed: null,
      },
    };
  },
  computed: {
    ...mapGetters("todoList", ["todoList"]),

    allTodoList() {
      return this.todoList;
    },
  },
  methods: {
    ...mapActions("todoList", ["addIntoTodoList"]),
    async addTodo() {
      try {
        const response = await addTodoList(this.addListItems);
        this.addIntoTodoList(this.addListItems);
        console.log("jfgdhfd", response);
        // if (response.status === 201) {
        //   this.$router.push({
        //     name: "allTodoList",
        //   });
        // }
      } catch (error) {
        console.log(error);
        console.log(error);
        if (error.status === 500) {
          console.log("internal server error");
        }
      }
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
  border: 1px solid black;
  color: white;
  background-color: midnightblue;
}
span {
  margin: 10px;
}
</style>
