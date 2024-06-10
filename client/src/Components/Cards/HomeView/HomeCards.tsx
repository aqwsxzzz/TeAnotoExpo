import React from "react";
import { View, Text, Image, ScrollView, TextInput, ImageBackground } from "react-native";
import itemsTest from "@/Screens/Home/interface";
import carnepicada from "@/Images/cif-limpiavidrios-recarga.jpg"

const Card = ({textName, elementsArray }:{textName: string, elementsArray: itemsTest[]}) => {
let elementsText = null;

if(elementsArray.length <= 3) {
  elementsText = (
    elementsArray.map((element: itemsTest) =>  
      <Text key={element.id} className=" text-red-700 text-center text-xl">{element.name}</Text>)
  )
} else {
  const newElementsArray = elementsArray.slice(0, 3);
  elementsText = (
    newElementsArray.map((element: itemsTest) =>  
      <Text key={element.id} className="text-red-500 text-center text-xl">{element.name}</Text>)
  )

}

  return (
    <View className="flex items-center justify-center bg-carne-picada">
    <Text className="text-xl font-bold">{textName}</Text>
  <View className="flex p-2 items-center justify-center h-44 w-44 border border-black rounded-full">
    <Image source={carnepicada} className="h-44 w-44 rounded-full absolute z-0 opacity-20"/>
    <View  className="absolute z-20 text-red-700">
    {elementsText}
    </View>
  </View>
  </View>
  )
};

export default Card;