import React, {useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

// import screens
import Auth from './app/screens/auth/Navigation';
import Main from './app/screens/Navigation';

// import redux
import {Provider} from 'react-redux';
import {store} from './app/redux/store';

// application stack navigator
const AppStack = createStackNavigator();

export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  return (
    <Provider store={store}>
      <NavigationContainer>
        {!isLoggedIn ? (
          <Main />
        ) : (
          <AppStack.Navigator headerMode={'none'}>
            <AppStack.Screen name="Auth" component={Auth} />
            <AppStack.Screen name="Main" component={Main} />
          </AppStack.Navigator>
        )}
      </NavigationContainer>
    </Provider>
  );
}
