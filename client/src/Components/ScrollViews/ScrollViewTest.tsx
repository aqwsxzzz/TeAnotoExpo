import { ScrollView, View, Text } from "react-native";
import GenericPill from "../Pills/GenericPill";
import React from "react";
import itemsDB from "./interface";

function GridScrollViewTest({ arrayProp }: { arrayProp: itemsDB[] }) {
  let itemsText = arrayProp.map((item: itemsDB) => (
    <GenericPill key={item.id}>
      <Text className="text-white text-center font-extrabold drop-shadow-[0px 1px 2px rgba(0, 0, 0, 1) ] text-4xl text-shadow-black drop-shadow-xl inline-block whitespace-nowrap">
        {item.name}
      </Text>
    </GenericPill>
  ));
  return (
    <ScrollView>
      <View className="flex justify-center items-center">{itemsText}</View>
    </ScrollView>
  );
}
export default GridScrollViewTest;
