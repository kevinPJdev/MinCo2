import React from "react";
import {View, Text, TouchableOpacity,StyleSheet} from 'react-native';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { useSafeAreaInsets } from "react-native-safe-area-context";

import { Colors } from '../style/colors'
import TabBarIcons from "../components/TabBarIcons/TabBarIcons";
import EmissionListScreen from "../screens/EmissionListScreen";
import BudgetNavigator from "./BottomTab/BudgetNavigator";
import AddEmissionsNavigator from "./BottomTab/AddEmissionsNavigator";
import LearnScreen from "../screens/LearnScreen";


import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import BarCodeScanScreen from "../screens/BarCodeScanScreen";

const Tab = createMaterialBottomTabNavigator();

const BottomTab = createBottomTabNavigator();

const BudgetOptions = {
  tabBarIcon: ({ focused }) => <TabBarIcons focused={focused} name={"md-calculator"} />,
  headerShown: false
};

const EmissionsOptions = {
  tabBarIcon: ({ focused }) => <TabBarIcons focused={focused} name={"md-stats-chart-sharp"} />,
};

const AddEmissionOptions = {
  tabBarIcon: ({ focused }) => <TabBarIcons focused={focused} name={"md-add-circle"} />,
  headerShown: false
};

const LearnOptions = {
  tabBarIcon: ({ focused }) => <TabBarIcons focused={focused} name={"md-reader"} />,
};

const ScanOptions = {
  tabBarIcon: ({ focused }) => <TabBarIcons focused={focused} name={"md-scan"} />,
};

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
  
        },
      }}
      >
      <BottomTab.Screen 
        name="Carbon Budget" 
        component={BudgetNavigator} 
        options={BudgetOptions}
      />
      <BottomTab.Screen 
        name="Emissions" 
        component={EmissionListScreen} 
        options={EmissionsOptions}  
      />
      <BottomTab.Screen 
        name="A Emissions" 
        component={AddEmissionsNavigator}
        options={AddEmissionOptions} 
      />
      <BottomTab.Screen 
        name="Scan" 
        component={BarCodeScanScreen}
        options={ScanOptions} 
      />
      <BottomTab.Screen 
        name="Learn" 
        component={LearnScreen}
        options={LearnOptions} 
      />
    </BottomTab.Navigator>
  )
}

const style = StyleSheet.create({
  shadow: {

  }
})