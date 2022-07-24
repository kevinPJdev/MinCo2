import { StyleSheet, Text, View, SafeAreaView } from "react-native";
import { Provider } from "react-redux";
import { useState, useEffect } from "react";
import BottomTabNavigation from "./src/navigation/BottomTabNavigation";
import { NavigationContainer } from "@react-navigation/native";
import LoginNavigator from "./src/LoginTab/LoginNavigator";
import store from "./src/store/store";
import { getAuth, onAuthStateChanged } from "firebase/auth";

export default function App() {
  const auth = getAuth();
  const [userAuth, setUserAuth] = useState();
  console.log("APP, ", auth);

  {
    auth.currentUser == null
      ? console.log("User Cond true bufget page got rendered")
      : console.log("User Cond false login Page got rendered");
  }

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUserAuth(true);
        // User is signe d in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/firebase.User
        console.log("User is signed in : App", user);
        // ...
      } else {
        setUserAuth(false);
        // User is signed out
        // ...
        console.log("User is signed out : App");
      }
    });
  }, [auth]);

  return (
    <Provider store={store}>
      <NavigationContainer>
        {userAuth ? <BottomTabNavigation /> : <LoginNavigator />}
        {/* <BottomTabNavigation /> */}
        {/* <LoginNavigator /> */}
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
