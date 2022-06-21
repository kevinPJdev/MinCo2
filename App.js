import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';

import BottomTabNavigation from './src/navigation/BottomTabNavigation';
import { NavigationContainer } from '@react-navigation/native';
import HomeScreen from './src/screens/HomeScreen';
import BudgetScreen from './src/screens/BudgetScreen';
import AddEmissionsScreen from './src/screens/AddEmissionsScreen';

export default function App() {

  return (
    <NavigationContainer>
      <BottomTabNavigation />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
