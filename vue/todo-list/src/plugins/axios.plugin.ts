import axios from "axios";
axios.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token");
    if (token) {
      config.headers["Authorization"] = `Bearer ${token}`;
    }
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

export const axiosGet = (url: string, data = {}, option = {}) => {
  return axios.get(url, data);
};
export const axiosPost = (url: string, data = {}, option = {}) => {
  return axios.post(url, data);
};
export const axiosPut = (url: string, data = {}, option = {}) => {
  return axios.put(url, data);
};
export const axiosDelete = (url: string, data = {}, option = {}) => {
  return axios.delete(url, data);
};
