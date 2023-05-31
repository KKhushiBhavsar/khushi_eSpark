import userGetters from "@/store/user/getters.js";
export default {
  state: {
    userCredentials: JSON.parse(localStorage.getItem("userCredentials")) ?? [],
  },
  getters: userGetters,
};
