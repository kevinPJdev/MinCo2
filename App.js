import { StyleSheet, Text, View, SafeAreaView } from "react-native";
import { Provider } from "react-redux";

import BottomTabNavigation from "./src/navigation/BottomTabNavigation";
import { NavigationContainer } from "@react-navigation/native";
import LoginNavigator from "./src/LoginTab/LoginNavigator";
import store from "./src/store/store";

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        {/* <BottomTabNavigation /> */}
        <LoginNavigator />
      </NavigationContainer>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
