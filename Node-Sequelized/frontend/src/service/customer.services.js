// import { http } from "@/plugins/axios/axios.plugins";
import axios from "axios";

const customerServices = async (params) => {
  console.log("params:::::::::", params);
  return await axios(`http://localhost:3000/get-customers` + params);
  // return http.get("/get-customer");
};
export { customerServices };
