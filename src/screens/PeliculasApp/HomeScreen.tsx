import React from 'react';
import {ActivityIndicator, Text, View} from 'react-native';
import { useMovies } from '../../hooks/useMovies';

export const HomeScreen = () => {

  const { peliculaCartelera, isLoading } = useMovies();

  if (isLoading) {
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <ActivityIndicator color='red' size={100}/>
      </View>
    )
  }

  return (
    <View>
      <Text>HomeScreen</Text>
    </View>
  );
};
