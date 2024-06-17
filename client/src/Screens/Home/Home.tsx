import { ImageBackground, View } from "react-native";
import HomeBG from "@/Assets/Images/HomeBG.png";
import InitScrollView from "./Components/InitScrollView";

function Home() {
  return (
    <View>
      <ImageBackground
        source={HomeBG}
        className="w-screen h-screen absolute bg-contain bg-center"
      >
        <InitScrollView />
      </ImageBackground>
    </View>
  );
}
export default Home;
