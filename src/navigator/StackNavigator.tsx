import  React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { ScreenOne } from '../screens/NavegacionApp/ScreenOne';
import { ScreenTwo } from '../screens/NavegacionApp/ScreenTwo';
import { ScreenThree } from '../screens/NavegacionApp/ScreenThree';

const Stack = createStackNavigator();

export const StackNavigator =() => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="ScreenOne" component={ScreenOne} />
      <Stack.Screen name="ScreenTwo" component={ScreenTwo} />
      <Stack.Screen name="ScreenThree" component={ScreenThree} />
    </Stack.Navigator>
  );
}