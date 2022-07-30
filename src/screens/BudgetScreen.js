import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { useState, useEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import { useSelector, useDispatch } from "react-redux";
import * as Progress from "react-native-progress";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { signOut } from "firebase/auth";

import Button from "../components/Button/Button";
import { AppModal } from "../components/Modal/AppModal";
import { Colors } from "../style/colors";

function roundToTwo(num) {
  return +(Math.round(num + "e+2")  + "e-2");
}

function BudgetScreen() {
  const [modalVisible, setModalVisible] = useState(false);
  const nav = useNavigation();
  const dispatch = useDispatch();

  const auth = getAuth();

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/firebase.User
        console.log("User is signed in : Budjet", user);
        // ...
      } else {
        // User is signed out
        // ...
        console.log("User is signed out : Budjet");
      }
    });
  }, [auth]);

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
      })
      .catch((error) => {
        // An error happened.
      });
  };

  const monthlyCarbonBudget = useSelector(
    (state) => state.budget.monthlyCarbonBudget
  );
  const usedMonthlyCarbonBudget = useSelector(
    (state) => state.budget.usedMonthlyCarbonBudget
  );

  const totalEmissionsRatio = usedMonthlyCarbonBudget / monthlyCarbonBudget;

  return (
    <View style={styles.container}>
      <View style={styles.progressContainer}>
        <View style={styles.progressCircle}>
          <Progress.Circle
            animated={true}
            showsText
            strokeCap={"round"}
            thickness={16}
            textStyle={styles.textPercentage}
            color={totalEmissionsRatio > 1 ? Colors.apricot : Colors.green40}
            unfilledColor={Colors.green30}
            borderColor={"transparent"}
            borderWidth={2}
            progress={totalEmissionsRatio}
            size={200}
          />
        </View>
        <Text style={styles.textStyle}>
          Monthly Budget: {monthlyCarbonBudget} kgCO2
        </Text>
        <Text style={styles.textStyle}>
          Remaining Budget: {roundToTwo(monthlyCarbonBudget - usedMonthlyCarbonBudget)} kgCO2
        </Text>
      </View>
      <View style={styles.widgetContainer}>
        <View>
          <Button
            onPress={() => {
              setModalVisible(!modalVisible);
            }}
            title={"Set Monthly Budget"}
          />
          <AppModal
            modalVisible={modalVisible}
            title="Set your monthly Budget"
            setModalVisible={setModalVisible}
          />
        </View>
        <View style={styles.textDivisionContainer}>
          <Text style={styles.textStyle}>Not sure what you should be setting your budget to? Take a quiz</Text>
        </View>
        <View>
          <Button onPress={() => nav.navigate("Quiz")} title={"Take a Quiz"} />
        </View>

        <View style={styles.buttonContainer}>
        <TouchableOpacity onPress={handleSignOut} style={styles.button}>
            <Text style={styles.buttonText}>Logout</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.green20,
    padding: 5,
  },
  progressContainer: {
    flex: 0.5,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
    borderColor: Colors.green30,
    borderWidth: 2,
    borderRadius: 10,
  },
  progressCircle: {
    marginVertical: 10,
  },
  textStyle: {
    fontSize: 18,
    color: "#fff",
  },
  widgetContainer: {
    flex: 0.5,
    paddingVertical: 10,
    paddingHorizontal: 10,
  },
  textPercentage: {
    fontSize: 40,
    color: Colors.green50,
    fontWeight: "400",
  },
  textDivisionContainer: {
    padding: 20,
    borderColor: Colors.green30,
    borderWidth: 2,
    marginBottom: 15
  },
  buttonContainer: {
    elevation: 8,
    backgroundColor: Colors.green30,
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 12,
    marginTop:10
  },
  buttonText: {
    fontSize: 18,
    color: Colors.white,
    fontWeight: "bold",
    alignSelf: "center",
    textTransform: "uppercase"
  }

});

export default BudgetScreen;
