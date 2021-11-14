import axios from "axios";
import { toast } from "react-toastify";
// Set up default config for http requests here

const axiosClient = axios.create({
  baseURL: "https://blogify-dz.herokuapp.com/",
  headers: {
    "content-type": "application/json",
  },
  withCredentials: true,
  //   paramsSerializer: (params) => queryString.stringify(params),
});
// axios.defaults.withCredentials = true;
axiosClient.interceptors.request.use(async (config) => {
  // Handle token here ...
  return config;
});
// axiosClient.defaults.timeout = 20000;
axiosClient.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    if (error.response.status === 401 || error.response.status === 403) {
      toast.warn("You are not logged in!", {
        position: "top-center",
        autoClose: 4000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
    toast.warn(error.response.data.message, {
      position: "top-center",
      autoClose: 4000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
    return error;
  }
);
export default axiosClient;
