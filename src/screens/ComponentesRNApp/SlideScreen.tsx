/* eslint-disable react-native/no-inline-styles */
import { StackScreenProps } from '@react-navigation/stack';
import React, { useRef, useState } from 'react';
import { Animated, Dimensions, Image, SafeAreaView, StyleSheet, Text, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Carousel, { Pagination } from 'react-native-snap-carousel';
import Icon from 'react-native-vector-icons/Ionicons';
import { items, Slide } from '../../data/ComponentsRN/slide';
import { useAnimation } from '../../hooks/ComponentsRN/useAnimation';


interface Props extends StackScreenProps<any, any> { }

const { width: screenWidth } = Dimensions.get('window');


export const SlideScreen = ({ navigation }: Props) => {

  const [activeIndex, setActiveIndex] = useState(0);

  const { opacity, fadeIn } = useAnimation();

  const isVisible = useRef(false);

  const renderItem = (item: Slide) => {
    return (
      <View style={{
        flex: 1,
        backgroundColor: 'white',
        borderRadius: 5,
        padding: 40,
        justifyContent: 'center',
      }}>
        <Image
          source={item.img}
          style={{
            width: 350,
            height: 400,
            resizeMode: 'center',
          }}
        />
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.subtitle}>{item.desc}</Text>
      </View>
    );
  };

  return (
    <SafeAreaView style={{ flex: 1, paddingTop: 50 }}>
      <Carousel
        data={items}
        renderItem={({ item }) => renderItem(item)}
        sliderWidth={screenWidth}
        itemWidth={screenWidth}
        layout="default"
        onSnapToItem={(index) => {
          setActiveIndex(index);
          if (index === items.length - 1) {
            isVisible.current = true;
            fadeIn();
          }
        }}
      />

      <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginHorizontal: 20, alignItems: 'center' }}>
        <Pagination
          dotsLength={items.length}
          activeDotIndex={activeIndex}
          dotStyle={{
            width: 10,
            height: 10,
            borderRadius: 10,
            backgroundColor: '#5856d6',
          }}
        />

        <Animated.View
          style={{ opacity }}
        >
          <TouchableOpacity style={{
            flexDirection: 'row',
            backgroundColor: '#5856d6',
            width: 120,
            height: 50,
            borderRadius: 10,
            justifyContent: 'center',
            alignItems: 'center',

          }}
            activeOpacity={0.8}
            onPress={() => {
              if (isVisible.current) {
                navigation.navigate('HomeScreen');
              }
            }}
          >
            <Text
              style={{
                fontSize: 25,
                color: 'white',
              }}>Menú</Text>
            <Icon
              name="chevron-forward-outline"
              color="white"
              size={30} />
          </TouchableOpacity>

        </Animated.View>

      </View >

    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#5856d6',
  },
  subtitle: {
    fontSize: 16,
  },
});
