import { ImageBackground, Pressable, View, Text } from "react-native";
import ItemsBG from "@/Assets/Images/ItemsBG.png";
import infoInt, { productsManager } from "./Api/ProductsExports";
import GridScrollViewTest from "@/Components/ScrollViews/ScrollViewTest";
import { token } from "@/constants";

const info: infoInt = {
  id: 1,
  token: token,
};
function Products() {
  const { data, isLoading } = productsManager.GetProducts(info);
  return (
    <View className="pt-10">
      <ImageBackground
        source={ItemsBG}
        className="w-screen h-screen absolute bg-contain bg-center pt-10"
      >
        <View className="absolute top-0 left-0 w-full bg-red-400 h-5"></View>
        {isLoading ? (
          <Text>Loading...</Text>
        ) : (
          <GridScrollViewTest arrayProp={data!.data} />
        )}
      </ImageBackground>
    </View>
  );
}
export default Products;
