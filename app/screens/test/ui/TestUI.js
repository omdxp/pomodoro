import React from 'react';
import {Text, View, ScrollView, Dimensions} from 'react-native';
import {LineChart} from 'react-native-chart-kit';
import Pie from 'react-native-pie';
import {textStyles, screenStyles} from '../../../styles';
import {Colors} from '../../../styles/colors';

export default function Test() {
  return (
    <View style={screenStyles.container}>
      <Text style={textStyles.title}>Test Screen</Text>
      <Text style={textStyles.subTitle}>Only to test different stuff</Text>
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
              backgroundColor: Colors.mainColorDark,
              backgroundGradientFrom: Colors.darkGrey,
              backgroundGradientTo: Colors.mainColor,
              decimalPlaces: 2, // optional, defaults to 2dp
              color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
              labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
              style: {
                borderRadius: 16,
              },
              propsForDots: {
                r: '6',
                strokeWidth: '2',
                stroke: Colors.grey,
              },
            }}
            bezier
            style={{
              marginVertical: 8,
              borderRadius: 16,
            }}
          />
        </View>
        <Text style={textStyles.paragraph}>
          Aute duis nulla id officia ex enim esse mollit cillum tempor deserunt.
          Reprehenderit laboris anim sit officia ut ea. Nulla consequat quis
          occaecat esse cillum ut labore deserunt cillum consequat eu. Labore ex
          do mollit deserunt voluptate adipisicing qui.
        </Text>
        <View style={screenStyles.center}>
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
