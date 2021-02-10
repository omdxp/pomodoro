import React, {useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

// import screens
import Auth from './app/screens/auth/Navigation';
import Main from './app/screens/Navigation';

// import redux
import {Provider} from 'react-redux';
import {store, persistor} from './app/redux/store';
import {PersistGate} from 'redux-persist/es/integration/react';

// application stack navigator
const AppStack = createStackNavigator();

export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor} loading={null}>
        <NavigationContainer>
          {isLoggedIn ? (
            <Main />
          ) : (
            <AppStack.Navigator headerMode={'none'}>
              <AppStack.Screen name="Auth" component={Auth} />
              <AppStack.Screen name="Main" component={Main} />
            </AppStack.Navigator>
          )}
        </NavigationContainer>
      </PersistGate>
    </Provider>
  );
}
