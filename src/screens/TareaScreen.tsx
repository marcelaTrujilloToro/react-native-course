import React from 'react';
import {StyleSheet, View} from 'react-native';

export const TareaScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.cajaMorada} />
      <View style={styles.cajaNaranja} />
      <View style={styles.cajaAzul} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#28425b',
    // justifyContent: 'center' // task 2 : centrar el contenido
    flexDirection: 'row', // task 5
    // justifyContent: 'space-between', // task 5
    justifyContent: 'center', // task 7
    alignItems: 'center' // task 7
  },
  cajaMorada: {
    //   flex: 1, // task 6 
     width: 100,
     height: 100, // task 5 comentado para que funcione el task 5 
    borderWidth: 10,
    borderColor: 'white',
    backgroundColor: '#5856d6',
    // top:100 // task 9
    //alignSelf: 'flex-end', // task 3 : ajustar en la posicion independiente
    //position: 'absolute', // task 4 : ajustar en la posicion independiente
    //right: 0, // task 4 : ajustar en la posicion independiente
    // top: 0, // task 4 : ajustar en la posicion independiente
  },
  cajaNaranja: {
    //   flex: 1, // task 6 
    // flex: 1, // task 1 poner flex en 1 para que ocupe todo el epacio disponible
     width: 100,
     height: 100, // task 5 comentado para que funcione el task 5 
    borderWidth: 10,
    borderColor: 'white',
    backgroundColor: '#f0a23b',
    top: 50 // task 10
     // left: 100, // task 8
    //alignSelf: 'center', // task 4 : ajustar en la posicion independiente
  },
  cajaAzul: {
    //   flex: 2, // task 6 
     width: 100, // task 2 comentar el ancho para que tome todo el ancho disponible
     height: 100, // // task 5 comentado para que funcione el task 5 
    borderWidth: 10,
    borderColor: 'white',
    backgroundColor: '#28c4d9',
    //alignSelf:'center', //task 3 : ajustar en la posicion independiente
    //position: 'absolute', // task 4 : ajustar en la posicion independiente
    //left: 0, // task 4 : ajustar en la posicion independiente
    //bottom: 0, // task 4 : ajustar en la posicion independiente
  },
});
