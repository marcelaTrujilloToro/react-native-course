import React, {useEffect} from 'react';
import {Text, View} from 'react-native';
import {colores, styles} from '../../theme/appTheme';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import { TouchableIcon } from '../../components/NavigationApp/TouchableIcon';

export const Tab1Screen = () => {
  const {top} = useSafeAreaInsets();

  useEffect(() => {
    console.log('Tab1Screen effect');
  }, []);

  return (
    <View style={{...styles.globalMargin, marginTop: top + 10}}>
      <Text style={styles.title}>Iconos</Text>
      <Text>
        <TouchableIcon iconName="airplane-outline"  color={colores.primary} />
        <TouchableIcon iconName="finger-print-outline"  color={colores.success }/>
        <TouchableIcon iconName="paw"  color='brown' />
        <TouchableIcon iconName="rose-sharp"  color={colores.error} />
        <TouchableIcon iconName="logo-react"  color={colores.info} />
      </Text>
    </View>
  );
};
