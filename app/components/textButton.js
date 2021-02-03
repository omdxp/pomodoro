import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {textStyles} from '../styles';

export default function TextButton({text, onPress, disabled, style}) {
  return (
    <TouchableOpacity onPress={onPress} disabled={disabled}>
      <Text style={[textStyles.textButton, style]}>{text}</Text>
    </TouchableOpacity>
  );
}
