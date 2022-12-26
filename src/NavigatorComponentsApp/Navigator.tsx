import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import { HomeScreen } from '../screens/ComponentesRNApp/HomeScreen';
import { Animation101Screen } from '../screens/ComponentesRNApp/Animation101Screen';
import { Animation102Screen } from '../screens/ComponentesRNApp/Animation102Screen';



const Stack = createStackNavigator();

export const Navigator = () => {
  return (
    <Stack.Navigator screenOptions={{
        headerShown: false,
        // cardStyle: {backgroundColor: 'white'},
    }}>
      <Stack.Screen
        name="HomeScreen"
        options={{title: 'Pagina 1'}}
        component={HomeScreen}
      />
      <Stack.Screen
        name="Animation101Screen"
        options={{title: 'Pagina 2'}}
        component={Animation101Screen}
      />
      <Stack.Screen
        name="Animation102Screen"
        options={{title: 'Pagina 3'}}
        component={Animation102Screen}
      />

    </Stack.Navigator>
  );
};
