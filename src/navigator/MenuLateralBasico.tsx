import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {SettingScreen} from '../screens/NavegacionApp/SettingScreen';
import {StackNavigator} from './StackNavigator';
import {useWindowDimensions} from 'react-native';

export type RootDrawerParams = {
  StackNavigator: undefined;
  SettingScreen: undefined;
};

const Drawer = createDrawerNavigator<RootDrawerParams>();

export const MenuLateralBasico = () => {
  const {width} = useWindowDimensions();

  return (
    <Drawer.Navigator
      screenOptions={{drawerType: width >= 768 ? 'permanent' : 'front'}}>
      <Drawer.Screen
        name="StackNavigator"
        options={{title: 'Home'}}
        component={StackNavigator}
      />
      <Drawer.Screen
        name="SettingScreen"
        options={{title: 'Settings'}}
        component={SettingScreen}
      />
    </Drawer.Navigator>
  );
};
