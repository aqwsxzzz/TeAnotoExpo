import axios from "axios";
import { baseUrl } from "@/constants";
import infoInt from "./ProductsExports";
import axiosInstance from "@/axiosConfog";

const getStorePricesbyItemId = async (info: infoInt) => {
  const response = await axiosInstance.get(`/storeprice/ByItemId/${info.id}`);

  return response;
};

export { getStorePricesbyItemId };
