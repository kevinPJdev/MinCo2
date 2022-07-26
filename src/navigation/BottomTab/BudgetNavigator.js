import react from "react";
import { createStackNavigator } from "@react-navigation/stack";

import BudgetScreen from '../../screens/BudgetScreen'
import QuizScreen from "../../screens/QuizScreen";

const Stack = createStackNavigator();

const BudgetNavigator = () => {
  return(
    <Stack.Navigator 
      initialRouteName={"Budget"} 
      screenOptions={{
        headerShown: true
      }}
    >
      <Stack.Screen 
        name="Budget" 
        component={BudgetScreen} 
      />
      <Stack.Screen 
        name="Quiz" 
        component={QuizScreen}
      />
    </Stack.Navigator>
  )
}

export default BudgetNavigator;