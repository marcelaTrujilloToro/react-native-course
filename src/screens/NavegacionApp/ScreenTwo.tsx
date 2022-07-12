import React from 'react';
import {useNavigation} from '@react-navigation/core';
import {Button, Text, View} from 'react-native';
import {styles} from '../../theme/appTheme';

export const ScreenTwo = () => {

  const navigator = useNavigation();

  return (
    <View style={styles.globalMargin}>
      <Text>Screen 2</Text>

      <Button
        title="Ir pagina 3"
        onPress={() => navigator.navigate('ScreenThree')}
      />
    </View>
  );
};
