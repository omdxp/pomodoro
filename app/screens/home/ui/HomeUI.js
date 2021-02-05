import React from 'react';
import {View, Text, Dimensions, ScrollView} from 'react-native';
import {homeStyles, screenStyles, textStyles} from '../../../styles';
import {Colors} from '../../../styles/colors';

export default function Home() {
  return (
    <View style={homeStyles.container}>
      <View style={homeStyles.head}>
        <Text style={textStyles.title}>Pomodoro</Text>
        <Text style={textStyles.subTitle}>This is a technique</Text>
      </View>
      <View style={homeStyles.body}>
        <ScrollView>
          <Text style={homeStyles.bodyText}>
            Cupidatat et dolor dolore fugiat pariatur cillum veniam occaecat
            consectetur non laborum consequat aliquip. Ullamco tempor sint ea
            cupidatat ex ea est cupidatat ut labore magna voluptate in. Qui
            dolore laboris aliqua proident deserunt excepteur aliqua dolor
            fugiat aute. Incididunt sunt consectetur elit cillum culpa enim in
            ut esse tempor anim ea. Magna qui adipisicing cupidatat cupidatat
            dolor laborum occaecat elit proident amet ea sit consequat mollit.
            Ea officia irure consectetur eu culpa. Reprehenderit laborum cillum
            in mollit proident et Lorem culpa aliqua dolore amet.
          </Text>
        </ScrollView>
      </View>
    </View>
  );
}
