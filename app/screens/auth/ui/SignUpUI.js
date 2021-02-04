import React, {useState} from 'react';
import {View, Text, TextInput} from 'react-native';
import {useNavigation} from '@react-navigation/native';

// import components
import Button from '../../../components/button';
import {SizedBox} from 'sizedbox';

// import styles
import {screenStyles, textInputStyles, textStyles} from '../../../styles';

// import functions
import {signupHandler, isPasswordsSame} from '../functions/SignUpFunctions';
import TextButton from '../../../components/textButton';
import {ScrollView} from 'react-native-gesture-handler';

export default function SignUp() {
  // text inputs
  const [fullName, setFullName] = useState('');
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const [repassword, setRepassword] = useState('');
  // booleans
  const [passwordsSame, setPasswordsSame] = useState(true);
  // use navigation
  const navigation = useNavigation();
  return (
    <View style={screenStyles.container}>
      <Text style={textStyles.title}>Sign Up</Text>
      <ScrollView>
        <View style={screenStyles.center}>
          <View style={screenStyles.column}>
            <Text style={textStyles.paragraph}>Full name</Text>
            <TextInput
              style={textInputStyles.container}
              placeholder={'Enter your full name here'}
              value={fullName}
              onChangeText={(value) => setFullName(value)}
            />
          </View>
          <SizedBox vertical={10} />
          <View style={screenStyles.column}>
            <Text style={textStyles.paragraph}>Username</Text>
            <TextInput
              style={textInputStyles.container}
              placeholder={'Enter your username here'}
              value={userName}
              onChangeText={(value) => setUserName(value)}
            />
          </View>
          <SizedBox vertical={10} />
          <View style={screenStyles.column}>
            <Text style={textStyles.paragraph}>Password</Text>
            <TextInput
              style={textInputStyles.container}
              placeholder={'Enter your password here'}
              value={password}
              onChangeText={(value) => {
                setPassword(value);
                setPasswordsSame(isPasswordsSame(value, repassword));
              }}
              secureTextEntry={true}
            />
          </View>
          {passwordsSame ? (
            <View />
          ) : (
            <Text style={textStyles.errorText}>Passwords don't match up</Text>
          )}
          <SizedBox vertical={10} />
          <View style={screenStyles.column}>
            <Text style={textStyles.paragraph}>Re-Password</Text>
            <TextInput
              style={textInputStyles.container}
              placeholder={'Re-enter your password here'}
              value={repassword}
              onChangeText={(value) => {
                setRepassword(value);
                setPasswordsSame(isPasswordsSame(password, value));
              }}
              secureTextEntry={true}
            />
          </View>
          {passwordsSame ? (
            <View />
          ) : (
            <Text style={textStyles.errorText}>Passwords don't match up</Text>
          )}
          <SizedBox vertical={10} />
          <Button title={'Sign up'} onPress={signupHandler} />
          <SizedBox vertical={10} />
          <View style={screenStyles.row}>
            <Text style={textStyles.paragraph}>Already have an account? </Text>
            <TextButton
              text={'Log in here'}
              onPress={() => {
                navigation.navigate('Login');
              }}
            />
          </View>
        </View>
      </ScrollView>
    </View>
  );
}
