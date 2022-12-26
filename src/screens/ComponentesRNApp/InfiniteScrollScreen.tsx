/* eslint-disable react-native/no-inline-styles */
import React, { useState } from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import { HeaderTitle } from '../../components/ComponentsRNApp/HeaderTitle';

export const InfiniteScrollScreen = () => {


    const [numbers, setNumbers] = useState([1, 2, 3, 4, 5]);

    const renderItem = (item: number) => {
        return (
            <Text style={styles.textItem}>{item}</Text>
        );
    };

    const loadMore = () => {
        const newArray: number[] = [];
        for (let i = 0; i < 5; i++) {
            newArray[i] = numbers.length + i;
        }

        setNumbers([...numbers, ...newArray]);
    };

    return (
        <View style={{ flex: 1, backgroundColor: 'red' }}>
            <FlatList
                data={numbers}
                keyExtractor={(item) => item.toString()}
                renderItem={({ item }) => renderItem(item)}

                ListHeaderComponent={<HeaderTitle title="Infinite scroll" />}

                onEndReached={ loadMore}
                onEndReachedThreshold={0.5}
            />

        </View>
    );
};

const styles = StyleSheet.create({
    textItem: {
        backgroundColor: 'green',
        height: 150,
    },
});
