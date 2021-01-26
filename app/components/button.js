import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import {buttonStyles, textStyles} from '../styles';

export default function Button({title, onPress, disabled, style}) {
  return (
    <TouchableOpacity
      onPress={onPress}
      disabled={disabled}
      style={buttonStyles.container}>
      <View style={style}>
        <Text style={textStyles.button}>{title}</Text>
      </View>
    </TouchableOpacity>
  );
}
