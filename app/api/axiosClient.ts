import { getAccessToken } from "app/redux/store";
import axios from "axios";
import { toast } from "react-toastify";
// Set up default config for http requests here

const axiosClient = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
  headers: {
    "content-type": "application/json",
  },
  // withCredentials: true,
});

axiosClient.interceptors.request.use(
  (config) => {
    const token = getAccessToken();
    const auth = token ? `Bearer ${token}` : "";
    config.headers.common["Authorization"] = auth;
    return config;
  },
  (error) => Promise.reject(error)
);
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
    // toast.warn(error.response.data.message, {
    //   position: "top-center",
    //   autoClose: 4000,
    //   hideProgressBar: false,
    //   closeOnClick: true,
    //   pauseOnHover: true,
    //   draggable: true,
    //   progress: undefined,
    // });
    return error;
  }
);
export default axiosClient;
