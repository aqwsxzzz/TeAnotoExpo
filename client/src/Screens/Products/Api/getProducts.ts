import axios from "axios";
import infoInt from "@/Screens/Products/Api/ProductsExports";
const baseUrl = "http://192.168.1.3:3000";

const getProductsByUserId = async (info: infoInt) => {
  const configurationObject = {
    method: "get",
    url: "http://192.168.1.9:3000/items/1",
    headers: { Authorization: `Bearer ${info.token}` },
  };
  const response = await axios(configurationObject);
  return response;
};

export { getProductsByUserId };
