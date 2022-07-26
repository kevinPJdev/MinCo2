import { Button, TouchableOpacity, Text, StyleSheet } from 'react-native'
import React from 'react'
import { useDispatch, useSelector } from "react-redux";
import { useNavigation } from "@react-navigation/native";
import 'react-native-get-random-values';
import { v4 as uuidv4 } from 'uuid';
import { actions } from '../../ducks/emissions/emissionsSlice';
import { budgetActions } from '../../ducks/budget/budgetSlice';
import { Colors } from '../../style/colors';


const AddEmissionsButton = ({ EmissionPayload }) => {
  const dispatch = useDispatch();
  const navigation = useNavigation();

  return (
    <TouchableOpacity 
      onPress={() => 
        {dispatch(actions.createEmission(EmissionPayload));
        dispatch(budgetActions.addUsedCarbonBudget(EmissionPayload.co2Value));
        navigation.navigate("Emissions")}} 
      activeOpacity={0.8}
      style={styles.appButtonContainer}>
      <Text style={styles.appButtonText}>Add Emission</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  appButtonContainer: {
    elevation: 8,
    backgroundColor: Colors.green40,
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 12,
    width: 200,
    alignSelf: 'center'
  },
  appButtonText: {
    fontSize: 18,
    color: "#fff",
    fontWeight: "bold",
    alignSelf: "center",
    textTransform: "uppercase"
  }
});

export default AddEmissionsButton