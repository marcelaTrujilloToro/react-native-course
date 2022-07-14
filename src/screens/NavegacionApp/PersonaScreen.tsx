import {StackScreenProps} from '@react-navigation/stack';
import React from 'react';
import {Button, Text, View} from 'react-native';
import {styles} from '../../theme/appTheme';
import {useEffect} from 'react';
import { RootStackParams } from '../../navigator/StackNavigator';

// interface RouteParams {
//   id: number,
//   nombre: string
// }

interface PersonaProps extends StackScreenProps<RootStackParams, 'Persona'> {}

export const PersonaScreen = ({route, navigation}: PersonaProps) => {

  // const params = route.params as RouteParams;
  const params = route.params;

  useEffect(() => {
    navigation.setOptions({
      title: params.nombre,
    });
  }, []);

  return (
    <View style={styles.globalMargin}>
      <Text style={styles.title}> {JSON.stringify(params, null, 3)} </Text>
    </View>
  );
};