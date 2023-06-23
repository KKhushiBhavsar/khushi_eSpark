import axios from "axios";

axios.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token");
    console.log("token", token);

    if (token) {
      config.headers["Authorization"] = `Bearer ${JSON.parse(token)}`;
    }
    console.log("configggg", config);
    return config;
  },
  (error) => {
    Promise.reject(error);
  }
);
axios.interceptors.response.use(
  function (response) {
    return response;
  },
  function (error) {
    if (error.response.status === 401) {
      localStorage.clear();
      window.location.href = "/";
    }

    return Promise.reject(error);
  }
);
export const axiosGet = (url: string, option = {}) => {
  return axios.get(url);
};
export const axiosPost = (url: string, data = {}, option = {}) => {
  return axios.post(url, data);
};
export const axiosPatch = (url: string, data = {}, option = {}) => {
  console.log("in axios ", data);
  console.log("in axios ", url);
  return axios.patch(url, data);
};
