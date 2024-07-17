import { useQuery } from "@tanstack/react-query";
import { getProductsByUserId } from "./getProducts";

interface infoInt {
  id: string;
  token: string;
}

const GetProducts = (info: infoInt) => {
  return useQuery({
    queryKey: ["Products"],
    queryFn: () => getProductsByUserId(info),
  });
};
export const productsManager = {
  GetProducts,
};

export default infoInt;
