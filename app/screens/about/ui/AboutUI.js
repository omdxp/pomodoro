import React from 'react';
import {View, Text} from 'react-native';
import {screenStyles, textStyles} from '../../../styles';

export default function AboutUI() {
  return (
    <View style={screenStyles.container}>
      <Text style={textStyles.title}>About</Text>
      <Text style={textStyles.paragraph}>
        Ea id dolor mollit commodo pariatur voluptate officia et eiusmod est do
        in. Dolor aute labore et et amet ex irure cupidatat commodo id. Aliqua
        non ut mollit Lorem aute reprehenderit do occaecat voluptate commodo
        exercitation eiusmod eiusmod ad. Adipisicing qui quis ex nulla sit
        laborum incididunt et pariatur quis. Do in veniam ut fugiat ipsum.
      </Text>
    </View>
  );
}
