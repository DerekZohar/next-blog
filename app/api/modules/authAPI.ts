import { AxiosError } from "axios";
import axiosClient from "../axiosClient";

export const authAPI = {
  loginWithGoogle: async (loginGoogleInput): Promise<AxiosError | any> =>
    axiosClient.post("/auth/login/google", loginGoogleInput),
  login: (loginInput, callback, error) => {
    return axiosClient
      .post("/auth/login", loginInput)
      .then((res) => {
        callback(res);
      })
      .catch((reason: AxiosError) => {
        error(reason);
      });
  },
  register: (registerInput) => {
    return axiosClient.post("/auth/register", registerInput);
  },
  verify: (verifyInput) => {
    return axiosClient.post("/auth/verify-email", verifyInput);
  },
  resetToken: (refreshToken: string) =>
    axiosClient.post("/auth/reset-token", { refreshToken }),
};
