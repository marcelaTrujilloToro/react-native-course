import React from 'react';
import {FlatList, Text, View} from 'react-native';
import {Movie} from '../../interfaces/IMovie';
import {Poster} from './Poster';

interface HorizontalSliderProps {
  title: string;
  movies: Movie[];
}

export const HorizontalSlider = ({title, movies}: HorizontalSliderProps) => {
  return (
    <View style={{height: title ? 270 : 230}}>
      {title && (
        <Text style={{fontSize: 30, fontWeight: 'bold', marginBottom: 10, marginLeft: 10}}>
          {title}
        </Text>
      )}

      <FlatList
        data={movies}
        renderItem={({item}: any) => (
          <Poster movie={item} width={120} height={180} />
        )}
        keyExtractor={item => item.id.toString()}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
};
