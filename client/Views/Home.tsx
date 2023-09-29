import { Image, ScrollView, Text, View } from "react-native"
import styles from "../styles"
import { itemsTest } from "../interfaces"
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
    <View style={styles.container}>
        <Text>Elige un producto.</Text>
        <ScrollView>
          {items.map((item) => (
            <View key={item.id}>
                 
                 {item.image}
                 <Text>{item.name}</Text>
            </View>
          ))}
            {/* <View>
                 <Image source={require('../Images/carne-picada.jpg')} />
                 <Text>Carne Picada</Text> 
            </View>
            <View>
                 <Image source={require('../Images/cif-limpiavidrios-recarga.jpg')} />
                 <Text>CIF Limpiavidrios Recarga</Text> 
            </View>
            <View>
                 <Image source={require('../Images/huevos.jpg')} />
                 <Text>Huevos</Text> 
            </View>
            <View>
                 <Image source={require('../Images/yerba-hepaticos.jpg')} />
                 <Text>Yerba Hepaticos La Selva</Text> 
            </View>
            <View>
                 <Image source={require('../Images/yerba-nerviosos.jpg')} />
                 <Text>Yerba Nerviosos La Selva</Text> 
            </View> */}
        </ScrollView>
    </View>
  )
}