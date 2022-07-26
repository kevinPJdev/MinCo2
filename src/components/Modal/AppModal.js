import React, { useState } from "react";
import { Alert, Modal, StyleSheet, Text, Pressable, View } from "react-native";
import Slider from '@react-native-community/slider';
import {useDispatch} from 'react-redux';
import { budgetActions } from '../../ducks/budget/budgetSlice.js'
import Colors from "../../style/colors/Colors.js";



const AppModal = ({title, modalVisible, setModalVisible, ...props}) => {
  const [sliderValue, setSliderValue] = useState(0);
  const dispatch = useDispatch();
  return (
    <View style={styles.centeredView}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible)
          
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalHeaderText}>{title}</Text>
            <Slider
              style={{width: 300, height: 40}}
              minimumValue={100}
              maximumValue={2000}
              minimumTrackTintColor="#3AFC1E"
              maximumTrackTintColor="#DFDFDE"
              step={25}
              value={sliderValue}
              onValueChange={value=>setSliderValue(value)} 
            />
            <Text style={styles.textPrimary}>{sliderValue} kg CO2eq</Text>
            <Text>Average monthly emissions per capita in a sample of countries</Text>
            <Text>Luxembourg : 3.5 tons</Text>
            <Text>United States : 1.5 tons</Text>
            <Text>Japan : 900 kg</Text>
            <Text>Sweden : 595 kg</Text>
            <Text>France : 575 kg</Text>
            <Text>China : 522 kg</Text>
            <Text>Brazil : 208 kg</Text>
            <Text>India : 139 kg</Text>
            <Text>Ethiopia : 8.3 kg</Text>
            <Text>If you wish to respect the <Text style={styles.textPrimary}>Paris agreement</Text> to keep the rise in global temperature below 2 degrees, set your monthly budget at</Text>
            <Text style={styles.textPrimary}>167 kgCO2eq</Text>
            <View style={styles.buttonContainer}>
              <Pressable
                style={[styles.button, styles.buttonClose]}
                onPress={() => {setModalVisible(!modalVisible); dispatch(budgetActions.setMonthlyCarbonBudget(sliderValue))}}
              >
                <Text style={styles.textStyle}>Save My Budget</Text>
              </Pressable>
            </View>          
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    width: '100%',
    height: '80%'
  },
  button: {
    backgroundColor: Colors.green40,
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: "#F194FF",
  },
  buttonClose: {
    backgroundColor: Colors.green30,
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center"
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center"
  },
  modalHeaderText: {
    marginBottom: 15,
    textAlign: 'center',
    fontSize:30
  },
  buttonContainer: {
    marginTop: 15
  },
  textPrimary: {
    color: Colors.green30,
    fontSize: 15,
    fontWeight: '500'
    
  }
});

export {AppModal};