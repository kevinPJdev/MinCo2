import React from "react";
import { View, TouchableOpacity, StyleSheet, Text } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { FormattedNumber } from "react-native-globalize";

import { Colors } from "../../style/colors/Colors";

const EmissionListItem = ({
  name = "",
  iconName = "md-car",
  title = "",
  co2value = 0,
  onPress,
}) => (
  <TouchableOpacity onPress={onPress} style={styles.container}>
    <View style={styles.iconContainer}>
      <Ionicons
        name={iconName}
        size={22}
        style={styles.icon}
      />
    </View>
    <View style={styles.textContainer}>
      <Text style={styles.textPrimary}>{name.length ? name : title}</Text>
      <View style={styles.detailsContainer}>
        <Text>
          {co2value} kgCO2
        </Text>
      </View>
    </View>
    <Ionicons
      name={"ios-chevron-forward-outline"}
      size={18}
      style={styles.icon}
    />
  </TouchableOpacity>
);

const iconBackground = {
  position: "absolute",
  borderRadius: 25,
  width: 100,
  height: 100,
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginVertical: 6,
    backgroundColor: "yellow"
  },
  textContainer: {
    flex: 1,
    marginLeft: 50,
  },
  icon: {
    marginHorizontal: 10,
  },
  iconContainer: {
    position: "absolute",
    marginLeft: 0,
    marginRight: 0,
    justifyContent: "center",
    alignItems: "center",
  },
  detailsContainer: {
    marginVertical: 2,
    flexDirection: "row",
  },
  textPrimary: {
    fontSize: 18,
    fontWeight: 'bold'
  }
});

export { EmissionListItem };