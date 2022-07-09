import { Button } from 'react-native'
import React from 'react'
import { useDispatch, useSelector } from "react-redux";
import { useNavigation } from "@react-navigation/native";
import uuid from "uuid";
import { actions } from '../../ducks/emissions/emissionsSlice';
import { current } from '@reduxjs/toolkit';



const AddEmissionsButton = (EmissionPayload) => {
  const dispatch = useDispatch();
  const navigation = useNavigation();

  const emission = {
    ...EmissionPayload,
  }


  dispatch(actions.createEmission(emission));

  return (
  <Button onPress={() => {dispatch(actions.createEmission(emission))  ; navigation.navigate("Emissions")}} title ="Submit Emission"/>
  )
}

export default AddEmissionsButton