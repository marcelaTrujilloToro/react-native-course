/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {SafeAreaView} from 'react-native';
import {DimensionesScreen} from './src/screens/DimensionesScreen';
import {FlexScreen} from './src/screens/FlexScreen';
import {PositionScreen} from './src/screens/PositionScreen';
import {BoxObjectModelScreen} from './src/screens/BoxObjectModelScreen';
import {ContadorScreen} from './src/screens/ContadorScreen';
import {HolaMundoScreen} from './src/screens/HolaMundoScreen';
import {TareaScreen} from './src/screens/TareaScreen';

const App = () => {
  return (
    //SafeAreaView: verifica si puede mostrar la informacion (que no choque el componente con el nodge)
    <SafeAreaView style={{flex: 1}}>
      {/* <HolaMundoScreen />
      <ContadorScreen /> */}
      {/* <BoxObjectModelScreen /> */}
      {/* <DimensionesScreen/> */}
      {/* <PositionScreen/> */}
      {/* <FlexScreen/> */}
      <TareaScreen />
    </SafeAreaView>
  );
};

export default App;
