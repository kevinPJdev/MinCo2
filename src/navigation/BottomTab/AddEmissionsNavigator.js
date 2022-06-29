import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import  AddEmissionsScreen  from "../../screens/AddEmissionsScreen";
import SubCategorySelection from "../../screens/SubCategorySelection";

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
    </Stack.Navigator>
  )
}

export default AddEmissionsNavigator;