import { View, Text } from 'react-native'
import React, { useState } from 'react'
import Slider from "@react-native-community/slider";

import { fashion } from 'carbon-footprint';

const MIN_SLIDER_VALUE = 1;
const MAX_SLIDER_VALUE = 10;

const Fashion = ({ emissionModelType, defaultValueSlider, setQuantity }) => {
  const [sliderValue, setSliderValue] = useState(defaultValueSlider);

  const onSliderValueChange = (value) => {
    const val = Math.round(value);
    setSliderValue(val);
    setQuantity(val);
  };


  return (
    <>
      <View>
        <Text>Choose Quantity</Text>
      </View>
      <Slider
        style={{width: 300, height: 40}}
        minimumTrackTintColor="#3AFC1E"
        maximumTrackTintColor="#DFDFDE"
        maximumValue= {MAX_SLIDER_VALUE}
        minimumValue={MIN_SLIDER_VALUE}
        value={sliderValue}
        onSlidingComplete={onSliderValueChange}
      />
      <View>
        <Text>Total</Text>
        <Text>{sliderValue * fashion[emissionModelType]}</Text>
        <Text>kgCO2eq</Text>
      </View>
    </>
  )
}

export default Fashion