import React from 'react';
// import drawer navigation
import {createDrawerNavigator} from '@react-navigation/drawer';
import Home from './home/ui/HomeUI';
import Settings from './settings/ui/SettingsUI';
import About from './about/ui/AboutUI';

// create drawer menu
const Drawer = createDrawerNavigator();

export default function Navigation() {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Home" component={Home} />
      <Drawer.Screen name="Settings" component={Settings} />
      <Drawer.Screen name="About" component={About} />
    </Drawer.Navigator>
  );
}
