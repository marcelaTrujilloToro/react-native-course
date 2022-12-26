import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import { HomeScreen } from '../screens/ComponentesRNApp/HomeScreen';
import { Animation101Screen } from '../screens/ComponentesRNApp/Animation101Screen';
import { Animation102Screen } from '../screens/ComponentesRNApp/Animation102Screen';
import { SwitchScreen } from '../screens/ComponentesRNApp/SwitchScreen';
import { AlertScreen } from '../screens/ComponentesRNApp/AlertScreen';
import { InputScreen } from '../screens/ComponentesRNApp/InputScreen';
import { PullToRefreshScreen } from '../screens/ComponentesRNApp/PullToRefreshScreen';
import { CustomSectionListScreen } from '../screens/ComponentesRNApp/CustomSectionListScreen';
import { ModalScreen } from '../screens/ComponentesRNApp/ModalScreen';
import { InfiniteScrollScreen } from '../screens/ComponentesRNApp/InfiniteScrollScreen';



const Stack = createStackNavigator();

export const Navigator = () => {
  return (
    <Stack.Navigator screenOptions={{
        headerShown: false,
        // cardStyle: {backgroundColor: 'white'},
    }}>
      <Stack.Screen
        name="HomeScreen"
        component={HomeScreen}
      />
      <Stack.Screen
        name="Animation101Screen"
        component={Animation101Screen}
      />
      <Stack.Screen
        name="Animation102Screen"
        component={Animation102Screen}
      />
      <Stack.Screen
        name="SwitchScreen"
        component={SwitchScreen}
      />
      <Stack.Screen
        name="AlertScreen"
        component={AlertScreen}
      />
      <Stack.Screen
        name="InputScreen"
        component={InputScreen}
      />
      <Stack.Screen
        name="PullToRefreshScreen"
        component={PullToRefreshScreen}
      />
      <Stack.Screen
        name="CustomSectionListScreen"
        component={CustomSectionListScreen}
      />
      <Stack.Screen
        name="ModalScreen"
        component={ModalScreen}
      />
      <Stack.Screen
        name="InfiniteScrollScreen"
        component={InfiniteScrollScreen}
      />


    </Stack.Navigator>
  );
};
