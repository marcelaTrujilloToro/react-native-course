/* eslint-disable react-native/no-inline-styles */
import React, { useContext } from 'react';
import { View } from 'react-native';
import { ThemeContext } from '../../context/ComponentsRN/themeContex/ThemeContex';

export const ItemSeparator = () => {

    const { theme: { dividerColor } } = useContext(ThemeContext);


    return (

        <View style={{
            borderBottomWidth: 2,
            borderBottomColor: dividerColor,
            marginVertical: 8,
        }} />
    );
};

