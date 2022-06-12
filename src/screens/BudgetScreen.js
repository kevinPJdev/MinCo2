import { Dimensions } from "react-native";
import { StyleSheet, Text, View } from 'react-native';
import {ProgressChart} from 'react-native-chart-kit';

import Button from '../components/Button/Button';

function BudgetScreen() {
  const screenWidth = Dimensions.get("window").width;

  const chartConfig = {
    
    color: (opacity = 1) => `rgba(26, 255, 146, ${opacity})`,
    strokeWidth: 2, // optional, default 3
    barPercentage: 0.5,
    useShadowColorFromDataset: false // optional
  };

  const data = {
    labels: ["Monthly goal"], // optional
    data: [1]
  };

  return (
    <View style={styles.container}>
      <View>
        <View>
          <Text>Carbon Budget</Text>
        </View>
        <ProgressChart
            data={data}
            width={screenWidth}
            height={220}
            strokeWidth={16}
            radius={32}
            chartConfig={chartConfig}
            hideLegend={false}
        />
        <View>
          <Button onPress={()=> {console.log("Pressed")}} title={"Set Monthly Budget"}/>
        </View>
        <View>
          <Button onPress={()=> {console.log("Pressed")}} title={"Take a Quiz"}/>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});

export default BudgetScreen;