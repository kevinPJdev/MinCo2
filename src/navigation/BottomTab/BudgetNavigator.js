import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import BudgetScreen from "../../screens/BudgetScreen";
import QuizScreen from "../../screens/QuizScreen";
import data from "../../data/Quiz.json";

const Stack = createStackNavigator();

const BudgetNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName={"Budget"}
      screenOptions={{
        headerShown: true,
      }}
    >
      <Stack.Screen name="Budget" component={BudgetScreen} />
      <Stack.Screen name="Quiz" component={() => <QuizScreen data={data} />} />
    </Stack.Navigator>
  );
};

export default BudgetNavigator;
