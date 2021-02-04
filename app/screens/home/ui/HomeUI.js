import React from 'react';
import {View, Text, Dimensions, ScrollView} from 'react-native';
import {screenStyles, textStyles} from '../../../styles';

export default function Home() {
  return (
    <View style={screenStyles.container}>
      <Text style={textStyles.title}>Pomodoro</Text>
      <Text style={textStyles.subTitle}>This is a technique</Text>
    </View>
  );
}
