import React, { useState } from "react";
import { View, StyleSheet, Text } from "react-native";
import Slider from "@react-native-community/slider";
import { transport, TransportType } from 'carbon-footprint';
import { useEffect } from "react";


const MIN_SLIDER_VALUE = 2;
const MAX_SLIDER_VALUE = 1000;

const MIN_SLIDER_VALUE_PLANE = 20;
const MAX_SLIDER_VALUE_PLANE = 1000;

const Transport = ({ defaultValueSlider, setDistance, setDurationMinutes, emissionModelType, setCo2Emission }) => {
  const [sliderValue, setSliderValue] = useState(defaultValueSlider / 1000);

  const onSliderValueChange = (value) => {
    const val = Math.round(value);
    setSliderValue(val);
    setCo2Emission(Math.round(val * 1000 * transport[emissionModelType]));
  };

  useEffect(()=> {
    setCo2Emission(Math.round(sliderValue * 1000 * transport[emissionModelType]));
  },[]);

  const renderDistance = () => {
      
    return (
      <View >
        <Text style={styles.textPrimary}>Distance</Text>
        <Text style={styles.textSecondary}>{Math.round(sliderValue)} 
          <Text> kilometer(s)</Text>
        </Text>
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
        <Text style={styles.textPrimary}>Total</Text>
        <Text style={styles.textSecondary}>
        <Text style={styles.numberHighlight}>{ emissionModelType === TransportType.plane ? Math.round(sliderValue * 1000 ) : Math.round(sliderValue * 1000 * transport[emissionModelType])}</Text>
          <Text> kgCO2eq</Text>
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
  },
  textContainer: {
    paddingVertical: 12
  },
  textPrimary: {
    fontSize: 20,
    fontWeight: "bold",
  },
  textSecondary: {
    fontSize:15,
  },
  numberHighlight: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'green'
  }
})

export default Transport;