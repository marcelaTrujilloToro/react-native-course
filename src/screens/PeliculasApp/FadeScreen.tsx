/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { Animated, Button, View } from 'react-native';
import { useFade } from '../../hooks/PeliculasHooks/useFade';

export const FadeScreen = () => {

  const {opacity, fadeIn, fadeOut} = useFade();

  return (

      <View style = {{
        flex: 1,
        backgroundColor: 'grey',
        justifyContent: 'center',
        alignItems: 'center',
      }}>
        <Animated.View style={{
          backgroundColor: '#084F6A',
          width: 150,
          height: 150,
          borderColor: 'white',
          borderWidth: 5,
          marginBottom: 10,
          opacity,
        }} />

        <Button title="Fade In" onPress={() => fadeIn()}/>
        <Button title="Fade Out" onPress={() => fadeOut()}/>
    </View >
  );
};
