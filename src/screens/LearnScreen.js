import { StyleSheet, Text, SafeAreaView,Button,Alert } from 'react-native'
import React,{ useState }  from 'react'
import RadioGroup from 'react-native-radio-buttons-group';
import { useNavigation } from '@react-navigation/native';
import { Colors } from '../style/colors';
const radioButtonsData = [{
  id: '1', // acts as primary key, should be unique and non-empty string
  label: 'Yes',
  value: 'Y'
}, {
  id: '2',
  label: 'No',
  value: 'N'
}]
const radioButtonsData2 = [{
  id: '1', // acts as primary key, should be unique and non-empty string
  label: 'Yes',
  value: 'Y'
  }, {
  id: '2',
  label: 'No',
  value: 'N'
  }]


const LearnScreen = () => {
  const navigation = useNavigation();

  const setButtonDisable = (e) => {if(e==true){
    setDisabled(false);
    }else{
    setDisabled(true);
    }};
    const setButtonDisable2 = (e) => {if(e==true){
      setDisabled2(false);
      }else{
      setDisabled2(true);
      }};
  function onPressRadioButton(radioButtonsArray) {
    setRadioButtons(radioButtonsArray);
    if(radioButtonsArray[0]["selected"]==true){
      setButtonDisable(true);
    }else{
      setButtonDisable(false);
    }
    };
    function onPressRadioButton2(radioButtonsArray2) {
      setRadioButtons2(radioButtonsArray2);
      if(radioButtonsArray2[0]["selected"]==true){
        setButtonDisable2(true);
      }else{
        setButtonDisable2(false);
      }
      };
      function getTips(){
        var myArray = [
          "Turn your lights off when you leave a room.",

          "Invest in reusable grocery bags.",

          "PearUnplug electronics when you can - Leaving your fully charged device plugged in still uses up energy.",

          "Set that washing machine to cold instead of hot it eliminates 90% of a typical washing machine's electricity usage.",

          "Switch to paperless billing.",

          "Bring your own mug - Did you know that Starbucks discounts your coffee purchase by 10 cents a cup if you bring your own mug?",

          "Keep the tires on your car properly inflated and get regular tune-ups.",

          "Make your home more energy-efficient - and switch to a green energy supplier if possible.",

          "Avoid single-use packaging and products.",

          "Opt for a laptop instead of a desktop. Laptops require less energy to charge and operate than desktops.",

          "Switch your home lights with LED lights.",

          "Avoid unnecessary braking and acceleration in the car.",
        ];
        
        var randomItem = myArray[Math.floor(Math.random()*myArray.length)];
        
        Alert.alert(
          "Today's Tip!",
          randomItem,
          [
            { text: "OK", onPress: () => console.log("OK Pressed") }
          ]
        );
      }
  const [radioButtons, setRadioButtons] = useState(radioButtonsData);
  const [isDisabled, setDisabled] = useState(true);
  const [radioButtons2, setRadioButtons2] = useState(radioButtonsData2);
  const [isDisabled2, setDisabled2] = useState(true);
  return (
    <SafeAreaView style={styles.container}>
    <Text style={styles.mainText}>Howdy-Doody!</Text>
    <Text style={styles.subText} >You are a few steps away from becoming a Green Warrior!
     Answer a simple question and make the most out of our knowledge pool:</Text>
    <Text style={styles.questionText} >Would you like to know how you can reduce your daily carbon
     emission by 50% in a few simple steps? </Text> 
    <RadioGroup 
      radioButtons={radioButtons} 
      onPress={onPressRadioButton} 
      layout='row'
    />
    <Button title="Let's Reduce!"
    disabled={isDisabled}
    color="#000"
    onPress = {getTips}
    />  
    <Text style={styles.questionText} >Would you like to read some of the most influential articles from the World's 
     top environmental enthusiasts?</Text>
     <RadioGroup 
      radioButtons={radioButtons2} 
      onPress={onPressRadioButton2} 
      layout='row'
    />
    <Button title="Show Articles"
    disabled={isDisabled2}
    color="#000"
    onPress={()=> navigation.navigate('Articles')}
     />  
    </SafeAreaView>
  )
}

export default LearnScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.green20,
    alignItems: 'left',
    paddingTop: 10,
  },
  mainText:{
    fontSize: 30,
    fontWeight: "bold",
    fontFamily: 'Cochin',
    padding: 10,
    paddingTop: 20
  },
  subText:{
    fontSize: 20,
    fontFamily: 'Cochin',
    padding: 10
  },
  questionText:{
    fontSize: 20,
    fontWeight: "bold",
    fontFamily: 'Cochin',
    padding: 10,
    paddingTop: 60
  },
  textInput: {
    height: 30,
    textAlign: "center",
    color: "#333333",
    marginBottom: 10,
    fontSize: 24,
    borderWidth: 1,
    borderBottomColor: "#111111"
  },
  buttons:{
    paddingLeft:15,
    textAlign: "center",
    fontSize: 24,
    borderColor: "#000"
  }
});