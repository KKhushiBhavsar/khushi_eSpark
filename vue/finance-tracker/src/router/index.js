import { createRouter, createWebHistory } from "vue-router";
import LoginPage from "@/pages/users/LoginPage";
import RegisterPage from "@/pages/users/RegisterPage";

import AllTransactions from "@/pages/transactions/AllTransactions";
import ViewTransaction from "@/pages/transactions/ViewTransaction";
import CreateTransaction from "@/pages/transactions/CreateTransaction";

import EditTransaction from "@/pages/transactions/EditTransaction";
import PageNotFound from "@/pages/PageNotFound";

import {
  isUserLoggedIn,
  userLoggedIn,
} from "@/router/routingGuards/user.routingguards";
const routes = [
  {
    path: "/",
    name: "logIn",
    beforeEnter: isUserLoggedIn,

    component: LoginPage,
  },
  {
    path: "/login",
    name: "LoginPage",
    beforeEnter: isUserLoggedIn,
    component: LoginPage,
  },
  {
    path: "/register",
    name: "RegisterPage",
    component: RegisterPage,
  },
  {
    path: "/all-transactions",
    name: "AllTransactions",
    beforeEnter: userLoggedIn,
    component: AllTransactions,
  },
  {
    path: "/view-transactions/:transactionId",
    name: "ViewTransaction",
    beforeEnter: userLoggedIn,
    component: ViewTransaction,
  },
  {
    path: "/create-transactions",
    name: "CreateTransaction",
    beforeEnter: userLoggedIn,
    component: CreateTransaction,
  },
  {
    path: "/edit-transactions/:transactionId",
    name: "EditTransaction",
    beforeEnter: userLoggedIn,
    component: EditTransaction,
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
