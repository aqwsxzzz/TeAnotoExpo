import {
  Image,
  ImageBackground,
  ScrollView,
  View,
  Pressable,
} from "react-native";
import Card from "@/Components/Cards/HomeView/HomeCards";
import itemsTest from "./interface";
import styles from "./styles";
import carnepicada from "@/Images/carne-picada.jpg";
import ciflimpiavidriosrecarga from "@/Images/cif-limpiavidrios-recarga.jpg";
import huevos from "@/Images/huevos.jpg";
import yerbahepaticos from "@/Images/yerba-hepaticos.jpg";
import yerbanerviosos from "@/Images/yerba-nerviosos.jpg";
import HomeBG from "@/Images/HomeBG.png";
import { HomeScreenProps, RootStackParamList } from "@/interfaces";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";

const itemName = "Productos";
const storeName = "Tiendas";
const brandName = "Marcas";
type HomeScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  "Home"
>;

const items: itemsTest[] = [
  {
    id: 1,
    image: <Image source={carnepicada} />,
    name: "Carne Picada",
  },
  {
    id: 2,
    image: <Image source={ciflimpiavidriosrecarga} />,
    name: "Cif Limpividrios Recarga",
  },
  {
    id: 3,
    image: <Image source={huevos} />,
    name: "Huevos",
  },
  {
    id: 4,
    image: <Image source={yerbahepaticos} />,
    name: "Yerba Hepaticos La Selva",
  },
  {
    id: 5,
    image: <Image source={yerbanerviosos} />,
    name: "Yerba Nerviosos La Selva",
  },
];

function Home() {
  const navigation = useNavigation<HomeScreenNavigationProp>();

  return (
    <View>
      <ImageBackground
        source={HomeBG}
        className="w-screen h-screen absolute bg-contain bg-center"
      >
        <ScrollView contentContainerStyle={styles.homeScrollView1}>
          <Pressable onPress={() => navigation.navigate("Products")}>
            <Card textName={itemName} elementsArray={items} />
          </Pressable>
          <Pressable onPress={() => navigation.navigate("Stores")}>
            <Card textName={storeName} elementsArray={items} />
          </Pressable>
          <Pressable onPress={() => navigation.navigate("Brands")}>
            <Card textName={brandName} elementsArray={items} />
          </Pressable>
        </ScrollView>
      </ImageBackground>
    </View>
  );
}
export default Home;
