import { StyleSheet, Text, View , ScrollView} from 'react-native'
import React from 'react'
import { useNavigation, useRoute } from "@react-navigation/native";

import ListItem from '../components/ListItem/ListItem';
import {transportType, fashionType, foodType, streamingType, electricityType} from '../data/TransportEmissionConstants'


const getSubCategory = (emissionType) => {
  switch(emissionType) {
    case 'transportType':
      return transportType
    case 'fashionType':
      return fashionType
    case 'foodType':
      return foodType
    case 'streamingType':
      return streamingType
    case 'electricityType':
      return electricityType
    default:
      return null;
  }
}


const SubCategorySelection = ({route, navigation}) => {
  const {emissionType} = route.params;
  const subCategories = getSubCategory(emissionType);
  //console.log(subCategories);

  return (
    <View style={styles.container}>
      <ScrollView >    
        {subCategories.map((subCategory) => (
          <ListItem 
            key={subCategory.id} 
            title={subCategory.name} 
            onPress={()=> navigation.navigate('Create Emissions', {
              emissionType: emissionType,
              emissionModelType: subCategory.value
            })}  
            iconName={subCategory.icon} />
        ))}
        
      </ScrollView>
      
    </View>
  )
}

export default SubCategorySelection

const styles = StyleSheet.create({
  container: {
    flex:1,
    borderColor:"#000",
    backgroundColor: '#fff',
    flexDirection:"column",
    marginVertical: 20

  },
  headerContainer: {
    backgroundColor: '#b5d692',
    borderBottomColor:"#000",
    borderBottomWidth:3,
    marginVertical:10,
    borderRadius:5
  }
});