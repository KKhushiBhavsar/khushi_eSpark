import { createStore } from "vuex";
import { todoList } from "@/store/todo-list";

const store = createStore({
  modules: {
    todoList: todoList,
  },
});
export default store;
