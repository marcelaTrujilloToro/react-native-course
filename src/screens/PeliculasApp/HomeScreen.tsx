import React from 'react';
import {
  ActivityIndicator,
  Dimensions,
  FlatList,
  ScrollView,
  Text,
  View,
} from 'react-native';
import {Poster} from '../../components/PeliculasApp/Poster';
import {useMovies} from '../../hooks/useMovies';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import Carousel from 'react-native-snap-carousel';
import { HorizontalSlider } from '../../components/PeliculasApp/HorizontalSlider';

const {width: windowWidth} = Dimensions.get('window');

export const HomeScreen = () => {
  const {nowPlaying, popular, topRated, upcoming, isLoading} = useMovies();

  const {top} = useSafeAreaInsets();

  if (isLoading) {
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <ActivityIndicator color="red" size={100} />
      </View>
    );
  }

  return (
    <ScrollView>
      <View style={{marginTop: top + 30}}>
        {/* Carousel principal */}
        <View style={{height: 445}}>
          <Carousel
            data={nowPlaying!}
            renderItem={({item}: any) => <Poster movie={item} />}
            sliderWidth={windowWidth}
            itemWidth={270}
            inactiveSlideOpacity={0.8}
          />
        </View>

        <HorizontalSlider title="En cine" movies={nowPlaying}/>
        <HorizontalSlider title="Peliculas populares" movies={popular}/>
        <HorizontalSlider title="Top" movies={topRated}/>
        <HorizontalSlider title="Proximas" movies={upcoming}/>

      </View>
    </ScrollView>
  );
};
