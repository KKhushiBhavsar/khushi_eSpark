import { createRouter, createWebHistory } from "vue-router";
import logInPage from "@/page/logInPage.vue";
import pageNotFound from "@/page/pageNotFound.vue";
import homePage from "@/page/homePage.vue";
import createAccount from "@/page/createAccount.vue";
import displayCategories from "@/page/displayCategories.vue";
import subCategoryPage from "@/page/subCategoryPage.vue";
import productDetails from "@/page/productDetails.vue";

import isUserLoggedIn from "./routingGuards/loginUserGuard";
const routes = [
  {
    path: "/",
    name: "homePage",
    component: homePage,
  },
  {
    path: "/log-in",
    name: "logInPage",
    component: logInPage,
    beforeEnter: isUserLoggedIn,
  },
  {
    path: "/:category",
    name: "displayCategories",
    component: displayCategories,
    props: true,
  },
  {
    path: "/:category/:subcategory",
    name: "subCategoryPage",
    component: subCategoryPage,
    props: true,
  },
  {
    path: "/:category/:subcategory/:subcategoryItem",
    name: "productDetails",
    component: productDetails,
    props: true,
  },
  {
    path: "/create-account",
    name: "createAccount",
    component: createAccount,
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
