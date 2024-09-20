import { NativeStackNavigationProp } from "@react-navigation/native-stack";

export type RootStackParamList = {
  Home: undefined;
  Products: undefined;
  Brands: undefined;
  Stores: undefined;
  ItemDetails: { itemId: number };
};

type HomeScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  "Home"
>;

export interface HomeScreenProps {
  navigation: HomeScreenNavigationProp;
}

type ProductsScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  "Products"
>;

export interface ProductsScreenProps {
  navigation: ProductsScreenNavigationProp;
}

type BrandsScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  "Brands"
>;

export interface BrandsScreenProps {
  navigation: BrandsScreenNavigationProp;
}

type StoresScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  "Stores"
>;

export interface StoresScreenProps {
  navigation: StoresScreenNavigationProp;
}

type itemDetailsNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  "ItemDetails"
>;
export interface itemDetailsProps {
  navigation: itemDetailsNavigationProp;
}
