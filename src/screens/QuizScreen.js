import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const QuizScreen = () => {
  return (
    <View style={styles.container}>
      <Text>QuizScreen</Text>
    </View>
  )
}

export default QuizScreen

const styles = StyleSheet.create({
  container: {
    flex:1,
    justifyContent: 'center',
    alignItems: 'center'

  }
})