import { createRouter, createWebHistory } from "vue-router";

import logIn from "@/pages/logIn";
import allBirthdayList from "@/pages/allBirthdayList";
import todayBirthdayList from "@/pages/todayBirthdayList";
import upComingBirthdayList from "@/pages/upComingBirthdayList";
import closeFriendBirthdayList from "@/pages/closeFriendBirthdayList";
import birthdayWish from "@/pages/birthdayWish";
import pageNotFound from "@/pages/pageNotFound";
const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      name: "logIn",
      path: "/login",
      component: logIn,
      beforeEnter: (to, from, next) => {
        const isUser = JSON.parse(localStorage.getItem("logInUser")) || [];
        if (isUser.length === 0) {
          next(true);
        } else {
          alert("user already logged in");
          next(false);
        }
      },
    },
    { name: "allBirthday", path: "/allBirthday", component: allBirthdayList },
    { path: "/", redirect: "/allBirthday" },
    {
      name: "todayBirthday",
      path: "/todayBirthday",
      component: todayBirthdayList,
    },
    {
      name: "upComingBirthday",
      path: "/upComingBirthday",
      component: upComingBirthdayList,
    },
    {
      name: "closeFriendBirthday",
      path: "/closeFriendBirthday",
      component: closeFriendBirthdayList,
      beforeEnter: (to, from, next) => {
        const isUser = JSON.parse(localStorage.getItem("logInUser")) || [];
        if (isUser.length === 0) {
          alert("Log in first");
          next({
            name: "allBirthdayList",
          });
        } else {
          next(true);
        }
      },
    },
    {
      name: "birthdayWish",
      path: "/birthdayWish/:userId",
      component: birthdayWish,
      props: true,
      beforeEnter: (to, from, next) => {
        const userData = JSON.parse(localStorage.getItem("userDataList")) || [];
        const isUserExist = userData.find(
          (user) => user.id === +to.params.userId
        );
        if (!isUserExist) {
          return router.back();
        }
        const date = new Date();
        let currentDate = `${String(date.getMonth() + 1).padStart(
          2,
          "0"
        )}-${String(date.getDate()).padStart(2, "0")}`;

        return isUserExist.dob.slice(5) === currentDate
          ? next()
          : router.back();
      },
    },
    {
      name: "pageNotFound",
      path: "/:pageNotFound(.*)",
      component: pageNotFound,
    },
  ],
});

export default router;
