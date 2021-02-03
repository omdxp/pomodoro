import React from 'react';
import {View, Text, TextInput} from 'react-native';

// import components
import Button from '../../components/button';

// import styles
import {screenStyles, textInputStyles, textStyles} from '../../styles';

// import functions
import {loginHandler} from './LoginFunctions';

export default function Login() {
  return (
    <View style={screenStyles.container}>
      <Text style={textStyles.title}>Login</Text>
      <View style={screenStyles.row}>
        <Text style={textStyles.paragraph}>Username</Text>
        <TextInput
          style={textInputStyles.container}
          placeholder={'Enter your username here'}
        />
      </View>
      <View style={screenStyles.row}>
        <Text style={textStyles.paragraph}>Password</Text>
        <TextInput
          style={textInputStyles.container}
          placeholder={'Enter your password here'}
        />
      </View>
      <Button title={'Login'} onPress={loginHandler} />
    </View>
  );
}
