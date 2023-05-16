import { createRouter, createWebHistory } from "vue-router";
import AllContacts from "@/page/AllContacts.vue";
import AddContact from "@/components/AddContact.vue";
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
    component: callLogs,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.beforeEach((callLog) => {
  console.log("to", callLog);
  //   console.log("from", from);
});
export default router;
