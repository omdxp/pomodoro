import React from 'react';
import {Text, View} from 'react-native';
import Button from '../components/button';
import SizedBox from '../components/sized-box';
import {textStyles} from '../styles';

export default function HomeScreen() {
  return (
    <View>
      <Text style={textStyles.title}>Hello...</Text>
      <SizedBox vertical={10} />
      <Button title={'Start'} onPress={() => alert('What?')} />
    </View>
  );
}
