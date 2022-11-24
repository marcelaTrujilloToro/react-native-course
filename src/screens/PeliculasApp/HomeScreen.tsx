/* eslint-disable react-native/no-inline-styles */
import React, { useContext } from 'react';
import {
  ActivityIndicator,
  Dimensions,
  ScrollView,
  View,
} from 'react-native';
import { Poster } from '../../components/PeliculasApp/Poster';
import { useMovies } from '../../hooks/PeliculasHooks/useMovies';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import Carousel from 'react-native-snap-carousel';
import { HorizontalSlider } from '../../components/PeliculasApp/HorizontalSlider';
import { GradientBackground } from '../../components/PeliculasApp/GradientBackground';
import { getImageColors } from '../../helpers/PeliculasHelpers/getColors';
import { GradientContext } from '../../context/PeliculasApp/GradientContext';
import { useEffect } from 'react';

const { width: windowWidth } = Dimensions.get('window');

export const HomeScreen = () => {
  const { nowPlaying, popular, topRated, upcoming, isLoading } = useMovies();

  const {setMainColors} = useContext(GradientContext);

  const { top } = useSafeAreaInsets();

  const getPosterColors = async (index: number) => {

    const movie = nowPlaying[index];
    const uri = `https://image.tmdb.org/t/p/w500/${movie.poster_path}`;

    const [ primary = 'gray', secondary = 'white'] = await getImageColors(uri);

    setMainColors({primary, secondary});
  };

  useEffect(() => {

    if (nowPlaying.length > 0){
      getPosterColors(0);
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [nowPlaying]);


  if (isLoading) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <ActivityIndicator color="red" size={100} />
      </View>
    );
  }



  return (
    <GradientBackground>

      <ScrollView>
        <View style={{ marginTop: top + 30 }}>
          {/* Carousel principal */}
          <View style={{ height: 445 }}>
            <Carousel
              data={nowPlaying!}
              renderItem={({ item }: any) => <Poster movie={item} />}
              sliderWidth={windowWidth}
              itemWidth={270}
              inactiveSlideOpacity={0.8}
              onSnapToItem={index => getPosterColors(index)}
            />
          </View>

          <HorizontalSlider title="En cine" movies={nowPlaying} />
          <HorizontalSlider title="Peliculas populares" movies={popular} />
          <HorizontalSlider title="Top" movies={topRated} />
          <HorizontalSlider title="Proximas" movies={upcoming} />

        </View>
      </ScrollView>
    </GradientBackground>
  );
};
