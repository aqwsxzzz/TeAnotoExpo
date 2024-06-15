import * as React from "react";
import Home from "@/Screens/Home/Home";
import Products from "@/Screens/Products/Products";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Brands from "@/Screens/Brands/Brands";
import Stores from "@/Screens/Stores/Stores";

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={Home}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Products"
          component={Products}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Brands"
          component={Brands}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Stores"
          component={Stores}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
export default App;
