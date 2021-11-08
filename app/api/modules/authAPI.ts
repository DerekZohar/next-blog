import axiosClient from "../axiosClient";

export const authAPI = {
  login: (loginInput) => {
    return axiosClient.post("/auth/login", loginInput);
  },
  register: (registerInput) => {
    return axiosClient.post("/auth/register", registerInput);
  },
  verify: (verifyInput) => {
    return axiosClient.post("/auth/verify-email", verifyInput);
  },
  resetToken: () => axiosClient.get("/auth/reset-token"),
};
