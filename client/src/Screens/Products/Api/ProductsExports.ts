import { useQuery } from "@tanstack/react-query";
import { getProductByItemId, getProductsByUserId } from "./getProducts";
import { getStorePricesbyItemId } from "./getStoresByProducts";

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
    queryKey: ["Product", info.id],
    queryFn: () => getProductByItemId(info),
  });
};

const GetStorePricesbyItemId = (info: infoInt) => {
  return useQuery({
    queryKey: ["StorePrice", info.id],
    queryFn: () => getStorePricesbyItemId(info),
  });
};

export const productsManager = {
  GetProducts,
  GetProductByItemId,
  GetStorePricesbyItemId,
};

export default infoInt;
