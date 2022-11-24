import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import { HomeScreen } from '../screens/ComponentesRNApp/HomeScreen';

export type RootStackParams = {
  HomeScreen: undefined
};

const Stack = createStackNavigator<RootStackParams>();

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

    </Stack.Navigator>
  );
};
