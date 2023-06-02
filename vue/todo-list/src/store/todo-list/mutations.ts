export default {
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
    state.todoList.push = data;
    console.log(state.todoList);
  },
};
