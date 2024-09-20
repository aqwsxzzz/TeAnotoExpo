import { View, Text } from "react-native";
import infoInt, { productsManager } from "./Api/ProductsExports";
import { useRoute, RouteProp } from "@react-navigation/native";
import { RootStackParamList } from "@/interfaces";

function ItemsDetails() {
  const route = useRoute<RouteProp<RootStackParamList, "ItemDetails">>();
  const { itemId } = route.params;

  const info: infoInt = {
    id: itemId,
    token:
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjEsImlhdCI6MTcyNjc4MjgyMSwiZXhwIjoxNzI2ODY5MjIxfQ.QVv-lmFlIZYnz729hR_66HNbUs45jfPMTwxLcTaR2sI",
  };

  const { data, isLoading } = productsManager.GetProductByItemId(info);
  isLoading ? console.log("Loading") : console.log(data?.data.name);

  return (
    <View className="flex justify-center items-center">
      <View>
        <Text>{isLoading ? "Loading" : data!.data.name}</Text>
      </View>
    </View>
  );
}
export default ItemsDetails;
