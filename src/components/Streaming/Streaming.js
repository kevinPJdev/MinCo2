import { View, Text, StyleSheet } from 'react-native'
import React, { useState } from 'react'
import Slider from "@react-native-community/slider";
import { streaming, getInternetUsageCarbonImpact } from 'carbon-footprint';

import convertMinutesToHoursAnMinutes from '../../utils/time.js';

const MIN_SLIDER_VALUE = 15 * 60;
const MAX_SLIDER_VALUE = 10 * 60 * 60;

function roundToTwo(num) {
  return +(Math.round(num + "e+2")  + "e-2");
}

const Streaming = ({ emissionModelType, defaultValueSlider, setDurationSeconds }) => {
  const [sliderValue, setSliderValue] = useState(defaultValueSlider);

  const onSliderValueChange = (value) => {
    const val = Math.round(value);
    setSliderValue(val);
    setDurationSeconds(val);
  };

  const { hours, minutes } = convertMinutesToHoursAnMinutes(sliderValue / 60);

  const carbonValue = getInternetUsageCarbonImpact(
    sliderValue,
    streaming[emissionModelType] * sliderValue,
    "world"
  );

  console.log(carbonValue);

  const renderTotal = () => {
    return (
      <View >
        <Text style={styles.textPrimary}>Duration</Text>
        <Text style={styles.textSecondary}>{hours + " hour(s) and " + minutes} 
          <Text> minute(s)</Text>
        </Text>
      </View>
    )
  }

  return (
    <>
      {renderTotal()}
      <Slider
        style={{width: 300, height: 40}}
        minimumTrackTintColor="#3AFC1E"
        maximumTrackTintColor="#DFDFDE"
        maximumValue= {MAX_SLIDER_VALUE}
        minimumValue={MIN_SLIDER_VALUE}
        value={sliderValue}
        step={1}
        onSlidingComplete={onSliderValueChange}
      />

<Text style={styles.textPrimary}>Total</Text>
    
      <View>
      <Text style={styles.textSecondary}>
        <Text style={styles.numberHighlight}>{roundToTwo(carbonValue > 1 ? carbonValue : carbonValue * 1000)}</Text>
          <Text>{carbonValue > 1 ? " kgCO2eq" : " gCO2eq"}</Text>
        </Text>
      </View>
    </>
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

export default Streaming