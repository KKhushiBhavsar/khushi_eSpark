import { axiosDelete, axiosGet, axiosPut } from "@/plugins/axios.plugin";
const url = "https://jsonplaceholder.typicode.com/todos/";
export const FetchTodoList = () => {
  return axiosGet(url);
};
export const getSelectedToDoList = (listId: any) => {
  return axiosGet(url + listId);
};
export const deleteTodoFromList = (listId: any) => {
  return axiosDelete(url + listId);
};
export const updateTodo = (id: string, data: any) => {
  return axiosPut(url + id, data);
};
