import React, { useState } from "react";
import { View, StyleSheet, Text } from "react-native";
import Slider from "@react-native-community/slider";
import { transport, TransportType } from 'carbon-footprint';


const MIN_SLIDER_VALUE = 2;
const MAX_SLIDER_VALUE = 1000;

const MIN_SLIDER_VALUE_PLANE = 20;
const MAX_SLIDER_VALUE_PLANE = 1000;

const Transport = ({ defaultValueSlider, setDistance, setDurationMinutes, emissionModelType }) => {
  const [sliderValue, setSliderValue] = useState(defaultValueSlider / 1000);

  const onSliderValueChange = (value) => {
    const val = Math.round(value);
    setSliderValue(val);
    /* since we use meter as reference (and not kilometers), we need to multiply by 1000 */
    setDistance(val * 1000);
    setDurationMinutes(val);
  };

  const renderDistance = () => {
      
    return (
      <View >
        <Text>Distance</Text>
        <Text>{Math.round(sliderValue) + " kilometer(s)"}</Text>
      </View>
    )
  }

  return (
    <View>
      {renderDistance()}

      <Slider
        style={{width: 300, height: 40}}
        minimumTrackTintColor="#3AFC1E"
        maximumTrackTintColor="#DFDFDE"
        maximumValue={
          emissionModelType === TransportType.plane ? MAX_SLIDER_VALUE_PLANE : MAX_SLIDER_VALUE
        }
        minimumValue={
          emissionModelType === TransportType.plane ? MIN_SLIDER_VALUE_PLANE : MIN_SLIDER_VALUE
        }
        value={sliderValue}
        onSlidingComplete={onSliderValueChange}
      />
      <View>
        <Text style={styles.miniHeader}>Total</Text>
        <Text>
        <Text>{ emissionModelType === TransportType.plane ? Math.round(sliderValue * 1000 ) : Math.round(sliderValue * 1000 * transport[emissionModelType])}</Text>
          <Text>kgCO2eq</Text>
        </Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
})

export default Transport;