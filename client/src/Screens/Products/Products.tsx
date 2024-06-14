import { ImageBackground, ScrollView, View } from "react-native";
import ItemsBG from "@/Images/ItemsBG.png"
import GridScrollView from "@/Components/ScrollViews/ScrollView1";

const productos: string[] = [
"Leche",
  "Pan",
  "Huevos",
  "Arroz",
  "Frijoles",
  "Azúcar",
  "Sal",
  "Aceite de cocina",
  "Pasta",
  "Café",
  "Té",
  "Harina",
  "Mantequilla",
  "Queso",
  "Yogur",
  "Jugo de naranja",
  "Refresco",
  "Agua embotellada",
  "Cereal",
  "Galletas",
  "Chips",
  "Chocolate",
  "Helado",
  "Carne de res",
  "Pollo",
  "Pescado",
  "Jabón",
  "Champú",
  "Acondicionador",
  "Papel higiénico",
  "Detergente para ropa",
  "Suavizante",
  "Desinfectante",
  "Toallas de papel",
  "Bolsa de basura",
  "Limpiador multiusos",
  "Esponjas",
  "Platos desechables",
  "Vasos desechables",
  "Cubiertos desechables",
  "Servilletas",
  "Pañuelos de papel",
  "Cepillo de dientes",
  "Pasta dental",
  "Enjuague bucal",
  "Desodorante",
  "Crema para el cuerpo",
  "Protector solar",
  "Medicamentos básicos",
  "Vitaminas"
]

 function Products() {
    return (
        <View className="pt-10">
            <ImageBackground source={ItemsBG} className="w-screen h-screen absolute bg-contain bg-center pt-10">
            <GridScrollView arrayProp={productos}/>
            </ImageBackground>
        </View>
    )

    }
export default Products;
