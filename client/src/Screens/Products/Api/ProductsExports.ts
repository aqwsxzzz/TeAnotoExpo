import { useQuery } from "@tanstack/react-query";
import { getProductByItemId, getProductsByUserId } from "./getProducts";

interface infoInt {
  id: number;
  token: string;
}

const GetProducts = (info: infoInt) => {
  return useQuery({
    queryKey: ["Products"],
    queryFn: () => getProductsByUserId(info),
  });
};

const GetProductByItemId = (info: infoInt) => {
  return useQuery({
    queryKey: ["Product"],
    queryFn: () => getProductByItemId(info),
  });
};
export const productsManager = {
  GetProducts,
  GetProductByItemId,
};

export default infoInt;
