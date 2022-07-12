import { StackScreenProps } from '@react-navigation/stack';
import React from 'react';
import {Button, Text, View} from 'react-native';
import { styles } from '../../theme/appTheme';

interface ScreenProps extends StackScreenProps<any, any> {}

export const ScreenOne = ({navigation}: ScreenProps) => {

  return (
    <View style={styles.globalMargin}>
      <Button title="Ir pagina 2" onPress={()=> navigation.navigate('ScreenTwo')}/>
    </View>
  );
};
