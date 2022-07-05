import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

export const BoxObjectModelScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Box Object Model</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'blue',
  },
  title: {
    fontSize: 40,
    borderWidth: 10,
    // separacion interna
    padding: 5,
    // separacion externa
    margin: 10,
    // backgroundColor: 'red'
  },
});
