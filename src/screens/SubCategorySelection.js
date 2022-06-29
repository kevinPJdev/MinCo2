import { StyleSheet, Text, View , ScrollView} from 'react-native'
import React from 'react'
import { useNavigation, useRoute } from "@react-navigation/native";

import { TransportType } from '../data/TransportEmissionConstants'
import ListItem from '../components/ListItem/ListItem';


const getSubCategory = (emissionType) => {
  switch(emissionType) {
    case 'transportType':
      return TransportType
    case 'fashionType':
      return TransportType
    default:
      return null;
  }
}


const SubCategorySelection = ({route, navigation}) => {
  const {emissionType} = route.params;
  const subCategories = getSubCategory("transportType");
  //console.log(subCategories);

  return (
    <View style={styles.container}>
      <ScrollView >    
        {subCategories.map((subCategory) => (
          <ListItem key={subCategory.id} title={subCategory.name} onPress={() => {console.log("Button Pressed")}} iconName={subCategory.icon} />
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