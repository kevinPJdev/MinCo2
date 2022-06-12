import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { useSafeAreaInsets } from "react-native-safe-area-context";

import { Colors } from '../style/colors'
import HomeScreen from "../screens/HomeScreen";
import AddEmissionsScreen from "../screens/AddEmissionsScreen";

const BottomTab = createBottomTabNavigator();

export default function BottomTabNavigation() {
  return(
    <BottomTab.Navigator
      initialRouteName={"Home"}
      tabBarOptions={{
        activeTintColor: Colors.green50,
        inactiveTintColor: Colors.grey40,
        style: {
          backgroundColor: Colors.white,
          borderTopWidth: 2,
          borderTopColor: Colors.green10,
          //paddingBottom: bottom / 2 + 6,
        },
      }}
      >
      <BottomTab.Screen name="Home" component={HomeScreen}/>
      <BottomTab.Screen name="AddEmissions" component={AddEmissionsScreen} />
    </BottomTab.Navigator>
  )
}