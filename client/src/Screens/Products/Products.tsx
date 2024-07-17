import { useEffect, useState } from "react";
import {
  ImageBackground,
  Pressable,
  ScrollView,
  View,
  Button,
  Text,
} from "react-native";
import ItemsBG from "@/Assets/Images/ItemsBG.png";
import GridScrollView from "@/Components/ScrollViews/ScrollView1";
import { productsManager } from "./Api/ProductsExports";
import infoInt from "./Api/ProductsExports";
import GridScrollViewTest from "@/Components/ScrollViews/ScrollViewTest";
import itemsDB from "@/Components/ScrollViews/interface";

const info: infoInt = {
  id: "1",
  token:
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjEsImlhdCI6MTcyMTIyNDI3MSwiZXhwIjoxNzIxMzEwNjcxfQ.9cPTV99zOcKumLCq_uJ5h8Z3gI39II8Jlb8kD9TjQGg",
};
function Products() {
  const { data, isLoading } = productsManager.GetProducts(info);
  return (
    <View className="pt-10">
      <ImageBackground
        source={ItemsBG}
        className="w-screen h-screen absolute bg-contain bg-center pt-10"
      >
        <Pressable className="bg-white w-9 h-9" />
        <Pressable className="bg-black w-9 h-9" />
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
