import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

export const FlexScreen = () => {
  return (
    <View style={styles.container}>
        <Text style={styles.caja1}>Caja 1</Text>
        <Text style={styles.caja2}>Caja 2</Text>
        <Text style={styles.caja3}>Caja 3</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#28c4d9',
        flexDirection: 'row',
        justifyContent: 'space-around'
    },

    // el flex es como si se hubiera sumado 3+2+1 = 6 
    caja1: {
        // flex: 3, // la mitad de 6
        borderWidth: 2,
        borderColor: 'white',
        fontSize: 30
    },
    caja2: {
        // flex: 2, // 
        borderWidth: 2,
        borderColor: 'white',
        fontSize: 30
    },
    caja3: {
        // flex: 1,
        borderWidth: 2,
        borderColor: 'white',
        fontSize: 30
    }
});