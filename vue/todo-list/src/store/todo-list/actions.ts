export default {
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
};
