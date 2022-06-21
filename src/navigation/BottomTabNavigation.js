import React from "react";
import {View, Text, TouchableOpacity,StyleSheet} from 'react-native';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { useSafeAreaInsets } from "react-native-safe-area-context";

import { Colors } from '../style/colors'
import HomeScreen from "../screens/HomeScreen";
import AddEmissionsScreen from "../screens/AddEmissionsScreen";
import EmissionListScreen from "../screens/EmissionListScreen";
import BudgetScreen from "../screens/BudgetScreen";
import LearnScreen from "../screens/LearnScreen";
import ChatScreen from "../screens/ChatScreen";

const BottomTab = createBottomTabNavigator();

export default function BottomTabNavigation() {
  return(
    <BottomTab.Navigator
      initialRouteName={"Carbon Budget"}
      screenOptions={{
        tabBarShowLabel: false,
        style: {
          position: 'absolute',
          bottom: 25,
          left: 20,
          right: 20,
          elevation:0,
          borderRadius:15,
          height: 90,
          backgroundColor: '#ffffff',
          //paddingBottom: bottom / 2 + 6,
        },
      }}
      >
      <BottomTab.Screen name="Carbon Budget" component={BudgetScreen}/>
      <BottomTab.Screen name="Emissions" component={EmissionListScreen} />
      <BottomTab.Screen name="Add Emissions" component={AddEmissionsScreen} />
      <BottomTab.Screen name="Learn" component={LearnScreen} />
      <BottomTab.Screen name="Chat" component={ChatScreen} />
    </BottomTab.Navigator>
  )
}

const style = StyleSheet.create({
  shadow: {

  }
})