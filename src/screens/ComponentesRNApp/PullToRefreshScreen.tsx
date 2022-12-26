/* eslint-disable react-native/no-inline-styles */
import React, { useState } from 'react';
import { RefreshControl, ScrollView, Text, View } from 'react-native';
import { HeaderTitle } from '../../components/ComponentsRNApp/HeaderTitle';
import { styles } from '../../theme/ComponentsRNApp/appTheme';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

export const PullToRefreshScreen = () => {

    const { top } = useSafeAreaInsets();

    const [refreshing, setRefreshing] = useState(false);
    const [data, setData] = useState<string>();


    const onRefresh = () => {
        setRefreshing(true);
        setTimeout(() => {
            console.log('terminamos');
            setRefreshing(false);
            setData('Hola Marce');
        }, 1500);
    };

    return (
        <ScrollView
            style={{ marginTop: refreshing ? top : 0 }}
            refreshControl={
                <RefreshControl
                    refreshing={refreshing}
                    onRefresh={onRefresh}
                    tintColor="#5856d6"
                    title="Refreshing..."
                    titleColor="#5856d6"
                />
            }
        >
            <View style={styles.globalMargin}>
                <HeaderTitle title="Pull to refresh" />

                {data &&
                    <Text>{data}</Text>
                }
            </View>
        </ScrollView>
    );
};

