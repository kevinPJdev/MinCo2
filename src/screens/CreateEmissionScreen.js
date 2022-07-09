import { View, Text } from 'react-native'
import { useRoute } from "@react-navigation/core";
import { useNavigation } from "@react-navigation/native";
import moment, { Moment } from "moment";
import React, {useState} from 'react'
import { transport, TransportType } from 'carbon-footprint';

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

  const {emissionType, emissionModelType} = route.params;
  console.log(emissionModelType);
  console.log(emissionType);
  console.log(transport["boat"]);
  console.log(TransportType.boat);

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
    <View>
      {selectRender(emissionType)}
      <View>
        <AddEmissionsButton EmissionPayload={emissionPayload} />
      </View>
    </View>
  )
}

export default CreateEmissionScreen