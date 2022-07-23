import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { useSafeAreaInsets } from "react-native-safe-area-context";

import { Colors } from "../style/colors";
import TabBarIcons from "../components/TabBarIcons/TabBarIcons";
import LoginNavigator from "./LoginNavigator";

import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import BarCodeScanScreen from "../screens/BarCodeScanScreen";

const BottomTab = createBottomTabNavigator();

export default function BottomTabNavigation() {
  return (
    <BottomTab.Navigator
      initialRouteName={"OTP"}
      screenOptions={{
        tabBarShowLabel: false,
        style: {
          position: "absolute",
          bottom: 25,
          left: 20,
          right: 20,
          elevation: 0,
          borderRadius: 15,
          height: 90,
        },
      }}
    >
      <BottomTab.Screen
        name="Login"
        component={LoginNavigator}
        // options={BudgetOptions}
      />
    </BottomTab.Navigator>
  );
}
