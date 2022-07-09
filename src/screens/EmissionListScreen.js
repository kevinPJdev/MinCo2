import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useSelector } from 'react-redux';

const EmissionListScreen = () => {
  const emissionSlice = useSelector(state => state.emissions);
  emissionSlice.map((em) => {
    console.log(em);
  })

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