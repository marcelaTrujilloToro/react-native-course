/* eslint-disable react-native/no-inline-styles */
import React, { useContext } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/Ionicons';
import { IMenuItem } from '../../interfaces/ComponentsRNApp/appInterfaces';
import { useNavigation } from '@react-navigation/native';
import { ThemeContext } from '../../context/ComponentsRN/themeContex/ThemeContex';


interface IFlatListMenuItemProps {
  menuItem: IMenuItem
}

export const FlatListMenuItem = ({ menuItem }: IFlatListMenuItemProps) => {

  const navigation = useNavigation();

  const { theme: {colors} } = useContext(ThemeContext);

  return (
    <TouchableOpacity activeOpacity={0.7} onPress={() => navigation.navigate(menuItem.component)}>

      <View style={styles.container}>
        <Icon
          name={menuItem.icon}
          color={colors.primary}
          size={25}
        />
        <Text style={{...styles.itemText, color: colors.text}}>{menuItem.name}</Text>
        <View style={{ flex: 1 }} />
        <Icon
          name="chevron-forward-outline"
          color={colors.primary}
          size={25}
        />
      </View>
    </TouchableOpacity>
  );
};


const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
  },
  itemText: {
    marginLeft: 10,
    fontSize: 15,
  },
});
