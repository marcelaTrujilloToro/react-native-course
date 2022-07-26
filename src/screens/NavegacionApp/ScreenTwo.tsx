import React, { useEffect } from 'react';
import {useNavigation} from '@react-navigation/core';
import {Button, Text, View} from 'react-native';
import {styles} from '../../theme/NavigationApp/appTheme';

export const ScreenTwo = () => {

  const navigator = useNavigation();

  useEffect(() => {
    navigator.setOptions({
      title: 'Hola mundo',
      //si se deja vacio pone el back en el idioma que tenga el telefono
      headerBackTitle: ''
    })
  }, [])
  

  return (
    <View style={styles.globalMargin}>
      <Text style={styles.title}>Screen 2</Text>

      <Button
        title="Ir pagina 3"
        onPress={() => navigator.navigate('ScreenThree')}
      />
    </View>
  );
};
