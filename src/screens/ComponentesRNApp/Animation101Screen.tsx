import React, { useContext } from 'react';
import { StyleSheet, View, Animated, Button } from 'react-native';
import { ThemeContext } from '../../context/ComponentsRN/themeContex/ThemeContex';
import { useAnimation } from '../../hooks/ComponentsRN/useAnimation';

export const Animation101Screen = () => {

  const { theme: { colors } } = useContext(ThemeContext);

  const { fadeIn, fadeOut, opacity, position, startMovingPosition } = useAnimation();

  return (
    <View style={styles.container}>

      <Animated.View style={{
        ...styles.purpleBox,
        backgroundColor: colors.primary,
        opacity,
        transform: [
          { translateY: position },
        ],
      }} />
      <View style={{ marginTop: 40 }}>

        <Button
          title="FadeIn"
          onPress={() => {
            fadeIn();
            startMovingPosition(-150);
          }}
          color={colors.primary}
        />
        <Button
          title="FadeOut"
          onPress={fadeOut}
          color={colors.primary}
        />
      </View>
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
    width: 150,
    height: 150,
  },
});
