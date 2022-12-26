/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { FlatList, View } from 'react-native';
import { styles } from '../../theme/ComponentsRNApp/appTheme';
import { FlatListMenuItem } from '../../components/ComponentsRNApp/FlatListMenuItem';
import { menuItems } from '../../data/ComponentsRN/menuItems';
import { HeaderTitle } from '../../components/ComponentsRNApp/HeaderTitle';


export const HomeScreen = () => {

  const itemSeparator = () => {
    return (
      <View style={{
        borderBottomWidth: 5,
        opacity: 0.2,
        marginVertical: 8,
      }} />
    );
  };

  return (
    <View style={{ flex: 1, ...styles.globalMargin }}>
      <FlatList
        data={menuItems}
        ListHeaderComponent={<HeaderTitle title="Opciones de menú"/>}
        renderItem={({ item }) => <FlatListMenuItem menuItem={item}/>}
        keyExtractor={(item) => item.name}
        ItemSeparatorComponent={itemSeparator}
      />
    </View>
  );
};
