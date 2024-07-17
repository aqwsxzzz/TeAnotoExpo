import { ScrollView, View, Text } from "react-native";
import GenericPill from "../Pills/GenericPill";
import React from "react";

function GridScrollView({ arrayProp }: { arrayProp: string[] }) {
  let itemsText = arrayProp.map((item: string, index: number) => (
    <GenericPill key={index}>
      <Text className="text-white text-center font-extrabold drop-shadow-[0px 1px 2px rgba(0, 0, 0, 1) ] text-4xl text-shadow-black drop-shadow-xl inline-block whitespace-nowrap">
        {item}
      </Text>
    </GenericPill>
  ));
  return (
    <ScrollView>
      <View className="flex justify-center items-center">{itemsText}</View>
    </ScrollView>
  );
}
export default GridScrollView;
