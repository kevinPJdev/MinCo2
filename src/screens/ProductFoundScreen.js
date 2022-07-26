import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

import Button from '../components/Button/Button';
import { Colors } from '../style/colors';

const ProductFoundScreen = ({route, navigation}) => {

  function roundToTwo(num) {
    return +(Math.round(num + "e+2")  + "e-2");
  }

  const {productName, productCarbonFootprint} = route.params;

  return (
    <View style={styles.container}>
        <View style={styles.centeredContainer}>
          <Text style={styles.textPrimary}>Product: {productName}</Text>
          <Text style={styles.textSecondary}>This product contributed to {roundToTwo(productCarbonFootprint)} kgCO2 atmospheric emissions</Text>
        </View>
        <View style={styles.scanAgain}>
          <Button
            title={"Scan Again"}
            onPress={() => {navigation.navigate("Barcode Scan")}}
          />
        </View>
      </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    backgroundColor: Colors.green20,
    padding: 20
  },
  centeredContainer: {
    justifyContent: "center",
    alignItems: "center",
  },
  textPrimary: {
    fontSize: 30,
    fontWeight: "bold",
  },
  textSecondary: {
    fontSize:15,
  },
  scanAgain: {
    marginTop: 20,
    marginBottom: 20,
    marginHorizontal:20
  },
});


export default ProductFoundScreen