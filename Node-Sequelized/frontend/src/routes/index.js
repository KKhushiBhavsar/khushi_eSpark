import { createRouter, createWebHistory } from "vue-router";
import displayComponent from "@/components/displayComponent";
import PageNotFound from "@/components/PageNotFound.vue";
const routes = [
  {
    path: "/",
    component: displayComponent,
  },
  {
    path: "/:PageNotFound(.*)",
    name: "PageNotFound",
    component: PageNotFound,
  },
];
const router = createRouter({
  history: createWebHistory(),
  routes,
});
export default router;
