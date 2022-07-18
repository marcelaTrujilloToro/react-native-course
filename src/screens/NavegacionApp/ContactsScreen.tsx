import React, {useContext} from 'react';
import {Button, Text, View} from 'react-native';
import {AuthContext} from '../../context/NavigationApp/AuthContext';
import {styles} from '../../theme/appTheme';

export const ContactsScreen = () => {
  const {authState, signIn} = useContext(AuthContext);

  return (
    <View style={styles.globalMargin}>
      <Text style={styles.title}>ContactsScreen</Text>
      {!authState.isLoggedIn && <Button title="SignIn" onPress={signIn} />}
    </View>
  );
};
