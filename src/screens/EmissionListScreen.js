import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const EmissionListScreen = () => {
  return (
    <View style={styles.container}>
      <Text>EmissionListScreen</Text>
    </View>
  )
}

export default EmissionListScreen

const styles = StyleSheet.create({
  container: {
    flex:1,
    justifyContent:"center",
    alignItems:"center"
  }
})