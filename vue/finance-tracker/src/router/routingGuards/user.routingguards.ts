import { isUserLogin } from "@/services/users/users.services";
import router from "..";
export const isUserLoggedIn = (to: any, from: any, next: any) => {
  const isUser = isUserLogin();
  if (!isUser) {
    next(true);
  } else {
    // alert("user already logged in");
    router.push({
      name: "AllTransactions",
    });
  }
  // next(true);
};
export const userLoggedIn = (to: any, from: any, next: any) => {
  const isUser = isUserLogin();
  if (!isUser) {
    router.push({
      name: "logIn",
    });
  } else {
    next(true);
  }
};
