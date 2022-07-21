import { StyleSheet, Text, View } from 'react-native';
import { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { useSelector, useDispatch } from 'react-redux';
import * as Progress from "react-native-progress";

import Button from '../components/Button/Button';
import { AppModal } from "../components/Modal/AppModal";
import { Colors } from '../style/colors';


function BudgetScreen() {
  const [modalVisible, setModalVisible] = useState(false);
  const nav = useNavigation();
  const dispatch = useDispatch();

  const monthlyCarbonBudget = useSelector(state => state.budget.monthlyCarbonBudget);
  const usedMonthlyCarbonBudget = useSelector(state => state.budget.usedMonthlyCarbonBudget);

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
          color={totalEmissionsRatio > 1 ? Colors.apricot: Colors.green40}
          unfilledColor={Colors.green30}
          borderColor={"transparent"}
          borderWidth={2}
          progress={totalEmissionsRatio}
          size={200}
        />
        </View>
          <Text style={styles.textStyle}>Monthly Budget: {monthlyCarbonBudget}</Text>
          <Text style={styles.textStyle}>Carbon Emitted: {usedMonthlyCarbonBudget}</Text>
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
    backgroundColor: Colors.green20,
    padding: 5
  },
  progressContainer: {
    flex:0.5,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    borderColor: Colors.green30,
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
  },
  textPercentage: {
    fontSize: 40,
    color: Colors.green50,
    fontWeight: "400"
  }
});

export default BudgetScreen;