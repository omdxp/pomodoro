import React, {useState, useEffect} from 'react';
import {View, Text, TextInput, ScrollView} from 'react-native';
import {useNavigation} from '@react-navigation/native';

// import redux reducer
import {useDispatch} from 'react-redux';

// import redux action
import signupAction from '../../../redux/actions/auth/signupAction';

// import components
import Button from '../../../components/button';
import {SizedBox} from 'sizedbox';

// import styles
import {screenStyles, textInputStyles, textStyles} from '../../../styles';

// import functions
import {
  isInputValidFunc,
  isPasswordsSame,
  areInputsEmptyFunc,
  signupHandler,
} from '../functions/SignUpFunctions';
import TextButton from '../../../components/textButton';
import {BarPasswordStrengthDisplay} from 'react-native-password-strength-meter';

export default function SignUp() {
  // text inputs
  const [fullName, setFullName] = useState('');
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const [repassword, setRepassword] = useState('');
  // booleans
  const [passwordsSame, setPasswordsSame] = useState(true);
  const [isInputValid, setIsInputValid] = useState(true);
  const [areInputsEmpty, setAreInputsEmpty] = useState(true);
  // use dispatch
  const dispatch = useDispatch();
  // use navigation
  const navigation = useNavigation();

  // use effect to check if inputs are empty
  useEffect(() => {
    setAreInputsEmpty(
      areInputsEmptyFunc(fullName, userName, password, repassword),
    );
  }, [fullName, userName, password, repassword]);

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
              onChangeText={(value) => {
                setFullName(value);
                setIsInputValid(isInputValidFunc(fullName, userName, password));
              }}
            />
          </View>
          <SizedBox vertical={10} />
          <View style={screenStyles.column}>
            <Text style={textStyles.paragraph}>Username</Text>
            <TextInput
              style={textInputStyles.container}
              placeholder={'Enter your username here'}
              value={userName}
              onChangeText={(value) => {
                setUserName(value);
                setIsInputValid(isInputValidFunc(fullName, userName, password));
              }}
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
                setIsInputValid(isInputValidFunc(fullName, userName, password));
              }}
              secureTextEntry={true}
            />
          </View>
          {password.length > 0 ? (
            <BarPasswordStrengthDisplay password={password} />
          ) : (
            <View />
          )}
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
          <Button
            title={'Sign up'}
            onPress={() => {
              signupHandler(
                fullName,
                userName,
                password,
                dispatch,
                signupAction,
              );
              navigation.goBack();
            }}
            disabled={!passwordsSame || areInputsEmpty}
          />
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
