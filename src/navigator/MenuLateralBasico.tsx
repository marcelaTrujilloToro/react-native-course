import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {SettingScreen} from '../screens/NavegacionApp/SettingScreen';
import {StackNavigator} from './StackNavigator';

export type RootDrawerParams = {
  StackNavigator: undefined;
  SettingsScreen: undefined;
};

const Drawer = createDrawerNavigator<RootDrawerParams>();

export const MenuLateralBasico = () => {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="StackNavigator" component={StackNavigator} />
      <Drawer.Screen name="SettingsScreen" component={SettingScreen} />
    </Drawer.Navigator>
  );
};
