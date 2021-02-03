import React from 'react';
import {View, Text, TextInput} from 'react-native';

// import components
import Button from '../../components/button';

// import styles
import {screenStyles, textStyles} from '../../styles';

// import functions
import {signupHandler} from './SignUpFunctions';

export default function SignUp() {
  return (
    <View style={screenStyles.container}>
      <Text style={textStyles.title}>Login</Text>
      <View style={screenStyles.row}>
        <Text style={textStyles.paragraph}>Username</Text>
        <TextInput placeholder={'Enter your username here'} />
      </View>
      <View style={screenStyles.row}>
        <Text style={textStyles.paragraph}>Password</Text>
        <TextInput placeholder={'Enter your password here'} />
      </View>
      <Button title={'Sign up'} onPress={signupHandler} />
    </View>
  );
}
