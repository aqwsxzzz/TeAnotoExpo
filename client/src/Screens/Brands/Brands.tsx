import GridScrollView from "@/Components/ScrollViews/ScrollView1";
import { ImageBackground, View } from "react-native";
import BrandsBG from "@/Assets/Images/BrandsBG.png";

const productBrands: string[] = [
  "SwiftTech",
  "CleverGadgets",
  "EcoLiving",
  "SmartStyle",
  "EverFresh",
  "TechSavvy",
  "EliteEats",
  "UrbanBlend",
  "ChicWorks",
  "PureGlam",
  "VitalVogue",
  "NaturalNest",
  "BioFusion",
  "GizmoGenius",
  "EpicEssence",
  "FreshFinds",
  "FusionFiesta",
  "HarmonyHome",
  "StylishStuff",
  "PristinePets",
  "SleekStyle",
  "DreamDrinks",
  "NatureNurture",
  "SmartShapes",
  "FitFusion",
  "EcoElegance",
  "ActiveAura",
  "ZenZone",
  "FreshGear",
  "UrbanUnite",
  "GlamourGlide",
  "TechTrend",
  "OrganicOasis",
  "VivaVogue",
  "PioneerPantry",
  "LuxeLife",
  "RetroRave",
  "HealthyHarvest",
  "NatureNook",
  "StyleSpace",
  "GourmetGlow",
  "VibeVentures",
  "ActiveAllure",
  "UrbanUtopia",
  "TechTide",
  "EpicEssence",
  "GizmoGenius",
  "ChicChoice",
  "EcoEssentials",
  "PurePerformance",
];

function Brands() {
  return (
    <View className="pt-10">
      <ImageBackground
        source={BrandsBG}
        className="w-screen h-screen absolute bg-contain bg-center pt-10"
      >
        <GridScrollView arrayProp={productBrands} />
      </ImageBackground>
    </View>
  );
}

export default Brands;
