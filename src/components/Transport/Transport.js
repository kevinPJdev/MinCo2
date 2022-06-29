import React, { useState } from "react";
import { View } from "react-native";
import Slider from "@react-native-community/slider";

import { transportConstant, TransportType } from "../../data/TransportEmissionConstants";

const Transport = ({ defaultValueSlider, setDistance, setDurationMinutes }) => {
  const [sliderValue, setSliderValue] = useState(defaultValueSlider / 1000);

  const onSliderValueChange = (value) => {
    const val = Math.round(value);
    setSliderValue(val);
    /* since we use meter as reference (and not kilometers), we need to multiply by 1000 */
    setDistance(val * 1000);
    setDurationMinutes(val);
  };

  

}