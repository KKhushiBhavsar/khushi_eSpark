import { createRouter, createWebHistory } from "vue-router";
import AllContacts from "@/page/AllContacts.vue";
import AddContact from "@/page/AddContact.vue";
import FavoriteContact from "@/page/FavoriteContact.vue";
import callLogs from "@/page/callLogs.vue";

const routes = [
  {
    path: "/",
    name: "AllContacts",
    component: AllContacts,
  },
  {
    path: "/AddContact",
    name: "AddContact",
    component: AddContact,
  },
  {
    path: "/FavoriteContact",
    name: "FavoriteContact",
    component: FavoriteContact,
  },
  {
    path: "/callLogs",
    name: "callLogs",
    beforeEnter(to, from, next) {
      const allContacts =
        JSON.parse(localStorage.getItem("contactDetails")) || [];
      const IsCallLog = allContacts.filter(
        (contacts) => contacts.callLog !== null || contacts.callLog !== []
      )[0].callLogs;

      if (IsCallLog.length === 0) {
        console.log(IsCallLog, "null");
        next({
          name: "AllContacts",
        });
      } else {
        next(true);

        console.log(IsCallLog, "true");
      }
    },
    component: callLogs,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
