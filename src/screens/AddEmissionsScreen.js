import { StyleSheet, Text, View, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import ListItem from '../components/ListItem/ListItem';


function AddEmissionsScreen() {
  
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <View style={{flex:1, flexDirection:"column", justifyContent:"space-between"}}>
      <ScrollView>
          <ListItem title="Food" onPress={()=> {console.log("Food Pressed")}} iconName="fast-food" />
          <ListItem 
            title="Transport" 
            onPress={()=> navigation.navigate('Select Sub Category', {
              emissionType: 'transportType'
            })} 
            iconName="md-car"
          />
          <ListItem 
            title="Fashion" 
            onPress={()=> navigation.navigate('Select Sub Category', {
              emissionType: 'fashionType'
            })}  
            iconName="shirt"
          />
          <ListItem title="Streaming" onPress={()=> {console.log("Transport Pressed")}} iconName="tv-sharp"/>
          <ListItem title="Electricity" onPress={()=> {console.log("Transport Pressed")}} iconName="thunderstorm"/>
        </ScrollView>
      </View>
    </View>
  );
}


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

export default AddEmissionsScreen;