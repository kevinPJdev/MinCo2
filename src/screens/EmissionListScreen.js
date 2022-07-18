import { StyleSheet, Text, View, FlatList } from 'react-native'
import { useNavigation } from "@react-navigation/native";
import React from 'react'
import { useSelector } from 'react-redux';

import { emissions as emissionsDucks } from '../ducks/emissions/emissionsSlice';
import { EmissionListItem } from '../components/EmissionListItem/EmissionListItem';

const emissions = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    emissionModelType: 'Train',
    name: "Train",
    title: "Train",
    co2value: "65",
    iconName:"md-car"
    
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    emissionModelType: 'Car',
    name: "Car",
    title: "Car",
    co2value: "34",
    iconName:"md-car"
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    emissionModelType: 'Medium Meat',
    name: "Medium Meat",
    title: "meat",
    co2value: "31",
    iconName:"fast-food"
  },
];


const Item = ({ title }) => (
  <View style={styles.item}>
    <Text style={styles.title}>{title}</Text>
  </View>
);

const EmissionListScreen = () => {
  const navigation = useNavigation();
  //console.log("Look from here!")
  const emissions1 = useSelector(state=>state.emissions);
  //console.log(emissions1);
  
  const renderListFooter = () => <View style={styles.separator} />;

  return (
    <>
      <Text>July Emissions</Text>
      <FlatList
        data={emissions}
        style={styles.container}
        keyExtractor={({ id }) => id}
        renderItem={({
          item: { id, name, title, co2value, iconName, emissionModelType },
        }) => (
          <EmissionListItem
            id={id}
            name={name}
            onPress={() => console.log("Pressed!!")}
            title={title}
            co2value={co2value}
            iconName={iconName}
            emissionModelType={emissionModelType}
          />
        )}
      />
    </>
  )
}

export default EmissionListScreen

const styles = StyleSheet.create({
  container: {
    flex:1,
    padding:10
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