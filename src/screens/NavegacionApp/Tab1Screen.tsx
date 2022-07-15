import React, {useEffect} from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import {Text, View} from 'react-native';
import {colores, styles} from '../../theme/appTheme';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

export const Tab1Screen = () => {
  const {top} = useSafeAreaInsets();

  useEffect(() => {
    console.log('Tab1Screen effect');
  }, []);

  return (
    <View style={{...styles.globalMargin, marginTop: top + 10}}>
      <Text style={styles.title}>Iconos</Text>
      <Text>
        <Icon name="airplane-outline" size={80} color={colores.primary} />
        <Icon name="finger-print-outline" size={80} color='green' />
        <Icon name="paw" size={80} color='brown' />
        <Icon name="rose-sharp" size={80} color='red' />
        <Icon name="logo-react" size={80} color='#5DADE2' />
      </Text>
    </View>
  );
};
