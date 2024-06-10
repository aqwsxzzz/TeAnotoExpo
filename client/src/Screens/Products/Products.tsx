import { ImageBackground, View } from "react-native";
import ItemsBG from "@/Images/ItemsBG.png"
export default function Products() {
    return (
        <View>
            <ImageBackground source={ItemsBG} className="w-screen h-screen absolute bg-contain bg-center">

            </ImageBackground>
        </View>
    )
}