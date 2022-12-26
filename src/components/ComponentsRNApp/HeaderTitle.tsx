/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { Text, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { styles } from '../../theme/ComponentsRNApp/appTheme';

interface Props {
    title: string;
}

export const HeaderTitle = ({ title }: Props) => {

    const { top } = useSafeAreaInsets();

    return (
        <View style={{ marginTop: top + 20, marginBottom: 20 }}>
            <Text style={{ ...styles.title, color:'#5856d6' }}>{title}</Text>
        </View>
    );
};
