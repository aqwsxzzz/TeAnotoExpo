import { View, Text, ImageBackground } from "react-native";
import ItemsBG from "@/Assets/Images/ItemsBG.png";
import infoInt, { productsManager } from "./Api/ProductsExports";
import { useRoute, RouteProp } from "@react-navigation/native";
import { RootStackParamList } from "@/interfaces";
import { token } from "@/constants";
import GenericPill from "@/Components/Pills/GenericPill";
import storePrices from "./interface";

function ItemsDetails() {
  const route = useRoute<RouteProp<RootStackParamList, "ItemDetails">>();
  const { itemId } = route.params;

  const info: infoInt = {
    id: itemId,
    token: token,
  };

  const { data: dataItem, isLoading: isLoadingItem } =
    productsManager.GetProductByItemId(info);
  const { data: dataStorePrices, isLoading: isLoadingStorePrices } =
    productsManager.GetStorePricesbyItemId(info);

  return (
    <View className="pt-10">
      <ImageBackground
        source={ItemsBG}
        className="w-screen h-screen absolute bg-contain bg-center pt-10"
      >
        <View className="flex justify-center items-center ">
          <Text className="font-extrabold text-3xl">
            {isLoadingItem ? "Loading" : dataItem!.data.name}
          </Text>
        </View>
        {
          <View>
            {isLoadingStorePrices ? (
              <Text> Loading... </Text>
            ) : (
              dataStorePrices!.data.map((storePrices: storePrices) => (
                <GenericPill key={storePrices.id}>
                  <Text>{storePrices.price}</Text>
                </GenericPill>
              ))
            )}
          </View>
        }
      </ImageBackground>
    </View>
  );
}
export default ItemsDetails;
