import { isUserLogin } from "@/services/users/users.services";
export const isUserLoggedIn = (to: any, from: any, next: any) => {
  const isUser = isUserLogin();
  if (!isUser) {
    next(true);
  } else {
    // alert("user already logged in");
    next(false);
  }
  // next(true);
};
