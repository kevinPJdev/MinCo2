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
import ChatScreen from "../screens/ChatScreen";


import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';

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

const ChatOptions = {
  tabBarIcon: ({ focused }) => <TabBarIcons focused={focused} name={"chatbubbles-sharp"} />,
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
          backgroundColor: '#B2A2E8',
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
        name="Add Emissions" 
        component={AddEmissionsNavigator}
        options={AddEmissionOptions} 
      />
      <BottomTab.Screen 
        name="Learn" 
        component={LearnScreen}
        options={LearnOptions} 
      />
      <BottomTab.Screen 
        name="Chat" 
        component={ChatScreen}
        options={ChatOptions} 
      />
    </BottomTab.Navigator>
  )
}

const style = StyleSheet.create({
  shadow: {

  }
})