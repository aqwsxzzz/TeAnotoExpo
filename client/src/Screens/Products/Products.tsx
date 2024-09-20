import { ImageBackground, Pressable, View, Text } from "react-native";
import ItemsBG from "@/Assets/Images/ItemsBG.png";
import infoInt, { productsManager } from "./Api/ProductsExports";
import GridScrollViewTest from "@/Components/ScrollViews/ScrollViewTest";

const info: infoInt = {
  id: 1,
  token:
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjEsImlhdCI6MTcyNjc4MjgyMSwiZXhwIjoxNzI2ODY5MjIxfQ.QVv-lmFlIZYnz729hR_66HNbUs45jfPMTwxLcTaR2sI",
};
function Products() {
  const { data, isLoading } = productsManager.GetProducts(info);
  return (
    <View className="pt-10">
      <ImageBackground
        source={ItemsBG}
        className="w-screen h-screen absolute bg-contain bg-center pt-10"
      >
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
