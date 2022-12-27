/* eslint-disable react-native/no-inline-styles */
import React, { useContext, useState } from 'react';
import { ActivityIndicator, FlatList, View } from 'react-native';
import { FadeInImage } from '../../components/ComponentsRNApp/FadeInImage';
import { HeaderTitle } from '../../components/ComponentsRNApp/HeaderTitle';
import { ThemeContext } from '../../context/ComponentsRN/themeContex/ThemeContex';

export const InfiniteScrollScreen = () => {


  const { theme: { colors } } = useContext(ThemeContext);

  const [numbers, setNumbers] = useState([1, 2, 3, 4, 5]);

  const renderItem = (item: number) => {
    return (
      <FadeInImage
        uri={`https://picsum.photos/id/${item}/500/400`}
        style={{
          width: '100%',
          height: 400,
        }}
      />
    );
  };

  const loadMore = () => {
    const newArray: number[] = [];
    for (let i = 0; i < 5; i++) {
      newArray[i] = numbers.length + i;
    }

    setTimeout(() => {
      setNumbers([...numbers, ...newArray]);
    }, 1500);
  };

  return (
    <View style={{ flex: 1 }}>
      <FlatList
        data={numbers}
        keyExtractor={(item) => item.toString()}
        renderItem={({ item }) => renderItem(item)}

        ListHeaderComponent={() => (
          <View style={{ marginHorizontal: 20 }}>
            <HeaderTitle title="Infinite scroll" />
          </View>
        )}
        ListFooterComponent={() => (
          <View style={{ height: 150, width: '100%', justifyContent: 'center', alignItems: 'center' }}>
            <ActivityIndicator size={30} color={colors.primary} />
          </View>
        )}

        onEndReached={loadMore}
        onEndReachedThreshold={0.5}
      />

    </View>
  );
};
