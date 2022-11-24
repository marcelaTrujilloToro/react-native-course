/* eslint-disable react-hooks/exhaustive-deps */
import {StackScreenProps} from '@react-navigation/stack';
import React, {useContext} from 'react';
import {Text, View} from 'react-native';
import {styles} from '../../theme/NavigationApp/appTheme';
import {useEffect} from 'react';
import {RootStackParams} from '../../navigation/navigatorNavApp/StackNavigator';
import {AuthContext} from '../../context/NavigationApp/AuthContext';

// interface RouteParams {
//   id: number,
//   nombre: string
// }

interface PersonaProps extends StackScreenProps<RootStackParams, 'Persona'> {}

export const PersonaScreen = ({route, navigation}: PersonaProps) => {
  // const params = route.params as RouteParams;
  const params = route.params;

  const {changeUserName} = useContext(AuthContext);

  useEffect(() => {
    navigation.setOptions({
      title: params.nombre,
    });
  }, []);

  useEffect(() => {
    changeUserName(params.nombre);
  }, []);

  return (
    <View style={styles.globalMargin}>
      <Text style={styles.title}> {JSON.stringify(params, null, 3)} </Text>
    </View>
  );
};
