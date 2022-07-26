import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import { HomeScreen } from '../screens/PeliculasApp/HomeScreen';
import { DetailScreen } from '../screens/PeliculasApp/DetailScreen';

export type RootStackParams = {
  HomeScreen: undefined
  DetailScreen: undefined
};

const Stack = createStackNavigator<RootStackParams>();

export const StackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{
        headerShown: false,
        cardStyle: {backgroundColor: 'white'},
    }}>
      <Stack.Screen
        name="HomeScreen"
        options={{title: 'Pagina 1'}}
        component={HomeScreen}
      />
      <Stack.Screen
        name="DetailScreen"
        options={{title: 'Pagina 2'}}
        component={DetailScreen}
      />
    </Stack.Navigator>
  );
};