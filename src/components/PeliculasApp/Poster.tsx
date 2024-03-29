import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {Movie} from '../../interfaces/IMovie';

interface PosterProos {
  movie: Movie;
  height?: number;
  width?: number;
}

export const Poster = ({movie, height = 420, width = 270}: PosterProos) => {
  const uri = `https://image.tmdb.org/t/p/w500/${movie.poster_path}`;

  const navigation = useNavigation();

  return (
    <TouchableOpacity
      onPress={()=> navigation.navigate('DetailScreen', movie)}
      activeOpacity={0.8}
      style={{width, height, marginHorizontal: 8, paddingBottom: 20, paddingHorizontal: 8}}>
      <View style={styles.imageContainer}>
        <Image source={{uri}} style={styles.image} />
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  image: {
    flex: 1,
    borderRadius: 15,
  },
  imageContainer: {
    flex: 1,
    borderRadius: 15,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 7,
    },
    shadowOpacity: 0.9,
    shadowRadius: 9.11,
  },
});
