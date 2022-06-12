import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

function AddEmissionsScreen() {
  return (
    <View style={styles.container}>
      <View>
        <Text>Add Emssions</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default AddEmissionsScreen;