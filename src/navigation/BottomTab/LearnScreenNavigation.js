import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import  LearnScreen  from "../../screens/LearnScreen";
import ArticlesScreen from "../../screens/ArticlesScreen";


const Stack = createStackNavigator();

const LearnScreenNavigator = () => {
  return(
    <Stack.Navigator 
      initialRouteName={"Learn"} 
      screenOptions={{
        headerShown: true
      }}
    >
      <Stack.Screen 
        name="Learn" 
        component={LearnScreen} 
      />
      <Stack.Screen 
        name="Articles" 
        component={ArticlesScreen}
      />
    </Stack.Navigator>
  )
}

export default LearnScreenNavigator;