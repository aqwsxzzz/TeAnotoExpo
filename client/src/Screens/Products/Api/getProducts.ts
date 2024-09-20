import axios from "axios";
import infoInt from "@/Screens/Products/Api/ProductsExports";
const baseUrl = "http://192.168.1.15:3000";

const getProductsByUserId = async (info: infoInt) => {
  const configurationObject = {
    method: "get",
    url: `${baseUrl}/items/1`,
    headers: { Authorization: `Bearer ${info.token}` },
  };
  const response = await axios(configurationObject);
  return response;
};

const getProductByItemId = async (info: infoInt) => {
  const configurationObject = {
    method: "get",
    url: `${baseUrl}/items/itemByPK/${info.id}`,
    headers: { Authorization: `Bearer ${info.token}` },
  };
  const response = await axios(configurationObject);
  return response;
};

export { getProductsByUserId, getProductByItemId };
