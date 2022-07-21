import { StyleSheet, Text, View, FlatList } from 'react-native'
import { useNavigation } from "@react-navigation/native";
import React from 'react'
import { useSelector } from 'react-redux';

import { emissions as emissionsDucks } from '../ducks/emissions/emissionsSlice';
import { EmissionListItem } from '../components/EmissionListItem/EmissionListItem';
import Colors from '../style/colors/Colors';

const emissions = [
  {
    id: "f7ecaeb4-0cb2-4ef3-879a-2b840efe844d",
    co2Value: 53,
    creationDate: "2022-07-21T21:33:25.307Z",  
    emissionModelType: "car",
    emissionType: "transportType",
    title: "Car",
    value: 150000,
    iconName:"md-car"
    
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    co2Value: 53,
    creationDate: "2022-07-21T21:33:25.307Z",  
    emissionModelType: "car",
    emissionType: "transportType",
    title: "Car",
    value: 150000,
    iconName:"md-car"
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    co2Value: 53,
    creationDate: "2022-07-21T21:33:25.307Z",  
    emissionModelType: "car",
    emissionType: "transportType",
    title: "Car",
    value: 150000,
    iconName:"laptop"
  },
];


const Item = ({ title }) => (
  <View style={styles.item}>
    <Text style={styles.title}>{title}</Text>
  </View>
);

const EmissionListScreen = () => {
  const navigation = useNavigation();
  console.log("Look from here!")
  const emissions1 = useSelector(state => state.emissions);
  console.log(emissions1);

  const renderListFooter = () => <View style={styles.separator} />;
  

  return (
    <View style={styles.container}>
      <Text>July Emissions</Text>
      <FlatList
        data={emissions1}
        style={styles.container}
        keyExtractor={({id }) => id}
        renderItem={({
          item: { id, creationDate, title, value, co2Value, iconName, emissionModelType },
        }) => (
          <EmissionListItem
            id={id}
            value={value}
            onPress={() => console.log("Pressed!!")}
            title={title}
            co2Value={co2Value}
            iconName={iconName}
            emissionModelType={emissionModelType}
            creationDate={creationDate}
          />
        )}
      />
    </View>
  )
}

export default EmissionListScreen

const styles = StyleSheet.create({
  container: {
    flex:1,
    padding:10,
    backgroundColor: Colors.green20
  },
  separator: {
    height: 100,
  },
  item: {
    backgroundColor: '#f9c2ff',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 32,
  },
})