import React from 'react';
// import drawer navigation
import {createDrawerNavigator} from '@react-navigation/drawer';
import Home from './home/ui/HomeUI';
import Test from './test/ui/TestUI';

// create drawer menu
const Drawer = createDrawerNavigator();

export default function Navigation() {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Home" component={Home} />
      <Drawer.Screen name="Test" component={Test} />
    </Drawer.Navigator>
  );
}
