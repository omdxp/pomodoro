import React from 'react';
import {View, Text, TextInput} from 'react-native';
import {useNavigation} from '@react-navigation/native';

// import components
import Button from '../../components/button';
import {SizedBox} from 'sizedbox';

// import styles
import {screenStyles, textInputStyles, textStyles} from '../../styles';

// import functions
import {signupHandler} from './SignUpFunctions';
import TextButton from '../../components/textButton';

export default function SignUp() {
  const navigation = useNavigation();
  return (
    <View style={screenStyles.container}>
      <Text style={textStyles.title}>Sign Up</Text>
      <View style={screenStyles.center}>
        <View style={screenStyles.row}>
          <Text style={textStyles.paragraph}>Username</Text>
          <TextInput
            style={textInputStyles.container}
            placeholder={'Enter your username here'}
          />
        </View>
        <SizedBox vertical={10} />
        <View style={screenStyles.row}>
          <Text style={textStyles.paragraph}>Password</Text>
          <TextInput
            style={textInputStyles.container}
            placeholder={'Enter your password here'}
          />
        </View>
        <SizedBox vertical={10} />
        <Button title={'Sign up'} onPress={signupHandler} />
        <SizedBox vertical={10} />
        <View style={screenStyles.row}>
          <Text style={textStyles.paragraph}>Already have an account?</Text>
          <TextButton
            text={'Log in here'}
            onPress={() => {
              navigation.navigate('Login');
            }}
          />
        </View>
      </View>
    </View>
  );
}
