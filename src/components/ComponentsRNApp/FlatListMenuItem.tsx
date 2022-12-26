import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/Ionicons';
import { IMenuItem } from '../../interfaces/ComponentsRNApp/appInterfaces';
import { useNavigation } from '@react-navigation/native';


interface IFlatListMenuItemProps {
  menuItem: IMenuItem
}

export const FlatListMenuItem = ({ menuItem }: IFlatListMenuItemProps) => {

  const navigation = useNavigation();

  return (
    <TouchableOpacity activeOpacity={0.7} onPress={()=> navigation.navigate(menuItem.component)}>

      <View style={styles.container}>
        <Icon
          name={menuItem.icon}
          color="#5856d6"
          size={25}
        />
        <Text style={styles.itemText}>{menuItem.name}</Text>
        <View style={{ flex: 1 }} />
        <Icon
          name="chevron-forward-outline"
          color="#5856d6"
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
