import React from 'react';
import {Button, Text, TouchableOpacity, View} from 'react-native';
import {colores, styles} from '../../theme/NavigationApp/appTheme';
import {useEffect} from 'react';
import {StackScreenProps} from '@react-navigation/stack';
import { DrawerScreenProps } from '@react-navigation/drawer';
import Icon from 'react-native-vector-icons/Ionicons';

// interface ScreenProps extends StackScreenProps<any, any> {}
interface ScreenProps extends DrawerScreenProps<any, any> {}

export const ScreenOne = ({navigation}: ScreenProps) => {

  // por defecto el drawer pone solo el menu hamburgesa

  useEffect(() => {
    navigation.setOptions({
      headerLeft: () => (
        <TouchableOpacity
          style={{marginLeft: 5}}
          onPress={() => {navigation.toggleDrawer()}}>
          <Icon color="green" name="menu" size={35} />
        </TouchableOpacity>
      ),
    });
  }, []);

  return (
    <View style={styles.globalMargin}>
      <Text style={styles.title}>Screen 1</Text>
      <Button
        title="Ir pagina 2"
        onPress={() => navigation.navigate('ScreenTwo')}
      />
      {/* <Button
        title="Ir a persona"
        onPress={() => navigation.navigate('Persona')}
      /> */}

      <Text style={{marginBottom: 30}}>Navegar con argumentos:</Text>

      <View style={{flexDirection: 'row'}}>
        <TouchableOpacity
          style={{...styles.botonGrande, backgroundColor: colores.primary}}
          onPress={() =>
            navigation.navigate('Persona', {id: 1, nombre: 'Pedro'})
          }>
             <Icon color="white" name="man" size={35} />
          <Text style={styles.botonGrandeTexto}>Pedro</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={{...styles.botonGrande, backgroundColor: colores.warning}}
          onPress={() =>
            navigation.navigate('Persona', {id: 2, nombre: 'Maria'})
          }>
            <Icon color="white" name="woman" size={35} />
          <Text style={styles.botonGrandeTexto}>Maria</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
