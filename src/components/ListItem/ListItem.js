import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import { Ionicons } from '@expo/vector-icons';
import React from 'react'

import { Layout } from "../../constant";
import { Colors } from "../../style/colors";

const CIRCLE_WIDTH = 34;

const ListItem = ({title, onPress, iconName = "md-car"}) => {
  return (
    <TouchableOpacity 
      activeOpacity={0.8} 
      onPress={onPress}
      style={styles.container}>
      <View style={styles.iconContainer}>
        <Ionicons name={iconName} size={20} color={Colors.green50} />
      </View>
      <Text style={styles.appButtonText}>{title}</Text>
      <Ionicons name={"ios-chevron-forward-outline"} size={20} color={Colors.green50} />
    </TouchableOpacity>
  )
}

export default ListItem

const styles = StyleSheet.create({
  container: {
    flex:1,
    flexDirection: "row",
    justifyContent:"space-between",
    borderColor: "#6fdb24",
    borderWidth:3,
    backgroundColor: 'rgba(12, 243, 189, 0.2)',
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal:10,
    marginBottom:10,
  },
  appButtonText: {
    fontSize: 20,
    color: "#0d0d15",
    fontWeight: "bold",
  }
})