import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const LearnScreen = () => {
  return (
    <View style={styles.container}>
      <Text>LearnScreen</Text>
    </View>
  )
}

export default LearnScreen

const styles = StyleSheet.create({
  container: {
    flex:1,
    justifyContent:"center",
    alignItems:"center"
  }
})