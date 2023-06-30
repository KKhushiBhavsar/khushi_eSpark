// import { http } from "@/plugins/axios/axios.plugins";
import axios from "axios";

const getCustomer = async (params) => {
  console.log("params:::::::::", params);
  return await axios(`http://localhost:3000/get-customers` + params);
  // return http.get("/get-customer");
};

const getCustomerDetails = async (params) => {
  console.log("::::::PARAMS:::::::", params);
  return await axios(`http://localhost:3000/user-data` + params);
};
export { getCustomer, getCustomerDetails };
