/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {Text, View, Button} from 'react-native';
import {useState} from 'react';

export const ContadorScreen = () => {
  const [contador, setContador] = useState(10);

  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
      }}>
      <Text style={{textAlign: 'center', fontSize: 40, top: -15}}>
        Contador: {contador}
      </Text>
      <Button
        onPress={()=> setContador(contador + 1)}
        title="Click"
      />
    </View>
  );
};
