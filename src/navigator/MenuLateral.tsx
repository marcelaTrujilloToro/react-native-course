import React from 'react';
import {
  createDrawerNavigator,
  DrawerContentComponentProps,
  DrawerContentScrollView,
} from '@react-navigation/drawer';
import {SettingScreen} from '../screens/NavegacionApp/SettingScreen';
import {StackNavigator} from './StackNavigator';
import {
  Image,
  Text,
  TouchableOpacity,
  useWindowDimensions,
  View,
} from 'react-native';
import {styles} from '../theme/appTheme';

export type RootDrawerParams = {
  StackNavigator: undefined;
  SettingScreen: undefined;
};

const Drawer = createDrawerNavigator<RootDrawerParams>();

export const MenuLateral = () => {
  const {width} = useWindowDimensions();

  

  return (
    <Drawer.Navigator
      screenOptions={{drawerType: width >= 768 ? 'permanent' : 'front'}}
      drawerContent={props => <MenuInterno {...props} />}>
      <Drawer.Screen name="StackNavigator" component={StackNavigator} />
      <Drawer.Screen name="SettingScreen" component={SettingScreen} />
    </Drawer.Navigator>
  );
};

const MenuInterno = ({navigation}: DrawerContentComponentProps) => {
  return (
    <DrawerContentScrollView>
      {/* Parte del avatar */}

      <View style={styles.avatarContainer}>
        <Image
          style={styles.avatar}
          source={{
            uri: 'https://lf.edu.co/wp-content/plugins/elementskit/widgets/yelp/assets/images/profile-placeholder.png',
          }}
        />
      </View>

      {/* Opciones de menu */}

      <View style={styles.menuContainer}>
        <TouchableOpacity
          style={styles.menuBoton}
          onPress={() => navigation.navigate('StackNavigator')}>
          <Text style={styles.menuItem}>Navegacion</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.menuBoton}
          onPress={() => navigation.navigate('SettingScreen')}>
          <Text style={styles.menuItem}>Ajustes</Text>
        </TouchableOpacity>
      </View>
    </DrawerContentScrollView>
  );
};
