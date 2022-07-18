import { Button, TouchableOpacity, Text, StyleSheet } from 'react-native'
import React from 'react'
import { useDispatch, useSelector } from "react-redux";
import { useNavigation } from "@react-navigation/native";
import uuid from "uuid";
import { actions } from '../../ducks/emissions/emissionsSlice';



const AddEmissionsButton = (EmissionPayload) => {
  const dispatch = useDispatch();
  const navigation = useNavigation();

  const emission = {
    ...EmissionPayload,
  }
  console.log("Here I am!")
  console.log(emission);


  dispatch(actions.createEmission(emission));

  return (

    <TouchableOpacity 
      onPress={() => {dispatch(actions.createEmission(emission));navigation.navigate("Emissions")}} 
      activeOpacity={0.8}
      style={styles.appButtonContainer}>
      <Text style={styles.appButtonText}>Add Emission</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  appButtonContainer: {
    elevation: 8,
    backgroundColor: "#5D46B0",
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