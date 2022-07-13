import {StackScreenProps} from '@react-navigation/stack';
import React from 'react';
import {Button, Text, TouchableOpacity, View} from 'react-native';
import {styles} from '../../theme/appTheme';

interface ScreenProps extends StackScreenProps<any, any> {}

export const ScreenOne = ({navigation}: ScreenProps) => {
  return (
    <View style={styles.globalMargin}>
      <Text style={styles.title}>Screen 1</Text>
      <Button
        title="Ir pagina 2"
        onPress={() => navigation.navigate('ScreenTwo')}
      />
      <Button
        title="Ir a persona"
        onPress={() => navigation.navigate('Persona')}
      />

      <Text style={{marginBottom: 30}}>Navegar con argumentos:</Text>

      <View style={{flexDirection: 'row'}}>
      <TouchableOpacity style={{...styles.botonGrande, backgroundColor: '#5856d6'}} onPress={() => navigation.navigate('Persona', {id:1, nombre: 'Pedro'})}>
        <Text style={styles.botonGrandeTexto}>Pedro</Text>
      </TouchableOpacity>

      <TouchableOpacity style={{...styles.botonGrande, backgroundColor: '#ff9427'}} onPress={() => navigation.navigate('Persona', {id:2, nombre: 'Maria'})}>
        <Text style={styles.botonGrandeTexto}>Maria</Text>
      </TouchableOpacity>
      </View>

    </View>
  );
};
