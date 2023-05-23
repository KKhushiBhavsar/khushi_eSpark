import { createRouter, createWebHistory } from "vue-router";
import AllContacts from "@/page/AllContacts.vue";
import AddContact from "@/page/AddContact.vue";
import FavoriteContact from "@/page/FavoriteContact.vue";
import callLogs from "@/page/callLogs.vue";
import pageNotFound from "@/page/pageNotFound.vue";
const routes = [
  {
    path: "/",
    redirect: "/all-contacts",
  },
  {
    path: "/all-contacts",
    name: "AllContacts",
    component: AllContacts,
  },
  {
    path: "/add-contact",
    name: "AddContact",
    component: AddContact,
  },
  {
    path: "/favorite-contact",
    name: "FavoriteContact",
    component: FavoriteContact,
  },
  {
    path: "/call-logs",
    name: "callLogs",
    beforeEnter(to, from, next) {
      const allContacts =
        JSON.parse(localStorage.getItem("contactDetails")) || [];
      const IsCallLog = allContacts.filter(
        (contacts) => contacts.callLog !== null || contacts.callLog !== []
      )[0].callLogs;

      if (IsCallLog.length === 0) {
        console.log(IsCallLog, "null");
        alert("Empty call logs");
        next({
          name: "AllContacts",
        });
      } else {
        next(true);

        // console.log(IsCallLog, "true");
      }
    },
    component: callLogs,
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
