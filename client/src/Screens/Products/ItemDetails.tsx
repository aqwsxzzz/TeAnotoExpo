import { View, Text, ImageBackground } from "react-native";
import ItemsBG from "@/Assets/Images/ItemsBG.png";
import infoInt, { productsManager } from "./Api/ProductsExports";
import { useRoute, RouteProp } from "@react-navigation/native";
import { RootStackParamList } from "@/interfaces";
import { token } from "@/constants";
import GenericPill from "@/Components/Pills/GenericPill";
import { storePricesWithStoreName } from "./interface";

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
          <View className="flex items-center">
            {isLoadingStorePrices ? (
              <Text> Loading... </Text>
            ) : (
              dataStorePrices!.data.map(
                (storePrices: storePricesWithStoreName) => (
                  <View
                    key={storePrices.id}
                    className="bg-slate-200 flex flex-row justify-between items-center py-1 w-60 h-12 rounded-full my-1 overflow-hidden"
                  >
                    <Text className="text-lg text-center font-extrabold pl-3 grow">
                      {storePrices.storeName}
                    </Text>
                    <Text className="text-end  text-2xl font-extrabold pr-3">
                      $ {storePrices.price}
                    </Text>
                  </View>
                )
              )
            )}
          </View>
        }
      </ImageBackground>
    </View>
  );
}
export default ItemsDetails;
