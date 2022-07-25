import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import { useRoute } from "@react-navigation/core";
import DateTimePickerModal from "react-native-modal-datetime-picker";
import { useNavigation } from "@react-navigation/native";
import moment, { Moment } from "moment";
import React, {useState, useCallback} from 'react'
import { v4 as uuidv4 } from 'uuid';

import Transport from '../components/Transport/Transport';
import Fashion from '../components/Fashion/Fashion';
import AddEmissionsButton from '../components/AddEmissionsButton/AddEmissionsButton'
import Food from '../components/Food/Food';
import Streaming from '../components/Streaming/Streaming';
import Purchase from '../components/Purchase/Purchase';
import Meal from '../Meal/Meal';
import { Colors } from '../style/colors';

const DEFAULT_SLIDER_VALUE_TRANSPORT = 150 * 1000
const DEFAULT_SLIDER_VALUE_FASHION = 1;
const DEFAULT_SLIDER_VALUE_FOOD = 200;
const DEFAULT_SLIDER_VALUE_STREAMING = 120 * 60;
const DEFAULT_SLIDER_VALUE_PURCHASE = 1;
const DEFAULT_SLIDER_VALUE_MEAL = 1;

const emissionPayload = {
  id: "",
  title: "",
  emissionType: "",
  emissionModelType: "",
  co2Value: 0,
  value: 0,
};

const CreateEmissionScreen = () => {
  const route = useRoute();
  const navigation = useNavigation();

  const [co2Emission, setCo2Emission] = useState(0);
  const [durationMinutes, setDurationMinutes] = useState(DEFAULT_SLIDER_VALUE_TRANSPORT / 1000);
  const [durationSeconds, setDurationSeconds] = useState(DEFAULT_SLIDER_VALUE_STREAMING);
  const [distance, setDistance] = useState(DEFAULT_SLIDER_VALUE_TRANSPORT);
  const [fashionQuantity, setFashionQuantity] = useState(DEFAULT_SLIDER_VALUE_FASHION);
  const [purchaseQuantity, setPurchaseQuantity] = useState(DEFAULT_SLIDER_VALUE_PURCHASE);
  const [mealQuantity, setMealQuantity] = useState(DEFAULT_SLIDER_VALUE_MEAL);
  const [foodQuantity, setFoodQuantity] = useState();
  const [creationDate, setCreationDate] = useState(moment().utc());
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const showDatePicker = useCallback(() => setDatePickerVisibility(true), []);
  const hideDatePicker = useCallback(() => setDatePickerVisibility(false), []);

  const {emissionType, emissionModelType, iconName} = route.params;
   console.log(emissionModelType);

  const handleConfirm = useCallback(
    (date) => {
      hideDatePicker();
      const now = new Date();
      const effectiveCreationDate = date;
      setCreationDate(moment(effectiveCreationDate));
    },
    [hideDatePicker]
  );



  const selectRender = (emissionModelType) => {
  switch(emissionType) {
    case 'transportType': 
      return renderTransport()
    case 'fashionType':
      return renderFashion()
    case 'foodType': 
      return renderFood()
    case 'streamingType':
      return renderStreaming()
    case 'purchaseType':
      return renderPurchase()
    case 'mealType':
      return renderMeal()
    default:
      return renderTransport()
  }
}

  const renderTransport = () => {
    if (emissionType === "transportType") {
      if (emissionModelType === "plane") {
        emissionPayload.value = 10;
      } else {
        emissionPayload.value = distance;
      }


      return (
        <Transport
          defaultValueSlider={DEFAULT_SLIDER_VALUE_TRANSPORT}
          setDistance={setDistance}
          setDurationMinutes={setDurationMinutes}
          emissionModelType={emissionModelType}
          setCo2Emission={setCo2Emission}
        />
      );
    }
    return null;
  };

  const renderFashion = () => {
    if(emissionType == "fashionType") {
      emissionPayload.value = fashionQuantity;
      emissionPayload.emissionModelType=emissionModelType;
      emissionPayload.emissionType = emissionType;
    }

    return (
      <Fashion 
        emissionModelType={emissionModelType}
        defaultValueSlider={DEFAULT_SLIDER_VALUE_FASHION}
        setQuantity={setFashionQuantity}
        setCo2Emission={setCo2Emission}
      />
    )
  }

  const renderFood = () => {
    return(
      <Food 
        emissionModelType={emissionModelType}
        defaultValueSlider={DEFAULT_SLIDER_VALUE_FOOD}
        setQuantity={setFoodQuantity}
        setCo2Emission={setCo2Emission}
      />
    )
  }

  const renderStreaming = () => {
    return(
      <Streaming 
      emissionModelType={emissionModelType}
      defaultValueSlider={DEFAULT_SLIDER_VALUE_STREAMING}
      setDurationSeconds={setDurationSeconds}
      setCo2Emission={setCo2Emission}
      />
    )
  }

  const renderPurchase = () => {
    return(
      <Purchase 
      emissionModelType={emissionModelType}
      defaultValueSlider={DEFAULT_SLIDER_VALUE_PURCHASE}
      setQuantity={setPurchaseQuantity}
      setCo2Emission={setCo2Emission}
      />
    )
  }

  const renderMeal = () => {
    return(
      <Meal 
      emissionModelType={emissionModelType}
      defaultValueSlider={DEFAULT_SLIDER_VALUE_MEAL}
      setMealQuantity={setMealQuantity}
      setCo2Emission={setCo2Emission}
      />
    )
  }

  return (
    <View style = {styles.container}>
      <View style = {styles.textContainer}>
        <Text style={styles.textPrimary}>Type</Text>
        <Text style={styles.textSecondary}>{capitalizeFirstLetter(emissionModelType)}</Text>
      </View>

      {selectRender()}

      <View style={styles.textContainer}>
        <Text style={styles.textPrimary}>Date</Text>
        <TouchableOpacity
          style = {styles.dateButton}
          onPress={showDatePicker} >
          <Text style={styles.dateButtonText}>{creationDate.format("dddd Do MMMM YYYY").toString()}</Text>
        </TouchableOpacity>
      </View>

      <DateTimePickerModal
        headerTextIOS={"date"}
        confirmTextIOS={"confirm"}
        cancelTextIOS={"cancel"}
        isVisible={isDatePickerVisible}
        mode="date"
        onConfirm={handleConfirm}
        onCancel={hideDatePicker}
      />

      <View style={styles.buttonContainer}>
        <AddEmissionsButton EmissionPayload={
          {...emissionPayload, 
            creationDate: creationDate.toISOString(),
            emissionModelType: emissionModelType,
            emissionType: emissionType,
            co2Value: co2Emission,
            id: uuidv4(),
            title: capitalizeFirstLetter(emissionModelType),
            iconName: iconName
           }
            } />
      </View>
    </View>
  )
}

function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignContent:"flex-start",
    paddingHorizontal: 10,
    backgroundColor: Colors.green10
  },
  textContainer: {
    paddingVertical: 12,
  },
  textPrimary: {
    fontSize: 20,
    fontWeight: "bold",
  },
  textSecondary: {
    fontSize:15,
  },
  buttonContainer: {
    marginTop: 15
  },
  dateButton: {
    width: 200
  },
  dateButtonText: {
    color: "green",
    fontWeight: 'bold'
  }
})

export default CreateEmissionScreen