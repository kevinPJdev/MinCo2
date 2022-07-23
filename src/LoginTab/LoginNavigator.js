import react from "react";
import { createStackNavigator } from "@react-navigation/stack";
import OTPScreen from "../screens/OTPScreen";
import LoginScreen from "../screens/LoginScreen";
import BudgetScreen from "../screens/BudgetScreen";
const Stack = createStackNavigator();

const LoginNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName={"Login"}
      screenOptions={{
        headerShown: true,
      }}
    >
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="OTP" component={OTPScreen} />
      <Stack.Screen name="budget" component={BudgetScreen} />
    </Stack.Navigator>
  );
};

export default LoginNavigator;
