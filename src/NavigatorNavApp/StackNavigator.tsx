import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {ScreenOne} from '../screens/NavegacionApp/ScreenOne';
import {ScreenTwo} from '../screens/NavegacionApp/ScreenTwo';
import {ScreenThree} from '../screens/NavegacionApp/ScreenThree';
import {PersonaScreen} from '../screens/NavegacionApp/PersonaScreen';

export type RootStackParams = {
  ScreenOne: undefined
  ScreenTwo: undefined
  ScreenThree: undefined
  Persona: {
    id: number,
    nombre: string
  }
};

const Stack = createStackNavigator<RootStackParams>();

export const StackNavigator = () => {
  return (
    <Stack.Navigator
      // en caso que no se quiera iniciar en la primera
      // initialRouteName="ScreenOne"

      screenOptions={{
        //elimina el header
        // headerShown: false,

        headerStyle: {
          //eliminar la linea de separacion en android
          elevation: 0,
          //eliminar la linea de separacion en ios
          shadowColor: 'transparent',
        },

        cardStyle: {
          backgroundColor: 'white',
        },
      }}>
      <Stack.Screen
        name="ScreenOne"
        options={{title: 'Pagina 1'}}
        component={ScreenOne}
      />
      <Stack.Screen
        name="ScreenTwo"
        options={{title: 'Pagina 2'}}
        component={ScreenTwo}
      />
      <Stack.Screen
        name="ScreenThree"
        options={{title: 'Pagina 3'}}
        component={ScreenThree}
      />
      <Stack.Screen name="Persona" component={PersonaScreen} />
    </Stack.Navigator>
  );
};
