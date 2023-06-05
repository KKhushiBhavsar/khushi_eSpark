export const todoList = {
  namespaced: true,
  state: {
    todoList: [],
    editTodo: null,
    viewTodo: null,
    url: "https://jsonplaceholder.typicode.com/todos/",
  },
  mutations: {
    GET_ALL_TODO_LIST(state: any, data: any) {
      console.log("data", data);
      state.todoList = data;
    },
    REMOVE_FROM_TODO_LIST(state: any, listId: any) {
      const todo = state.todoList;
      const indexOfTodo = todo.findIndex((list: any) => list.id === listId);
      todo.splice(indexOfTodo, 1);
    },
    GET_EDIT_TODO_LIST(state: any, data: any) {
      state.editTodo = data;
    },
    GET_VIEW_TODO_LIST(state: any, data: any) {
      state.viewTodo = data;
    },
    ADD_TODO_LIST(state: any, data: any) {
      state.todoList.push(data);
      console.log("add into todo", state.todoList);
    },
  },
  actions: {
    fetchTodoList(context: any, data: any) {
      context.commit("GET_ALL_TODO_LIST", data);
    },
    removeFromList(context: any, listId: number) {
      context.commit("REMOVE_FROM_TODO_LIST", listId);
    },
    fetchEditTodoList(context: any, editData: Object) {
      console.log("response", editData);
      context.commit("GET_EDIT_TODO_LIST", editData);
    },
    fetchviewTodoList(context: any, data: any) {
      context.commit("GET_VIEW_TODO_LIST", data);
    },
    addIntoTodoList(context: any, data: any) {
      context.commit("ADD_TODO_LIST", data);
    },
  },
  getters: {
    getTodoList(state: any) {
      return state.todoList;
    },
    getEditTodo(state: any) {
      return state.editTodo;
    },
    getViewTodo(state: any) {
      return state.viewTodo;
    },
    todoUrl(state: any) {
      return state.url;
    },
  },
};
