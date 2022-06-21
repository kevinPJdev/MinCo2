import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ScrollView } from 'react-native';

import TitleTextH1 from '../components/TitleText/TitleTextH1';
import ListItem from '../components/ListItem/ListItem';

function AddEmissionsScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <TitleTextH1 text="Add Emissions"/>
      </View>
      <View style={{flex:1, flexDirection:"column", justifyContent:"space-between"}}>
        <ScrollView>
          <ListItem title="Food" onPress={()=> {console.log("Food Pressed")}}/>
          <ListItem title="Transport" onPress={()=> {console.log("Transport Pressed")}}/>
          <ListItem title="Fashion" onPress={()=> {console.log("Transport Pressed")}}/>
          <ListItem title="Meals" onPress={()=> {console.log("Transport Pressed")}}/>
          <ListItem title="Streaming" onPress={()=> {console.log("Transport Pressed")}}/>
          <ListItem title="Electricity" onPress={()=> {console.log("Transport Pressed")}}/>
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