import React, { useContext } from 'react';
import {Button, Text, View} from 'react-native';
import { AuthContext } from '../../context/NavigationApp/AuthContext';
import { styles } from '../../theme/NavigationApp/appTheme';

export const AlbumsScreen = () => {

  const {authState, logout} = useContext(AuthContext);
  
  return (
    <View style={styles.globalMargin}>
      <Text style={styles.title}>AlbumsScreen</Text>
      {
        authState.isLoggedIn 
        && 
        <Button 
          title="Logout" 
          onPress={logout}
        />
      }
    </View>
  );
};
