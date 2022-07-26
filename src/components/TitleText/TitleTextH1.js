import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function TitleTextH1({text}) {
  return (
    <View>
      <Text style={styles.textContainer}>{text}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  textContainer: {
    textAlign:"center",
    fontWeight:"bold",
    fontSize:35,
    }
})