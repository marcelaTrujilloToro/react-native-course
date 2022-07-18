/* eslint-disable react-native/no-inline-styles */
import 'react-native-gesture-handler';
import * as React from 'react';

import {NavigationContainer} from '@react-navigation/native';

import {SafeAreaView} from 'react-native';
import {StackNavigator} from './src/navigator/StackNavigator';
import {MenuLateralBasico} from './src/navigator/MenuLateralBasico';
import {MenuLateral} from './src/navigator/MenuLateral';
import {AuthProvider} from './src/context/AuthContext';

const App = () => {
  return (
    //se comenta para poder seguir con el ejercicio de navegacion
    //SafeAreaView: verifica si puede mostrar la informacion (que no choque el componente con el nodge)
    // <SafeAreaView style={{flex: 1}}>
    //   <HolaMundoScreen />
    //   <ContadorScreen />
    //   <BoxObjectModelScreen />
    //   <DimensionesScreen />
    //   <PositionScreen />
    //   <FlexScreen />
    //   <TareaScreen />
    // </SafeAreaView>

    <NavigationContainer>
      <AppState>
        {/* <StackNavigator/> */}
        {/* <MenuLateralBasico/> */}
        <MenuLateral />
      </AppState>
    </NavigationContainer>
  );
};

const AppState = ({children}: any) => {
  return <AuthProvider>{children}</AuthProvider>;
};

export default App;
