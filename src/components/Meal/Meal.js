import { View, Text, StyleSheet } from 'react-native'
import React, { useState, useEffect } from 'react'
import Slider from "@react-native-community/slider";

import { meal } from 'carbon-footprint';

const MIN_SLIDER_VALUE = 1;
const MAX_SLIDER_VALUE = 10;

const Meal = ({ emissionModelType, defaultValueSlider, setMealQuantity, setCo2Emission }) => {
  const [sliderValue, setSliderValue] = useState(defaultValueSlider);

  const onSliderValueChange = (value) => {
    const val = Math.round(value);
    setSliderValue(val);
    setMealQuantity(val);
    setCo2Emission(Math.round(val * meal[emissionModelType]));
  };

  useEffect(()=> {
    setCo2Emission(Math.round(sliderValue * meal[emissionModelType]));
  },[]);

  const renderTotal = () => {
    return (
      <View >
        <Text style={styles.textPrimary}>Quantity</Text>
        <Text style={styles.textSecondary}>{Math.round(sliderValue)} 
          <Text> item(s)</Text>
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
        <Text style={styles.numberHighlight}>{Math.round(sliderValue * meal[emissionModelType])}</Text>
          <Text> kgCO2eq</Text>
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

export default Meal