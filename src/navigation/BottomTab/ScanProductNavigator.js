import react from "react";
import { createStackNavigator } from "@react-navigation/stack";

import BarCodeScanScreen from "../../screens/BarCodeScanScreen";
import ProductFoundScreen from "../../screens/ProductFoundScreen";

const Stack = createStackNavigator();

const ScanProductNavigator = () => {
  return(
    <Stack.Navigator 
      initialRouteName={"Barcode Scan"} 
      screenOptions={{
        headerShown: true
      }}
    >
      <Stack.Screen 
        name="Barcode Scan" 
        component={BarCodeScanScreen} 
      />
      <Stack.Screen 
        name="Product Details" 
        component={ProductFoundScreen}
      />
    </Stack.Navigator>
  )
}

export default ScanProductNavigator;