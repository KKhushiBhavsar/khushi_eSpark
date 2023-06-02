import { createRouter, createWebHistory } from "vue-router";
import allTodoList from "@/pages/allTodoList";
import viewToDoPage from "@/pages/viewToDoPage";
import editTodoPage from "@/pages/editTodoPage";
import pageNotFound from "@/pages/pageNotFound";
const routes = [
  {
    path: "/",
    name: "allTodoList",
    component: allTodoList,
  },
  {
    path: "/edit-todo-task/:listId",
    name: "editTodoPage",
    component: editTodoPage,
  },
  {
    path: "/view-todo-task/:listId",
    name: "viewToDoPage",
    component: viewToDoPage,
  },
  {
    path: "/:pageNotFound(.*)",
    name: "pageNotFound",
    component: pageNotFound,
  },
];
const router = createRouter({
  history: createWebHistory(),
  routes,
});
export default router;
