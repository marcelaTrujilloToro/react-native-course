/* eslint-disable react-native/no-inline-styles */
import React, { useContext } from 'react';
import { Text, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { ThemeContext } from '../../context/ComponentsRN/themeContex/ThemeContex';
import { styles } from '../../theme/ComponentsRNApp/appTheme';

interface Props {
    title: string;
}

export const HeaderTitle = ({ title }: Props) => {

  const { theme: {colors} } = useContext(ThemeContext);


    const { top } = useSafeAreaInsets();

    return (
        <View style={{ marginTop: top + 20, marginBottom: 20 }}>
            <Text style={{ ...styles.title, color:colors.text }}>{title}</Text>
        </View>
    );
};
