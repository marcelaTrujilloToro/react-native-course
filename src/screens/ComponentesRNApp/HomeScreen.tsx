/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { FlatList, Text, View } from 'react-native';
import { styles } from '../../theme/ComponentsRNApp/appTheme';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { FlatListMenuItem } from '../../components/ComponentsRNApp/FlatListMenuItem';
import { IMenuItem } from '../../interfaces/ComponentsRNApp/appInterfaces';


const menuItems: IMenuItem[] = [
  {
    name: 'Animation 101',
    icon: 'cube-outline',
    component: 'Animation101Screen',
  },
  {
    name: 'Animation 102',
    icon: 'albums-outline',
    component: 'Animation102Screen',
  },
];

export const HomeScreen = () => {

  const { top } = useSafeAreaInsets();

  const renderListHeader = () => {
    return (
      <View style={{ marginTop: top + 20, marginBottom: 20 }}>
        <Text style={styles.title}>Opciones de Menú</Text>
      </View>
    );
  };

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
        ListHeaderComponent={renderListHeader}
        renderItem={({ item }) => <FlatListMenuItem menuItem={item}/>}
        keyExtractor={(item) => item.name}
        ItemSeparatorComponent={itemSeparator}
      />
    </View>
  );
};
