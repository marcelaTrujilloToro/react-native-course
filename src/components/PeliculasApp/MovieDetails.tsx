import React from 'react';
import {FlatList, Text, View} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {Cast} from '../../interfaces/ICredits';
import {MovieFull} from '../../interfaces/IMovie';
import {styles} from '../../theme/NavigationApp/appTheme';
import currencyFormatter from 'currency-formatter';
import {CastItem} from './CastItem';

interface MovieDetailsProps {
  movieFull: MovieFull;
  cast: Cast[];
}

export const MovieDetails = ({movieFull, cast}: MovieDetailsProps) => {
  return (
    <View>
      <View style={{marginHorizontal: 20}}>
        <View style={{flexDirection: 'row', marginTop: 5}}>
          <Icon name="star-outline" color="grey" size={16} />
          <Text style={{marginLeft: 5}}>{movieFull.vote_average}</Text>
          <Text style={{marginLeft: 5}}>
            {' '}
            - {movieFull.genres.map(g => g.name).join(', ')}
          </Text>
        </View>

        <Text style={{fontSize: 23, marginTop: 10, fontWeight: 'bold'}}>
          Historia
        </Text>
        <Text style={{fontSize: 16}}>{movieFull.overview}</Text>
        <Text style={{fontSize: 23, marginTop: 10, fontWeight: 'bold'}}>
          Presupuesto
        </Text>
        <Text style={{fontSize: 16}}>
          {currencyFormatter.format(movieFull.budget, {code: 'USD'})}
        </Text>
      </View>
      <View style={{marginTop: 10, marginBottom: 100}}>
        <Text
          style={{
            fontSize: 23,
            marginTop: 10,
            fontWeight: 'bold',
            marginHorizontal: 20,
          }}>
          Actores
        </Text>
        <FlatList 
        style={{marginTop: 10, height: 70}}
          data={cast}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({item}) => <CastItem actor={item} />}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
        />
      </View>
    </View>
  );
};
