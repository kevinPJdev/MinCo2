import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet, ActivityIndicator } from 'react-native';
import { is, path, pathOr, both, complement, equals } from "ramda";
import { BarCodeScanner } from 'expo-barcode-scanner';

import Button from '../components/Button/Button';
import { Ionicons } from '@expo/vector-icons';
import { Colors } from '../style/colors';

const getCO2eq = pathOr("", ["ecoscore_data", "agribalyse", "co2_total"]);
const getName = path(["product_name"]);
const getNutriscoreGrade = pathOr("", ["nutriscore_grade"]);
const getNovaGroup = pathOr(0, ["nova_group"]);
const getEcoScore = pathOr("", ["ecoscore_grade"]);

const BarCodeScanScreen = () => {
  const [hasPermission, setHasPermission] = useState(null);
  const [scanned, setScanned] = useState(false);
  const [isFetchingData, setIsFetchingData] = useState(false);
  const [hasCarbonData, setHasCarbonData] = useState(true);
  const [error, setError] = useState(false);
  const [nutriscoreGrade, setNutriscoreGrade] = useState("");
  const [novaGroup, setNovaGroup] = useState(0);
  const [ecoScore, setEcoScore] = useState("");

  useEffect(() => {
    (async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync();
      setHasPermission(status === 'granted');
    })();
  }, []);

  
  const onPressTryAgain = () => {
    setError(false);
    setIsFetchingData(false);
    setHasCarbonData(true);
  };

  const handleBarCodeScanned = ({ type, data }) => {
    setScanned(true);
    setError(false);
    setIsFetchingData(true);

    //alert(`Bar code with type ${type} and data ${data} has been scanned!`);

    const headers = new Headers({
      Accept: "application/json",
      "Content-Type": "application/json",
    });

    fetch('https://world.openfoodfacts.org/api/v0/product/${data}', {
      method: 'GET',
      headers: headers,
    })
      .then((response)=>response.json())
      .then(({ product, status_verbose }) => {
        if(status_verbose === 'product found') {
          const productName = getName(product);
          const productCarbonFootprint = getCO2eq(product);
          //Issue exists here
          if (productCarbonFootprint) {
            return (
              <View style={styles.container}>
                <View style={styles.centeredContainer}>
                  <Text style={styles.textPrimary}><Ionicons name={"warning"} size={30}/>Product Found!</Text>
        
                  <Text style={styles.textSecondary}>Hello!</Text>
                </View>
                <View style={styles.scanAgain}>
                  <Button
                    title={"Try Again"}
                    onPress={onPressTryAgain}
                  />
                </View>
              </View>
            );
            
          } else {
            setScanned(false);
            setHasCarbonData(false);
            setNutriscoreGrade(nutriscoreGrade);
            setNovaGroup(novaGroup);
            setEcoScore(ecoScore);
          }
        } else {
            setHasCarbonData(false);
            setScanned(false);
        }

        setIsFetchingData(false);
        setScanned(false);
      })
      .catch(() => {
        setIsFetchingData(false);
        setError(true);
        setScanned(false);
      })
  };

  if (hasPermission === null) {
    return <Text>Requesting for camera permission</Text>;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }

  if (error) {
    return (
      <View style={styles.container}>
        <View style={styles.centeredContainer}>
          <Text style={styles.textPrimary}><Ionicons name={"warning"} size={30}/> Scan Error</Text>
          <Text style={styles.textSecondary}>There was an error trying to scan.</Text>
        </View>
        <View style={styles.scanAgain}>
          <Button
            title={"Try Again"}
            onPress={onPressTryAgain}
          />
        </View>
      </View>
    );
  }


  if (!hasCarbonData) {
    return (
      <View style={styles.container}>
        <View style={styles.centeredContainer}>
          <Text style={styles.textPrimary}><Ionicons name={"warning"} size={30}/>No Carbon Data Found</Text>
          <Text style={styles.textSecondary}>Unfortunately, Open Food Fact has no carbon footprint data on this product. Try another one!</Text>
        </View>
        <View style={styles.scanAgain}>
          <Button
            title={"Try Again"}
            onPress={onPressTryAgain}
          />
        </View>
      </View>
    );
  }

  if (isFetchingData) {
    return (
      <View style={[styles.container, styles.centeredContainer]}>
        <ActivityIndicator style={styles.loading} size="large" color={"green"} />
      </View>
    );
  } else {
    return (
      <View style={styles.container}>
        <BarCodeScanner
          onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
          style={StyleSheet.absoluteFillObject}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    backgroundColor: Colors.green20,
  },
  loading: {
    alignSelf: "center",
    paddingBottom: 20,
  },
  centeredContainer: {
    justifyContent: "center",
    alignItems: "center",
  },
  scanAgain: {
    marginTop: 20,
    marginBottom: 20,
    marginHorizontal:20
  },
  textPrimary: {
    fontSize: 30,
    fontWeight: "bold",
  },
  textSecondary: {
    fontSize:15,
  },
});


export default BarCodeScanScreen;