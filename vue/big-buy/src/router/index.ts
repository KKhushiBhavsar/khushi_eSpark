import { createRouter, createWebHistory } from "vue-router";
import LogInPage from "@/pages/users/LoginPage.vue";
import RegisterPage from "@/pages/users/RegisterPage.vue";
import PurchaseHistory from "@/pages/users/PurchaseHistory.vue";
import AddItems from "@/pages/items/AddItems.vue";
import AllItems from "@/pages/items/AllItems.vue";
import EditItem from "@/pages/items/EditItem.vue";
import ViewItem from "@/pages/items/ViewItem.vue";
import PageNotFound from "@/pages/PageNotFound.vue";
const routes = [
  {
    path: "/",
    component: AllItems,
  },
  {
    path: "/login",
    name: "LogInPage",
    component: LogInPage,
  },
  {
    path: "/register",
    name: "RegisterPage",
    component: RegisterPage,
  },
  {
    path: "/add-item",
    name: "AddItems",
    component: AddItems,
  },
  {
    path: "/all-items",
    name: "AllItems",
    component: AllItems,
  },
  {
    path: "/purchase-history",
    name: "PurchaseHistory",
    component: PurchaseHistory,
  },
  {
    path: "/edit-item/:itemId",
    name: "EditItem",
    component: EditItem,
  },
  {
    path: "/item/:itemId",
    name: "ViewItem",
    component: ViewItem,
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
