import * as React from 'react';
import { Button, View } from 'react-native';

import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';

import login from './src/pages/login/index'

import { DrawerPersonalizado } from './src/components/DrawerPersonalizado/index';


const Drawer = createDrawerNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator drawerContent={props => <DrawerPersonalizado {...props} />} initialRouteName="Home">
        <Drawer.Screen name="Login" component={login} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}