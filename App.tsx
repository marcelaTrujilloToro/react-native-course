/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {SafeAreaView} from 'react-native';

import { HolaMundo } from './src/screens/NavegacionApp/HolaMundo';

const App = () => {
  return (
    //SafeAreaView: verifica si puede mostrar la informacion (que no choque el componente con el nodge)
    <SafeAreaView style={{flex: 1}}>
      {/* <HolaMundoScreen />
      <ContadorScreen />
      <BoxObjectModelScreen />
      <DimensionesScreen/>
      <PositionScreen/>
      <FlexScreen/>
      <TareaScreen /> */}

      <HolaMundo/>
    </SafeAreaView>
  );
};

export default App;
