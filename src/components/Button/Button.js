import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React from "react";

import { Colors } from "../../style/colors";

const Button = ({ onPress, title, disabled }) => {
  return (
    <TouchableOpacity
      activeOpacity={0.8}
      onPress={onPress}
      disabled={disabled}
      style={styles.appButtonContainer}
    >
      <Text style={styles.appButtonText}>{title}</Text>
    </TouchableOpacity>
  );
};

export default Button;

const styles = StyleSheet.create({
  appButtonContainer: {
    elevation: 8,
    backgroundColor: Colors.green40,
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 12,
  },
  appButtonText: {
    fontSize: 18,
    color: Colors.white,
    fontWeight: "bold",
    alignSelf: "center",
    textTransform: "uppercase",
  },
});
