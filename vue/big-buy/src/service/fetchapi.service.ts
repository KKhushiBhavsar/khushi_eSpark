import { axiosGet, axiosPost, axiosPatch } from "@/plugins/axios/axios.plugins";
import axios from "axios";

interface userInterface {
  name: string;
  surname: string;
  email: string;
  password: number;
}

interface itemInterface {
  name: string;
  sellername: string;
  details: {
    description: string;
    price: number;
    abc: any;
    minPrice: number;
    maxPrice: number;
  };
}
export const SignUpUser = (data: userInterface) => {
  return axiosPost(process.env.VUE_APP_URL + "/auth/sign-up/", data);
};
export const LogInUser = (data: userInterface) => {
  return axiosPost(process.env.VUE_APP_URL + "/auth/login", data);
};

export const addItemInDB = (data: itemInterface) => {
  return axiosPost(process.env.VUE_APP_URL + "/items", data);
};

export const getAllItem = (url = "") => {
  return axiosGet(process.env.VUE_APP_URL + "/items" + url);
};

export const patchEditItem = (data: itemInterface, id: any) => {
  return axiosPost(process.env.VUE_APP_URL + "/items" + id, data);
};

export const purchaseItem = (data: itemInterface) => {
  return axiosPost(
    process.env.VUE_APP_URL + "/purchase-history/purchase",
    data
  );
};

export const getUserPurchaseHistory = () => {
  return axiosGet(process.env.VUE_APP_URL + "/purchase-history/my-purchase");
};

export const getMyItems = () => {
  return axiosGet(process.env.VUE_APP_URL + "/items/my-items");
};
