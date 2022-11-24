import React from 'react';
import {Button, Text, View} from 'react-native';
import {styles} from '../../theme/NavigationApp/appTheme';
import { StackScreenProps } from '@react-navigation/stack';


interface ScreenProps extends StackScreenProps<any, any> {}

export const ScreenThree = ({navigation}: ScreenProps) => {


  return (
    <View style={styles.globalMargin}>
      <Text style={styles.title}>Screen 3</Text>

      <Button
        title="Regresar"
        onPress={() => navigation.pop()}
      />
      <Button
        title="Ir a la pagina 1"
        onPress={() => navigation.popToTop()}
      />

    </View>
  );
};
