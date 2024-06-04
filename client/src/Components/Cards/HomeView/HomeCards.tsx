import React from "react";
import { View, Text, Image, ScrollView, TextInput } from "react-native";
import styles from "./styles";

export const Card = () => (
  <View className="flex p-2 items-center justify-center h-64 w-32 border border-black rounded-full">
    <Text className="text-blue-500 bg-green-300 text-center text-xl">Some more text</Text>
  </View>
);
