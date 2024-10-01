import axios from "axios";
import { token } from "./constants";
export const baseUrl = "http://192.168.1.15:3000";

const axiosInstance = axios.create({
  baseURL: "http://192.168.1.15:3000",
  headers: {
    Authorization: `Bearer ${token}`,
  },
});

const setDefaultHeader = (token: string) => {
  axiosInstance.defaults.headers.common["Authorization"] = `Bearer ${token}`;
};

export default axiosInstance;
