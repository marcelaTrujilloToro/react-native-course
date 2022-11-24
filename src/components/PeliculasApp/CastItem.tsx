import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {Cast} from '../../interfaces/PeliculasInterfaces/ICredits';

interface CastItemProps {
  actor: Cast;
}

export const CastItem = ({actor}: CastItemProps) => {
  const uri = `https://image.tmdb.org/t/p/w500/${actor.profile_path}`;

  return (
    <View style={styles.container}>
      {actor.profile_path && (
        <Image source={{uri}} style={{height: 50, width: 50}} />
      )}

      <View style={styles.actorInfo}>
        <Text style={{fontSize: 18, fontWeight: 'bold'}}>{actor.name}</Text>
        <Text style={{fontSize: 16, opacity: 0.7}}>{actor.character}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: 'white',
    height: 50,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 7,
    },
    shadowOpacity: 0.9,
    shadowRadius: 9.11,
    marginHorizontal: 20,
    paddingRight: 15,
  },
  actorInfo: {
    marginLeft: 10,
    marginTop: 5,
  },
});
