import React from 'react';
import {Text, View} from 'react-native';
import Button from '../components/button';
import {textStyles} from '../styles';
import {SizedBox} from 'sizedbox';

export default function HomeScreen() {
  return (
    <View>
      <Text style={textStyles.title}>Hello...</Text>
      <SizedBox vertical={50} />
      {/* <Button title={'Start'} onPress={() => alert('What?')} /> */}
      <Text>Hi</Text>
      <View style={{flexDirection: 'row'}}>
        <Text>Omar</Text>
        <SizedBox horizontal={200} />
        <Text>Yasser</Text>
      </View>
    </View>
  );
}
