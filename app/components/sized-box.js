import React from 'react';
import {View} from 'react-native';
import {screenStyles} from '../styles';

export default function SizedBox({vertical, horizontal}) {
  return (
    vertical ?? <View style={{marginVertical: vertical}} />,
    horizontal ?? <View style={{marginHorizontal: horizontal}} />
  );
}
