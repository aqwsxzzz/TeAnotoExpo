import { ImageBackground, Text, View } from "react-native";
import StoreBG from "@/Images/StoresBG.png"
import GridScrollView from "@/Components/ScrollViews/ScrollView1";

const stores: string[] = [
    "BrightMart",
    "QuickShop",
    "HappyGrocer",
    "TechieHub",
    "StyleBoutique",
    "GreenGroves",
    "UrbanChic",
    "FashionFrenzy",
    "BookNook",
    "GadgetGarage",
    "ElegantEssentials",
    "PlaytimePalace",
    "GlamourGalleria",
    "ToyTrove",
    "SavvySavers",
    "CraftyCorner",
    "BlissfulBites",
    "SportingGoods",
    "FreshFields",
    "PetParadise",
    "HarmonyHome",
    "GourmetGoods",
    "TrendyThreads",
    "EcoEmporium",
    "GardenGrove",
    "FurnitureFinds",
    "BeautyBarn",
    "HealthyHarvest",
    "TechTreasure",
    "SnackShack",
    "GlamGalore",
    "Playland",
    "ChicCloset",
    "UrbanUtopia",
    "TranquilTreats",
    "ActiveArena",
    "VintageVault",
    "BloomingBoutique",
    "FashionFiesta",
    "EpicEats",
    "LuxeLiving",
    "PetPavilion",
    "RusticRetreat",
    "HobbyHaven",
    "BargainBazaar",
    "FunkyFashions",
    "NatureNest",
    "PantryPerfection",
    "ZenZone",
    "TechTide"
]

function Stores() {
    return (
        <View className="pt-10">
            <ImageBackground source={StoreBG} className="w-screen h-s bg-center pt-10 bg-50 bg-no-repeat">
                <GridScrollView arrayProp={stores}/>
            </ImageBackground>
        </View>
    )
}

export default Stores;