/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import {useState} from 'react';
import { Fab } from '../../components/Fab';

export const ContadorScreen = () => {
  const [contador, setContador] = useState(10);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Contador: {contador}</Text>
      {/* <Button
        onPress={()=> setContador(contador + 1)}
        title="Click"
      /> */}
      <Fab title="+1" onPress={() => setContador(contador + 1)} />
      <Fab title="-1" onPress={() => setContador(contador - 1)} position='bl'/>
      {/* <TouchableOpacity
        style={styles.fabLocationR}
        onPress={() => {
          setContador(contador + 1);
        }}>
        <View style={styles.fab}>
          <Text style={styles.fabText}>+1</Text>
        </View>
      </TouchableOpacity> */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  title: {
    fontSize: 40,
    textAlign: 'center',
    top: -15,
  },
});
