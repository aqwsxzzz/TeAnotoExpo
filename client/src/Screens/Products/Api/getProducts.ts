import axios from "axios";
import infoInt from "@/Screens/Products/Api/ProductsExports";
import { baseUrl } from "@/constants";
import axiosInstance from "@/axiosConfog";

const getProductsByUserId = async (info: infoInt) => {
  const configurationObject = {
    method: "get",
    url: `${baseUrl}/items/1`,
    headers: { Authorization: `Bearer ${info.token}` },
  };
  //const response = await axios(configurationObject);
  const response = await axiosInstance.get(`/items/1`);

  return response;
};

const getProductByItemId = async (info: infoInt) => {
  const configurationObject = {
    method: "get",
    url: `${baseUrl}/items/itemByPK/${info.id}`,
    headers: { Authorization: `Bearer ${info.token}` },
  };
  const response = await axiosInstance.get(`/items/itemByPK/${info.id}`);
  return response;
};

export { getProductsByUserId, getProductByItemId };
