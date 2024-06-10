import React from "react";
import { View, Text, Image, ScrollView, TextInput, ImageBackground } from "react-native";
import itemsTest from "@/Screens/Home/interface";
import carnepicada from "@/Images/cif-limpiavidrios-recarga.jpg"

const Card = ({textName, elementsArray }:{textName: string, elementsArray: itemsTest[]}) => {
let elementsText = null;

if(elementsArray.length <= 3) {
  elementsText = (
    elementsArray.map((element: itemsTest) =>  
      <Text key={element.id} className=" text-red-600 text-center text-xl rounded-full">{element.name}</Text>)
  )
} else {
  const newElementsArray = elementsArray.slice(0, 3);
  elementsText = (
    newElementsArray.map((element: itemsTest) =>  
      <Text key={element.id} className="text-red-600 text-center text-xl rounded-full">{element.name}</Text>)
  )

}

  return (
    <View  className="flex items-center justify-center h-44 w-44 border border-y-blue-700 rounded-full  overflow-hidden">
    <Image source={carnepicada} className="absolute  h-44 w-44 z-0 opacity-60"/>
    <View  className="flex items-center justify-center rounded-full absolute z-10 h-44 w-44">
    <Text className="text-xl font-extrabold ">{textName}</Text>
    {elementsText}
    </View>
    </View>
  )
};

export default Card;