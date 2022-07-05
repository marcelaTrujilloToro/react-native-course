/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {SafeAreaView} from 'react-native';
import { DimensionesScreen } from './src/screens/DimensionesScreen';
// import {BoxObjectModelScreen} from './src/screens/BoxObjectModelScreen';
// import {ContadorScreen} from './src/screens/ContadorScreen';
// import {HolaMundoScreen} from './src/screens/HolaMundoScreen';

const App = () => {
  return (
    //SafeAreaView: verifica si puede mostrar la informacion (que no choque el componente con el nodge)
    <SafeAreaView style={{flex: 1}}>
      {/* <HolaMundoScreen />
      <ContadorScreen /> */}
      {/* <BoxObjectModelScreen /> */}
      <DimensionesScreen/>
    </SafeAreaView>
  );
};

export default App;
