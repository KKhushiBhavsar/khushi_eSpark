import getTodoMutation from "@/store/todo-list/mutations";
import getTodoAction from "@/store/todo-list/actions";
import getTodoGetter from "@/store/todo-list/getters";

export const todoList = {
  namespaced: true,
  state: {
    todoList: [],
    editTodo: null,
    viewTodo: null,
  },
  mutations: getTodoMutation,
  actions: getTodoAction,
  getters: getTodoGetter,
};
