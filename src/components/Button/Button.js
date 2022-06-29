import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'

import {AppModal} from '../Modal/AppModal';

const Button = ({onPress, title}) => {
  return (
    <TouchableOpacity 
      activeOpacity={0.8}
      onPress={onPress} 
      style={styles.appButtonContainer}>
      <Text style={styles.appButtonText}>{title}</Text>
    </TouchableOpacity> 
  )
}

export default Button

const styles = StyleSheet.create({
  appButtonContainer: {
    elevation: 8,
    backgroundColor: "#5D46B0",
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 12
  },
  appButtonText: {
    fontSize: 18,
    color: "#fff",
    fontWeight: "bold",
    alignSelf: "center",
    textTransform: "uppercase"
  }
});