import { createRouter, createWebHistory } from "vue-router";
import LoginPage from "@/pages/users/LoginPage";
import RegisterPage from "@/pages/users/RegisterPage";

import AllTransactions from "@/pages/transactions/AllTransactions";
import ViewTransaction from "@/pages/transactions/ViewTransaction";
import CreateTransaction from "@/pages/transactions/CreateTransaction";
import EditTransaction from "@/pages/transactions/EditTransaction";

import AddTransactionForm from "@/pages/AddTransactionForm";
import PageNotFound from "@/pages/PageNotFound";
import HomePage from "@/components/common/HomePage.vue";
import AllTransaction from "@/pages/AllTransaction";
const routes = [
  {
    path: "/",
    name: "HomePage",
    component: HomePage,
  },
  {
    path: "/login",
    name: "LoginPage",
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
    component: AllTransactions,
  },
  {
    path: "/view-transactions/:transactionId",
    name: "ViewTransaction",
    component: ViewTransaction,
  },
  {
    path: "/create-transactions",
    name: "CreateTransaction",
    component: CreateTransaction,
  },
  {
    path: "/edit-transactions",
    name: "EditTransaction",
    component: EditTransaction,
  },
  {
    path: "/add-transaction/",
    name: "AddTransactionForm",
    component: AddTransactionForm,
  },
  {
    path: "/all-transaction/",
    name: "AllTransaction",
    component: AllTransaction,
  },
  //   {
  //     path: "/edit-todo-task/:listId",
  //     name: "editTodoPage",
  //     component: editTodoPage,
  //   },
  //   {
  //     path: "/view-todo-task/:listId",
  //     name: "viewToDoPage",
  //     component: viewToDoPage,
  //   },
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
