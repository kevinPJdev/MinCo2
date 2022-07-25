import { StyleSheet, Text, View, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import ListItem from '../components/ListItem/ListItem';
import { Colors } from '../style/colors';


function AddEmissionsScreen() {
  
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <View style={styles.subContainer}>
      <ScrollView style={styles.scrollContainer}>
          <ListItem 
            title="Food" 
            onPress={()=> navigation.navigate('Select Sub Category', {
              emissionType: "foodType",iconName:"fast-food"
            })} 
            iconName="fast-food" 
          />
          <ListItem 
            title="Transport" 
            onPress={()=> navigation.navigate('Select Sub Category', {
              emissionType: 'transportType', iconName:"md-car"
            })} 
            iconName="md-car"
          />
          <ListItem 
            title="Fashion" 
            onPress={()=> navigation.navigate('Select Sub Category', {
              emissionType: 'fashionType', iconName:"shirt"
            })}  
            iconName="shirt"
          />
          <ListItem 
            title="Streaming" 
            onPress={()=> navigation.navigate('Select Sub Category', {
              emissionType: 'streamingType', iconName:"tv-sharp"
            })} 
            iconName="tv-sharp"
          />
          <ListItem 
            title="Purchase" 
            onPress={()=> navigation.navigate('Select Sub Category', {
              emissionType: 'purchaseType', iconName:"cash"
            })} 
            iconName="cash"
          />
            <ListItem 
            title="Meal" 
            onPress={()=> navigation.navigate('Select Sub Category', {
              emissionType: 'mealType', iconName:"md-restaurant"
            })} 
            iconName="md-restaurant"
          />
        </ScrollView>
      </View>
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor: Colors.green20,
    flexDirection:"column",
    paddingTop: 20

  },
<<<<<<< HEAD
  subContainer:{
    flex:1, 
    flexDirection:"column", 
    justifyContent:"space-between"
  },
  headerContainer: {
    backgroundColor: '#000',
    borderBottomColor:"#000",
    borderBottomWidth:3,
    marginVertical:10,
    borderRadius:5
  },
=======
>>>>>>> main
  scrollContainer: {
    padding: 10,
  }
});

export default AddEmissionsScreen;