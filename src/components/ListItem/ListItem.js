import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import React from "react";

import { Colors } from "../../style/colors";

const CIRCLE_WIDTH = 34;

const ListItem = ({ title, onPress, iconName = "md-car" }) => {
  return (
    <TouchableOpacity
      activeOpacity={0.8}
      onPress={onPress}
      style={styles.container}
    >
      <View style={styles.iconContainer}>
        <Ionicons name={iconName} size={20} color={Colors.white} />
      </View>
      <Text style={styles.appButtonText}>{title}</Text>
      <View style={styles.chevronContainer}>
        <Ionicons
          name={"ios-chevron-forward-outline"}
          size={20}
          color={Colors.white}
        />
      </View>
    </TouchableOpacity>
  );
};

export default ListItem;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    borderColor: Colors.green10,
    borderWidth: 3,
    backgroundColor: Colors.green40,
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 10,
    marginBottom: 10,
    alignItems: "baseline",
  },
  appButtonText: {
    fontSize: 20,
    color: "#FFF",
  },
  iconContainer: {
    paddingRight: 10,
  },
  chevronContainer: {
    marginLeft: "auto",
  },
});
