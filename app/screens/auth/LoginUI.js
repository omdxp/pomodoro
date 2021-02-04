import React from 'react';
import {View, Text, TextInput, ScrollView} from 'react-native';
import {useNavigation} from '@react-navigation/native';

// import components
import Button from '../../components/button';
import {SizedBox} from 'sizedbox';

// import styles
import {screenStyles, textInputStyles, textStyles} from '../../styles';

// import functions
import {loginHandler, singupRedirectHandler} from './LoginFunctions';
import TextButton from '../../components/textButton';

export default function Login() {
  const navigation = useNavigation();
  return (
    <View style={screenStyles.container}>
      <Text style={textStyles.title}>Login</Text>
      <ScrollView>
        <View style={screenStyles.center}>
          <View style={screenStyles.column}>
            <Text style={textStyles.paragraph}>Username</Text>
            <TextInput
              style={textInputStyles.container}
              placeholder={'Enter your username here'}
            />
          </View>
          <SizedBox vertical={10} />
          <View style={screenStyles.column}>
            <Text style={textStyles.paragraph}>Password</Text>
            <TextInput
              style={textInputStyles.container}
              placeholder={'Enter your password here'}
            />
          </View>
          <SizedBox vertical={10} />
          <Button title={'Login'} onPress={loginHandler} />
          <SizedBox vertical={10} />
          <View style={screenStyles.row}>
            <Text style={textStyles.paragraph}>Don't have an account?</Text>
            <TextButton
              text={'Sign up here'}
              onPress={() => {
                navigation.navigate('SignUp');
              }}
            />
          </View>
        </View>
      </ScrollView>
    </View>
  );
}
