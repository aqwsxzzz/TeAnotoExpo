import { ScrollView, View, Text, Pressable } from "react-native";
import GenericPill from "../Pills/GenericPill";
import React from "react";
import itemsDB from "./interface";
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList } from "@/interfaces";
type ItemDetailsScreenNavigtionProp = StackNavigationProp<
  RootStackParamList,
  "ItemDetails"
>;

function GridScrollViewTest({ arrayProp }: { arrayProp: itemsDB[] }) {
  const { navigate } = useNavigation<ItemDetailsScreenNavigtionProp>();

  let itemsText = arrayProp.map((item: itemsDB) => (
    <GenericPill key={item.id}>
      <Pressable
        onPress={() => navigate("ItemDetails", { itemId: item.id })}
        className="text-white text-center font-extrabold drop-shadow-[0px 1px 2px rgba(0, 0, 0, 1) ] text-4xl text-shadow-black drop-shadow-xl inline-block whitespace-nowrap"
      >
        <Text className="font-extrabold text-xl">{item.name}</Text>
      </Pressable>
    </GenericPill>
  ));
  return (
    <ScrollView>
      <View className="flex justify-center items-center">{itemsText}</View>
    </ScrollView>
  );
}
export default GridScrollViewTest;
