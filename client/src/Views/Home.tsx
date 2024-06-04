import { Image, ScrollView, StyleSheet, Text, View } from "react-native"
import styles from "./viewsStyles"
import { itemsTest } from "../../interfaces"
import { Card } from "../Components/Cards/HomeView/HomeCards"
export default function Home() {

  const items: itemsTest[] = [
    {
      id: 1,
      image: <Image source={require('../Images/carne-picada.jpg')} />,
      name: "Carne Picada",
    },
    {
      id: 2,
      image: <Image source={require('../Images/cif-limpiavidrios-recarga.jpg')} />,
      name: "Cif Limpividrios Recarga",
    },
    {
      id: 3,
      image: <Image source={require('../Images/huevos.jpg')} />,
      name: "Huevos",
    },
    {
      id: 4,
      image: <Image source={require('../Images/yerba-hepaticos.jpg')} />,
      name: "Yerba Hepaticos La Selva",
    },
    {
      id: 5,
      image: <Image source={require('../Images/yerba-nerviosos.jpg')} />,
      name: "Yerba Nerviosos La Selva",
    }
  ]
  return (
    <ScrollView contentContainerStyle={styles.homeScrollView1}>
      <View className = "max-w-68 flex items-center flex-row flex-wrap justify-evenly" >

    <Card />
    <Card />
    <Card />
      </View>
    </ScrollView>
  )
}