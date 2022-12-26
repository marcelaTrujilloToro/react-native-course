import React from 'react';
import { StyleSheet, View, Animated, Button } from 'react-native';
import { useAnimation } from '../../hooks/ComponentsRN/useAnimation';

export const Animation101Screen = () => {

  const { fadeIn, fadeOut, opacity, position, startMovingPosition } = useAnimation();

  return (
    <View style={styles.container}>

      <Animated.View style={{
        ...styles.purpleBox,
        opacity,
        transform: [
          { translateY: position },
        ],
      }} />

      <Button
        title="FadeIn"
        onPress={()=> {
          fadeIn();
          startMovingPosition(-150);
        }}
      />
      <Button
        title="FadeOut"
        onPress={fadeOut}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  purpleBox: {
    backgroundColor: '#5856D6',
    width: 150,
    height: 150,
  },
});
