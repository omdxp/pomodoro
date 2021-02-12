import React from 'react';
import {View, Text} from 'react-native';
import {screenStyles, textStyles} from '../../../styles';

export default function SettingsUI() {
  return (
    <View style={screenStyles.container}>
      <Text style={textStyles.title}>Settings</Text>
    </View>
  );
}
