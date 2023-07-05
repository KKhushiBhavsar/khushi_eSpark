// import { http } from "@/plugins/axios/axios.plugins";
import axios from "axios";

const getCustomer = async (params) => {
  console.log("params:::::::::", params);
  // console.log(":::::ENV:::::::", process.env.VUE_APP_URL);
  // return await axios(`http://localhost:3000/get-customers` + params);
  return await axios.get(process.env.VUE_APP_URL + "/get-customers" + params);
};

const getCustomerDetails = async (params) => {
  console.log("::::::PARAMS:::::::", params);
  // return await axios(`http://localhost:3000/user-data` + params);
  return await axios.get(process.env.VUE_APP_URL + "/user-data" + params);
};

const getCartDetails = async (params) => {
  console.log("::::CART PARAMS :::::::", params);
  // return await axios(`http://localhost:3000/user-cart` + params);
  return await axios.get(process.env.VUE_APP_URL + "/user-cart" + params);
};
export { getCustomer, getCustomerDetails, getCartDetails };
