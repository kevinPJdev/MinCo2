import React from 'react';
import { StyleSheet, Text, SafeAreaView,ScrollView ,View,TouchableOpacity} from 'react-native'

import { Octicons } from '@expo/vector-icons'; 
import { Linking } from 'react-native';
import { Colors } from '../style/colors';

const ListItem = ({title, onPress, iconName = "info"}) => {
  return (
    <TouchableOpacity 
      activeOpacity={0.8} 
      onPress={onPress}
      style={styles.container}>
        <View style={styles.optionContainer}>
          <View style={styles.iconContainer}>
            <Octicons name={iconName} size={20} color={Colors.black} />
          </View>
          <Text style={styles.appButtonText}>{title}</Text>
        </View>
    </TouchableOpacity>
  )
}
const ArticlesScreen = () => {
  return (
    <View style={styles.container}>
      <View style={{flex:1, flexDirection:"column", justifyContent:"space-between"}}>
      
    <SafeAreaView style={styles.headerContainer}>
     <ScrollView>
   <ListItem
      title="How Do Carbon Emissions Affect the Environment?"
      onPress={() => Linking.openURL('https://www.greenmatters.com/p/how-do-carbon-emissions-affect-environment')}
      />    
    <ListItem 
    title="Climate Change: Atmospheric Carbon Dioxide"
      onPress={() => Linking.openURL('https://www.climate.gov/news-features/understanding-climate/climate-change-atmospheric-carbon-dioxide')}/> 

    <ListItem  
    title="Carbon Pollution from Transportation"
      onPress={() => Linking.openURL('https://www.epa.gov/transportation-air-pollution-and-climate-change/carbon-pollution-transportation')}
    />
    <ListItem 
    title="Effects of Changing the Carbon Cycle"
      onPress={() => Linking.openURL('https://earthobservatory.nasa.gov/features/CarbonCycle/page5.php')}
     />
    <ListItem 
    title="How You Can Help Reduce Greenhouse Gas Emissions at Home"
      onPress={() => Linking.openURL('https://www.nps.gov/pore/learn/nature/climatechange_action_home.htm')}
    />
    <ListItem 
    title="The 35 Easiest Ways to Reduce Your Carbon Footprint"
      onPress={() => Linking.openURL('https://news.climate.columbia.edu/2018/12/27/35-ways-reduce-carbon-footprint/')}
        />
   
    <ListItem 
    title="How to Reduce Your Carbon Footprint at the Office"
      onPress={() => Linking.openURL('https://oceanfdn.org/how-to-reduce-your-carbon-footprint-at-the-office/')}
      />  
 
    <ListItem 
    title="The ultimate guide to reducing carbon footprint for businesses"
      onPress={() => Linking.openURL('https://www.travelperk.com/en-ca/guides/ways-businesses-can-reduce-carbon-footprint/how-to-reduce-office-carbon-footprint/')}
      />
    <ListItem 
    title="Reducing Industrial Emissions"
      onPress={() => Linking.openURL('https://www.c2es.org/content/regulating-industrial-sector-carbon-emissions/#:~:text=There%20are%20many%20ways%20to,use%20and%20recycling%20of%20materials.')}
      />
    <ListItem 
    title="8 ways manufacturers can lower their carbon footprint"
      onPress={() => Linking.openURL('https://www.winman.com/blog/8-ways-manufacturers-can-lower-their-carbon-footprint')}/>
    </ScrollView>
    </SafeAreaView>
    </View>
  </View>
  )
}

export default ArticlesScreen

// const styles = StyleSheet.create({
//   headerContainer: {
//     flex:1,
//     backgroundColor: Colors.green20,
//     flexDirection:"column",
//     paddingTop: Platform.OS==='android' ? StatusBar.currentHeight : 0,
//     borderRadius:5,
//   },
//   mainText: {
//     backgroundColor: '#000',
//     borderBottomColor:"#fff",
//     color:"#fff",
//     borderBottomWidth:3,
//     marginVertical:10,
//     borderRadius:5,
//     padding: 10, 
//     justifyContent:"space-between",
//   },
//   container: {
//     flex:1,
//     backgroundColor: Colors.green20,
//     flexDirection:"column",
//     paddingTop: 20,
//     fontSize: 30,

//   },
// });

const styles = StyleSheet.create({
  container: {
    flex:1,
    flexDirection: "row",
    borderColor: "#000",
    borderWidth:3,
    backgroundColor: Colors.green20,
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal:10,
    marginBottom:20,
    alignItems: 'baseline'
  },
  appButtonText: {

    fontSize: 17,
    fontWeight: "bold",
    color: "#000",
    alignSelf: 'flex-start',
    paddingHorizontal: 10
  },
  iconContainer: {
    paddingRight: 0
  },
  optionContainer: {
    flex:1,
    flexDirection: "row",
  }
})