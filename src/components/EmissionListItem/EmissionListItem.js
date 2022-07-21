import React from "react";
import { View, TouchableOpacity, StyleSheet, Text } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { FormattedNumber } from "react-native-globalize";

import {Colors} from '../../style/colors';

const EmissionListItem = ({
  id,
  iconName,
  title,
  value,
  co2Value,
  onPress,
  emissionModelType,
  creationDate
}) => (
  <TouchableOpacity onPress={onPress} style={styles.container}>
    <View style={styles.iconContainer}>
      <Ionicons
        name={iconName}
        size={22}
        style={styles.icon}
        color={Colors.white}
      />
    </View>
    <View style={styles.textContainer}>
      <Text style={styles.textPrimary}>{title}</Text>
      <View style={styles.detailsContainer}>
        <Text style={styles.textSecondary}> 
          <Text style={styles.co2Value}>{co2Value}</Text> kgCO2
        </Text>
      </View>
    </View>
    <Ionicons
      name={"ios-chevron-forward-outline"}
      size={18}
      style={styles.icon}
      color={Colors.white}
    />
  </TouchableOpacity>
);

const iconBackground = {
  position: "absolute",
  borderRadius: 11,
  width: 100,
  height: 100,
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginVertical: 3,
    backgroundColor: "#355F56",
    borderRadius: 15
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
    marginLeft: 5,
    marginRight: 0,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: Colors.green40,
    width:40,
    height:40,
    borderRadius: 20
  },
  detailsContainer: {
    marginVertical: 2,
    flexDirection: "row",
  },
  textPrimary: {
    fontSize: 18,
    fontWeight: '500',
    color: Colors.white
  },
  textSecondary: {
    color: Colors.white
  },
  co2Value: {
    color: Colors.white,
    fontSize: 15,
    fontWeight: "800"

  }
});

export { EmissionListItem };