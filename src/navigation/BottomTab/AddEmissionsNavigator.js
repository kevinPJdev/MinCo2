import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import  AddEmissionsScreen  from "../../screens/AddEmissionsScreen";
import SubCategorySelection from "../../screens/SubCategorySelection";
import CreateEmissionScreen from "../../screens/CreateEmissionScreen";
import EmissionListScreen from '../../screens/EmissionListScreen';

const Stack = createStackNavigator();

const AddEmissionsNavigator = () => {
  return(
    <Stack.Navigator 
      initialRouteName={"Add Emissions"} 
      screenOptions={{
        headerShown: true
      }}
    >
      <Stack.Screen 
        name="Add Emissions" 
        component={AddEmissionsScreen} 
      />
      <Stack.Screen 
        name="Select Sub Category" 
        component={SubCategorySelection}
      />
      <Stack.Screen 
        name="Create Emissions" 
        component={CreateEmissionScreen}
      />
    </Stack.Navigator>
  )
}

export default AddEmissionsNavigator;