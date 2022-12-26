/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { FlatList, View } from 'react-native';
import { styles } from '../../theme/ComponentsRNApp/appTheme';
import { FlatListMenuItem } from '../../components/ComponentsRNApp/FlatListMenuItem';
import { menuItems } from '../../data/ComponentsRN/menuItems';
import { HeaderTitle } from '../../components/ComponentsRNApp/HeaderTitle';
import { ItemSeparator } from '../../components/ComponentsRNApp/ItemSeparator';


export const HomeScreen = () => {



  return (
    <View style={{ flex: 1, ...styles.globalMargin }}>
      <FlatList
        data={menuItems}
        ListHeaderComponent={<HeaderTitle title="Opciones de menú"/>}
        renderItem={({ item }) => <FlatListMenuItem menuItem={item}/>}
        keyExtractor={(item) => item.name}
        ItemSeparatorComponent={()=> <ItemSeparator/>}
      />
    </View>
  );
};
