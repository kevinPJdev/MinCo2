import { StyleSheet, Text, View } from 'react-native';
import { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { useSelector, useDispatch } from 'react-redux';

import Button from '../components/Button/Button';
import {AppModal} from "../components/Modal/AppModal";


function BudgetScreen() {
  const [modalVisible, setModalVisible] = useState(false);
  const nav = useNavigation();
  const dispatch = useDispatch();

  const monthlyCarbonBudget = useSelector(state => state.budget.monthlyCarbonBudget);

  // console.log(monthlyCarbonBudget);
  // console.log("Budget executes")

  return (
    <View style={styles.container}>
      <View style={styles.progressContainer}>
        <View style={styles.progressCircle}>
        
        </View>
          <Text style={styles.textStyle}>Monthly Budget: {monthlyCarbonBudget}</Text>
          <Text style={styles.textStyle}>Carbon Emitted: </Text>
      </View>
      <View style={styles.widgetContainer}>
        <View>
            <Button onPress ={()=> {setModalVisible(!modalVisible);}} title={"Set Monthly Budget"} />
            <AppModal modalVisible={modalVisible} title="Set your monthly Budget" setModalVisible={setModalVisible}/>
        </View>
        <View>
            <Button onPress={()=> nav.navigate("Quiz")} title={"Take a Quiz"}/>
        </View>
      </View>
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#392C66',
    padding: 5
  },
  progressContainer: {
    flex:0.5,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    borderColor: '#B1A2E8',
    borderWidth: 2,
    borderRadius: 10
  },
  progressCircle: {
    marginVertical: 10
  },
  textStyle: {
    fontSize: 18,
    color: '#fff'
  },
  widgetContainer: {
  flex: 0.5,
  paddingVertical:10,
  paddingHorizontal: 10
  }
});

export default BudgetScreen;