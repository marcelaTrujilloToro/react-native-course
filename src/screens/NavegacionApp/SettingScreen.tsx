import React, {useContext} from 'react';
import {Text, View} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {AuthContext} from '../../context/NavigationApp/AuthContext';
import {colores, styles} from '../../theme/appTheme';
import Icon from 'react-native-vector-icons/Ionicons';

export const SettingScreen = () => {
  const insets = useSafeAreaInsets();

  const {authState} = useContext(AuthContext);

  return (
    <View style={{...styles.globalMargin, marginTop: insets.top}}>
      <Text style={styles.title}>SettingScreen</Text>
      <Text >{JSON.stringify(authState, null, 4)}</Text>

      {authState.favoriteIcon && (
        <Icon name={authState.favoriteIcon} size={150} color={colores.info} />
      )}
    </View>
  );
};
