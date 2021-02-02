import React from 'react';
import {View, Text, Dimensions, ScrollView} from 'react-native';
import {LineChart} from 'react-native-chart-kit';
import {screenStyles, textStyles} from '../styles';
import Pie from 'react-native-pie';

export default function HomeScreen() {
  return (
    <View style={screenStyles.container}>
      <Text style={textStyles.title}>Pomodoro</Text>
      <Text style={textStyles.subTitle}>This is a technique</Text>
      <ScrollView>
        <Text style={textStyles.paragraph}>
          Deserunt culpa adipisicing occaecat aute consectetur consequat dolore
          minim esse consectetur occaecat aliquip sunt sit. Ex deserunt
          consectetur dolore adipisicing ex veniam amet. Duis consequat elit
          commodo pariatur proident sunt dolor cupidatat. Irure voluptate
          adipisicing nisi est aliquip incididunt ipsum esse sunt pariatur sint
          minim.
        </Text>
        <View style={screenStyles.center}>
          <LineChart
            data={{
              labels: ['January', 'February', 'March', 'April', 'May', 'June'],
              datasets: [
                {
                  data: [
                    Math.random() * 100,
                    Math.random() * 100,
                    Math.random() * 100,
                    Math.random() * 100,
                    Math.random() * 100,
                    Math.random() * 100,
                  ],
                },
              ],
            }}
            width={Dimensions.get('window').width - 30} // from react-native
            height={220}
            yAxisLabel="$"
            yAxisSuffix="k"
            yAxisInterval={1} // optional, defaults to 1
            chartConfig={{
              backgroundColor: '#e26a00',
              backgroundGradientFrom: '#fb8c00',
              backgroundGradientTo: '#ffa726',
              decimalPlaces: 2, // optional, defaults to 2dp
              color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
              labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
              style: {
                borderRadius: 16,
              },
              propsForDots: {
                r: '6',
                strokeWidth: '2',
                stroke: '#ffa726',
              },
            }}
            bezier
            style={{
              marginVertical: 8,
              borderRadius: 16,
            }}
          />
          <Pie
            radius={80}
            innerRadius={50}
            sections={[
              {
                percentage: 10,
                color: '#C70039',
              },
              {
                percentage: 20,
                color: '#44CD40',
              },
              {
                percentage: 30,
                color: '#404FCD',
              },
              {
                percentage: 40,
                color: '#EBD22F',
              },
            ]}
            dividerSize={1}
            strokeCap={'round'}
          />
        </View>
      </ScrollView>
    </View>
  );
}
