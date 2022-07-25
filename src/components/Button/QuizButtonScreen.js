import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React from "react";
import { Colors } from "../../style/colors";
const QuizButtonScreen = ({ onPress, title, disabled }) => {
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

export default QuizButtonScreen;

const styles = StyleSheet.create({
  appButtonContainer: {
    elevation: 8,
    backgroundColor: Colors.green40,
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 12,
    marginLeft: 140,
    marginRight: 50,
    width: "30%",
  },
  appButtonText: {
    fontSize: 13,
    color: Colors.white,
    fontWeight: "bold",
    alignSelf: "center",
    textTransform: "uppercase",
  },
});
