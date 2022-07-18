import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import { useRoute } from "@react-navigation/core";
import DateTimePickerModal from "react-native-modal-datetime-picker";
import { useNavigation } from "@react-navigation/native";
import moment, { Moment } from "moment";
import React, {useState, useCallback} from 'react'

import Transport from '../components/Transport/Transport';
import Fashion from '../components/Fashion/Fashion';
import AddEmissionsButton from '../components/AddEmissionsButton/AddEmissionsButton'

const DEFAULT_SLIDER_VALUE_TRANSPORT = 150 * 1000
const DEFAULT_SLIDER_VALUE_FASHION = 1;


const CreateEmissionScreen = () => {
  const route = useRoute();
  const navigation = useNavigation();

  const [emissionName, setEmissionName] = useState("");
  const [durationMinutes, setDurationMinutes] = useState(DEFAULT_SLIDER_VALUE_TRANSPORT / 1000);
  const [distance, setDistance] = useState(DEFAULT_SLIDER_VALUE_TRANSPORT);
  const [fashionQuantity, setFashionQuantity] = useState(DEFAULT_SLIDER_VALUE_FASHION);
  const [creationDate, setCreationDate] = useState(moment().utc());
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const showDatePicker = useCallback(() => setDatePickerVisibility(true), []);
  const hideDatePicker = useCallback(() => setDatePickerVisibility(false), []);

  const {emissionType, emissionModelType} = route.params;
  // console.log(emissionModelType);
  // console.log(emissionType);
  // console.log(transport["boat"]);
  // console.log(TransportType.boat);

  const handleConfirm = useCallback(
    (date) => {
      hideDatePicker();
      const now = new Date();
      const effectiveCreationDate = date;
      setCreationDate(moment(effectiveCreationDate));
    },
    [hideDatePicker]
  );

  const emissionPayload = {
    creationDate: creationDate.toISOString(),
    name: "",
    emissionType: "",
    value: 0,
    emissionModelType: "",
  };

  const selectRender = (emissionModelType) => {
  switch(emissionType) {
    case 'transportType': 
      return renderTransport()
    case 'fashionType':
      return renderFashion()
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
      emissionPayload.name = emissionName;
    }

    return (
      <Fashion 
        emissionModelType={emissionModelType}
        defaultValueSlider={DEFAULT_SLIDER_VALUE_FASHION}
        setQuantity={setFashionQuantity}
      />
    )
  }


  return (
    <View style = {styles.container}>
      <View style = {styles.textContainer}>
        <Text style={styles.textPrimary}>Type</Text>
        <Text style={styles.textSecondary}>{capitalizeFirstLetter(emissionModelType)}</Text>
      </View>

      {selectRender(emissionType)}

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
        <AddEmissionsButton EmissionPayload={emissionPayload} />
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
    paddingHorizontal: 10
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