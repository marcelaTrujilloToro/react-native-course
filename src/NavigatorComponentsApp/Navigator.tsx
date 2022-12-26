import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import { HomeScreen } from '../screens/ComponentesRNApp/HomeScreen';
import { Animation101Screen } from '../screens/ComponentesRNApp/Animation101Screen';
import { Animation102Screen } from '../screens/ComponentesRNApp/Animation102Screen';
import { SwitchScreen } from '../screens/ComponentesRNApp/SwitchScreen';



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

    </Stack.Navigator>
  );
};
