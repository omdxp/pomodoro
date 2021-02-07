import React, {useState, useEffect} from 'react';
import {View, Text, TextInput, ScrollView} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import Main from '../../../screens/Navigation';

// import components
import Button from '../../../components/button';
import {SizedBox} from 'sizedbox';

// import styles
import {screenStyles, textInputStyles, textStyles} from '../../../styles';

// import functions
import {loginHandler, areInputsEmptyFunc} from '../functions/LoginFunctions';
import TextButton from '../../../components/textButton';

// import redux
import {useSelector} from 'react-redux';

export default function Login() {
  // text input
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');
  // booleans
  const [areInputsEmpty, setAreInputsEmpty] = useState(true);
  // use navigation
  const navigation = useNavigation();
  // get users
  const users = useSelector((state) => state.authReducer.users);

  // use effect to check if inputs are empty
  useEffect(() => {
    setAreInputsEmpty(areInputsEmptyFunc(userName, password));
  }, [userName, password]);

  // this function handles the login process
  const loginHandler = () => {
    console.log('Login started');
    console.log('loginHandler users:', users);
    var userExists = false;
    users.forEach((element) => {
      if (userName === element.userName && password === element.password) {
        userExists = true;
      }
    });
    userExists ? navigation.navigate('Main') : alert('Username does not exist');
  };

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
              onChangeText={(value) => setPassword(value)}
              secureTextEntry={true}
            />
          </View>
          <SizedBox vertical={10} />
          <Button
            title={'Login'}
            onPress={loginHandler}
            disabled={areInputsEmpty}
          />
          <SizedBox vertical={10} />
          <View style={screenStyles.row}>
            <Text style={textStyles.paragraph}>Don't have an account? </Text>
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
